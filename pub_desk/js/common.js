

//모달레이어팝업
function lock_touch(e){
    e.preventDefault();
}
var $winW = $(window).width();
var $winH = $(window).height();
function modalPopup(target){
    $('body').css('overflow', 'hidden');
    $('body').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    //rember_sc = $(window).scrollTop();
    $('.modal-content').css("marginTop", 0);
    var $modalContent = $(target).find($('.modal-content'));
    $(target).css({'overflow': 'auto'}).show().addClass('open');
    $(target).focus();
    var $modalContentH = $(target).find($('.modal-content')).outerHeight();
    var $conPos = ($winH / 2) - ($modalContentH / 2);
    $('html').css({'overflow' : 'hidden','height' : $winH});
    if( $winH > $modalContentH ){
        $modalContent.css({marginTop: $conPos});
    } else {
        $modalContent.css({marginTop: 0});
    }
    $("<div class='overlay'></div>").appendTo('.wrap');
    return false;
};

//모달레이어팝업닫기
function modalPopupClose(target){
    $('body').css('overflow', 'visible');
    $('body').off('scroll touchmove mousewheel')
    //document.removeEventListener('touchmove', lock_touch);
    if (document.removeEventListener) {
        document.removeEventListener('touchmove', lock_touch);
    }
    else {
        document.detachEvent('touchmove', lock_touch);
    }
    $(target).find($('.modal-content')).css('margin-top',0);
    $(target).hide().removeClass('open');
    $(".overlay").remove();
    $('html').css({'overflow' : 'auto','height' : 'auto'});
    $('html, body').scrollTop($(window).scrollTop());
};







