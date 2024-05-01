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
  },
}
```

## 명령어 실행

```bash
npm run tsc ./src/greeter.ts
```

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