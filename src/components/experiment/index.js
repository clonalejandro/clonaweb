import React from 'react'
import styled from 'styled-components'

const Image = styled.a`
  background-image: url('${props => props.image}');
`

const ExpInfo = styled.div`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.fontColor};
`

const Div = styled.div`
    text-align: center;
    font-size: 0.8em;
    margin-bottom: 2em;

    & .experiment-img {
        display: block;
        height: 150px;
        backface-visibility: hidden;
        border-radius: 4px 4px 0 0;
        background-size: cover;
        transition: opacity 0.2s;
    }

    & .experiment-info {
        padding: 1em;
        border-radius: 0 0 4px 4px;
        z-index: 3;
    }

    & .experiment-info a {
        display: block;
        font-weight: 700;
        color: inherit;
    }

    & .experiment-info .experiment-date {
        opacity: 0.6;
    }
`

const Experiment = ({ name, href, date, image, backgroundColor, fontColor }) => (
    <Div className="col-md-6 col-lg-4 animated pulse">
        <Image className="experiment-img" href={href} image={image} />
        <ExpInfo className="experiment-info" fontColor={fontColor} backgroundColor={backgroundColor}>
            <a className="no-decoration" href={href}>
                {name}
            </a>
            <time className="experiment-date" dateTime={date}>
                {date}
            </time>
        </ExpInfo>
    </Div>
)

export default Experiment
