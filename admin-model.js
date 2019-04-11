import {
    Selector
} from 'testcafe';

export default class Admin {
    constructor () {
    this.roomNumber    = Selector('#roomNumber');
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

    async login () {
         // Logging to admin panel.
         await t.typeText(this.usernameField, this.login)
         await t.typeText(this.passwordField, this.password)
         await t.click(this.loginButton)
        }
}

