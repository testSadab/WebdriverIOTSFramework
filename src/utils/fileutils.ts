import fs from 'fs'
import { addLog } from './commands';

export const parseJsonFile = (datapath:string)=> {
    let data = fs.readFileSync(datapath, "utf-8");
    return JSON.parse(data)
}

export const deleteDirectory = (path: string)=> {
    if(fs.existsSync(path)) {
        fs.rmdirSync(path, {recursive: true})
        addLog(`Directory Deleted: ${path}`)
    }
}
