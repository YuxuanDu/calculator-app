
import { ErrorHandler } from '@angular/core';


/**
 * This class is used to handle to unexpected errors.
 * When error occurs, an alert dialog will pop up;
 * @author Yuxuan Du
 */
export class AppErrorHandler implements ErrorHandler {

    handleError(error) {
        console.log(error);
        alert('Unexpected Error!');
    }
}

