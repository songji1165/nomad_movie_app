# 2020 REACT Study (with NOMAD CODERS)

목차
[1. react 설치](#react-설치) <br/>
[2. react 기본구성](#react-기본구성) <br/>
[3. react component 만들기](#react-component-만들기)
[4. react Component Life Cycle](#react-Component-Life-Cycle)

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
>
> > 1.  `git init` : git 초기화
> > 2.  `git remote add origin 'repository URL'` : 원격 저장소 연결
> > 3.  `git add .` : 커밋할 파일 준비
> > 4.  `git commit -m "write commit message"` : 커밋 & 커밋메시지 작성
> > 5.  `git push origin master` : 원격저장소에 올리기

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

1. component : HTML을 반환하는 함수
2. react application 하나에 하나의 component만 rendering 가능하다
   - 부모 component에 자식 component 추가하는 방식으로 component 만들기
     - 추가 component는 모두 [App component] 안에 넣기

---

<u>Component 특징</u>

1. Function Component
2. Class Component
3. JSX
4. Component Props
5. State

#### `JSX`

1. ./src/App.js : Function Component 생성

```js
import React from "react";

function App() {
  return (
    <div className="App">Hello World</div>
    // rendering 될 코드는 JSX 방식으로 사용하기!!
    // JSX문법 안에서 javascript를 사용하고 싶을 경우 : { } 사용하기
  );
}

export default App;
```

`JSX : REACT에서만 사용하는 개념으로 javascript와 문법이 조금 다르다 (HTML + javascript)`

2. ./src/index.js : virtual DOM 위치 선언 (component)

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
// (X) App : 기본 js에서의 변수명 입력하듯이 하면 안됨
// (O) <App/> : [JSX] 방식 사용해야함 - JSX에서 태그는 꼭 닫아야 함 </>
```

#### `Component Props`

1.  component간의 data 공유가 가능하다!

    ```js
    function Hello(props) {
      return <div>This is {props.name}</div>;
    }

    function App() {
      return <Hello name="react" />;
    }
    ```

2.  component는 유일해야 한다. 중복 X - component 재활용시에 자주하는 실수 : key 속성을 통해 고유의 component 값을 생성해준다. - key props는 하위 coponent로 값 전달 X

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

    > component props의 유효성 체크 : **prop-types**
    >
    > > 1. `$ npm i prop-types`
    > > 2. App.js에 `import PropType from "prop-types";` 추가
    > >
    > > ```js
    > > component.propTypes = {
    > >   name: PropTypes.string.isRequired
    > > };
    > > ```
    > >
    > > `다양한 prop 유효성 검사기를 제공한다!` >> [ prop types 참고 ](https://www.npmjs.com/package/prop-types)

#### `State (동적인 data)`

- Class Component에서 State를 사용할 수 있다.
- State는 Object이다.
- SetState : state 변경시 사용하는 method
  - STATE를 직접 변경하여도, Class Component의 **render method**는 refresh되지 않음
    => **setState Method를 통해 render Method를 refresh 함!** (변경된 state data를 재 redering하는 것)
  - setState를 통해 State를 값을 추가할 수 있다 !

1. ./src/App.js : Class Component 생성

```js
//App Class는 react Class Component로부터 properties를 상속받음
class App extends React.Component {
  state = {
    count: 0
  };

  handliClick = () => {
    //state data 변경은 setState 사용 !!
    this.setState(current => ({ count: current.count + 1 }));
  };

  //class component의 render method를 virtual DOM rendering
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>click me</button>
      </div>
      //vue 클릭이벤트와 동일하게 react도 클릭이벤트를 갖고 있음. onClick
    );
  }
}
```

---

## react Component Life Cycle
: react component가 생성 ~ 삭제까지 이루어지는 순서
![react-life_cycle](https://miro.medium.com/max/1400/1*hSO--5BPT1K_YK6VqRy4vg.png)
#### 1. **자바스크립트 내 `constructor` 단계**
  - 생성자 메소드로서 component가 처음 만들어 질 때 실행.
  - 최초 component가 mount되기 전 실행.
  - 일반적인 실행 이벤트 : 
    1. this.state 로 state 값을 선언/초기화
    2. 각종 Event 처리 Binding
  ```js
  class Login extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        isLogin = true,
        userInfo = null
      };
      this.handleBtnClick = this.handleBtnClick.bind(this);
    }
  } 
  ```
    >> **constructor 주의사항**
    >> 1. constructor를 사용시, `super(props)`를 반드시 호출하여 this.props 를 정의해 주어야 한다. 버그가 발생할 수 있다.
    >> 2. constructor 내부에서 `setState` 등의 업데이트를 사용하면 안 된다. Mount되기전 state업데이는 바람직하지 않다.

#### 2. **`Mount` 단계**
  - component가 DOM에 Mount될 때, 실행.
  1. `render`
    - class Component에 반드시 필요한 메소드
    - Component 결과물을 Return하는 메소드
      - JSX 를 반환해야 함
    ```js
    class Login extends Component {
      render(){
        return <div>Component Rendering</div>
      }
      //return된 Element들이 가상 DOM에 mount되고 실제 DOM에 업데이트 됨
    }
    ```
    >> **render 주의사항**
    >> 1. render 단계 또한 `setState` 사용하면 안된다. render단계에서 setState가 되면 업데이트가 무한대로 이루어진다.
    <br/>
  2. `componentDidMount`
    - component가 DOM에 mount 되자마자 직후에 실행
    - 일반적인 실행 이벤트 : 
      1. data fetch (`api 통신`, `setState` .. )
        >> DOM에 mount가 되어 준비가 된 상태에서 data를 넣어야하기 때문에, compenetDidMount단계에서 data binding작업을 한다.
      2. DOM 초기화 작업
    ```js
      class Home extends React.Component {
        state = {
          isLoading : true
        }

        componentDidMount () {
           this.setState({ isLoading : false});
        }

        render(){
          return <div>
          {this.state.isLoading ? "loading..." : "welcome"}
          </div>
        }
      }
    ```

#### 3. **`Updating` 단계**
  - component가 update 될때 (setState)
  1. `render`
    - render메소드 재실행 됨
  2. `componentDidUpdate`
    - componentDidMount처럼 업데이트가된 직후에 실행!

4. **`UnMount` 단계**
  - DOM에서 component가 제거될 떄
  1. `componentWillUnMount`
    - 구성 요소를 해제하거나 파기 한 후에 실행 됨
    - 일반적인 이벤트 : 
      1. 일반적으로 네트워크 요청, 이벤트 리스너, 더 이상 필요하지 않은 요소와 같은 남은 항목을 제거하는데 사용

---
>> React 생명주기 Mount -> Update -> UnMount
---