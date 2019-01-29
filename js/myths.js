
// console.log(border);

$(document).ready(function(){
    $('#content2').hide();
    $('#content3').hide();
    $('#content4').hide();
    $('#content5').hide();
    var bordernone = $('.bnone');
    bordernone.css('border', 'none');


    $('#show1').click(function(){
        $('#content').toggle(500);
        var src = ($(this).attr('src') === 'img/down.svg') ? 'img/up.svg' : 'img/down.svg';
        $(this).attr('src',src);
        border_show(src,0);

    });

    $('#show2').click(function(){
        $('#content2').toggle(500);
        var src = ($(this).attr('src') === 'img/down.svg') ? 'img/up.svg' : 'img/down.svg';
        $(this).attr('src',src); 
        border_show(src,1);

    });

    $('#show3').click(function(){
        $('#content3').toggle(500);
        var src = ($(this).attr('src') === 'img/down.svg') ? 'img/up.svg' : 'img/down.svg';
        $(this).attr('src',src); 
        border_show(src,2);

    });

    $('#show4').click(function(){
        $('#content4').toggle(500);
        var src = ($(this).attr('src') === 'img/down.svg') ? 'img/up.svg' : 'img/down.svg';
        $(this).attr('src',src); 
        border_show(src,3);

    });

    $('#show5').click(function(){
        $('#content5').toggle(500);
        var src = ($(this).attr('src') === 'img/down.svg') ? 'img/up.svg' : 'img/down.svg';
        $(this).attr('src',src); 
    });

    

    function border_show(src,index){
        // x = document.getElementsByClassName('myths__questions--titile');
        x = $('.myths__questions--title');
        style= window.getComputedStyle(x[0],null);
        border = style.getPropertyValue('border-bottom');
        if( src === 'img/down.svg'){
            x[index].style.borderBottom = "1px solid #707070";7

        }
        else{
            x[index].style.borderBottom = "none";
            
        }
    }
});