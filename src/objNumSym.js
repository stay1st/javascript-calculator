    class createBtnObjs {
        constructor(id, value) {
            this.id = id;
            this.objType = 'number';
            this.value = value;
        }
    }

    export const one = new createBtnObjs('one', 1);
    export const two = new createBtnObjs('two', 2);
    export const three = new createBtnObjs('three', 3);
    export const four = new createBtnObjs('four', 4);
    export const five = new createBtnObjs('five', 5);
    export const six = new createBtnObjs('six', 6);
    export const seven = new createBtnObjs('seven', 7);
    export const eight = new createBtnObjs('eight', 8);
    export const nine = new createBtnObjs('nine', 9);

export const numNoZero = [one, two, three, four, five, six, seven, eight, nine];

    class btnOperatorStore extends createBtnObjs {
        constructor(id, name, value) {
            super(id, value);
            this.id = id;
            this.name = name;
            this.value = value;
            this.expressions = [];
            this.inputCount = [];
            this.toggle = 'APPEND_ON';
            
        }
    }

    export const zero = new btnOperatorStore('zero', 'Zero', 0);
    export const decimal = new btnOperatorStore('decimal', 'Decimal', '.');
    export const add = new btnOperatorStore('add', 'Addition', '+');
    export const subtract = new btnOperatorStore('subtract', 'Subtraction', '-');
    export const divide = new btnOperatorStore('divide', 'Division', '/');
    export const multiply = new btnOperatorStore('multiply', 'Multiplication', '*');
    export const clear = new btnOperatorStore('clear', 'ClearIt', 'AC');
    export const equals = new btnOperatorStore('equals', 'Equals', '=');

export const opsAndOperations = [add, subtract, divide, multiply, clear, equals];

