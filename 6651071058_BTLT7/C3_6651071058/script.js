let soHang=2;
$("#insert").click(function(){
  soHang++;
  $("#sampleTable").append("<tr><td>Row"+soHang+" cell1</td><td>Row"+soHang+" cell2</td></tr>");
});