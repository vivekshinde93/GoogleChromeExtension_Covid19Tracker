$(document).ready(function(){
   $('.search').click(function()
   {
    var cnt = $('#countryName').val();
    $.ajax({
        url: 'https://api.thevirustracker.com/free-api?countryTotal=US',
        dataType: 'json',
        success: function(data) {
          console.log(data);
        }
      });

   })
})