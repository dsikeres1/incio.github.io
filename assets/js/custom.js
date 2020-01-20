$('.-sidebar-group-link').on('click', function () {
    var $this = $(this);

    if ($this.hasClass('active') === true) {
        $this.children('div').children('.material-icons').text('expand_less');
        $this.removeClass('active');
    } else {
        $this.addClass('active');
        $this.children('div').children('.material-icons').text('expand_more');
    }
});

$('pre > code').each(function() {
    let lines = this.innerHTML.split("\n");
    let ol = '<ol>';

    for (let lineNum in lines) {
        if (lines.length - 1 === Number(lineNum)) {
            break;
        }

        ol += '<li>' + lines[lineNum] + '</li>';
    }
    this.innerHTML = ol;
});

SimpleJekyllSearch({
    // TODO: 어떻게 사용하는게 나은것인지는 고민중
    // searchInput: document.getElementById('search-input'),
    // resultsContainer: document.getElementById('results-container'),
    searchInput: $('#search-input')[0],
    resultsContainer: $('#results-container')[0],
    json: '/search.json'
});
