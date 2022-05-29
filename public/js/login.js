    const db = firebase.firestore();
    const storage = firebase.storage();

    $('#register').click(function(){
  
  var 이메일 = $('#New_email').val();
  var 이름 = $('#New_name').val();
  var 패스워드 = $('#New_password').val();

  firebase.auth().createUserWithEmailAndPassword(이메일, 패스워드).then((result)=>{
    console.log(result.user)
    result.user.updateProfile( {displayName : 이름} )
    window.location.href = "index.html";
  })
})
$('#login').click(function(){
  
  var 이메일 = $('#email').val();
  var 패스워드 = $('#password').val();

  firebase.auth().signInWithEmailAndPassword(이메일, 패스워드).then((result)=>{
    console.log(result.user)
  })
})

