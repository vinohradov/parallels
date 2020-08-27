(function task5(){
    var addButton = document.getElementById("add-button");
    var removeButton = document.getElementById("remove-button")
    var nameInput = document.getElementById("name-input");
    var fullNameInput = document.getElementById("full-name-input");
    var s = document.getElementsByClassName("about-us-article");// [3,2,1,2,2,2].length
    var container = document.getElementById("about-us-container");
    var lastChildContainer = container.lastChild;

    addButton.addEventListener('click', function () {
        var div = document.createElement("div");
        div.className = "col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3"
        div.innerHTML =
        '<div class="about-us-article text-center"><img src="images/Photo-16.png" alt="">' +
        '<div class="about-us-big-header">'+nameInput.value+'</div>' +
        '<div class="section-normal-header padding">'+fullNameInput.value+'</div>' +
        '<div class="section-mini-header about-us-text col-sm-10 col-xs-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dicta inventore libero quo saepe tempore!</div>';
        container.appendChild(div);
    });

    removeButton.addEventListener('click', function () {
        var s = document.getElementsByClassName("about-us-article");// [3,2,1,2,2,2].length
        var lastElementIndex = (s.length - 1);
        var lastElement = (lastElementIndex);
        [...document.querySelectorAll('.about-us-article')].pop()?.remove()
    });
})();
