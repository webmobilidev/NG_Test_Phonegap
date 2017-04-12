function ContentLoader(){
  var constructor = function(){
    setInterval(function(){checkValidation(navigator.connection.type);},30000);
  }
  
  function checkValidation(connection){
    if((connection != "none" && connection != "unknown")){
      console.log("refreshato");
      window.location.reload(true);
    }
    
  }
  
  constructor();
}
(function () {
  var c_loader = new ContentLoader();
}());