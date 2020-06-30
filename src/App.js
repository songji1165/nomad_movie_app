import React from "react";
import PropTypes from "prop-types";

// class Component 는 state(동적 data)를 사용할 수 있다.
// class Component는 상위 component의 속성을 상속받을 수 있다.
// React는 모든 class Component의 render method를 알아서 redering 함.
class App extends React.Component {
  //App component는 React component의 속성을 상속 받는다.

  //state는 Object이다.
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    // this.state.count = 1;
    /**
     * state는 직접적으로 수정하면 X,
     *  react는 render function을 refresh하지 않으므로 수동으로 때마다 refresh 해야 함
     *
     * setState사용으로 해당 기능을 대체할 수 있음
     **/
    this.setState({ count: this.state.count + 1 });  
  };

  minus = () => {
    console.log("minus");
    // setState 안에 state를 또 불러오는 것은 성능상 좋지 않다. 
    //this.setState({ count: this.state.count - 1 }); 
    this.setState(current => ({ count: current.count - 1 }));

    //setState : 해당 메소드 호출시, render method를 변경된 data로 refresh 함.
  };

  render() {
    return (
      <div>
        <h1>This is Class Component</h1>
        <h4>The number is : {this.state.count}</h4>
        <button onClick={this.add}>up</button>
        <button onClick={this.minus}>down</button>
      </div>
    );
    //vue 클릭이벤트와 동일하게 react도 클릭이벤트를 갖고 있음. onClick
  }
}

export default App;
