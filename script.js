$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky"); 
        }
        else{
          $('.navbar').removeClass("sticky");  
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehaviour", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing",{
        strings: ["A CSE Undergrad at SRM IST ", "Front End Web Developer", "A UX Designer", "A Competitve Programmer", 'Web3 and Open Source Enthusisast'],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Competitve Programmer", "Front End Web Developer",  "UX Designer" ,"Open Source Enthusiast"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });
});