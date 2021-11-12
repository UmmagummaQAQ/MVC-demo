import $ from "jquery";
import './app1.css';
// app1
const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
const n = localStorage.getItem("n"); // 数据存储-初始化
$number.text(n || 100); // 

$button1.on("click", ()=>{
    let n = parseInt($number.text()); //把文本100变为数字number100
    n += 1;
    localStorage.setItem("n", n); //每次计算完后用户刷新后都会变成刷新前的数字，即刷新后的数字为上一次进行计算后的数字
    $number.text(n);
});
$button2.on("click", ()=>{
    let n = parseInt($number.text()); 
    n -= 1;
    localStorage.setItem("n", n);
    $number.text(n);
});
$button3.on("click", ()=>{
    let n = parseInt($number.text()); 
    n *= 2;
    localStorage.setItem("n", n);
    $number.text(n);
});
$button4.on("click", ()=>{
    let n = parseInt($number.text()); 
    n /= 2;
    localStorage.setItem("n", n);
    $number.text(n);
});