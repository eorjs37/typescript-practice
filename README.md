# typescript 세팅

```bash
git init
```

```bash
npm install typescript
```

## 명령어 등록

```json
{
  "scripts": {
    "tsc": "tsc"
  }
}
```

## 명령어 실행

```bash
npm run tsc ./src/greeter.ts
```

## typescript type

- Boolean
- Number
- String
- Object
- Array
- Tuple
- Enum
- any
- void
- null
- undefined
- never
## husky
```
git hooks을 쉡게 공유할 수 있게 도와주는 NodeJs 기반 모듈이며
git 이벤트 실행 전 자동적으로 기능을 제공해주는 도구이다.
```

```bash
npx husky-init -y && npm install
```

## pre-coomit
```
커밋을 하기전에 실행하는 단계이다
```


## Export
```
모듈을 외부로 내보내기 위해 사용한다
```

### StringValidator.ts
```typescript
// StringValidator : export
export interface StringValidator{
	isAcceptable(s:string):boolean;
}
```

### ZipCodeValidator.ts

```typescript
// StringValidator : export
import { StringValidator } from "./StringValidator";

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator{
	isAcceptable(s: string): boolean {
		return s.length === 5 && numberRegexp.test(s);
	}
}
```

```
아래와 같이 이름을 정하여 리턴할 수도 있다.
```

```typescript
class ZipCodeValidator implements StringValidator{
	isAcceptable(s: string): boolean {
		return s.length === 5 && numberRegexp.test(s);
	}

}

export { ZipCodeValidator};
export { ZipCodeValidator as mainValidator };
```