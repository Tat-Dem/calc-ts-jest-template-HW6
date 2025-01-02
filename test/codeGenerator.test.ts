import {codeGeneratorEstonian, codeGeneratorLatvian, codeGeneratorLithuanian} from "../src/codeGenerator";

test("Estonian code starts with EST-",() =>{
const code: string = codeGeneratorEstonian();
expect (code.startsWith("EST-")).toBeTruthy();
})

test("Latvian code starts with LVA-",() =>{
    const code: string = codeGeneratorLatvian();
    expect (code.startsWith("LVA-")).toBeTruthy();
})

test("Lithuanian code starts with LTU-",() =>{
    const code: string = codeGeneratorLithuanian();
    expect (code.startsWith("LTU-")).toBeTruthy();
})

test("Code length is 8 characters",() =>{
    const EstonianCode: string = codeGeneratorEstonian();
    const LatvianCode: string = codeGeneratorLatvian();
    const LithuanianCode: string = codeGeneratorLithuanian();
    expect(EstonianCode.length).toBe(8);
    expect(LatvianCode.length).toBe(8);
    expect(LithuanianCode.length).toBe(8);
})

test("Code matches the expected format",() =>{
    const EstonianCode: string = codeGeneratorEstonian();
    const LatvianCode: string = codeGeneratorLatvian();
    const LithuanianCode: string = codeGeneratorLithuanian();
    expect(/EST-\d{4}/.test(EstonianCode)).toBe(true);
    expect(/LVA-\d{4}/.test(LatvianCode)).toBe(true);
    expect(/LTU-\d{4}/.test(LithuanianCode)).toBe(true);
    });

