const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

const validate = (value, flag, validatorValue) => {
	if(flag === REQUIRED) {
		return value.trim().length > 0;
	}
	if(flag === MIN_LENGTH) {
		return value.trim().length > validatorValue;
	}
}

const createUser = (userEmail, userPassword) => {
	if(!validate(userEmail, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
		throw new Error(
			"Invalid Input - emal or password is wrong"
		)
	}
	return {
		userEmail: userEmail,
		userPassword: userPassword
	}
}
const greetUser = (user) => {
	console.log('Hello' + user.userEmail)
}


const getUserInput = (userInputId)  => {
	return document.getElementById(userInputId).value;
}

const signupHandler = (event) => {
	event.preventDefault();

	const enteredEmail = getUserInput('email');
	const enteredPassword = getUserInput('password');

	try {
		const newUser = createUser(enteredEmail,enteredPassword)
		console.log(newUser);
		greetUser(newUser)
	} catch(error) {
		alert(error.message);
	}


}


const connectForm = (formId, formSubmitHandler) => {
	const form = document.getElementById(formId);
	return form.addEventListener('submit', formSubmitHandler)
}

connectForm('user-form', signupHandler);