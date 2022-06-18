firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      console.log(user.displayName)
        var name =`<a>${user.displayName}</a>`; 
        var logout =`logout`;
       $("#userName").append(name);
       $("#logout").append(logout);
        
    }else {
       var login = `<a href="login.html?#">login</a>`; 
       $("#userName").append(login);
    }
  })

  $('#logout').click(function(){
    firebase.auth().signOut()
    window.location.href = "index.html"
    console.log("logout")
  })