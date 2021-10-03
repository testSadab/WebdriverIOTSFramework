import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from "webdriverio";
import report from '@wdio/allure-reporter'


export const addLog = (log:string) => {
    report.addStep(`STEP: ${log}`)
    console.log(`STEP: ${log}`)
}

export const selectDropdown = async(elements:ChainablePromiseArray<ElementArray>, value:string)=> {
    for (let i = 0; i < (await elements).length; i++) {
        const elem = await  elements[i].getAttribute('value');
        if (elem === value) {
            await elements[i].click()
            addLog(`Selected dropdown value: ${value}`)
            break;
        }
    }
}

export const setText = async(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text:string)=> {
    await element.setValue(text)
    addLog(`Entered value: ${text}`)
}

export const selectVisibleText = async(elem:  ChainablePromiseElement<Promise<WebdriverIO.Element>>, text:string)=> {
    await elem.selectByVisibleText(text)
    addLog(`Selected by visible text: ${text}`)
}

export const click = async(elem: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await elem.click()
    addLog(`Clicked on element: ${await elem.selector}`)
}