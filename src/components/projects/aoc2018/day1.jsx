import React from 'react'
import {
    Card,
} from '@material-ui/core'
import useStyles from '../../general/mystyle'
import Highlight from 'react-highlight.js'


const day1_sum = String.raw`
n = sum(int(n.strip()) for n in data.split('\n') if n.strip())
`.trim()

const day1_part2 = String.raw`
total = 0
nset = set([0])
while True:
    for n in data.split('\n'):
        if n:
            n = int(n)
            total += n
            if total in nset:
                print(f'{total} already in set!')
                exit()
            nset.add(total)
`.trim()

function Day1(props) {
    const classes = useStyles()
    return (
        <div>
            <Card
                id='day7'
                className={classes.card}
                style={{marginTop: 10}}>
                <h3>
                    Day 1{' '}
                    <a
                        style={{fontSize: 'small'}}
                        rel='noopener noreferrer'
                        target='_blank'
                        href="https://github.com/brianjp93/aoc2018/blob/master/day01/day1.py">code</a>
                </h3>
                <h2>Part 1</h2>

                <div>
                    Day 1 was simple enough.  The first part just asked us to sum up all
                    of the numbers.
                </div>

                <Highlight language='python'>
                    {day1_sum}
                </Highlight>

                <div style={{height: 30}}></div>

                <hr />
                <h2>Part 2</h2>
                <div>
                    Then, for part 2 we are supposed to find the first number
                    which is repeated in our sum.  So, we can just keep adding to
                    a set until we get a number which is already in our set.
                </div>
                <Highlight language='python'>
                    {day1_part2}
                </Highlight>
            </Card>
        </div>
    )
}


export default Day1

