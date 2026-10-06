$("#calc").click(function(){
  let a=Number($("#a").val()), b=Number($("#b").val()), op=$("#op").val(), kq;
  if($("#a").val()==="" || $("#b").val()===""){ $("#result").text("Biểu thức không hợp lệ."); return; }
  if(op==="+" ) kq=a+b;
  else if(op==="-" ) kq=a-b;
  else if(op==="*" ) kq=a*b;
  else { if(b===0){$("#result").text("Không thể chia cho 0.");return;} kq=a/b; }
  $("#result").text("Kết quả: "+kq);
});