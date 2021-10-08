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