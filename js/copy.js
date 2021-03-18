/**
 * @Author      Vu Minh Nhat
 * @Version     1.0.0
 * @Facebook    https://www.facebook.com/taolagin2003
 * @home        https://nhatgin.github.io
 */
function copyTextToClipboard(d) {
    var e = document.createElement("textarea");
    e.style.position = "fixed", e.style.top = 0, e.style.left = 0, e.style.width = "2em", e.style.height = "2em", e.style.padding = 0, e.style.border = "none", e.style.outline = "none", e.style.boxShadow = "none", e.style.background = "transparent", e.value = d, document.body.appendChild(e), e.select();
    try {
        document.execCommand("copy"), alert("Đã sao chép liên kết!")
    } catch (f) {
        alert("Không thể sao chép liên kết!")
    }
    document.body.removeChild(e)
}

function CopyLink() {
    copyTextToClipboard(location.href)
}
$("#search-icon").click(function () {
    $(".search-gg").addClass("show");
    $("#search-closed").addClass("show");
    $(this).addClass("st-hide");
    $("#menu-st").addClass("st-hide");
    $(".menu-icon").addClass("st-hide");
    $(".bt-top").addClass("st-hide");
    $(".bt-bottom").addClass("st-hide");
    $("#header-inner").addClass("st-hide")
});
$("#search-closed").click(function () {
    $(this).removeClass("show");
    $("#search-icon").removeClass("st-hide");
    $(".search-gg").removeClass("show");
    $("#menu-st").removeClass("st-hide");
    $(".menu-icon").removeClass("st-hide");
    $(".bt-top").removeClass("st-hide");
    $(".bt-bottom").removeClass("st-hide");
    $("#header-inner").removeClass("st-hide")
});
jQuery(document).ready(function () {
    jQuery('a[href*="https://"]:not([href*="' + window.location.hostname + '"])').attr("target", "_blank");
    jQuery('a[href*="http://"]:not([href*="' + window.location.hostname + '"])').attr("target", "_blank")
});
$(function () {
    var c = function (b, a) {
        this.el = b || {};
        this.multiple = a || false;
        var f = this.el.find(".link");
        f.on("click", {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };
    c.prototype.dropdown = function (a) {
        var b = a.data.el;
        $this = $(this), $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass("open");
        if (!a.data.multiple) {
            b.find(".submenu").not($next).slideUp().parent().removeClass("open")
        }
    };
    var d = new c($("#accordion"), false)
});
$(document).ready(function () {
    $(".menu-icon").click(function () {
        if ($("#navigator").css("left") == "-250px") {
            $("#navigator").animate({
                left: "0px"
            }, 350);
            $(".menu-icon").animate({
                left: "250px"
            }, 350);
            $(".menu-text").animate({
                left: "300px"
            }, 350).empty().text("Close")
        } else {
            $("#navigator").animate({
                left: "-250px"
            }, 350);
            $(this).animate({
                left: "0"
            }, 350);
            $(".menu-text").animate({
                left: "50px"
            }, 350).empty().text("Menu")
        }
    });
    $(".menu-icon").click(function () {
        $(this).toggleClass("on")
    });
    $(".boink").click(function () {
        $(".menu-icon").toggleClass("on")
    })
});
(function () {
    $(document).ready(function () {
        return $(window).scroll(function () {
            return $(window).scrollTop() > 300 ? $(".bt-top").addClass("show") : $(".bt-top").removeClass("show")
        }), $(".bt-top").click(function () {
            return $("html,body").animate({
                scrollTop: "0"
            })
        })
    })
}.call(this));
(function () {
    $(document).ready(function () {
        return $(window).scroll(function () {
            return $(window).scrollTop() > 300 ? $(".bt-bottom").addClass("st-hide") : $(".bt-bottom").removeClass("st-hide")
        }), $(".bt-bottom").click(function () {
            return $("html,body").animate({
                scrollTop: "99999"
            })
        })
    })
}.call(this));