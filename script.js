document.getElementById("btnNetCount").addEventListener("click", netCount);
function netCount(){
event.preventDefault();
var true_count;
var false_count;
var net_count;

true_count = document.getElementById("true").value;
false_count = document.getElementById("false").value;
net_count = true_count - (false_count/4);
document.getElementById("net").value = net_count;
}