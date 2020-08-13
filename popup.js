$(document).ready(function () {
  $('#countryName').keyup(function() {
    $(this).val($(this).val().toUpperCase());
});
  $(".search").click(function () {
   var cnt = $("#countryName").val();
    $.ajax({
      url: 'https://api.thevirustracker.com/free-api?countryTotal=' + cnt,
      dataType: 'json',
      success: function (data) {
        console.log(data);
        var dzero = data["countrydata"];
        console.log(dzero[0].info);
        var dcntry = dzero[0].info;
        $(".data0").append(dcntry["title"]);
        $(".data1").append(dzero[0].total_active_cases);
        $(".data2").append(dzero[0].total_cases);
        $(".data3").append(dzero[0].total_danger_rank);
        $(".data4").append(dzero[0].total_deaths);
        $(".data5").append(dzero[0].total_new_cases_today);
        $(".data6").append(dzero[0].total_new_deaths_today);
        $(".data7").append(dzero[0].total_recovered);
        $(".data8").append(dzero[0].total_serious_cases);
        $(".data9").append(dzero[0].total_unresolved);
      }
    });
     $("#Container").empty().html($(".results").html());
  })
})