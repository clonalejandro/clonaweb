import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MalexButton from 'malextrap-react/lib/Button'
import useExperiments from '../../hooks/useExperiments'
import usePagination from '../../hooks/usePagination'
import Logo from '../logoLab'
import Experiment from '../experiment'
import { setPage } from '../../redux/actions/'
import config from '../../config.json'
import './style.scss'

const PAGE_SIZE = 6

const ExperimentsContainer = styled.div`
    .experiments-title {
        margin-bottom: 5%;
    }

    .experiments-title > .exp-title,
    .experiments-title > .exp-subtitle {
        text-align: center;
    }

    .experiments-title > .exp-title {
        margin-bottom: 0;
    }

    .experiments-title > .exp-subtitle {
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 10px;
    }
`

const Experiments = ({ page, setPage }) => {
    const mappedExperiments = useExperiments(
        config.experiments,
        e => <Experiment key={e.name} {...e} />,
    )
    const paginatedExperiments = usePagination(mappedExperiments, PAGE_SIZE)

    return (
        <ExperimentsContainer className="container">
            <div className="experiments-title">
                <h3 className="exp-title">
                    <Logo width={32} height={32} /> Latest experiences
                </h3>
                <p className="exp-subtitle">Quality is more important than quantity. — S. Jobs</p>
            </div>
            <div className="columns">
                {
                    paginatedExperiments.filter((_, index) => index <= page)
                        .reduce((acc, val) => acc.concat(val), [])
                }
            </div>
            {mappedExperiments.length > PAGE_SIZE && paginatedExperiments[page + 1]?.length && (
                <div>
                    <MalexButton text="More 🧪" animated color="custom grape" onClick={() => setPage(page + 1)} />
                </div>
            )}
        </ExperimentsContainer>
    )
}

export default connect(
    ({ page }) => ({ page }),
    { setPage },
)(Experiments)
