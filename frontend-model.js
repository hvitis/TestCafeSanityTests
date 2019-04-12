import {
    Selector,
    t
} from 'testcafe';

export default class FrontEnd {
    constructor() {
        this.form = {
            "name": Selector("#name"),
            "email": Selector("#email"),
            "phone": Selector("#phone"),
            "subject": Selector("#subject"),
            "message": Selector("#message"),
            "submit": Selector("#submitContact")
        }
        this.invalidFeedback = Selector('.invalid-feedback')
        this.messageTitle = Selector('h2');
        this.logoXPath = '//*[@id="root"]/div/div/div/div[1]/div/img';
        this.roomsColumn = Selector('.col-sm-7');
        this.geotag = Selector('.pigeon-click-block');
    }
    async closingPopUp(nextButton, closeButton) {
        for (var i = 0; i < 4; i++) {
            await t.click(nextButton)
        }
        await t.click(closeButton)
    }

}