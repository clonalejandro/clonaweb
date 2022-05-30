import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MalexButton from 'malextrap-react/lib/Button'
import useExperiments from '../../hooks/useExperiments'
import usePagination from '../../hooks/usePagination'
import Logo from '../logoLab'
import Experiment from '../experiment'
import { setPage } from '../../redux/actions/'
import { experiments } from '../../config.json'

const experimentsPerPage = 6
const paginatedExperiments = usePagination(experiments, experimentsPerPage)

const ExperimentsContainer = styled.div`
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

const Experiments = ({ page, setPage }) => (
    <ExperimentsContainer className="container">
        <div className="experiments-title">
            <h3 className="exp-title">
                <Logo width={32} height={32} /> Last experiments
            </h3>
            <p className="exp-subtitle">Quality is more important than quantity. — S. Jobs</p>
        </div>
        <div className="columns">
            {useExperiments(
                paginatedExperiments.filter((_, index) => index <= page).reduce((acc, val) => acc.concat(val), []),
                e => (
                    <Experiment
                        key={e.name}
                        name={e.name}
                        date={e.date}
                        href={e.href}
                        image={e.image}
                        backgroundColor={e.backgroundColor}
                        fontColor={e.fontColor}
                    />
                ),
            )}
        </div>
        {experiments.length > experimentsPerPage && paginatedExperiments[page + 1]?.length && (
            <div>
                <MalexButton text="More 🧪" animated color="grape" onClick={() => setPage(page + 1)} />
            </div>
        )}
    </ExperimentsContainer>
)

export default connect(
    store => ({
        page: store.page,
    }),
    {
        setPage: setPage,
    },
)(Experiments)
