# 2020 REACT Study (with NOMAD CODERS)

목차
[1. react 설치](#1.-react-설치)
[2. react 기본구성](#2.-react-기본구성)

## 1. react 설치

- 웹 브라우저는 react 자체를 이해하지 못함 => webpack, babel, react compile 작업 필요
- 위의 작업을 `create-react-app`이 자동으로 설정해줌

1.

```bash
$ npx create-react-app FOLDER_NAME
```

`package.json 참고해보기`

2.

```bash
$ npm run
```

`react application 실행 : 서버 자동 설정해줌!`

> - git 올리기
>   > 1.  `git init` : git 초기화
>   > 2.  `git remote add origin 'repository URL'` : 원격 저장소 연결
>   > 3.  `git add .` : 커밋할 파일 준비
>   > 4.  `git commit -m "write commit message"` : 커밋 & 커밋메시지 작성
>   > 5.  `git push origin master` : 원격저장소에 올리기

---

## 2. react 기본구성

1. public
   - index.html : 기본 소스코드
2. **src** : 주요 디렉터리
   - App.js : 컴포넌트의 시작 파일
   - index.js : 컴포넌트가 삽입될 위치 선언 파일

> REACT 특징
>
> > - [virtual DOM] 방식
> >   1. 실제 소스코드(index.html)에는 컴포넌트 정보가 들어가지 않음 => html 로드 시 빈 index.html만 그리기 때문에 **굉장히 빠름!**
> >   2. 가상의 DOM을 그려냄으로써 사용자에게 정보를 제공함 => react가 component를 html에 삽입함.
> > - application 서버가 실행 중에는 변경사항이 바로 적용됨.
