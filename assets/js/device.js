
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
            $('#copyright').append(`Agrarian ${new Date().toString().split(' ')[3]} All Rights Reserved`);

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
            <iframe style="border-radius: .9rem" width="330" height="250" src="https://www.youtube.com/embed/-EBa97_Hh0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `); 

            // Pitch Deck
            $("#pitch-deck").append(`
            <iframe height="800px" style="border-radius: .9rem; border: solid 1px #38383d" src="/uploads/AgrarianPitch3.pdf"  style="overflow: scroll;" width="85%" height="100%">
            </iframe>   
            `);


            // Header logo
            $("#logo").append(`
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                    <img src="/assets/img/logos/logo-dark-mobile85by32.png" alt="Agrarian" border="0">
                </a>
            `);

            // Benefits section
            $("#benefits").append(`
            <div class="row flex-direction-column justify-content-center align-items-center">
            <div class="px-2 d-flex flex-direction-row justify-content-center align-items-center w-100">
              <object width="150px" height="150px" data="assets/img/illustrations/circuit_board.svg" type="image/svg+xml"></object>
              <h5 class="text-center ml-3">
                <p style="word-wrap: break-word; width: 150px; color: #2f2e41 !important">
                  Agrarian uses the best of technology, with AG11.
                </p>
              </h5>
            </div>
            <div class="px-2 d-flex flex-direction-row justify-content-center align-items-center w-100">
              <h5 class="text-center mr-3">
                <p style="word-wrap: break-word; width: 150px; color: #2f2e41 !important">
                  Make sense of the data 
                  by visualizing the metrics
                </p>
              </h5>
              <object width="150px" height="150px" data="assets/img/illustrations/visual_data.svg" type="image/svg+xml"></object>
            </div>
            <div class="px-2 d-flex flex-direction-row justify-content-center align-items-center w-100">
              <object width="150px" height="150px" data="assets/img/illustrations/Environmental_study.svg" type="image/svg+xml"></object>
              <h5 class="text-center ml-3">
                <p style="word-wrap: break-word; width: 150px; color: #2f2e41 !important">
                  Understand your farm and give it what it needs
                </p>
              </h5>
            </div>
          </div>
            `)

        }
        else
        {
            // Desktop/Tablet device
            // Prototype Video

            $('#copyright').append(`&copy; Agrarian ${new Date().toString().split(' ')[3]} All Rights Reserved`);

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

            <br>
            <p>Get access of your farm land conditions from anywhere anytime</p>
            <br>
            </div>
            
            `);

            $("#prototype-video").append(`
            <iframe style="border-radius: .9rem" width="900" height="450" src="https://www.youtube.com/embed/-EBa97_Hh0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `); 

            //pitch deck presentation
            $("#pitch-deck").append(`
            <iframe style="border-radius: .9rem; border: solid 1px #38383d" src="/uploads/AgrarianPitch3.pdf"  style="overflow: scroll;" width="85%" height="900px">
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

            // Benefits Section

            $("#benefits").append(`
            <div class="row flex-direction-column justify-content-center align-items-center">
            <div class="d-flex flex-direction-row justify-content-center align-items-center w-100">
              <object width="400px" height="400px" data="assets/img/illustrations/circuit_board.svg" type="image/svg+xml"></object>
              <h4 class="text-center ml-5">
                <p style="word-wrap: break-word; width: 250px; color: #2f2e41 !important">
                  Agrarian uses the best of technology, with AG11.
                </p>
              </h4>
            </div>
            <div class="d-flex flex-direction-row justify-content-center align-items-center w-100">
              <h4 class="text-center mr-5">
                <p style="word-wrap: break-word; width: 250px; color: #2f2e41 !important">
                  Make sense of the data 
                  by visualizing the metrics
                </p>
              </h4>
              <object width="400px" height="400px" data="assets/img/illustrations/visual_data.svg" type="image/svg+xml"></object>
            </div>
            <div class="d-flex flex-direction-row justify-content-center align-items-center w-100">
              <object width="400px" height="400px" data="assets/img/illustrations/Environmental_study.svg" type="image/svg+xml"></object>
              <h4 class="text-center ml-5">
                <p style="word-wrap: break-word; width: 250px; color: #2f2e41 !important">
                  Understand your farm and give it what it needs
                </p>
              </h4>
            </div>
          </div>
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


