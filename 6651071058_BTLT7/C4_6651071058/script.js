$("#remove").click(function(){
  let value=$("#colorSelect").val();
  $("#colorSelect option:selected").remove();
  $("#result").text("Đã xóa: " + value);
});