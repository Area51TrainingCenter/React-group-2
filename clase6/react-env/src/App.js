import React, { Component } from 'react'
import styles from './App.css'
import styled from 'styled-components'

export default class App extends Component {
  state = {
    message: 'Message'
  }

  handleToggleMessage = (message) => {
    this.setState({ message })
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Button>Regular</Button>
          <Button primary>Primary</Button>
          <h1>{this.state.message}</h1>
          <button 
            className={styles.buttonSuccess} 
            onClick={() => this.handleToggleMessage('Hello World!!! :D')}>Hello</button>
          <button 
            className={styles.buttonPrimary} 
            onClick={() => this.handleToggleMessage('Bye World!!! :(')}>Bye</button>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  text-align: center;
`

const Button = styled.button`
  background-color: #0984e3;
`