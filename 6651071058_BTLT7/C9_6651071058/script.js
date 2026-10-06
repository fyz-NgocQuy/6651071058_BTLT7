function validEmail(s){
  let p=s.split("@");
  if(p.length!==2) return false;
  if((p[0].match(/\\./g)||[]).length>1) return false;
  return p[0].length>0 && p[1].includes(".");
}
function validDate(s){
  let m=s.match(/^(\\d{2})[\\/-](\\d{2})[\\/-](\\d{4})$/);
  if(!m) return false;
  let month=Number(m[1]), day=Number(m[2]), year=Number(m[3]);
  let now=new Date(), currentYear=now.getFullYear();
  if(year>=currentYear || month<1 || month>12 || day<1 || day>31) return false;
  let d=new Date(year,month-1,day);
  return d.getFullYear()===year && d.getMonth()===month-1 && d.getDate()===day;
}
$("#finish").click(function(){
  let name=$("#name").val().trim(), email=$("#email").val().trim();
  let birth=$("#birth").val().trim(), zip=$("#zip").val().trim();
  let errors=[];
  if(!name) errors.push("Họ tên không được rỗng.");
  if(!validEmail(email)) errors.push("Email không hợp lệ.");
  if(!validDate(birth)) errors.push("Ngày sinh không hợp lệ.");
  if(!/^\\d{5}$/.test(zip)) errors.push("Zip code phải có đúng 5 số.");
  if(errors.length){
    $("#result").html("<span class='error'>"+errors.join("<br>")+"</span>");
  }else{
    $("#result").html("<span class='success'>Đăng ký thành công!</span>");
  }
});