
// 全部 文章 講義 區塊切換
$(document).ready(function () {
    $(".bottom-default").click(function () {
        $(".sort-section").show();

    })
    $(".bottom-article").click(function () {
        $("html, body").scrollTop(0);
        $('.sort-item h4').removeClass('sort-itemShow');
        $('.bottom-article').addClass('sort-itemShow');
        $(".sort-article").show();
        $(".sort-handouts").hide();
    })

    $(".bottom-handouts").click(function () {
        $("html, body").scrollTop(0);
        $('.sort-item h4').removeClass('sort-itemShow');
        $('.bottom-handouts').addClass('sort-itemShow');
        $(".sort-handouts").show();
        $(".sort-article").hide();

    })
});



// 文章列表 點擊更多

$(function () {
    $('.article-lists>li').slice(0, 3).show();
    $('.arrow-down').click(function (e) {
        e.preventDefault();
        $('.article-lists>li:hidden').slice(0, 3).fadeIn('slow');

        if ($('.article-lists>li:hidden').length == 0) {
            $('.arrow-down').fadeOut('slow');
        }
    })
})



//  索引結果-文章
$(function () {

    let array = [];
    $('.articleContent').each(function (index, value) {
        array.push(value.innerText);

    })

    function showMore(len) {
        $('.articleContent').each(function (index, value) {
            $(this).html(array[index]);
            console.log($(this).html().length);
            if ($(this).html().length > len) {
                let str = $(this).html().substring(0, len) + '......';
                $(this).html(str);
                console.log($(this).html().length);
            }

        })
    }


    function render() {
        if ($(window).width() > 1112) {
            showMore(80);
        } else {
            showMore(30);
        }
    }


    $(window).resize(function () {
        render();
    })
    render();


})




$(function () {
    let handoutsPosition = 0;


    function handouts(move) {

        $('.swiper-button-next').click(function () {
            console.log(`-${move * 3}`);
            let stop = move * 3;
            if (handoutsPosition === -stop) {

                $('.handouts-lists').attr('style', `left:-${move * 3}px`);
            } else {
                handoutsPosition = handoutsPosition - move;
                $('.handouts-lists').attr('style', `left:${handoutsPosition}px`);
            }


        })


        $('.swiper-button-prev').click(function () {

            if (handoutsPosition === 0) {
                $('.handouts-lists').attr('style', 'left:0px');
            } else {

                handoutsPosition = handoutsPosition + move;
                $('.handouts-lists').attr('style', `left:${handoutsPosition}px`);
            }


        })

    }



    function render() {
        if ($(window).width() > 1274) {

            handouts(400);
        } else {

            handouts(370);
        }
    }



    $(window).resize(function () {
        render();
    })
    render();






})
