# 2020 REACT Study (with NOMAD CODERS)

목차
[1. react 설치](#react-설치)
[2. react 기본구성](#react-기본구성)
[3. react component 만들기](#react-component-만들기)

## react 설치

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

> git 올리기
>   > 1.  `git init` : git 초기화
>   > 2.  `git remote add origin 'repository URL'` : 원격 저장소 연결
>   > 3.  `git add .` : 커밋할 파일 준비
>   > 4.  `git commit -m "write commit message"` : 커밋 & 커밋메시지 작성
>   > 5.  `git push origin master` : 원격저장소에 올리기

---

## react 기본구성

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

---

## react component 만들기
- component : HTML을 반환하는 함수
    1. ./src/App.js : component 생성
        ```js
            import React from 'react';

            function App(){
                return(
                    <div className="App">Hello World</div>
                        // rendering 될 코드는 JSX 방식으로 사용하기!!
                        // JSX문법 안에서 javascript를 사용하고 싶을 경우 : { } 사용하기
                )
            }

            export default App;
        ```
        ``JSX : REACT에서만 사용하는 개념으로 javascript와 문법이 조금 다르다 (HTML + javascript)``
    
    2. ./src/index.js : virtual DOM 위치 선언 (component)
        ```js
            import React from "react";
            import ReactDOM from "react-dom";
            import App from "./App";

            ReactDOM.render(<App/>,document.getElementById("root"));
                            // (X) App : 기본 js에서의 변수명 입력하듯이 하면 안됨
                            // (O) <App/> : [JSX] 방식 사용해야함 - JSX에서 태그는 꼭 닫아야 함 </>
        ```

1. react application 하나에 하나의 component만 rendering 가능하다
    - 부모 component에 자식 component 추가하는 방식으로 component 만들기
        - 추가 component는 모두 [App component] 안에 넣기

2. ``Component Props`` : component간의 data 공유가 가능하다! 
    ```js
        function Hello(props){
            return (
                <div>This is {props.name}</div>
            )
        }

        function App(){
                return(
                   <Hello name="react"/>
                )
            }
    ```
    > component props의 유효성 체크 : **prop-types**
    >> 1. ``$ npm i prop-types`` 
    >> 2. App.js에 ``import PropType from "prop-types;" 추가

3. component는 유일해야 한다. 중복 X
    - component 재활용시에 자주하는 실수 : key 속성을 통해 고유의 component 값을 생성해준다.
        - key props는 하위 coponent로 값 전달 X

    ```js
        const arr = ["react", "vue"];

        function Hello(props){
            return (
                <div>This is {props.name}</div>
            )
        }

        function App(){
                return(
                    <div>
                        {arr.map((data,index) => 
                            <Hello name={data} key={index}/>
                        )}
                    </div>
                )
            }
    ```

