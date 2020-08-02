(function task5(){
    var addButton = document.getElementById("add-button");
    var container = document.getElementById("about-us-container")

    addButton.addEventListener('click', function () {
        var div = document.createElement("div");
        div.className = "about-us-article text-center"
        div.innerHTML =
        '<img src="images/Photo-16.png" alt="">' +
        '<div class="about-us-big-header">Mark Cream</div>' +
        '<div class="section-normal-header padding">Big Boss</div>' +
        '<div class="section-mini-header about-us-text col-sm-10 col-xs-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dicta inventore libero quo saepe tempore!</div>';
        container.appendChild(div);
    });
})();
