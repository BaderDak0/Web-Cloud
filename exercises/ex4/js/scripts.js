$(document).ready(function () {

    $('input[type="submit"]').click(function () {



        var requiredCheckboxes = $('input[name="interests[]"]:checked');



        if (!requiredCheckboxes.length) {
            $('#alertt').show();
        
            return false;
        }
        else{

            $('#alertt').hide();

        }



    });





});