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
        // pc
        if (_scrollTop <= cut) {
            $('.-top-header').css('padding-top', _minPadding - _scrollTop / cut * 23 + 'px');
            $('.-top-header').css('padding-bottom', _minPadding - _scrollTop / cut * 23 + 'px');
            $('.-top-header-title').css('fontSize', _minTitleFontSize - _scrollTop / cut / 10 * 5 + 'rem');
            $('.-top-header-meta').css('fontSize', _minMetaFontSize - _scrollTop / cut / 10 * 7 + 'rem');
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

const _category_page_cnt = parseInt($('.-category-posts-list li').length / 5) + 1;
$(document).ready(function () {

    $(".-category-pagination").append('<li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true" data-page="-">Previous</a></li>');

    for (i = 1; i <= _category_page_cnt; i++) {
        $(".-category-pagination").append('<li class="page-item"><a class="page-link" href="#" onclick="categoryPagination(' + i + ');">' + i + '</a></li>');
    }

    $(".-category-pagination").append('<li class="page-item"><a class="page-link" href="#" data-page="+">Next</a></li>');
    categoryPagination(1);
});


function categoryPagination(page) {
    $('.-category-posts-list').find('li').each(function (i, e) {
        if (page * 5 - 5 <= i && i < page * 5) {
            $(this).addClass("d-block").removeClass("d-none");
        } else {
            $(this).addClass("d-none").removeClass("d-block");
        }
    });

    $('.-category-posts-list').find('hr').each(function (i, e) {
        if (page * 5 - 5 <= i && i < page * 5) {
            $(this).addClass("d-block").removeClass("d-none");
        } else {
            $(this).addClass("d-none").removeClass("d-block");
        }
    });

    $('.-category-pagination').find('li').each(function (i, e) {
        if (page === 1) {
            if (page === i) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }

            if ($('.-category-pagination li').length > 3) {
                $('.-category-pagination li:eq(0)').addClass("disabled");
                $('.-category-pagination li:eq(last)').removeClass("disabled");
            } else {
                $('.-category-pagination li:eq(0)').addClass("disabled");
                $('.-category-pagination li:eq(last)').addClass("disabled");
            }
        } else if (page === _category_page_cnt) {
            if (page === i) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
            if ($('.-category-pagination li').length > 3) {
                $('.-category-pagination li:eq(last)').addClass("disabled");
                $('.-category-pagination li:eq(0)').removeClass("disabled");
            } else {
                $('.-category-pagination li:eq(0)').addClass("disabled");
                $('.-category-pagination li:eq(last)').addClass("disabled");
            }
        } else if (page === i) {
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });

}
