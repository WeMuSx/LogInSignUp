var objPeople = [
	{ // Object @ 0 index
		username: "Mortron",
		password: "12341234"
	},
	{ // Object @ 1 index
		username: "Cyborg",
		password: "abcdabcd"
	},
	{ // Object @ 2 index
		username: "Tristor",
		password: "abcd1234"
	}

]

function login() {
	var username = document.getElementById('userN').value
	var password = document.getElementById('userP').value

	for(var i = 0; i < objPeople.length; i++) {
		
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + " is logged in!!!")
			console.log(" "+ username +" "+ password +" ")
			
			return
		}
	}
	alert("incorrect username or password")
}


function registerUser() {
	
	var registerUser = document.getElementById('nUserN').value
	
	var registerPassword = document.getElementById('nUserP').value
	
	var newUser = {
		username: registerUser,
		password: registerPassword
	}
	
	for(var i = 0; i < objPeople.length; i++) {
		
		if(registerUser == objPeople[i].username) {
			
			alert('That username is already taken, please choose another')
			
			return
		
		} else if (registerPassword.length < 8) {
			
			alert('That is to short, include 8 or more characters')
			
			return
		}
	}
	

	
	objPeople.push(newUser)
	
	console.log(objPeople)
}
