/**
 * Created by lenovo on 17/12/7 007.
 */
var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    //cubeEffect: {
    //    shadow: true,
    //    slideShadows: true,
    //    shadowOffset: 20,
    //    shadowScale: 0.94,
    //},
    pagination: {
        el: '.swiper-pagination',
    },
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
        }

});