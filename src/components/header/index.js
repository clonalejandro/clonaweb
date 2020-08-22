import styled from 'styled-components'

export default styled.header`
  overflow: hidden;

  & .background {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
    position: fixed;
    z-index: -1;
    width: 100%
  }

  & .bgfilter {
    position: fixed;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .4)
  }

  .title .headline {
    color: #2188ff;
    font-weight: 600
  }

  & div.title h2.subtitle {
    color: white;
    font-weight: 300;
    font-size: 1.3em
  }


  & div.title img {
    border-radius: 10%;
    width: 15%;
    height: 15%
  }
`