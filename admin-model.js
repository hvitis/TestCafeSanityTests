import {
    Selector,
    t
} from 'testcafe';



export default class Admin {
    constructor() {
        this.roomNumber = Selector('#roomNumber');
        this.closeButton = Selector("#closeModal")
        this.usernameField = Selector("#username")
        this.passwordField = Selector("#password")
        this.loginButton = Selector("#doLogin")
        this.deleteButton = Selector(".roomDelete")
        this.defaultRoom = Selector("#typeTwin")
        this.generalType = Selector("p")
        this.submitButton = Selector("#createRoom")
        this.login = "admin";
        this.password = "password";
    }

    async logging() {
        // Logging to admin panel.
        await t.typeText(this.usernameField, this.login)
        await t.typeText(this.passwordField, this.password)
        await t.click(this.loginButton)
    }

    randRoomNumber = (numberOfDigits) => {
        /**
         *  Takes an int as a parameter that is amount of digits that returned number will have.
         *  */
        if (numberOfDigits === 1) {
            return Math.floor((Math.random() * (10) + 1))
        } else if (numberOfDigits === 2) {
            return Math.floor((Math.random() * (100) + 1))
        } else if (numberOfDigits === 3) {
            return Math.floor((Math.random() * (999) + 1))
        } else {
            console.log("Amount of digits between 1 or 3.")
        }
    }
}