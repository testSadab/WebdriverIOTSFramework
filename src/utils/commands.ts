import { ChainablePromiseArray, ChainablePromiseElement, ElementArray } from "webdriverio";

export const selectDropdown = async(elements:ChainablePromiseArray<ElementArray>, value:string)=> {
    for (let i = 0; i < (await elements).length; i++) {
        const elem = await  elements[i].getAttribute('value');
        if (elem === value) {
            await elements[i].click()
            break;
        }
    }
}

export const setText = async(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text:string)=> {
    await element.setValue(text)
}

export const selectVisibleText = async(elem:  ChainablePromiseElement<Promise<WebdriverIO.Element>>, text:string)=> {
    await elem.selectByVisibleText(text)
}

export const click = async(elem: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await elem.click()
}