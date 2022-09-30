function foundNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const operators = ["+", "-", "*", "/", "=", ">", "<", ">=", "<=", "==", "!="];
function foundOpera(op) {
  for (let i = 0; i <= operators.length - 1; i++) {
    if (operators[i] === op) {
      return true;
    }
  }
  return false;
}

export class Tokens {
  constructor() {
    this.instance = null;
    this.tokens = [];
  }
  static getInstance() {
    if (!this.instance) this.instance = new Tokens();
    return this.instance;
  }
  // Follow BODMAS, RD parsing algorithm
  tokening(string) {
    /* remove white space if any. Not really needed for App.js,
         but could be useful in any future Applications*/
    string = string.trim()
    let str = "";

    for (let i = 0; i <= string.length; i++) {
      /* Adding Numbers to the string. */
      str += string[i];
      const preview = string[i + 1];
      /* preview: the lookahead */
      if (foundNum(str.trim()) && !foundNum(preview)) {
        this.tokens.push({ type: "Number", value: str.trim() });
        str = "";
      }

      if (str.trim() === "(") {
        this.tokens.push({ type: "OpenParenthesis" });
        str = "";
      }
      if (str.trim() === ")") {
        this.tokens.push({ type: "CloseParenthesis" });
        str = "";
      }

      if (foundOpera(str.trim()) && !foundOpera(preview)) {
        this.tokens.push({ type: "Operator", value: str.trim() });
        str = "";
      }

      if (str === ";" || str === "\n") {
        this.tokens.push({ type: "EndOfLine" });
        str = "";
      }

      if (i === string.length) {
        this.tokens.push({ type: "EndOfLength" });
        str = "";
      }
    }
    return this.tokens;
  }
}

export class Binary {
  constructor(left, operator, right) {
    this.left = left;
    this.right = right;
    this.operator = operator;
  }
  use(user) {
    return user.userBinary(this);
  }
}

export class Literal {
  constructor(value) {
    this.value = value;
  }
  use(user) {
    return user.userLiteral(this);
  }
}

export class Grouping {
  constructor(expression) {
    this.expression = expression;
  }
  use(user) {
    return user.userGrouping(this);
  }
}

export class Parser {
  constructor(inst) {
    this.instance = inst;
    this.index = 0;
    this.tokens = null;
    this.expression = [];
  }

  static getInstance() {
    if (!this.instance) this.instance = new Parser();
    return this.instance;
  }

  advance() {
    this.index++;
  }

  preview() {
    return this.tokens(this.index + 1);
  }

  current() {
    return this.tokens[this.index];
  }

  parse(string) {
    this.tokens = string;
    console.log('f()parse => Tokens.js:', this.tokens)
    while (this.current().type !== "EndOfLength") {
      const expression = this.add();
      console.log('f()parse =>this.expression Tokens.js:', expression)
      if (expression) this.expression.push(expression);
    }
    console.log('f()parse =>this.expression Tokens.js:', this.expression)
    return this.expression;
  }

  add() {
    const left = this.subtract();
    if (this.current().value === "+") {
      this.advance();
      return new Binary(left, "ADD", this.subtract());
    }
    return left;
  }

  subtract() {
    const left = this.multiply();
    if (this.current().value === "-") {
      this.advance();
      return new Binary(left, "SUBTRACT", this.multiply());
    }
  }

  multiply() {
    const left = this.primary();
    if (this.current().value === "*") {
      this.advance();
      return new Binary(left, "MULTIPLY", this.all());
    }
    return left;
  }

  primary() {
    const current = this.current();
    this.advance();
    if (current.type === "NUMBER") return new Literal(current.value);
    if (current.type === "OPEN_PARENTHESIS") {
      const expression = this.add();
      this.advance();
      return new Grouping(expression);
    }
  }
}

export class User {
  userBinary(x) {
    const type = x.operator;
    switch (type) {
      case "ADD":
        return x.left.use(this) + x.right.use(this);
      case "SUBTRACT":
        return x.left.use(this) - x.right.use(this);
      case "MULTIPLY":
        return x.left.use(this) * x.right.use(this);
      default :
    }
  }
  userLiteral(x) {
    return Number(x.value);
  }
  userGrouping(expression) {
    const exp = expression.expression;
    return exp.use(this);
  }
  userExpressions(expressions) {
    for (const ex of expressions) {
      console.log(ex.use(this));
    }
  }
}

export class Evaluator {
  constructor(a) {
    this.a = a
    this.user = new User();
  }

  evalLog() {
    console.log(this.user.userExpressions(this.a));
  }
}
