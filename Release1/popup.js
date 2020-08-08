$(document).ready(function(){
    $('#enter').click(function(){
        if ($('#nameField').val() !=0)
        {
           var text = $('#nameField').val(); 
            $('#nameTag').append("Hello ",text);
            }
        else
        alert("Enter valid text");
        $('#Container').empty().html($('#nameDisplay').html());
    })
})