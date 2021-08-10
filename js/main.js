/**
 * Header 導覽列向下滾動時隱藏，向上滾動時顯現
 */

lastScrollY = 0; /* 已經滾動的高度 */
window.addEventListener('scroll', function () {
    var st = this.scrollY; /* 現在滾動的高度 */
    /* 判斷是向上捲動，而且捲軸超過 200px */
    if (st < lastScrollY) {
        $("body").removeClass('hideUp');
        $(".bread").addClass("breadshow");
    } else {
        $("body").addClass('hideUp');
        $(".bread").removeClass("breadshow");
    }
    lastScrollY = st;
});


$(function () {
    $('.logo').on('mouseenter', function () {
        $('.logo-img').hide();
        $('.logo-text').show();
    })

    $('.logo').on('mouseleave', function () {
        $('.logo-img').show();
        $('.logo-text').hide();
    })
})


$(function () {
    $('.menu-item-search').on('mouseenter', function () {

        $(this).addClass('test');

    })
    $('.menu-item-search').on('mouseleave', function () {

        $(this).removeClass('test');

    })


    $('.menu-item-search').on('click', function () {
        $(this).addClass('change');

    })
})


$(function () {
    $('.dropdown-list1').on('mouseover', function () {

        $('.dropdown-list1').css('background', '#FFF ');
        $(this).css('background', '#FFD100 ');
        $('.dropdown-list1').parent().css('height', '+200');
        $('.menu-item-search').addClass('active2');
    })
})


$(function () {
    $('.menu-item-search').click(function () {

        $(this).addClass('active');
        $('.modal').addClass('open');
        $('body').addClass('frozen');

    })


    $(document).mouseup(function (e) {
        var container = $(".header"); // 這邊放你想要排除的區塊
        var menu = $(".menu-item-search");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            menu.removeClass('active');
            $('.modal').removeClass('open');
            $('body').removeClass('frozen');
            $('.menu-item-search').removeClass('change');
            $('.menu-dropdown2 ').hide();
            $('.menu-item-search').removeClass('active2');
            $('.menu-dropdown').removeAttr('style');
            $('.dropdown-list1').css('background', '#FFF ');
        }
    });
})

//  手機板Modal

$(function () {
    $('.mobileIcon-search').click(function () {

        $('.mobileModal').addClass('open');
        $('body').addClass('mobileFrozen');

    })

    $('.mobileIcon-button').click(function () {

        $('.mobileModal').addClass('open');
        $('body').addClass('mobileFrozen');

    })

})


$(function () {
    $('.menu-dropdown2 ').hide();
    $('.dropdown-list1').on('mouseover', function () {

        $('.menu-dropdown2 ').hide();

        $(`#dropdownList2-${$(this).attr('id').substr(14)}`).show();
    })

})


//  header手機
$(function () {

    $('.mobile-menuItem').on('click', function () {
        $('.mobile-menuItem').css('background', '#7362A7');
        $('.mobile-menuItem').css('color', '#fff');

        if ($(this).children().children().hasClass('long')) {
            $('.mobile-menuItem2').removeClass('long');

        } else {
            $('.mobile-menuItem2').removeClass('long');
            $(this).children().children().addClass('long');
            $(this).css('background', '#fff');
            $(this).css('color', '#000');
        }

    })


    $('.mobileIcon-search').on('click', function () {
        $('.mobile-menu').addClass('open');
    })

    $('.mobile-menu-remove').on('click', function () {
        $('.mobile-menu').removeClass('open');
        $('.mobile-menuItem').css('background', '#7362A7');
        $('.mobile-menuItem').css('color', '#fff');
        $('.mobile-menuItem2').removeClass('long');
        $('.mobileModal').removeClass('open');
        $('body').removeClass('mobileFrozen');
    })


    $('.mobileIcon-button').on('click', function () {
        $('.mobile-yellow-menu').addClass('open');

    })


    $('.mobile-yellow-menu-remove').on('click', function () {
        $('.mobile-yellow-menu').removeClass('openHeight');
        $('.mobile-yellow-menu').removeClass('open');
        $('.mobile_index_menuBtn').css('opacity', '1');
        $('.mobile-yellow-menuItem').show();
        $('.mobile-contactForm').removeClass('open');
        $('.mobile-yellow-menuItemCont span').css('color', '#000');
        $('.mobile-yellow-menuItemCont').css('background', 'rgb(255, 209, 0)');
        $('.mobileModal').removeClass('open');
        $('body').removeClass('mobileFrozen');
    })


    $('.mobile-yellow-menuItemCont span').on('click', function () {

        if ($('.mobile-contactForm').hasClass('open')) {
            $('.mobile-yellow-menu').removeClass('openHeight');

            $('.mobile_index_menuBtn').css('opacity', '1');
            $('.mobile-yellow-menuItem').show();

            $('.mobile-contactForm').removeClass('open');
            $('.mobile-yellow-menuItemCont span').css('color', '#000');
            $('.mobile-yellow-menuItemCont').css('background', 'rgb(255, 209, 0)');
        } else {
            $('.mobile-yellow-menu').addClass('openHeight');
            $('.mobile-yellow-menuItem').hide();
            $('.mobile_index_menuBtn').css('opacity', '0');
            $('.mobile-contactForm').addClass('open');
            $('.mobile-yellow-menuItemCont').css('background', 'rgb(109, 94, 158)');
            $('.mobile-yellow-menuItemCont span').css('color', '#fff');

        }

    })

})




$(window).resize(function () {
    if ($(window).width() > 768) {
        $('.mobile-yellow-menu').removeClass('open');
        // $('.mobile-contactForm').removeClass('open');
        $('.mobile-menu').removeClass('open');
        $('.mobile-menuItem').css('background', '#7362A7');
        $('.mobile-menuItem').css('color', '#fff');
        $('.mobile-menuItem2').removeClass('long');

        $('.mobile-yellow-menu').removeClass('open');
        $('.mobile_index_menuBtn').css('opacity', '1');
        $('.mobile-yellow-menuItem').show();
        $('.mobile-contactForm').removeClass('open');
        $('.mobile-yellow-menuItemCont span').css('color', '#000');
        $('.mobile-yellow-menuItemCont').css('background', 'rgb(255, 209, 0)');

        $('.mobileModal').removeClass('open');
        $('body').removeClass('mobileFrozen');
        
        $('.mobile-yellow-menu').removeClass('openHeight');
    } else {
        $('.menu-item-search').removeClass('active');
        $('.modal').removeClass('open');
        $('body').removeClass('frozen');
        $('.menu-item-search').removeClass('change');
        $('.menu-dropdown2 ').hide();
        $('.menu-item-search').removeClass('active2');
        $('.menu-dropdown').removeAttr('style');
    }

});




// 關於頁面：聯絡我們表單滑動
$(function () {
    $('.section-move').on('click', function () {
        $(this).addClass('open');
        $(document).click(function (e) {
            var container = $(".section-move"); // 這邊放你想要排除的區塊
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.section-move').removeClass('open')
            }
        });
    })
})


// 關於頁面：小圖進場微動畫
$(function () {
    // $('.steps_bg').offset();
    console.log($('.steps_bg').offset());
})

//   文章列表 

$(function () {

    let array = [];
    $('.blog_Right .articleContent').each(function (index, value) {
        array.push(value.innerText);

    })

    function showMore(len) {
        $('.blog_Right .articleContent').each(function (index, value) {
            $(this).html(array[index]);
            // console.log($(this).html().length);
            if ($(this).html().length > len) {
                let str = $(this).html().substring(0, len) + '......';
                $(this).html(str);
            }

        })
    }


    function render() {
        if ($(window).width() > 1112) {
            showMore(80);
        } else {
            showMore(20);
        }
    }


    $(window).resize(function () {
        render();
    })
    render();

})



$(function () {

    let array = [];
    $('.blog_Right .SmallArticle_Title a').each(function (index, value) {
        array.push(value.innerText);

    })

    function showMore(len) {
        $('.blog_Right .SmallArticle_Title a').each(function (index, value) {
            $(this).html(array[index]);
            // console.log($(this).html().length);
            if ($(this).html().length > len) {
                let str = $(this).html().substring(0, len) + '......';
                $(this).html(str);
            }

        })
    }


    function render() {
        if ($(window).width() > 851) {
            showMore(100);
        } else {
            showMore(38);
        }
    }


    $(window).resize(function () {
        render();
    })
    render();


})










// FAQ頁面：點擊展開
$(function () {

    $(".answer-family-q").click(function () {

        if ($(this).hasClass("long")) {
            $(".answer-family-q").removeClass("long");

        } else {

            $(".answer-family-q").removeClass("long");
            $(this).addClass("long");
        }
    })
})

//聯絡頁面：信箱傳送
//宣告預設表單內容為空 （你想要的話也可以加東西）
var initSubject = '', initBody = '';
//按下傳送按鈕後執行
function submitHandler() {

    var to = "";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
    var name = nameText.value;//讀取ID為 nameTextuser 物件中的值
    var email = emailText.value;
    //  var tel = telText.value;
    //  var subject = subText.value;
    //把user填的資料都塞到 mail body 中
    var body = "" + bodyText.value + '%0A%0A%0A';//%0A是換行 換了三行
    body += "From：" + nameText.value + '%0A';
    body += "Email：" + emailText.value + '%0A';
    //  body += "Tel："+telText.value;
    //傳送的主要程式碼
    mailTo.href = "mailto:" + to + "&body=" + body;
    mailTo.click();
}
//在body onload
function init() {
    //  subText.value=initSubject;
    //  toText.value=initTo;
    bodyText.value = initBody;
}