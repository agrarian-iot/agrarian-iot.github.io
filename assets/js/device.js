
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
            // Header logo

            $("#logo").append(`<p class="nav-item nav-link">Agrarian</p>`);

            //Alter Main-heading
            $("#main-heading").empty();
            $("#main-heading").append(`
                <a href="#page-top">
                    <img src="/assets/img/logo-light-green.png" alt="Horizontal-dash-header-Logo-Old" border="0">
                </a>
            `);
            $("#divider").empty();
        }
        else
        {
            // Desktop/Tablet device
            // Header logo 

            $("#logo").append(`
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                    <img src="/assets/img/logo-light-green.png" alt="Horizontal-dash-header-Logo-Old" border="0">
                </a>
            `);

            // Footer logo

            $("#footer-logo").append(`
                <a href="#page-top">
                    <img src="/assets/img/logo-small-cyan-green.png" alt="Horizontal-dash-header-Logo-Old" border="0">
                </a>
            `);

            //Backgroud slide Animation
            // $('header').hover(function () {
            //     $(this).stop().fadeOut("1000", function () {
            //         $(this).css("background-image", "url('/assets/img/bg-masthead-cabbage.jpg')").fadeIn(1000);
            //     });
            // }, function () {
            //     $(this).stop().fadeOut("1000", function () {
            //         $(this).css("background-image", "url('/assets/img/bg-masthead-plant-port.jpg')").fadeIn(1000);
            //     });
            // });
        }
     
})()


