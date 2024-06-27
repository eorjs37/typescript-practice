import { StringValidator } from "./StringValidator";

export const numberRegexp = /^[0-9]+$/;

// 선언 export 하기
export class ZipCodeValidator implements StringValidator{
	isAcceptable(s: string): boolean {
		return s.length === 5 && numberRegexp.test(s);
	}

}

// class ZipCodeValidator implements StringValidator{
// 	isAcceptable(s: string): boolean {
// 		return s.length === 5 && numberRegexp.test(s);
// 	}

// }

// // Export 문 (Export statements)
// export { ZipCodeValidator};
// export { ZipCodeValidator as mainValidator };