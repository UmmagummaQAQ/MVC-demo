import $ from "jquery";
import './app2.css';

const $tabBar = $('#app2 .tab-bar');
const $tabContent = $('#app2 .tab-content');

$tabBar.on('click','li', e => {
    // console.log(e.currentTarget);测试使用target还是currentTarget（明确点击的部分就是li）
    const $li = $(e.currentTarget);
    $li.addClass('selected')
    .siblings().removeClass('selected');
    const index = $li.index(); //明确点击的是第几个li
    console.log(index);
    $tabContent.children() //找到tabContent的孩子
      .eq(index).addClass('active')
      .siblings().removeClass('active')
    //   .eq(index).css({display:'block'}) 
      // 把第index个变成block
    //   .siblings().css({display:'none'}) 
      // 再把它的兄弟变为none
      //所有直接操作css相关的API都不要用，.show() & .hide()，操作方法如上
});
$tabBar.children().eq(0).trigger('click'); // 一开始就显示第1个children被点击了
