//excercise 1

const gretter = (myArray, counter) => {
    const greetText = 'Hello';

    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
};

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//excercise 2

const capitalize = (str) => {
    const [...letters] = str.toLowerCase();
    const [first, ...rest] = letters;

    return first.toUpperCase() + rest.join('');
};

console.log(capitalize("foobar"));
console.log(capitalize("nodeJs"));

//excercise 3

const colors = ['red', 'green', 'blue'];

const capitlizedColors = colors.map(color => capitalize(color));

console.log(capitlizedColors);

//exercise 4

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);

//exercise 5

const array = [1, 2, 3, 4];

const calculateSum = array.reduce((total, number) => total + number, 0);

const calculateProduct = array.reduce((total, number) => total * number, 1);

console.log(calculateSum);
console.log(calculateProduct);

//exercise 6

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());