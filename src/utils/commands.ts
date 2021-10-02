import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from "webdriverio";
import report from '@wdio/allure-reporter'

export const selectDropdown = async(elements:ChainablePromiseArray<ElementArray>, value:string)=> {
    for (let i = 0; i < (await elements).length; i++) {
        const elem = await  elements[i].getAttribute('value');
        if (elem === value) {
            await elements[i].click()
            report.addStep(`Selected dropdown value: ${value}`)
            break;
        }
    }
}

export const setText = async(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text:string)=> {
    await element.setValue(text)
    report.addStep(`Entered value: ${text}`)
}

export const selectVisibleText = async(elem:  ChainablePromiseElement<Promise<WebdriverIO.Element>>, text:string)=> {
    await elem.selectByVisibleText(text)
    report.addStep(`Selected by visible text: ${text}`)
}

export const click = async(elem: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await elem.click()
    report.addStep(`Clicked on element: ${await elem.selector}`)
}