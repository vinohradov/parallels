/**
 * Created by ADMIN4IK on 14.07.2020.
 */

var radioBtns = document.getElementsByClassName(className = "background-switcher");

for (var i = 0; i < radioBtns.length; i++) {
    radioBtns[i].addEventListener ("change" , function() {
        var currentRadio = this;
        var body = document.getElementsByTagName( "body")[0];
        body.setAttribute("style", "background-color:" + currentRadio.value);
    });
}

var button = document.getElementById('button');

button.onclick = function() {
    var div = document.getElementById('hidden-section');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

var $inputs = $(":input");
$inputs.on('input',function() {
    $('input[name="' + this.name + '"]').val($(this).val());
});