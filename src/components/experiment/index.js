import React from 'react'
import styled from 'styled-components'

const Image = styled.a`
  background-image: url('${props => props.image}')
`
const ExpInfo = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor}
`
const Experiment = styled.div`
  text-align: center;
  font-size: .8em;
  margin-bottom: 2em;

  & .experiment-img {
    display: block;
    height: 150px;
    backface-visibility: hidden;
    border-radius: 4px 4px 0 0;
    background-size: cover;
    transition: opacity .2s
  }

  & .experiment-info {
    padding: 1em;
    border-radius: 0 0 4px 4px;
    z-index: 3
  }

  & .experiment-info a {
    display: block;
    font-weight: 700;
    color: inherit
  }

  & .experiment-info .experiment-date {
    opacity: .6
  }
`

export default props => (
  <Experiment className='col-md-6 col-lg-4'>
    <Image className='experiment-img' href={props.href} {...props} />
    <ExpInfo className='experiment-info' {...props}>
      <a className='no-decoration' href={props.href}>
        {props.name}
      </a>
      <time className='experiment-date' dateTime={props.date}>
        {props.date}
      </time>
    </ExpInfo>
  </Experiment>
)