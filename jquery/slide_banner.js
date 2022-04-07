$(function(){ // $(document).ready(function(){ });
    var visual = $('.back > li');
   // visual은 움직이는 이미지들
    var button = $('#buttonList > li');
    var current = 0;
    var setIntervalId;
    
    
    // $('#wrap').on({
    //     mouseover:function(){
    //         clearInterval(setIntervalId);
    //     },
    //     mouseout:function(){
    //         timer();
    //     }
    // });
    
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == visual.size()){
                n = 0;
            }
            
            move(n);
        }, 4000);
    }
    
    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({opacity:1}).stop().animate({opacity:0},1500);
        nextEl.css({opacity:0}).stop().animate({opacity:1},1500);

        current = i;
    }
});

// 메인메뉴 버튼

$(function(){
    var menu = $('#main_mn > li');
    var contents = $('#contents > div');
    
    menu.click(function(event){
       event.preventDefault();
       
       var tg = $(this);
       var i = tg.index();
       
       var section = contents.eq(i);
       var tt = section.offset().top;
       
       $('html, body').stop().animate({scrollTop:tt});
    });
    
     $(window).scroll(function(){
       var sct = $(window).scrollTop();
      
       contents.each(function(){
         var tg = $(this);
         var i = tg.index();
          if(tg.offset().top <= sct){
              menu.removeClass('on');
              menu.eq(i).addClass('on');
          }
      });
    });
});