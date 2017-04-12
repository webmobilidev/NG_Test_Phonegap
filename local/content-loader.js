function ContentLoader(){
  var constructor = function(){
    setInterval(function(){checkValidation(navigator.connection.type);},30000);
    loadShopInfo();
  }
  
  function checkValidation(connection){
    if((connection != "none" && connection != "unknown")){
      console.log("refreshato");
      window.location.href = 'index.html';    
    }  
  }
  function loadShopInfo(){
    $.get('local/shop/contacts.html', function(data){
      if($(data).length > 0){
        $(data).appendTo($('#mainLogo'))
      }    
    });
  }
  constructor();
}
(function () {
  var c_loader = new ContentLoader();
}());