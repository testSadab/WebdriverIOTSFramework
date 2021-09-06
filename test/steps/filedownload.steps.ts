import { When, Then } from "@cucumber/cucumber";
import fs from 'fs'
import path from 'path'
import { DOWNLOAD_FOLDER_PATH } from "src/constants/pathconst";
import { deleteDirectory } from "src/utils/fileutils";

When(/^I click on first file$/, async ()=> {
    const fileElement = $("//a[contains(@href, 'download')]");
    await fileElement.click();
    await browser.pause(6000)
})

Then(/^I validate downloaded file extension$/, async ()=> {
    const extensions = ['.jpg', '.txt', '.pdf', '.png', '.json', '.jpeg']
    const files = fs.readdirSync(DOWNLOAD_FOLDER_PATH)
    files.forEach(file => {
        expect(extensions).toContain(path.extname(file))
    })
    deleteDirectory(DOWNLOAD_FOLDER_PATH)
})