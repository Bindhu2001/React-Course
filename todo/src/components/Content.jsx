import { Component } from 'react';
import styled from 'styled-components';

// Correct syntax with backticks for styled-components
let Buttons = styled.button`
  background-color: blue;
  color: white;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 5px;
`
class Content extends Component {
  render() {
    return (
      <>
        <h2>Content</h2>
        <Buttons>Click Me</Buttons>
        <button>{this.props.content}</button>
      </>
    );
  }
}

export default Content;
