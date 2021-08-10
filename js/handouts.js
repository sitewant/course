

$(function(){
    function render(){
        if($(window).width()<852){
            $('.classBox:nth-child(n+4)').addClass('fade');
        }else{
            $('.classBox').removeClass('fade');
        }
    }

    $(window).resize(function(){
        render();
    })
    render();    



    $( window ).scroll(function(){
        $('.fade').each(function(){
            let bottomObject = $(this).position().top ;
            let bottomWindow = $(window).scrollTop() + $(window).height();
            

            if(bottomWindow > bottomObject){
                $(this).animate({'opacity':'1'},600);
            }
        })
    })



})
