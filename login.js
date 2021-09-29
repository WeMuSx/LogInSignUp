var objPeople = [
	{ // Object @ 0 index
		username: "Mortron",
		password: "123"
	},
	{ // Object @ 1 index
		username: "Cyborg",
		password: "abc"
	},
	{ // Object @ 2 index
		username: "Tristor",
		password: "abc123"
	}

]

function login() {
	var username = document.getElementById('userN').value
	var password = document.getElementById('userP').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	alert("incorrect username or password")
}

// register functionality
function registerUser() {
	// store new users username
	var registerUser = document.getElementById('nUserN').value
	// store new users password
	var registerPassword = document.getElementById('nUserP').value
	// store new user data in an object
	var newUser = {
		username: registerUser,
		password: registerPassword
	}
	// loop throught people array to see if the username is taken, or password to short
	for(var i = 0; i < objPeople.length; i++) {
		// check if new username is equal to any already created usernames
		if(registerUser == objPeople[i].username) {
			// alert user that the username is take
			alert('That username is already in user, please choose another')
			// stop the statement if result is found true
			return
		// check if new password is 8 characters or more
		} else if (registerPassword.length < 8) {
			// alert user that the password is to short
			alert('That is to short, include 8 or more characters')
			// stop the statement if result is found true
			return
		}
	}
	// push new object to the people array
	objPeople.push(newUser)
	// console the updated people array
	console.log(objPeople)
}