(function task3(){
    var $inputs = $(":input");
    $inputs.on('input ',function() {
        $('textarea[name="' + this.name + '"]').val($(this).val());
    });
})();