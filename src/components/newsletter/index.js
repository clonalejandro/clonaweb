import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import MalexCard from 'malextrap-react/lib/Card'
import * as actions from '../../redux/actions'
import usePosts from '../../hooks/usePosts'
import Post from '../post'

const Posts = styled.div`
  margin: 40px 0 40px 5%;
  & img.avatar {
    display: inline-block;
    margin: 0;
    width: 2em;
    height: 2em;
    border-radius: 500rem
  }
`

const NewsLetter = ({ repos, setRepos }) => {
  useEffect(() => {
    fetch('https://api.github.com/users/clonalejandro/repos?sort="created"', {
      mode: 'cors',
      headers: {
        Authorization: process.env.GITHUB_TOKEN
      }
    })
      .then(res => res.json())
      .then(setRepos)
  })

  return (
    <div className='container'>
      <div className='columns'>
        <MalexCard
          color='col-md-4 desc-card animated bounceIn delay-2s'
          text={[
            <span className='icons-user'> About me</span>,
            [
              'Hi my name is Alex or Alejandro. Also known as clonalejandro.',
              <br key='first-separator-aboutme' />,
              'I\'m a FullStack Developer and Hacking Lover.',
              <br key='second-separator-aboutme' />,
              'Expert in programming languages and frameworks likes React, Node, Kotlin, JavaScript, PHP and Java.', 
              <br key='third-separator-aboutme' />,
              'Although I\'m Spanish, this is an explanation about my low level in English.',
            ]
          ]}
          image='url(https://i.imgur.com/yortBfc.jpg)'
          href='https://github.com/clonalejandro'
        />
        <Posts className='col-md-4'>
          <h3 className='titler'><i className='icons-pencil'/> Latest Posts:</h3>
          <div className='posts-container'>
            {
              usePosts(repos, e => <Post 
                key={e.id}
                url={e.html_url}
                name={e.name.length > 16 ? e.name.substr(0, 16) + '..' : e.name}
                description={e.description} />, 4)
            }
          </div>
        </Posts>
      </div>
    </div>
  )
}

export default connect(
  store => ({
    repos: store.repos
  }),
  {
    setRepos: actions.setRepos
  }
)(NewsLetter)