(function task5(){
    var addButton = document.getElementById("delete");
    var input = document.getElementById("delete-input");

    addButton.addEventListener('click', function () {

            var ourSkillItems = document.getElementsByClassName("our-skill-item");
            console.log(ourSkillItems);
                ourSkillItems[0].style.display = 'block';
                ourSkillItems[1].style.display = 'block';
                ourSkillItems[2].style.display = 'block';
                ourSkillItems[3].style.display = 'block';
                ourSkillItems[4].style.display = 'block';
                var inputValue = input.value;
                ourSkillItems[inputValue].style.display = 'none';
        });
})();

