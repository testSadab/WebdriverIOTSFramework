import { addLog, click } from "src/utils/commands"

class WaitEx {

    get startBtn() { return $('#start button') }
    get loadingIco() { return $('#loading') }
    get msg() { return $('#finish h4') }

    async clickOnStartButton() {
        await click(this.startBtn);
    }

    async waitForLoadingIcon() {
        await this.loadingIco.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Failed while waiting for loading icon' })
        addLog(`waiting for Loading icon to appear`)
    }

    async waitForLoadingIconToDisappear() {
        await this.loadingIco.waitForDisplayed({ reverse: true, timeout: 10000 })
        addLog(`waiting for Loading icon to disappear`)
    }

    async waitForMessage() {
        await this.msg.waitForDisplayed({ timeout: 10000 })
        addLog(`waiting for element ${await this.msg.selector}`)
    }

}
export default new WaitEx()