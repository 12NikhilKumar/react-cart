import React from 'react';
import {Route,Link,Switch} from 'react-router-dom'
import Blog from './components/Blog/Blog.jsx'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
	font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	
`