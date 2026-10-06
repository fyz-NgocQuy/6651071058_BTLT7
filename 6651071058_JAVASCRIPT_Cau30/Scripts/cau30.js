function insert_Row(){
  var t=document.getElementById("sampleTable");
  var r=t.insertRow(t.rows.length);
  var n=t.rows.length;
  r.insertCell(0).innerHTML="Row"+n+" cell1";
  r.insertCell(1).innerHTML="Row"+n+" cell2";
}
