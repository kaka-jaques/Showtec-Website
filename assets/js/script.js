$(window).scroll(function(e){
    var position = $(this).scrollTop();

    console.log(position);

    if(position < 1000){
        $('.active').removeClass('active')
        $(nav1).addClass('active')
    }else if(position >= 1000 && position < 1200){
        $('.active').removeClass('active')
        $(nav2).addClass('active')
    }else if(position >= 1200 && position < 1400){
        $('.active').removeClass('active')
        $(nav3).addClass('active')
    }else if(position >= 1400 && position < 1600){
        $('.active').removeClass('active')
        $(nav4).addClass('active')
    }else if(position >= 1600 && position < 1600){
        $('.active').removeClass('active')
        $(nav5).addClass('active')
    }else if(position >= 1800 && position < 1600){
        $('.active').removeClass('active')
        $(nav6).addClass('active')
    }else if(position >= 1966 && position < 1600){
        $('.active').removeClass('active')
        $(nav7).addClass('active')
    }else if(position >= 2000 && position < 1600){
        $('.active').removeClass('active')
        $(nav8).addClass('active')
    }

})