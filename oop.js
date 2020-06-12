class Validator {
	static REQUIRED = 'REQUIRED';
	static MIN_LENGTH = 'MIN_LENGTH';

	static validate(value, flag, validatorValue) {
		if(flag === this.REQUIRED) {
			return value.trim().length > 0;
		}
		if(flag === this.MIN_LENGTH) {
			return value.trim().length > validatorValue;
		}
	}
}

class User {
	constructor(email, password) {
		this.email = email;
		this.password = password
	}

	greet() {
		console.log('hello ' + this.email)
	}
}

class UserInputForm {
	constructor() {
		this.form = document.getElementById('user-form');
		this.userEmailInput = document.getElementById('email');
		this.userPasswordInput = document.getElementById('password');

		this.form.addEventListener('submit', this.signupHandler.bind(this));
	}

	signupHandler(e) {
		e.preventDefault();
		const enteredEmail = this.userEmailInput.value;
		const enteredPassword = this.userPasswordInput.value;

		if(
			!Validator.validate(enteredEmail, Validator.REQUIRED) ||
			!Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
		) {
			alert(
				"Invalid Input - emal or password is wrong"
			);
		return;
		}

		const newUser = new User(enteredEmail,enteredPassword);
		console.log(newUser);
		console.log(newUser.greet())
	}
}

new UserInputForm()