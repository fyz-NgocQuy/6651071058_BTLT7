const images=[
  {src:"https://picsum.photos/id/1015/500/343",w:500,h:343},
  {src:"https://picsum.photos/id/1025/320/195",w:320,h:195},
  {src:"https://picsum.photos/id/106/240/160",w:240,h:160}
];
$("#show").click(function(){
  let x=images[Math.floor(Math.random()*images.length)];
  $("#imageBox").html("<img src='"+x.src+"' width='"+x.w+"' height='"+x.h+"' alt='Random image'>");
});