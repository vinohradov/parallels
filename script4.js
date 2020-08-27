(function task4(){
    var maxWidth = document.getElementById("max-width");
    maxWidth.addEventListener("click",function(){
        var body = document.getElementById("body");
        if (body.style.maxWidth !== "1200px"){
            body.style.maxWidth = "1200px";
        }
        else {
            body.style.maxWidth = "400px";
        }
    });
})();