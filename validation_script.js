var pat= "$Aa1"
function loadPattern(){
	document.getElementById('pattern').innerHTML = pat;
}
function validationFrom() {
    var pattern = document.getElementById('pattern').innerHTML;
    var password_pattern = pattern.split("");
    var key = event.which;
    console.log(password_pattern)
    if (pattern == ""){
    	document.getElementById('pattern').innerHTML = "Your password is valid";
    	return true;
    }
    else if (pattern != "Your password is valid"){
	    for (var i = 0; i < password_pattern.length; i++) {
	      var val = password_pattern[i].charCodeAt();
	      if (val > 64 && val < 91 && key > 64 && key < 91) {
	       password_pattern.splice(i,1);
	       document.getElementById('pattern').innerHTML = password_pattern.toString().replace (/,/g, "");
	      }
	      if (val > 96 && val < 123 && key > 96 && key < 123) {
	        password_pattern.splice(i,1);
	        document.getElementById('pattern').innerHTML = password_pattern.toString().replace (/,/g, "");
	      }
	      if (val > 47 && val < 58 && key > 47 && key < 58) {
	        password_pattern.splice(i,1);
	        document.getElementById('pattern').innerHTML = password_pattern.toString().replace (/,/g, "");
	      }
	      if (val > 32 && val < 39 && key > 32 && key < 39) {
	        password_pattern.splice(i,1);
	        document.getElementById('pattern').innerHTML = password_pattern.toString().replace (/,/g, "");
	      }
	    } 
	}
 }
    
function validationEmply() {
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	var pattern = document.getElementById('pattern').innerHTML;
	 if (name == "" && password == "") {
         alert("Name and Password must be filled out !");
         return false;
     } 
     else if (name == "") {
         alert("Name must be filled out !");
         return false;
     }
     else if (password == "") {
         alert("Password must be filled out !");
         return false;
    }
    if (pattern != "Your password is valid"){
    	alert("Your Password is not valid. Plsease enter again.")
    	document.getElementById('password').value = "";
    	document.getElementById('pattern').innerHTML = pat;
    	return false;
    }
 }

