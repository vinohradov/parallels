/**
 * Created by ADMIN4IK on 14.07.2020.
 */
(function task1(){
    var backgroundChange = document.getElementById("background-switcher");

    backgroundChange.addEventListener ("click" , function() {
        var welcome = document.getElementById( "welcome-section");
        var services = document.getElementById( "our-services-section");

        if (welcome.style.backgroundColor === '#955826') {
            welcome.style.backgroundColor = '#955826';
            services.style.backgroundColor = '#282a2e';
        }
        else {
            welcome.style.backgroundColor = '#282a2e';
            services.style.backgroundColor = '#955826';
        }

    });
})();