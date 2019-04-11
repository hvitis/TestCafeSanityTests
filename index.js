import {
    Selector
} from 'testcafe';
import Admin from "./admin-model"
import FontEnd from "./frontend-model"

// Importing page selectors
const admin = new Admin();
const fe = new FontEnd()
const addRooms = 2
const roomNumber = "123"

// PopUps selectors on every page.
const nextButton = Selector("#next")
const closeButton = Selector("#closeModal")


fixture `Admin panel`
    .page `https://automationintesting.online/#/admin`
    .beforeEach( async t => {
        // Closing PopUp.
        for (var i = 0; i < 4; i++) {
            await t.click(nextButton)
        }
        await t.click(closeButton)
        // Logging to admin panel.
        await t.typeText(admin.usernameField, admin.login)
        await t.typeText(admin.passwordField, admin.password)
        await t.click(admin.loginButton)
    });

    test(`As an ADMIN I want to add ${addRooms} rooms to the list.`, async t => {
        for (var i = 0; i < addRooms+1; i++) {
            await t.typeText(admin.roomNumber, roomNumber)
            .click(admin.submitButton);
    }})

    test(`As an ADMIN I want to delete a room from the list.`, async t => {
        await t.click(admin.deleteButton)
    });



fixture `FrontEnd page`
    .page `https://automationintesting.online/`
    .beforeEach( async t => {
        // Closing PopUp
        for (var i = 0; i < 4; i++) {
            await t.click(nextButton)
        }
        await t.click(closeButton)
    })
    // Testing assuming that default amount of rooms before adding was 1 (which is the amount after server restart)
    test('As a USER I want to see total number of rooms.', async t => {
        await t.expect(Selector('.col-sm-7').count).eql(3, "Created rooms not visible on front page.");
    });


    test('As a USER I want to send a contact form.', async t => {

    const form = {
        "name" : Selector("#name"),
        "email" : Selector("#email"),
        "phone" : Selector("#phone"),
        "subject": Selector("#subject"),
        "message": Selector("#message"),
        "submit": Selector("#submitContact")
    }
    await t
        .typeText(form.name, 'Adam')
        .typeText(form.name, 'Piskrek', {
            replace: true
        })
        .typeText(form.name, 'o', {
            caretPos: 4
        })
        .expect(form.name.value).eql('Piskorek');
    await t.typeText(form.email, 'example@email.local').click(submit)
});