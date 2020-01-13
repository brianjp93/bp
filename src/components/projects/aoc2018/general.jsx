import React from 'react'
import {
    Container,
} from '@material-ui/core'

import Day6 from './day6'

const day_cards = [
    <Day6 />,
]

function Aoc2018(props){
    return (
        <div>
            <Container maxWidth='md'>
                <h2 style={{marginBottom: -5}}>AOC 2018 Problems</h2>
                <div>
                    <a
                        rel="noopener noreferrer"
                        target='_blank'
                        href="https://github.com/brianjp93/aoc2018/">
                            >> github repo
                    </a>
                </div>
                <div style={{height: 30}}></div>
                <div>
                    I had a lot of fun solving the 2019 AOC problems, so now I'm doing
                    the 2018 set and I thought I'd write out my thought process as I did
                    them.
                </div>

                {day_cards.map((elt, key) => {
                    return (
                        <div key={key}>
                            {elt}
                        </div>
                    )
                })}

            </Container>
        </div>
    )
}

export default Aoc2018
