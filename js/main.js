jQuery(document).ready(function () {

    $("#navBar").on("click", function () {
        var diceID = $("#navBar > a").attr("id");

        alert(diceID);
    })


})