$(document).ready(function() {
    $('.plus-button').click(function (event) {
        $(this).closest('.item-details').find('.item-details-extended').slideDown( "slow");
        $(this).hide();
        $(this).closest('.item-details').find('.minus-button').show();
        event.preventDefault(); // Prevent link from following its href
    });

    $('.minus-button').click(function (event) {
        $(this).closest('.item-details').find('.item-details-extended').slideUp( "slow");
        $(this).hide();
        $(this).closest('.item-details').find('.plus-button').show();
        event.preventDefault(); // Prevent link from following its href
    });

    if (screen.width >= 800) {
        $(".skill-section").mouseenter( function (){
            $(this).closest(".skill-section").css({"background-color": "#3f3f3f"});
            $(this).closest(".skill-section").find(".icon").hide();
            $(this).closest(".skill-section").find(".skill-name").hide();
            $(this).closest(".skill-section").find(".skill-text").hide();
            $(this).closest(".skill-section").find(".skill-text").fadeIn('fast');
            $(this).closest(".skill-section").find(".skill-text-extended").fadeIn('fast');
            $(this).closest(".skill-section").find(".skill-name").css({"color": "#ffffff"});
            $(this).closest(".skill-section").find(".skill-name").fadeIn('fast');
        });

        $(".skill-section").mouseleave( function (){
            $(this).closest(".skill-section").css({"background-color": "inherit"});
            $(this).closest(".skill-section").find(".skill-text-extended").hide();
            $(this).closest(".skill-section").find(".skill-text").hide();
            $(this).closest(".skill-section").find(".skill-name").hide();
            $(this).closest(".skill-section").find(".skill-text").fadeIn(400);
            $(this).closest(".skill-section").find(".icon").fadeIn(400);
            $(this).closest(".skill-section").find(".skill-name").css({"color": "#2E2F30"});
            $(this).closest(".skill-section").find(".skill-name").fadeIn(400);

        });
    }


    $(document).ready(function () {
        $("#new_contact").validate({
            debug: true,
            rules: {
        "contact[name]": {required: true, minlength: 3},
        "contact[email]": {required: true, email: true},
        "conatct[message]": {required: true, minlength: 6}
        }
    });

});



});