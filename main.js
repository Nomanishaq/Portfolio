if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("./serviceWorker.js").then(function() {
      })
      .catch(function() {
            console.log('error');
            
      })
}