firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
      console.log(user.displayName)
        var name =
        `<a>${user.displayName}</a>`; 
       $("#userName").append(name);
        
    }else {
       var login = `<a href="login.html" id="userName">login</a>`; 
       $("#userName").append(login);
    }
  })

  $('#logout').click(function(){
    firebase.auth().signOut()
  })