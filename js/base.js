 var top_show=150;
   var delay=1000;

$(document).ready(function(){
  //  зафиксирована панель навигации
    var $navigation = $(".navigation");
    $(window).scroll(function() {
       if (!$navigation.hasClass("fixed") && ($(window).scrollTop() > $navigation.offset().top)) {
         $navigation.addClass("fixed").data("top", $navigation.offset().top);
       }
       else if ($navigation.hasClass("fixed") && ($(window).scrollTop() < $navigation.data("top"))) {
         $navigation.removeClass("fixed");
       }
    });
    // проявление кнопки на верх
    $(window).scroll (function() {
        if($(this).scrollTop()>top_show)
        {$("#top").fadeIn();}
        else $("#top").fadeOut();
    });
// прокрутка на верх
    $("#top").click(function() {
        $("body").animate({ scrollTop : 0}, 200);
        return true;
  });
// слайдер
    $(".pictures").bxSlider;
// jQuer обратный  звонок

  $(".call").jbcallme({
    postfix: "callme_order",
    fields: {
        time: {
            label: "Удобное для звонка время",
            placeholder: "17:30 - 20:00",
        },
        descr: {
            label: "Примечание",
            type: "textarea",
        },
        action: {
            type: "hidden",
            value: "callme_order",
        },
    },
  });

});
