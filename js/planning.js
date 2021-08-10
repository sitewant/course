/**
 *  Planning 網站企劃 
 */

$(function () {
    $('#button1 p').css('color', 'rgb(116, 116, 116)');

    // $('.button-item svg').hide();
    // $('#button-svg1').show();
    $('#button-svg1').addClass('show');
    // $('.button-item svg').removeClass('show');
    $('.button button').on('click', function () {

        // $('.button-item svg').hide();
        $('.button-item svg').removeClass('show');
        $(`#button-svg${$(this).attr("id").substr(6)}`).addClass('show');
        // $(`#button-svg${$(this).attr("id").substr(6)}`).show();
        $('.button-item ').removeClass('nohover');
        $(`#${$(this).attr("id")}`).addClass('nohover');
        $('.button-text').css('color', '#000');
        $(`#${$(this).attr("id")} p`).css('color', 'rgb(116, 116, 116)');

        $('.section').removeClass('active');
        $(`.section-content${$(this).attr("id").substr(6)}`).addClass('active');

    })

    $('.bottom-button button').on('click', function () {

        $("html, body").scrollTop(0);
        $('.section').removeClass('active');
        $(`.section-content${$(this).attr("id").substr(6)}`).addClass('active');

        // $('.button-item svg').hide();
        $('.button-item svg').removeClass('show');
        // $(`#button-svg${$(this).attr("id").substr(6)}`).show();
        $(`#button-svg${$(this).attr("id").substr(6)}`).addClass('show');
        $('.button-text').css('color', '#000');
        $(`#${$(this).attr("id")} p`).css('color', 'rgb(116, 116, 116)');
        // console.log($(this).attr("id").substr(6));
        $('.button button').removeClass('active');
        $(`#button${$(this).attr("id").substr(6)}`).addClass('active');

        $('.button-item ').removeClass('nohover');
        $(`#${$(this).attr("id")}`).addClass('nohover');

    })


})


$(function () {
    var imgID = 1
    var targetID = '';
    $('.arrow-right').on('click', function () {

        var parent = $(this).parent()
        var parentID = parent[0].id

        if (targetID == parentID || targetID == '') {
            targetID = parentID;
        } else {
            imgID = 1;
            $('#' + targetID).children('.arrow-left').addClass('displayNone');
            $('#' + targetID).children('.arrow-right').removeClass('displayNone');

            $('.' + targetID).removeClass('pictureShow');
            $('.' + targetID + ':nth-child(' + 1 + ')').addClass('pictureShow');
            targetID = parentID;
        }

        var imgListLength = $("#" + parentID).children('li').length;

        if (imgID < imgListLength) {

            var childID = imgID + 1

            $('.' + parentID).removeClass('pictureShow');
            $('.' + parentID + ':nth-child(' + childID + ')').addClass('pictureShow');

            if (imgID > 0) {
                $(this).siblings('.arrow-left').removeClass('displayNone');
            }


            imgID = imgID + 1
            if (imgID == imgListLength) {

                $(this).addClass('displayNone');
            }

        }


    })

    $('.arrow-left').on('click', function () {

        var parent = $(this).parent()
        var parentID = parent[0].id

        if (targetID == parentID || targetID == '') {
            targetID = parentID;
        } else {
            imgID = 1;
            $('#' + targetID).children('.arrow-left').addClass('displayNone');
            $('#' + targetID).children('.arrow-right').removeClass('displayNone');

            $('.' + targetID).removeClass('pictureShow');
            $('.' + targetID + ':nth-child(' + 1 + ')').addClass('pictureShow');
            targetID = parentID;
        }

        var imgListLength = $("#" + parentID).children('li').length;

        if (imgID <= imgListLength) {

            var childID = imgID - 1

            $('.' + parentID).removeClass('pictureShow');
            $('.' + parentID + ':nth-child(' + childID + ')').addClass('pictureShow');



            if (imgID == imgListLength) {

                $(this).siblings('.arrow-right').removeClass('displayNone');
            }

            imgID = imgID - 1
            if (imgID == 1) {
                $(this).addClass('displayNone');
            }

        }



    })


    // 放大鏡
    let list_length = 0
    let index = 0
    let target = ''
    $('.icon-search').on('click', function () {

        list_length = $(this).parent().children('li').length
        // 顯示圖片
        target = $(this).parent().children('.pictureShow')
        index = $(this).parent().children().index(target)

        if (list_length == 1) {

            $('.bigP-arrow-left').addClass('displayNone');
            $('.bigP-arrow-right').addClass('displayNone');
        } else {


            $('.bigP-arrow-left').removeClass('displayNone');
            $('.bigP-arrow-right').removeClass('displayNone');
            arrowChange()

        }


        let PicName = $(this).parent().children('.pictureShow').children()[0].src;
        $('.bigP img').prop('src', PicName);


        // 開啟彈窗
        $('.bigP').removeClass('displayNone');
        $('body').addClass('planningFrozen');

    })


    function arrowChange() {

        if (list_length > 1 && list_length == index + 1) {
            $('.bigP-arrow-right').addClass('displayNone');

        } else if (list_length > 1 && index == 0) {
            $('.bigP-arrow-left').addClass('displayNone');

        } else {
            $('.bigP-arrow-left').removeClass('displayNone');
            $('.bigP-arrow-right').removeClass('displayNone');
        }
    }
    function arrowClick() {

        target = ntarget;

        let PicName = ntarget.children()[0].src;

        arrowChange();
        $('.bigP img').prop('src', PicName);
    }

    $('.bigP-arrow-left').on('click', function () {
        ntarget = target.prev();
        index = index - 1;
        arrowChange();
        arrowClick();
    })
    $('.bigP-arrow-right').on('click', function () {
        ntarget = target.next();

        index = index + 1;
        arrowChange();
        arrowClick();
    })

    // 關閉彈窗
    $('.bigPremove').on('click', function () {
        $('.bigP').addClass('displayNone');
        $('body').removeClass('planningFrozen');
    })




})