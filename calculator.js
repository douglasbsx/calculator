const bigDisplay = document.querySelector(".bigDisplay");
const smallDisplay = document.querySelector(".smallDisplay");
let num = '';
let numA = '';
let calc = '';
let operator = undefined;

window.addEventListener('keydown', keyListener);

Array.from(document.getElementsByClassName("btn")).forEach(() => {
	this.addEventListener('click', keyListener);
});

function keyListener(e) {
	if (e.type = 'click') {
		e.keyCode = parseInt(e.target.getAttribute("data-key"));
	}
	switch(e.keyCode) {
		case 0:
			clear();
			break;
		case 8:
			erase();
			break;
		case 111:
			updateOperation('/');
			break;
		case 106:
			updateOperation('*');
			break;
		case 109:
			updateOperation('-');
			break;
		case 107:
			updateOperation('+');
			break;
		case 13:
		case 187:
			operate(operator, parseFloat(numA), parseFloat(num));
			break;
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
			let str = String.fromCharCode(e.keyCode);
			num += str;
			calc += str;
			updateDisplay();
			break;
		case 190:
		case 110:
			decimal();
			break;
	}
}

function erase() {
	if(num != '0' && num != '') {
		num = num.slice(0, -1);
		calc = calc.slice(0, -1);
		updateDisplay();
	}
}

function decimal() {
	if(!num.match(/\./g)) {
		num += '.';
		calc += '.';
		updateDisplay();
	}
}

function clear() {
	num = '0';
	numA = '';
	calc = '';
	operator = undefined;
	updateDisplay();
}

function updateOperation(op) {
	if(operator != undefined) {
		operate(operator, parseFloat(numA), parseFloat(num));
		operator = op;
		numA = calc;
		calc += operator;
		num = '';
		updateDisplay();
	} else {
		operator = op;
		numA = num;
		num = '';
		calc += operator;
		updateDisplay();
	}
}

function updateDisplay() {
	bigDisplay.textContent = num;
	smallDisplay.textContent = calc;
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(op, a, b) {
	switch(op) {
		case '+': 
			num = add(a,b);
			calc = num;
			operator = undefined;
			updateDisplay();
			break;
		case '-':
			num = subtract(a,b);
			calc = num;
			operator = undefined;
			updateDisplay();
			break;
		case '*':
			num = multiply(a,b);
			calc = num;
			operator = undefined;
			updateDisplay();
			break;
		case '/':
			num = divide(a,b);
			calc = num;
			operator = undefined;
			updateDisplay();
			break;
	}
}
