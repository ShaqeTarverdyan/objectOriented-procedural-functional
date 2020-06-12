const form = document.getElementById('user-form');


function SignupHandler(e) {
	e.preventDefault();
	const userEmailInput = document.getElementById('email');
	const enteredEmail = userEmailInput.value;

	const userPasswordInput = document.getElementById('password');
	const enteredPassword = userPasswordInput.value;

	if(enteredEmail.trim().length === 0) {
		alert('invalid input. Email field must not be empty');
		return;
	}
	if(enteredPassword.trim().length <= 5) {
		alert('Invalid input. Password must be six chars or larger');
		return;
	}

	const user = {
		email: enteredEmail,
		password: enteredPassword
	}

	console.log(user);
	console.log('this users mail is', user.email)
}
form.addEventListener('submit',SignupHandler )