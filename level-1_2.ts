const sayHallo = () => {
    console.log('Hallo');
}

const multiplier = (num1: number, num2: number) => {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

const multiplierAlert = (num1: number, num2: number) => {
    alert(`${num1} x ${num2} = ${num1 * num2}`);
}

const showObjProperties = (user: {}) => {
    console.log(Object.keys(user));
}

const luke: {} = {
    firstName: 'Lucas',
    lastName: 'Oliveira',
    age: 30
}

const everythingFunc = (num1: number, num2: number, user: {}) => {
    sayHallo();
    multiplier(num1, num2);
    multiplierAlert(num1, num2);
    showObjProperties(user);
}
everythingFunc(27, 3, luke);