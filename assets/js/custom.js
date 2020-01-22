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

$('pre > code').each(function () {
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
    searchInput: $('#-search-modal-input')[0],
    resultsContainer: $('#-search-modal-results')[0],
    json: '/search.json'
});

$('html, body').on('mousewheel DOMMouseScroll', function (e) {
    scrollFunction();
});

function scrollFunction() {
    let _scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || $('.-container').scrollTop();
    let _windowWidth = $(window).width();

    if (_windowWidth > 783) {
        const _minTitleFontSize = 2;
        const _minMetaFontSize = 1.5;
        const _minPadding = 30;
        const cut = 90;
        let $topHeader = $('.-top-header');
        // pc
        if (_scrollTop <= cut) {
            $topHeader.css('padding-top', _minPadding - _scrollTop / cut * 23 + 'px');
            $topHeader.css('padding-bottom', _minPadding - _scrollTop / cut * 23 + 'px');
            $topHeader.css('fontSize', _minTitleFontSize - _scrollTop / cut / 10 * 5 + 'rem');
            $topHeader.css('fontSize', _minMetaFontSize - _scrollTop / cut / 10 * 7 + 'rem');
        } else if (_scrollTop > cut) {
            $topHeader.css('padding-top', '7px');
            $topHeader.css('padding-bottom', '7px');
            $('.-top-header-title').css('fontSize', '1.5rem');
            $('.-top-header-meta').css('fontSize', '0.8rem');
        } else {
            $topHeader.css('padding-top', '30px');
            $topHeader.css('padding-bottom', '30px');
            $('.-top-header-title').css('fontSize', '2rem');
            $('.-top-header-meta').css('fontSize', '1.5rem');
        }
    }
}
