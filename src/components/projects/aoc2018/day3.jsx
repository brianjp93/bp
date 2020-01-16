import React from 'react'
import {
    Card,
} from '@material-ui/core'
import useStyles from '../../general/mystyle'
import Highlight from 'react-highlight.js'


const part1 = String.raw`
claims = {}
for line in dat:
    claimset = set()
    n, rest = line.split('@')
    coords, dims = rest.split(':')
    x, y = tuple(map(int, coords.split(',')))
    xlen, ylen = tuple(map(int, dims.split('x')))

    for nx in range(x, x+xlen):
        for ny in range(y, y+ylen):
            claims[(nx, ny)] = claims.get((nx, ny), 0) + 1

n = len([x for x in claims.values() if x >= 2])
print(n)
`.trim()

const part2 = String.raw`
for line in dat:
    claimset = set()
    n, rest = line.split('@')
    coords, dims = rest.split(':')
    x, y = tuple(map(int, coords.split(',')))
    xlen, ylen = tuple(map(int, dims.split('x')))

    is_valid = True
    for nx in range(x, x+xlen):
        for ny in range(y, y+ylen):
            if claims[(nx, ny)] > 1:
                is_valid = False
        if not is_valid:
            break

    if is_valid:
        print(f'{n} is valid.')
`.trim()

function Day3(props) {
    const classes = useStyles()
    return (
        <div>
            <Card
                id='day2'
                className={classes.card}
                style={{marginTop: 10}}>
                <h3>
                    Day 3{' '}
                    <a
                        style={{fontSize: 'small'}}
                        rel='noopener noreferrer'
                        target='_blank'
                        href="https://github.com/brianjp93/aoc2018/blob/master/day03/day3.py">code</a>
                </h3>
                <h2>Part 1</h2>

                <div>
                    For part 1 we need to count how many points are within 2 or
                    more claims.  To do this I just keep a <code>claims</code> dict
                    with the number of claims as the values.
                </div>

                <Highlight language='python'>
                    {part1}
                </Highlight>

                <div style={{height: 30}}></div>

                <hr />
                <h2>Part 2</h2>
                <div>
                    For part 2, we need to find the single claim which does not
                    overlap other. Again I create my <code>claims</code> dict
                    and then re-loop over the claim areas to check if the entire
                    claim has a value of 1.
                </div>
                <Highlight language='python'>
                    {part2}
                </Highlight>
            </Card>
        </div>
    )
}


export default Day3
