function display_random_image(){
  var ds=[
    {src:"Images/hinh1.jpg",w:240,h:160},
    {src:"Images/hinh2.jpg",w:320,h:195},
    {src:"Images/hinh3.jpg",w:500,h:343}
  ];
  var a=ds[Math.floor(Math.random()*ds.length)];
  var img=document.createElement("img");
  img.src=a.src;img.width=a.w;img.height=a.h;
  var kv=document.getElementById("kv");
  kv.innerHTML="";
  kv.appendChild(img);
}
