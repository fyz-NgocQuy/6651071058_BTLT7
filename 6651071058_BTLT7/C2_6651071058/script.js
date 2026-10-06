$("#form1").submit(function(e){
  e.preventDefault();
  let ho = $("input[name='fname']").val();
  let ten = $("input[name='lname']").val();
  $("#result").text("Họ và tên: " + ho + " " + ten);
});