//import { text } from "stream/consumers";
import {test} from "../pages/fixtures/basePage";


    const number = 7492047808;
    const password = "password";
    const date = "2024-10-01";
    const text = "Hello World";


test('input field can be filled and cleared', async ({homePage, webInputsPage}) => {


    await homePage.goto();
    await homePage.navigateToWebInputsPage();
    await webInputsPage.fillInputs(number, text, password, date);
    await webInputsPage.clearInputs();
    await webInputsPage.checkInputFieldsAreClear();
})

test('inputs can be displayed', async ({webInputsPage}) => {

    await webInputsPage.goto();
    await webInputsPage.fillInputs(number, text, password, date);
    await webInputsPage.displayInputs();
    await webInputsPage.checkOutputFieldsAreDisplayed(number, text, password, date);
})

