export default class removalHistory {
  constructor(expr, opera, cons) {
    this.removeLastExpression = expr;
    this.lastOperator = opera;
    this.removeLastConstants = cons;
    this.getDetails = () => {
      return console.log(
        `removalHistory for ${this}`,
        `${this.removeLastConstants}`,
        `${this.lastOperator}`,
        `${this.removeLastConstants}`,
      )
    }
  }
}
