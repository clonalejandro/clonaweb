import React from 'react'
import styled from 'styled-components'
import MalexLabel from 'malextrap-react/lib/Label'

const Div = styled.div`
    margin-bottom: 2%;
    font-size: 0.8em;

    & div.content {
        width: 80%;
        display: inline-block;
        padding: 0 0 0 0.5em;
        vertical-align: top;
        line-height: 1.14285714em;
        font-size: 1em;
    }

    & div.content .description {
        word-break: break-word;
    }

    &:not(:last-child) {
        padding-top: 0;
        padding-bottom: 0.85714286em;
        display: list-item;
        table-layout: fixed;
        list-style-type: none;
        list-style-position: outside;
        padding: 0.21428571em 0;
        line-height: 1.14285714em;
    }

    & .header {
        display: flex;
        margin: 0;
        font-weight: 700;
        color: #4183c4 !important;
        line-height: 1.14285714em;
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    }

    & .header .label {
        margin: auto 0 0 1%;
    }
`

const Post = props =>
    props && (
        <Div>
            <img alt="avatar" className="avatar" src="https://avatars3.githubusercontent.com/u/20615143?v=3&s=460" loading="lazy" />
            <div className="content">
                <a target="_blank" href={props.url} className="header no-decoration" rel="noopener noreferrer">
                    {props.name}
                    <br />
                    <MalexLabel color="pink" text="REPO" />
                </a>
                <div className={'description'}>{props.description}</div>
            </div>
        </Div>
    )

export default Post
