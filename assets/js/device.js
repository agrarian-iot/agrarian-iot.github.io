
function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }


(function(){
   
    if (detectmob()) {
            // Mobile device
            // Prototype Video
            $("#prototype-video").append(`
            <iframe width="330" height="250" src="https://www.youtube.com/embed/-EBa97_Hh0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `); 

            // Header logo
            $("#logo").append(`
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                    <img src="/assets/img/logos/logo-dark-mobile85by32.png" alt="Agrarian" border="0">
                </a>
            `);

            //Alter Main-heading
            // $("#main-heading").empty();
            // $("#main-heading").append(`
            //     <a href="#page-top">
            //         <img src="/assets/img/logos/logo-light-green.png" alt="Horizontal-dash-header-Logo-Old" border="0">
            //     </a>
            // `);
            // $("#divider").empty();
        }
        else
        {
            // Desktop/Tablet device
            // Prototype Video
            $("#prototype-video").append(`
            <iframe width="735" height="404" src="https://www.youtube.com/embed/-EBa97_Hh0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `); 

            //pitch deck presentation
            $("#pitch-deck").append(`
            <iframe src="/uploads/AgrarianPitch.pdf"  style="overflow: scroll;" width="100%" height="900px">
            </iframe>   
            `);

            // Header logo
            $("#logo").append(`
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                    <img src="/assets/img/logos/logo-light-green.png" alt="Agrarian" border="0">
                </a>
            `);

            // Footer logo
            $("#footer-logo").append(`
                <a href="#page-top">
                    <img src="/assets/img/logos/logo-small-cyan-green.png" alt="Agrarian" border="0">
                </a>
            `);

            //Backgroud slide Animation
            // $('header').hover(function () {
            //     $(this).stop().fadeOut("1000", function () {
            //         $(this).css("background-image", "url('/assets/img/backgrounds/bg-masthead-cabbage.jpg')").fadeIn(1000);
            //     });
            // }, function () {
            //     $(this).stop().fadeOut("1000", function () {
            //         $(this).css("background-image", "url('/assets/img/backgrounds/bg-masthead-plant-port.jpg')").fadeIn(1000);
            //     });
            // });
        }
     
})()


