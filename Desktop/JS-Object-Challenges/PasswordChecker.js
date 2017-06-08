function msgID() {
  return {
    valid: true,
  }
}

var message = {
              userValid:  true,
              userValid0: "User ID must be 6 characters or longer",
              userValid1: "User ID cannot contain $",
              userValid2: "User ID cannot contain #",
              userValid3: "User ID cannot contain !",
              pwdValid:   true,
              pwdValid0:  "Password must be 6 characters or longer",
              pwdValid1:  "Password must contain either !,# or a $",
              pwdValid2:  "Password cannot be password",
              pwdValid3:  "Password must contain a least one digit",
              pwdValid4:  "Password must contain one capital letter",
            }

function idCheck(user)  {
    // return user.length >= 6 && !user.includes("!") && !user.includes("#") && !user.includes("$")
    if (user.length < 6) {
      alert(message.userValid0);
      message.userValid = false;
    }
    else if(user.includes("!")) {
      alert(message.userValid3);
      message.userValid = false;
    }
    else if(user.includes("#")){
      alert(message.uservalid2);
      message.userValid = false;
    }
    else if(user.includes("$")) {
      alert(message.uservalid1);
      message.userValid = false;
    }
    else{
      return message.userValid;
      message.userValid = true;
    }
}
//
// function pwCheck(pass)  {
//     return pass.length >= 6 && ( pass.includes("!") || pass.includes("#") || pass.includes("$") ) && pass !=="password" && (pass.search(/[0-9]/) >= 1) && (pass.search(/[A-Z]/) >= 1)
// }

function login()  {
  var user= prompt("Enter your username");
  while (message.userValid) {
    idCheck(user);
    var user= prompt("Enter your username");
  }
}
login()
