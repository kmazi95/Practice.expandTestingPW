import {test, expect, Page} from "@playwright/test";
import { text } from "stream/consumers";

export default class WebInputsPage{
    page : Page;

    

    constructor(page: Page) {
        this.page = page;
    }

    public async goto()
    {
        await this.page.goto("https://practice.expandtesting.com/inputs")
    }

    // Locators
    webInputsPageHeading = () => this.page.getByRole('heading', { name: 'Web inputs page for' });
    // - buttons
    webInputsDisplayInputs = () => this.page.getByRole('button', { name: 'Display Inputs' });
    webInputsClearInputs = () => this.page.getByRole('button', { name: 'Clear Inputs' });
    // - inputs fields
    webInputsInputFieldNumber = () => this.page.getByLabel('Input: Number');
    webInputsInputFieldText = () => this.page.getByLabel('Input: Text');
    webInputsInputFieldPassword = () => this.page.getByLabel('Input: Password');
    webInputsInputFieldDate = () => this.page.getByLabel('Input: Date');

    // outputs fields
    webInputsOutputFieldNumber = () => this.page.locator('#output-number');
    webInputsOutputFieldText = () => this.page.locator('#output-text');
    webInputsOutputFieldPassword = () => this.page.locator('#output-password');
    webInputsOutputFieldDate = () => this.page.locator('#output-date');

// actions


public async displayInputs()
{
    await this.webInputsDisplayInputs().click();
}

public async clearInputs()
{
    await this.webInputsClearInputs().click();
}

public async inputNumber(number: number)
{
    await this.webInputsInputFieldNumber().fill(number.toString());
}               

public async inputText(text: string)
{
    await this.webInputsInputFieldText().fill(text);
}           

public async inputPassword(password: string)
{
    await this.webInputsInputFieldPassword().fill(password);
}

public async inputDate(date: string)
{
    await this.webInputsInputFieldDate().fill(date);
}

// fill all inputs
public async fillInputs(number: number, text: string, password: string, date: string)
{
    await this.inputNumber(number);
    await this.inputText(text);
    await this.inputPassword(password);
    await this.inputDate(date);
}

// assertions
public async checkInputFieldsAreClear()
{
    await expect(this.webInputsInputFieldNumber()).toBeEmpty();
    await expect(this.webInputsInputFieldText()).toBeEmpty();
    await expect(this.webInputsInputFieldPassword()).toBeEmpty();
    await expect(this.webInputsInputFieldDate()).toBeEmpty();
}

public async checkOutputFieldsAreDisplayed(number: number, text: string, password: string, date: string)
{
    await expect(this.webInputsOutputFieldNumber()).toHaveText(number.toString());
    await expect(this.webInputsOutputFieldText()).toHaveText(text);
    await expect(this.webInputsOutputFieldPassword()).toHaveText(password);
    await expect(this.webInputsOutputFieldDate()).toHaveText(date);
    
}




}