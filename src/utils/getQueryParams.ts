const stringReg = /"(?:[^\\"]|\\(?:[bfnrtv"\\/]|u[0-9a-fA-F]{4}))*"/
const numberReg = /-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/
const trueReg = /true/
const falseReg = /false/

const parse = (str: string) => {
    if (str.match(numberReg)?.[0] === str) {
        return Number(str)
    }
    if (trueReg.test(str)) {
        return true
    }
    if (falseReg.test(str)) {
        return false
    }
    if (stringReg.test(str)) {
        return str
    }
    return str
}

export default function getQueryParams(search: string): { [key: string]: any } {
    const searchParams = new URLSearchParams(search) as Object as string[]
    const temp: { [key: string]: any } = {}
    searchParams.forEach((value: string, key: number) => {
        const pV = parse(value)
        if (temp[key]) {
            if (temp[key] instanceof Array) {
                temp[key].push(pV)
            } else {
                temp[key] = [temp[key], pV]
            }
        } else {
            temp[key] = pV
        }
    })
    return temp
}
