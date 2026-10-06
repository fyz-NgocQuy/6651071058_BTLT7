$("#count").click(function(){
  let items=$("#mySelect option").map(function(){return $(this).text();}).get();
  alert("Có "+items.length+" mục: "+items.join(", "));
  $("#result").text("Có "+items.length+" mục: "+items.join(", "));
});