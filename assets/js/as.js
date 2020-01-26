(function ($) {
    $.fn.asPreventDefault = function () {
        return this.click(function (e) {
            e.preventDefault();
        });
    };

    $.fn.asAnchor = function () {
        return this.each(function () {
            const $this = $(this);

            $this.css('cursor', 'pointer');

            if ($this.is('select')) {
                $this.change(function () {
                    const href = $(this).find('option:selected').data().href;
                    if (!href) {
                        console.error("Not found data-href for 'select.-as-anchor options:selected'", this);
                        return;
                    }
                    window.location.href = href;
                });
            } else {
                const href = $(this).data().href;
                const newWindow = $(this).data().newWindow;
                if (!href) {
                    console.error("Not found data-href for -as-anchor", this);
                    return;
                }
                $this.click(function () {
                    if (newWindow) {
                        window.open(href);
                    } else {
                        window.location.href = href;
                    }
                });
            }
        });
    };

    $.fn.asSubmit = function () {
        return this.each(function () {
            $(this).change(function () {
                $(this).closest('form').submit();
            });
        });
    };

    $(function () {
        $('.-as-anchor').asAnchor();
        $('.-as-submit').asSubmit();
        $('.-as-prevent-default').asPreventDefault();
    });
})(jQuery);