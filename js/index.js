
$(document).ready(function () {


    $(".skitter-large").skitter({auto_play:false});

    var typed = new Typed('.element', 
    {
        // Waits 1000ms after typing "First"
        strings: ['Route Academy ', 'Full Stack Web Development Diploma' , 
        'Android Diploma'],
        loop: true,
        typeSpeed: 50,

      });

    particlesJS.load('particles-js', 'js/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });



    let aboutOffset = $("#about").offset().top;
    let workOffset = $("#work").offset().top;

    $(window).scroll(function () {

        let wScroll = $(window).scrollTop();

        if (wScroll > aboutOffset) {
            $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.7)");
            $("#main-nav").css("padding", "0px 50px");
            $("#btnUp").fadeIn(800);
        }
        else {
            $("#main-nav").css("backgroundColor", "transparent");
            $("#main-nav").css("padding", "0px 0px");
            $("#btnUp").fadeOut(800);
        }


        if(wScroll > workOffset -200)
        {
            startCounter();
        }
    });

    $("#btnUp").click(function () {

        // $(window).scrollTop(0);
        $("html,body").animate({ scrollTop: 0 }, 1000)
    });

    $("a[href^='#']").click(function (eventInfo) {

        let aHref = $(eventInfo.target).attr('href');//http

        let sectionOffset = $(aHref).offset().top;
        $("html,body").animate({ scrollTop: sectionOffset }, 1000)

    });


    for (let i = 0; i < $(".color-item").length; i++) {


        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);

        $(".color-item").eq(i).css("backgroundColor", `rgb(${r},${g},${b})`);

    }
    $(".color-item").click(function (e) {

        let bgColor = $(this).css("backgroundColor");
        $(".change").css("color", bgColor)

    })





    $("#loading").fadeOut(100, function () {

        $("body").css("overflow", "auto")
    })



})


// function counterUp(element , limit ) {
//     let counter = 0;

//    let x = setInterval(()=>{
//         counter++;
//         $(element).html(counter);

//         if(counter == limit)
//         {
//             clearInterval(x);
//         }
//     } , 100)

//   }
//   counterUp("#projectsNumber" , 40);
//   counterUp("#clientsNumber" , 200);



// function welcome(userName)
// {
//     return `welcome ${userName}`;
// }

// let welcome = function (userName) {
//     return `welcome ${userName}`;

// }


// let welcome = (userName) =>
// {
//     return `welcome ${userName}`;
// }
// let welcome = userName =>
// {
//     return `welcome ${userName}`;
// }

//let welcome = userName => `welcome ${userName}`;



//Arrow Function
//this //this



// let x = setInterval( function () { console.log('Hello')  } , 1000  ) ;


// $(document).click(function () {
//     clearInterval(x);
//   })

// let x = setTimeout( function () { console.log('Hello')  } , 5000  ) ;


// $(document).click(function () {
//     clearTimeout(x);
//   })





function counterUp(element  , limit , speed) {
    let counter = 0;

    let x = setInterval(() => {
        counter++;
        $(element).html(counter);
        if (counter == limit) {
            clearInterval(x);
        }

    }, speed);
}



function startCounter( ) { 

    counterUp("#projectsNumber" , 100 , 50);
    counterUp("#clientsNumber" , 20 , 70);
    counterUp("#codeLinesNumber" , 90 , 100);
    counterUp("#CoffeeNumber" , 70 , 20);
 }



function printDate()
{
    let fullDate  = new Date();

    $("#hoursContainer").text(fullDate.getHours()-12);
    $("#minutesContainer").text(fullDate.getMinutes());
    $("#secondsContainer").text(fullDate.getSeconds());

}
setInterval(printDate, 1000);
