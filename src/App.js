import React from 'react';

import Test from "./Test"; //컴포넌트 Import (1)

//컴포넌트 Import (2)
function Test2(props){
  console.log(props);
  return (
  <h2>This is Food Component : {props.fav}</h2>
  )
}

function Food({favorites}) {
  console.log(favorites)
  return (
  <h3>I like {favorites}</h3>
  )
}

//react : Virtual DOM 을 위한 컴포넌트 생성
// react appication은 하나의 compnent만 rendering 할 수 있다! 
//  추가 component는 [App] component 밑으로 import 해주어야 한다! (App.js)
//    추가 component의 기본 틀은 App.js와 동일하게 작성하면 된다.
function App() {
  return (
    <div className="App">Hello
      <Test/>   
      <Test2 name="values" fav="potato" something={true} others={[1,2,3,"that",true]}/> 
      <Food favorites="potatoes"/>
      <Food favorites="rice"/>
      <Food favorites="coffee"/>


    </div>
  );
}

export default App;
