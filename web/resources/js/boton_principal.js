/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {
            $('.single-item').slick({
                dots: true,
                infinite: true,
                speed: 300,
                autoplay:true,
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1
             });
});