f = new Date(2021, 10, 26, 0, 0, 0, 0);
function upd(){
	s = f - new Date();
	  var ms = s % 1000;
	  s = (s - ms) / 1000;
	  var secs = s % 60;
	  s = (s - secs) / 60;
	  var mins = s % 60;
	  
	  var fhrs = (s - mins) / 60;
	  var hrs = fhrs % 24;
	  var ds = (fhrs - hrs) / 24; 
	document.getElementById("time").innerHTML = ds + ":" + hrs + ':' + mins + ':' + secs;
}
upd();
setInterval(upd, 1000);