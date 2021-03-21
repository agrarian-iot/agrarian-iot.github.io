
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
            $("#allDevicesSection").append(`
            <div class="container-device-view text center">
                <div class="item-view" style="margin-left:-1rem">
                    <!-- Nexus-5 svg -->
                    <object type="image/svg+xml" data="assets/img/nexus5.svg"></object>
                    <!-- End of Nexus-5 svg -->
                </div>
                
                <div class="item-view" style="margin-left:-7rem">
                <!-- Iphone-12 svg -->
                <object type="image/svg+xml" data="assets/img/iphone12.svg"></object>
                <!-- End of Iphone-12 svg -->
                </div>
         </div>
        
        <p class="text-center">Get access of your farm land conditions from anywhere anytime</p>
        <br> 
            `);

            $("#prototype-video").append(`
            <iframe width="330" height="250" src="https://www.youtube.com/embed/-EBa97_Hh0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `); 

            // Pitch Deck
            $("#pitch-deck").append(`
            <iframe src="/uploads/AgrarianPitch.pdf"  style="overflow: scroll;" width="100%" height="100%">
            </iframe>   
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

            $("#allDevicesSection").append(`

            <div class="container-device-view text center">

                <div class="item-view" >
                    <!-- Moonbook svg -->
                    <object type="image/svg+xml" data="assets/img/moonbook.svg"></object>
                    <!-- End of Moonbook svg -->
                </div>
            
                <div class="item-view">
                    <!-- Nexus-5 svg -->
                    <object type="image/svg+xml" data="assets/img/nexus5.svg"></object>
                    <!-- End of Nexus-5 svg -->
                </div>
                
                <div class="item-view">
                    <!-- Iphone-12 svg -->
                    <object type="image/svg+xml" data="assets/img/iphone12.svg"></object>
                    <!-- End of Iphone-12 svg -->
                </div>

                <div class="item-view">
                    <!-- Moontab svg -->
                    <object type="image/svg+xml" data="assets/img/moontab.svg"></object>
                    <!-- End of Moontab svg -->
                </div>
         </div>

            <p>Get access of your farm land conditions from anywhere anytime</p>
            </div>
            
            `);

            $("#prototype-video").append(`
            <iframe width="735" height="404" src="https://www.youtube.com/embed/-EBa97_Hh0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `); 

            //pitch deck presentation
            $("#pitch-deck").append(`
            <iframe src="/uploads/AgrarianPitch3.pdf"  style="overflow: scroll;" width="100%" height="900px">
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
                    <img src="/assets/img/logos/logo-small-cyan-green.png" alt="Agrarian">
                </a>
            `);

            // //Backgroud slide Animation
            // $('header').hover(function () {
            
            //     $(this).stop().fadeOut("2000", function () {
                    
            //         $(this).css("background", "url('/assets/img/backgrounds/bg-masthead-cabbage.jpg')").fadeIn(1000);
            //     });
            // }, function () {
            //     $(this).stop().fadeOut("2000", function () {
            //         $(this).css("background", "url('/assets/img/backgrounds/bg-masthead-green-veggie.jpg')").fadeIn(1000);
            //     });
            // });
            
            
        }
     
})()


