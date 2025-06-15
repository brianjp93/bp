import React from 'react'
import {
    Container,
} from '@material-ui/core'

import Day1 from './day1'
import Day2 from './day2'
import Day3 from './day3'
import Day4 from './day4'
import Day6 from './day6'
import Day12 from './day12'
import Day18 from './day18'

const day_cards = [
    <Day1 />,
    <Day2 />,
    <Day3 />,
    <Day4 />,
    <Day6 />,
    <Day12 />,
    <Day18 />,
]

const quote_style = {
    padding: 20,
    color: '#484848',
    borderLeftColor: '#777676',
    borderLeftStyle: 'solid',
    borderRadius: 8,
    background: '#c5c5c570'
}

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
                            &gt;&gt; github repo
                    </a>
                    <br />
                    <a
                        rel="noopener noreferrer"
                        target='_blank'
                        href="https://adventofcode.com/2018">
                        &gt;&gt; Advent of Code 2018
                    </a>
                </div>
                <div style={{height: 30}}></div>
                <div>
                    I had a lot of fun solving the 2019 AOC problems, so now I'm doing
                    the 2018 set and I thought I'd write out my thought process as I did
                    them.
                </div>
                <div style={{height: 30}}></div>
                <div style={quote_style}>
                    I have only finished a few of these at this time.  We'll see if I end up
                    writing about all my solutions or not.
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
