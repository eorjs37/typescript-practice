export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}


// Re-Export
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from './ZipCodeValidator';