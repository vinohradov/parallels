(function task1(){
    var backgroundChange = document.getElementById("background-switcher");

    backgroundChange.addEventListener ("click" , function() {
        var welcome = document.getElementById( "welcome-section");
        var services = document.getElementById( "our-services-section");

        if (welcome.style.backgroundColor !== 'rgb(149, 88, 38)'){
            welcome.style.backgroundColor = 'rgb(149, 88, 38)';
            services.style.backgroundColor = 'rgb(40, 42, 46)';
        }
        else {
            welcome.style.backgroundColor = 'rgb(40, 42, 46)';
            services.style.backgroundColor = 'rgb(149, 88, 38)';
        }
    });
})();