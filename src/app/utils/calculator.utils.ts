/**
 * This class is the Utils of the calculator.
 * All calculation logics are implemented and encapsulated in this class.
 * @author Yuxuan Du
 */
export class CalculatorUtils {

    /**
     * This method perform the add function.
     * Since float number is not accurate while calculating,
     * -- in this method both input values are check and process to ensure the accuracy.
     * @param val1 is the first value input by the user.
     * @param val2 is the second value input by the user
     */
    public static add(val1, val2): number {
        if (this.isDecimal(val1) || this.isDecimal(val1)) {    // check if any of input values is decimal number.
            let processedValue: number[];
            processedValue = this.decimalProcess(val1, val2);
            return (processedValue[0] + processedValue[1]) / processedValue[2];
        } else {
            return (val1 + val2);
        }
    }

    /**
     * This method perform the minus function.
     * @param val1 is the first value input by the user.
     * @param val2 is the second value input by the user.
     */
    public static minus(val1, val2): number {
        if (this.isDecimal(val1) || this.isDecimal(val1)) {         // check if any of input values is decimal number.
            let processedValue: number[];
            processedValue = this.decimalProcess(val1, val2);
            return (processedValue[0] - processedValue[1]) / processedValue[2];
        } else {
            return (val1 - val2);
        }
    }

    /**
     * This method perform the multiply function.
     * @param val1 is the first value input by the user.
     * @param val2 is the second value input by the user.
     */
    public static multiply(val1, val2): number {
        return val1 * val2;
    }

    /**
     * This method perform the divide function.
     * @param val1 is the first value input by the user.
     * @param val2 is the second value input by the user.
     * @returns return null if the seconde number equals to 0, else return the result of multiply.
     */
    public static divide(val1, val2): number {
        if (val2 === 0) {
            return null;
        }
        return val1 / val2;
    }

    /**
     * This method perform the square root function.
     * @param val is the value input by the user.
     * @returns return null if the value input by the user is negative, else return the result.
     */
    public static squareRoot(val): number {
        if (val < 0) {
            return null;
        }
        return Math.sqrt(val);
    }

    /**
     * This method perform the power function.
     * @param val1 is the first value input by the user.
     * @param val2 is the second value input by the user.
     */
    public static power(val1, val2): number {
        return Math.pow(val1, val2);
    }


    /**
     * This method is used for check if a value is a decimal value
     * @param value is the number to be checked.
     * @returns return true if the number is decimal, else return false;
     */
    private static isDecimal(value) {
        return Math.floor(value) !== value;        // After rounding to an Integer, if the number equals to itself, it is not a decimal.
    }

    /**
     * This method is used to convert decimal to integer to ensure the accuracy while calculating.
     * @param val1 is the first value to be processed.
     * @param val2 is the second value to be processed.
     * @returns [val1, val2, times] is an array containing the processed valule 1, value 2 and a variable (times) 
     * -- which is used to recover value 1 and 2 back to decimal later on.
     */
    private static decimalProcess(val1, val2): number[] {
        const val1DecimalStartIndex = (val1 + '').indexOf('.') + 1;
        const val2DecimalStartIndex = (val2 + '').indexOf('.') + 1;
        const val1DecimalLength = (val1 + '').substr(val1DecimalStartIndex).length;
        const val2DecimalLength = (val2 + '').substr(val2DecimalStartIndex).length;
        const times = Math.pow(10, Math.max(val1DecimalLength, val2DecimalLength));
        return [val1 * times, val2 * times, times];
    }
}