import { addLog } from "src/utils/commands"

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path: string) {
        addLog(`Opening App: ${path}`)
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
