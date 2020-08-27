(function task3(){
    var syncInputs = document.getElementById("input");

    syncInputs.addEventListener("input",function(){
        var textarea = document.getElementById( "textarea");
        textarea.value = syncInputs.value;
    });
})();