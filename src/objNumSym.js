


    class CreateBtnObjs {
        constructor(id, value) {
            this.id = id;
            this.objType = 'number';
            this.value = value;
        }
    }

    
    export const one = new CreateBtnObjs('one', 1);
    export const two = new CreateBtnObjs('two', 2);
    export const three = new CreateBtnObjs('three', 3);
    export const four = new CreateBtnObjs('four', 4);
    export const five = new CreateBtnObjs('five', 5);
    export const six = new CreateBtnObjs('six', 6);
    export const seven = new CreateBtnObjs('seven', 7);
    export const eight = new CreateBtnObjs('eight', 8);
    export const nine = new CreateBtnObjs('nine', 9);


    class btnOperatorStore extends CreateBtnObjs {
        constructor(id, name, value) {
            super(id, value);
            this.id = id;
            this.name = name;
            this.value = value;
            this.input = '';
            this.toggle = 'APPEND_ON';
            this.solution = null;
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



