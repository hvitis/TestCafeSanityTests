import {
    Selector
} from 'testcafe';

export default class FrontEnd {
    constructor () {
        this.form = {
            "name" : Selector("#name"),
            "email" : Selector("#email"),
            "phone" : Selector("#phone"),
            "subject": Selector("#subject"),
            "message": Selector("#message"),
            "submit": Selector("#submitContact")
        }
        this.invalidFeedback = Selector('.invalid-feedback')
        this.messageTitle = Selector('h2')
    }

}

