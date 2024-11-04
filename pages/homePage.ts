import {test, expect, Page} from "@playwright/test";

export default class HomePage{
    page : Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async goto()
    {
        await this.page.goto('/')
    }

    // Locators
    homePageLogo = () => this.page.getByLabel('SUT');

    //navigation bar
    homePageNavDemosDropdown = () => this.page.getByRole('button', { name: 'Demos' });
    homePageNavDemosDropdownExamples = () => this.page.getByRole('link', { name: 'Examples' });
    homePageNavDemosDropdownAPIs = () => this.page.getByRole('link', { name: 'APIs' });
    homePageNavDemosDropdownAssertions = () => this.page.getByRole('link', { name: 'Assertions' });

    homePageNavDemosTools = () => this.page.getByRole('link', { name: 'Tools' });
    homePageNavDemosTips = () => this.page.getByRole('link', { name: 'Tips', exact: true });
    homePageNavDemosAbout = () => this.page.getByRole('link', { name: 'About' });
    homePageNavDemosContact = () => this.page.getByRole('link', { name: 'Contact', exact: true });

    //Pages
    homePageWebInputsPage = () => this.page.getByRole('link', { name: 'Web inputs' });
    homePageTestLoginPage = () => this.page.getByRole('link', { name: 'Test Login Page' });
    homePageNotificationMessagePage = () => this.page.getByRole('link', { name: 'Notification Message' });
    homePageDynamicTablePage = () => this.page.getByRole('link', { name: 'Dynamic Table' });


    public async navigateToWebInputsPage()
{
    await this.homePageWebInputsPage().click();
}

    public async navigateToTestLoginPage()
    {
        await this.homePageTestLoginPage().click();
    }

    public async navigateToNotificationMessagePage()
    {
        await this.homePageNotificationMessagePage().click();
    }

    public async navigateToDynamicTablePage()
    {
        await this.homePageDynamicTablePage().click();
    }





}