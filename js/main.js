/**
 * Created by Administrator on 2017/9/12.
 */
$(function () {
   /* 左侧导航栏点击展示及隐藏 */
   /*$('.licontent').click(function () {
       $('.licontent').next().addClass('OneBlock');
       $(this).next().removeClass('OneBlock');
       $('.OneBlock').css('display','none');
       $(this).next().toggle();
       var Display = $(this).next().css('display');
       if(Display == 'block'){
           $('.licontent').children('span').children('i').removeClass('fa-angle-down');
           $('.licontent').children('a,span').css('color','#ffa900');
           $('.licontent').css('background','#080806');
           $(this).children('span').children('i').addClass('fa-angle-down');
           $(this).children('a,span').css('color','#fee901');
           $(this).css('background','#171614');
       }else if (Display == 'none'){
           $(this).children('span').children('i').removeClass('fa-angle-down');
           $(this).children('a,span').css('color','#ffa900');
           $(this).css('background','#080806');
       }
   });
    $('.Secondcontent').click(function () {
        $(this).next('.ThirdList').toggle();
        var Display = $(this).next().css('display');
        if(Display == 'block'){
            $(this).children('span').children('i').addClass('fa-angle-down');
            $(this).css('background','#171614');
            $(this).children('a,span').css('color','#ebd46e');
        }else if (Display == 'none'){
            $(this).children('span').children('i').removeClass('fa-angle-down');
            $(this).css('background','#23221f');
            $(this).children('a,span').css('color','#fee901');
        }
    });
    $('.Thirdcontent').on('click',function () {
       $(this).next('.FourthList').toggle();
        var Display = $(this).next().css('display');
        if(Display == 'block'){
            $(this).children('span').children('i').addClass('fa-angle-down');
            $(this).css('background','#171614');
            $(this).children('a,span').css('color','#fefffd');
        }else if (Display == 'none'){
            $(this).children('span').children('i').removeClass('fa-angle-down');
            $(this).css('background','#23221f');
            $(this).children('a,span').css('color','#ebd46e');
        }
    });*/

    $('.licontent>span').click(function () {
     $('.licontent').next().addClass('OneBlock');
     $(this).parent().next().removeClass('OneBlock');
     $('.OneBlock').css('display','none');
     $(this).parent().next().toggle();
     var Display = $(this).parent().next().css('display');
     if(Display == 'block'){
     $('.licontent').children('span').children('i').removeClass('fa-angle-down');
     $('.licontent').children('a,span').css('color','#ffa900');
     $('.licontent').css('background','#080806');
     $(this).children('i').addClass('fa-angle-down');
     $(this).css('color','#fee901');
     $(this).prev().css('color','#fee901');
     $(this).parent().css('background','#171614');
     }else if (Display == 'none'){
     $(this).children('i').removeClass('fa-angle-down');
     $(this).css('color','#ffa900');
     $(this).prev().css('color','#ffa900');
     $(this).parent().css('background','#080806');
     }
     });
     $('.Secondcontent>span').click(function () {
     $(this).parent().next('.ThirdList').toggle();
     var Display = $(this).parent().next().css('display');
     if(Display == 'block'){
     $(this).children('i').addClass('fa-angle-down');
     $(this).parent().css('background','#171614');
     $(this).css('color','#ebd46e');
     $(this).prev().css('color','#ebd46e');
     }else if (Display == 'none'){
     $(this).children('i').removeClass('fa-angle-down');
     $(this).parent().css('background','#23221f');
     $(this).css('color','#fee901');
     $(this).prev().css('color','#fee901');
     }
     });
     $('.Thirdcontent>span').on('click',function () {
     $(this).parent().next('.FourthList').toggle();
     var Display = $(this).parent().next().css('display');
     if(Display == 'block'){
     $(this).children('i').addClass('fa-angle-down');
     $(this).parent().css('background','#171614');
     $(this).css('color','#fefffd');
     $(this).prev().css('color','#fefffd');
     }else if (Display == 'none'){
     $(this).children('i').removeClass('fa-angle-down');
     $(this).parent().css('background','#23221f');
     $(this).css('color','#ebd46e');
     $(this).prev().css('color','#ebd46e');
     }
     });

    /* 导航有箭头则不跳转，导航没有箭头则跳转 */
    $('.licontent,.Secondcontent,.Thirdcontent').on('click',function () {
        var Display = $(this).children().is('span');
       if( Display == true){
            $(this).children('a').attr('href','javascript:void(0)');
       }
    });
    /* 左侧导航栏的打开及关闭 */
    var W = $(document).width();
    $('.Lefthide').css('left',-W);
    $('.LeftNav').css('left',-W);
    $('.Close').click(function () {
        var W = $(document).width();
        $('.LeftNav').animate({left:-W},300);
        $('.Lefthide').css('left',-W);
    });
    $('.List').click(function () {
        var W = $(document).width();
        $('.LeftNav').animate({left:0},300);
        $('.Lefthide').css('left',0);
    });
    $('.Lefthide').click(function () {
        var W = $(document).width();
        $('.LeftNav').animate({left:-W},300);
        $('.Lefthide').css('left',-W);
    });
    /* 点击删除按钮删除 */
    $('.Delete').click(function () {
        $(this).parent().parent().remove();
    });
    /* 控制input中的值只能是数字 */
    $('.num').keyup(function () {
        $(this).val($(this).val().replace(/[^Z0-9\ ]/g,''));
        var con = $(this).val();
        if(con<1){
            $(this).val('');
        }
    });
    /* 点击加按钮input中值增加 */
    $('.add').click(function () {
        if($(this).prev().val() == ''){
            $(this).prev().val(0)
        }
        $(this).prev().val(parseInt($(this).prev().val())+1);
    });
    /* 点击减按钮input中值减小 */
    $('.reduce').click(function () {
        var con = $(this).next().val();
        if(con == '' || con<=1){
            $(this).next().val(2);
        }
        $(this).next().val(parseInt($(this).next().val())-1);

    });
    /* 屏幕向上滚动时导航栏固定在顶部 */

    window.onscroll = function () {
        var Top = $('body').scrollTop();
        if(Top >= 105){
            $('nav').css({position:'fixed',top:'0',left:'0'});
            $('.goods').css({marginTop:'41px'});
        }else{
            $('nav').css({position:'relative',top:'0',left:'0'});
            $('.goods').css({marginTop:'0'});
        }
    };
    $(window).bind('touchmove touchstart touchend',function () {
        var Top = $('body').scrollTop();
        if(Top >= 105){
            $('nav').css({position:'fixed',top:'0',left:'0'});
            $('.goods').css({marginTop:'41px'});
        }else{
            $('nav').css({position:'relative',top:'0',left:'0'});
            $('.goods').css({marginTop:'0'});
        }
    });
    /* 向下滑动时底部消失向上滑动时底部出现 */
    $(window).bind('touchstart',function(e){
        var startX = e.originalEvent.changedTouches[0].pageX;
        var startY = e.originalEvent.changedTouches[0].pageY;
        $(window).bind("touchmove",function(e) {
            //获取滑动屏幕时的X,Y
            var endX = e.originalEvent.changedTouches[0].pageX;
            var endY = e.originalEvent.changedTouches[0].pageY;
            //获取滑动距离
            var distanceX = endX - startX;
            var distanceY = endY - startY;
            //判断滑动方向
            if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY < 0) {
                $('.footer').hide();
            } else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY > 0) {
                $('.footer').show();
            }
        });
    });
    /* 当移动端输入数字时控制底部的出现和隐藏 */
    $('.num').focus(function () {
        $('.footer').hide();
    }).blur(function () {
        $('.footer').show();
    });
    /* 购物车页面计算总价 */
    function Price() {
        var sum = 0,count,OnePrice;
        var arr = $('.num');
        for(var i = 0; i<arr.length; i++){
            count = $(arr[i]).val();
            OnePrice = $(arr[i]).parent().prev().children('span').html();
            sum = sum + count*OnePrice;
        }
        return sum.toFixed(2);
    }
    $('.total span').html(Price());
    $('.count button').on('click',function () {
        $('.total span').html(Price());
    });
    $(".num").keyup(function () {
        $('.total span').html(Price());
    });
    $('.Delete').on('click',function () {
        $('.total span').html(Price());
    });
    /* 点击搜索图标获取搜索的值进行搜索 */
    $('.search a').on('click',function () {
        var content = $('.search input').val();
        if(content == ''){
            $(this).attr('href','javascript:void(0)')
        }else{
            $(this).attr('href','index.html')
        }
    });
    // 金币购买select选项框获取value
    $(document).on("change",".select-area select",function(){
       var currentVal = $(this).val();
       console.log(currentVal)
    });
});
