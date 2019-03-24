
import { Component } from '@angular/core';
import { CalculatorUtils } from '../utils/calculator.utils';


@Component({
  selector: 'app-calulator',
  templateUrl: './calulator.component.html',
  styleUrls: ['./calulator.component.css']
})

/**
 * This class is performing the presentation logic of the calculator component.
 * @author Yuxuan Du
 */
export class CalulatorComponent {


  inputDisplay: string;
  resultDisplay: string;
  operater: string;
  firstNum: number;
  secondNum: number;
  isError: boolean;

  constructor() {
    this.isError = false;
    this.inputDisplay = '';
    this.resultDisplay = '0';
  }


  /**
   * When button 'AC' is clicked, this method is invoked.
   */
  onAcClicked() {
    this.isError = false;
    this.resultDisplay = '0';
    this.inputDisplay = '';
    this.firstNum = null;
    this.secondNum = null;
    this.operater = null;
  }


  /**
   * This method is called when any number key is clicked.
   * @param value is the number clicked by the user
   */
  onKeyClicked(value) {
    if (value === '.') {
      this.dotInput();
    } else {
      this.inputDisplay += value;
    }
  }

  /**
   * This method is called when '.' is clicked
   */
  dotInput() {
    if (this.inputDisplay.search(/\./) === -1) {     // Check if a dot is existed already
      if (this.inputDisplay === '') {
        this.inputDisplay = '0.';
      } else {
        this.inputDisplay += '.';
      }
    }
  }

  /**
   * This method is called when any operater such as "+", "-", "*", "/" is clicked
   * @param operater is the operater clicked by the user
   */
  onOperatorClicked(operater: string) {
    if (this.firstNum == null) {                  // In the normal situation, get the first number after any operater is clicked.
      this.firstNum = + this.inputDisplay;
    } else if (this.operater != null && this.secondNum == null) {  // calculate the previouse result at first if operater is existed.
      this.secondNum = + this.inputDisplay;
      this.firstNum = this.calculateResult();
      this.resultDisplay = '' + this.firstNum;
      this.secondNum = null;
    }
    this.operater = operater;
    this.inputDisplay = '';
    if (this.operater === '√') {
      this.onEqualClicked();
    }
  }

  /**
   * This method is called when '=' is clicked.
   */
  onEqualClicked() {
    if (this.operater != null && this.firstNum != null) {
      if (this.operater !== '√') {
        this.secondNum = + this.inputDisplay;
      }
      const rawResult = this.calculateResult();
      if (rawResult != null) {
        this.resultDisplay = '' + this.calculateResult();
        this.firstNum = rawResult;
        this.secondNum = null;
        this.operater = null;
        this.inputDisplay = '';
      } else {
        this.isError = true;
        this.resultDisplay = 'Error!';
      }
    }
  }

  /**
   * Calculate the result of user's inputs.
   */
  calculateResult(): number {
    switch (this.operater) {
      case '+':
        return CalculatorUtils.add(this.firstNum, this.secondNum);
      case '-':
        return CalculatorUtils.minus(this.firstNum, this.secondNum);
      case '*':
        return CalculatorUtils.multiply(this.firstNum, this.secondNum);
      case '/':
        return CalculatorUtils.divide(this.firstNum, this.secondNum);
      case '√':
        return CalculatorUtils.squareRoot(this.firstNum);
      case '^':
        return CalculatorUtils.power(this.firstNum, this.secondNum);
      default:
        return null;
    }
  }
}
