import React from 'react'
import styled from 'styled-components'
import MalexButton from 'malextrap-react/lib/Button'
import Header from '../../components/header'
import NewsLetter from '../../components/newsletter'
import Experiments from '../../components/experiments'
import 'malextrap-react/src/framework.css'
import './style.css'

const Main = styled.div`
  &, &:before {
    padding: 1.5em 0 1em;
    background: linear-gradient(to bottom,#f4f4f4,#fff)
  }
`
const Hr = styled.hr`
  border: 0;
  height: 1px;
  width: 25%;
  margin: 2.5rem auto;
  background-color: #ddd
`

export default () => {
  return ([
    <Header key='home-header'>
      <div className='background'></div>
      <div className='bgfilter' id='particles'></div>
        <div className='title'>
          <img alt='logo' src='https://avatars3.githubusercontent.com/u/20615143?v=3&s=460' />
          <h1 className='headline'>clonalejandro</h1>
          <h2 className='subtitle'>FullStack Developer</h2>
          <MalexButton 
            animated 
            color='first-gradient' 
            text='Laboratory' />
        </div>
    </Header>,
    <Main key='home-main'>
      <NewsLetter />
      <Hr />
      <Experiments />
    </Main>
  ])
}
