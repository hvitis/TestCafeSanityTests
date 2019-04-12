import {
    Selector
} from 'testcafe';
import Admin from "./admin-model"
import FontEnd from "./frontend-model"
import XPathSelector from './xpath-selector';

// Importing page selectors
const admin = new Admin();
const fe = new FontEnd()

const addRooms = 2
const roomNumber = (admin.randRoomNumber(2)).toString()

// PopUps selectors on every page.
const nextButton = Selector("#next")
const closeButton = Selector("#closeModal")


fixture `Admin panel`
    .page `https://automationintesting.online/#/admin`
    .beforeEach(async t => {
        // Closing PopUp.
        await fe.closingPopUp(nextButton, closeButton)
        // Logging to admin panel.
        await admin.logging()
    });

test(`As an ADMIN I want to add ${addRooms} rooms to the list.`, async t => {
    for (var i = 0; i < addRooms; i++) {
        await t.typeText(admin.roomNumber, roomNumber)
            .click(admin.submitButton);
    }
    await t.expect(admin.accessibleFalse.count).eql(addRooms + 1, "Amount of created rooms not consistent after deletion.");

})

test(`As an ADMIN I want to delete a room from the list.`, async t => {
    await t.click(admin.deleteButton)
    await t.expect(admin.typeSingle.count).eql(addRooms, "Amount of created rooms not consistent after deletion.");
});


fixture `FrontEnd page`
    .page `https://automationintesting.online/`
    .beforeEach(async t => {
        // Closing PopUp
        await fe.closingPopUp(nextButton, closeButton)
    })
// Testing assuming that default amount of rooms before adding was 1 (which is the amount after server restart.)
test('As a USER I want to see total number of rooms.', async t => {
    await t.expect(fe.roomsColumn.count).eql(addRooms, "Amount of created rooms not consistent on the front page.");
});

test('As a USER I want to send a contact form.', async t => {
    await t
        .typeText(fe.form.name, 'Adam')
        .typeText(fe.form.name, 'Piskrek', {
            replace: true
        })
        .typeText(fe.form.name, 'o', {
            caretPos: 4
        })
        .expect(fe.form.name.value).eql('Piskorek');
    await t.typeText(fe.form.email, 'example@email.local').expect(fe.form.email.value).eql('example@email.local');
    await t.typeText(fe.form.phone, '+34999555333').expect(fe.form.phone.value).eql('+34999555333');
    await t.typeText(fe.form.subject, 'Question.').expect(fe.form.subject.value).eql('Question.');
    await t.typeText(fe.form.message, 'Possible cheaper?').click(fe.form.submit)
    await t.expect(fe.invalidFeedback.count).eql(2, "Validation after typing too short messages and topic.");
    await t.typeText(fe.form.subject, ' about price must have at least twenty characters.')
    await t.typeText(fe.form.message, 'Is it possible to have that room for Thursday a bit cheaper?').click(fe.form.submit)
    await t.expect(fe.messageTitle.count).eql(2, "Message has been send information.")
});

test('As a USER I want to see location tag on map.', async t => {
    await t.expect(fe.geotag.count).eql(1, "Number of geotags is not equal 1.");
});

test("As a USER I want to see company's logo.", async t => {
    await t.expect(XPathSelector(fe.logoXPath).count).eql(1, "Number of logos is not equal 1.");
});