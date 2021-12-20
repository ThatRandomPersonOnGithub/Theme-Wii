var theme = document.getElementById("thememode");
var body =  document.getElementById("body");


theme.addEventListener("click", function(){

  if (body.classList.contains("light_theme")){
  body.classList.remove("light_theme");
  body.classList.add("dark_theme");
  
  }

  else{
    body.classList.remove("dark_theme");
  body.classList.add("light_theme");
  
  }
});



