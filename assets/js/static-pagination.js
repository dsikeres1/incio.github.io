/*
    title: static-pagination.js
    description: Pagination for static pages based on bootstrap and jquery (eg. jekyll)
    author: Incio
    github: https://github.com/inci-o/static-pagination
    site: https://inci-o/github.io
    email: inciojs@gmail.com
    version: 0.1.0
 */

let _currentPage, _perPage, _showPage, _paginationLength, $staticPaginationList;

let $list = $('#static-pagination-list');
let $pagination = $('#static-pagination');
function staticPagination(userList, userOptions) {
    $staticPaginationList = userList;

    if (userOptions.perPage != null) {
        _perPage = userOptions.perPage;
    } else {
        _perPage = 10;
    }

    if (userOptions.showPage != null) {
        _showPage = userOptions.showPage;
    } else {
        _showPage = 10;
    }
    _paginationLength = parseInt($staticPaginationList.length / _perPage) + 1;
    _staticPagination(1);
}


function _staticPagination(page) {
    if (page === 0 && _currentPage !== 1) {
        // 이전 (previous)
        _staticPagination(_currentPage - 1);
    } else if (page === _paginationLength + 1 && _currentPage !== _paginationLength + 1) {
        // 다음 (next)
        _staticPagination(_currentPage + 1);
    } else {
        // 일반 선택 (normal select)
        _currentPage = page;
        $list.empty();
        for (let i = _currentPage * _perPage - _perPage; i < _currentPage * _perPage; i++) {
            try {
                // list 내용 수정 확인
                $list.append('' +
                    '<li class="-as-anchor -preview-list -after-hr -as-hover" data-href="' + $staticPaginationList[i].url + '">' +
                    '<div class="-preview-list-title">' + $staticPaginationList[i].title + '</div>' +
                    '<div class="-preview-list-desc">' + $staticPaginationList[i].content + '</div>' +
                    '<div class="-preview-list-meta"><small>' + $staticPaginationList[i].date + '</small></div></li>');
            } catch (exception) {
                break;
            }
        }
    }

    if (_paginationLength > 1) {
        $pagination.empty();
        if (_currentPage === 1) {
            $pagination.append('<li class="page-item disabled">' +
                '<a class="page-link" href="#" onclick="_staticPagination(' + 0 + ');">' +
                '<i class="material-icons" style="font-size: 14px;">arrow_back_ios</i>' +
                '</a>' +
                '</li>');
        } else {
            $pagination.append('<li class="page-item">' +
                '<a class="page-link" href="#" onclick="_staticPagination(' + 0 + ');">' +
                '<i class="material-icons" style="font-size: 14px;">arrow_back_ios</i>' +
                '</a>' +
                '</li>');
        }

        for (let _page = 1; _page <= _paginationLength; _page++) {
            if (_page === _currentPage) {
                $pagination.append('<li class="page-item active">' +
                    '<a class="page-link" href="#" onclick="_staticPagination(' + _page + ');">' + _page + '</a>' +
                    '</li>');
            } else {
                $pagination.append('<li class="page-item">' +
                    '<a class="page-link" href="#" onclick="_staticPagination(' + _page + ');">' + _page + '</a>' +
                    '</li>');
            }
        }

        if (_currentPage === _paginationLength) {
            $pagination.append('<li class="page-item disabled">' +
                '<a class="page-link" href="#" onclick="_staticPagination(' + (_paginationLength + 1) + ');">' +
                '<i class="material-icons" style="font-size: 14px;">arrow_forward_ios</i>' +
                '</a>' +
                '</li>');
        } else {
            $pagination.append('<li class="page-item">' +
                '<a class="page-link" href="#" onclick="_staticPagination(' + (_paginationLength + 1) + ');">' +
                '<i class="material-icons" style="font-size: 14px;">arrow_forward_ios</i>' +
                '</a>' +
                '</li>');
        }
    }
}
