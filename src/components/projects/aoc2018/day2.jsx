import React from 'react'
import {
    Card,
} from '@material-ui/core'
import useStyles from '../../general/mystyle'
import Highlight from 'react-highlight.js'

const part1 = String.raw`
twos = 0
threes = 0
for line in dat:
    lets = set(l for l in line)
    count_twos = count_threes = False
    for l in lets:
        count = line.count(l)
        if count == 2:
            count_twos = True
        elif count == 3:
            count_threes = True
    twos += count_twos
    threes += count_threes

print(twos * threes)
`.trim()

const part2 = String.raw`
for i, word1 in enumerate(dat[:-1]):
    for word2 in dat[i:]:
        count = 0
        for j, (a,b) in enumerate(zip(word1, word2)):
            if a != b:
                count += 1
                ldif = j
        if count == 1:
            print(word1[:j-1] + word1[j:])
`.trim()

function Day2(props) {
    const classes = useStyles()
    return (
        <div>
            <Card
                id='day2'
                className={classes.card}
                style={{marginTop: 10}}>
                <h3>
                    Day 2{' '}
                    <a
                        style={{fontSize: 'small'}}
                        rel='noopener noreferrer'
                        target='_blank'
                        href="https://github.com/brianjp93/aoc2018/blob/master/day02/day2.py">code</a>
                </h3>
                <h2>Part 1</h2>

                <div>
                    For day 2, we are looking through a large list of strings and
                    we need to check each one to see if it has a letter that appears
                    exactly <b>twice</b> or <b>thrice</b>.
                </div>

                <Highlight language='python'>
                    {part1}
                </Highlight>

                <div style={{height: 30}}></div>

                <hr />
                <h2>Part 2</h2>
                <div>
                    For part 2 we need to find the two strings which differ by only
                    one character.  I just did a double forloop through the list
                    and zipped the words together to check that each letter was equal.
                </div>
                <Highlight language='python'>
                    {part2}
                </Highlight>
            </Card>
        </div>
    )
}


export default Day2

