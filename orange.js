setInterval(function ora(){
  var o=document.getElementById("o")
  var ran=document.getElementById("ran")
  
  o.style.display="none"
  ran.style.display="none"
  setTimeout(function lo(){
    o.style.display="block"
    ran.style.display="block"
  },2000)
},10000)