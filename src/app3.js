import $ from 'jquery';
import './app3.css';

const $square = $('#app3 .square');
$square.on('click',()=>{
    $square.toggleClass('active') // toggleClass指有这个类名就不加没有就加上
});