// TODO: 10페이지가 넘어갈 경우는 추후 해보자... 아직 갈길이 구만리..

// TODO: js 정형화

const _category_page_cnt = parseInt($('.-category-posts-list li').length / 5) + 1;
let _category_page;
$(document).ready(function () {
    if (_category_page_cnt > 1) {
        for (i = 0; i <= _category_page_cnt + 1; i++) {
            let _value;

            if (i === 0) {
                _value = '<i class="material-icons" style="font-size: 14px;">arrow_back_ios</i>';
            } else if (i === _category_page_cnt + 1) {
                _value = '<i class="material-icons" style="font-size: 14px;">arrow_forward_ios</i>';
            } else {
                _value = i;
            }
            $(".-category-pagination").append('<li class="page-item"><a class="page-link" href="#" onclick="categoryPagination(' + i + ');">' + _value + '</a></li>');
        }
        categoryPagination(1);
    }
});

function categoryPagination(page) {
    if (page === 0 && _category_page !== 1) {
        // 이전
        categoryPagination(_category_page - 1);
    } else if (page === _category_page_cnt + 1 && _category_page !== _category_page_cnt + 1) {
        // 다음
        categoryPagination(_category_page + 1);
    } else {
        // 일반 선택
        _category_page = page;

        let _pagination_size = $('.-category-pagination li').length;

        $('.-category-posts-list').find('li').each(function (i, e) {
            if (page * 5 - 5 <= i && i < page * 5) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        $('.-category-pagination').find('li').each(function (i, e) {
            // pagination에 pre, next 버튼 활성/비활성화
            if (_pagination_size > 3 && page === 1) {
                $('.-category-pagination li:eq(0)').addClass("disabled");
                $('.-category-pagination li:last').removeClass("disabled");
            } else if (_pagination_size > 3 && page === _category_page_cnt) {
                $('.-category-pagination li:eq(0)').removeClass("disabled");
                $('.-category-pagination li:last').addClass("disabled");
            } else if ($('.-category-pagination li').length > 3) {
                $('.-category-pagination li:eq(0)').removeClass("disabled");
                $('.-category-pagination li:last').removeClass("disabled");
            } else {
                $('.-category-pagination li:eq(0)').addClass("disabled");
                $('.-category-pagination li:last').addClass("disabled");
            }
            // pagination에 page 선택/비선택
            if (page === i) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }
}
