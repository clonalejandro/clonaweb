import React from 'react'
import styled from 'styled-components'
import useExperiments from '../../hooks/useExperiments'
import Logo from '../logo-lab'
import Experiment from '../experiment'

const Experiments = styled.div`
  .experiments-title > .exp-title,
  .experiments-title > .exp-subtitle {
    text-align: center
  }

  .experiments-title > .exp-title {
    margin-bottom: 0
  }

  .experiments-title > .exp-subtitle {
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 10px
  }
`

export default () => (
  <Experiments className='container'>
    <div className='experiments-title'>
      <h3 className='exp-title'>
        <Logo width={32} height={32} /> Last experiments
      </h3>
      <p className='exp-subtitle'>Quality is more important than quantity. — S. Jobs</p>
    </div>
    <div className='columns'>
      {
        useExperiments(e => 
          <Experiment 
            key={e.name}
            name={e.name}
            date={e.date}
            href={e.href}
            image={e.image}
            backgroundColor={e.backgroundColor}
            fontColor={e.fontColor} />
        )
      }
    </div>
  </Experiments>
)