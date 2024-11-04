import {test as base} from "@playwright/test"
import HomePage from "../homePage"
import WebInputsPage from "../webInputsPage"
export const test = base.extend<{homePage: HomePage, webInputsPage: WebInputsPage}>

({
    //Define a fixture
    homePage: async({page}, use) => {
        await use(new HomePage(page))
    },
    webInputsPage: async({page}, use) => {
        await use(new WebInputsPage(page))
    }
})