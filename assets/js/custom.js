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
    searchInput: $('#-search-modal-input')[0],
    resultsContainer: $('#-search-modal-results')[0],
    json: '/search.json'
});

$('html, body').on('mousewheel DOMMouseScroll', function (e) {
    scrollFunction();
});
function scrollFunction() {
    let _scrollTop = document.body.scrollTop  || document.documentElement.scrollTop || window.pageYOffset || $('.-container').scrollTop();
    let _windowWidth = $(window).width();

    if (_windowWidth > 783) {
        const _minTitleFontSize = 2;
        const _minMetaFontSize = 1.5;
        const _minPadding = 30;
        const cut = 90;
        // pc
        if (_scrollTop <= cut) {
            $('.-top-header').css('padding-top', _minPadding - _scrollTop / cut  * 23 + 'px');
            $('.-top-header').css('padding-bottom', _minPadding - _scrollTop / cut  * 23 + 'px');
            $('.-top-header-title').css('fontSize', _minTitleFontSize - _scrollTop/ cut / 10 * 5 + 'rem' );
            $('.-top-header-meta').css('fontSize', _minMetaFontSize - _scrollTop/ cut / 10 * 7 + 'rem');
        } else if (_scrollTop > cut) {
            $('.-top-header').css('padding-top', '7px');
            $('.-top-header').css('padding-bottom', '7px');
            $('.-top-header-title').css('fontSize', '1.5rem');
            $('.-top-header-meta').css('fontSize', '0.8rem');
        } else {
            $('.-top-header').css('padding-top', '30px');
            $('.-top-header').css('padding-bottom', '30px');
            $('.-top-header-title').css('fontSize', '2rem');
            $('.-top-header-meta').css('fontSize', '1.5rem');
        }
    }
}

$( document ).ready(function() {
    const _category_page_cnt = parseInt($('.-category-posts-list li').length / 5);

    $("#ul_id").append("<li>pre</li>");

    for (i = 1; i <= _category_page_cnt + 1; i++) {
        $("#ul_id").append("<li>i</li>");
    }

    $("#ul_id").append("<li>next</li>");

});

console.log();

$('.-category-posts-list').find('li').each(function(i, e){
    console.log($(this).text());
});