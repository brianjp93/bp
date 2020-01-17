import React from 'react'
import {
    Card,
} from '@material-ui/core'
import useStyles from '../../general/mystyle'
import Highlight from 'react-highlight.js'


const part1_process = String.raw`
def process(self, fname):
    pmap = {}
    with open(fname, 'r') as f:
        for line in f:
            if 'initial' in line:
                init_state = line.split(':')[-1].strip()
                self.state = {i: x for i, x in enumerate(init_state)}
            elif '=>' in line:
                parts = line.split('=>')
                pmap[parts[0].strip()] = parts[1].strip()
    self.pmap = pmap
    self.maxpot = len(self.state) - 1
`.trim()

const part1_next = String.raw`
def next(self):
    new_state = {}
    pad = 5
    minpot = float('inf')
    maxpot = -float('inf')
    for i in range(self.minpot - pad, self.maxpot + 1 + pad):
        piece = [self.state.get(x, '.') for x in range(i-2, i+3)]
        piece = ''.join(piece)
        new_state[i] = self.pmap.get(piece, '.')
        if new_state[i] == '#' and i < minpot:
            minpot = i
        if new_state[i] == '#' and i > maxpot:
            maxpot = i
    self.state = new_state
    self.minpot = minpot
    self.maxpot = maxpot
    self.gen += 1
`.trim()

const part2 = String.raw`
def find_repeat(self):
    sum_new = self.get_sum()
    new_state = self.get_state()
    while True:
        sum_old = sum_new
        old_state = new_state
        self.next()
        sum_new = self.get_sum()
        new_state = self.get_state()
        if old_state == new_state:
            break
    sum_dif = sum_new - sum_old
    return self.gen, sum_dif, sum_new
`.trim()

const part2_end = String.raw`
DO_GEN = 50000000000
pg = PlantGen(data)
gen, sum_dif, cur_sum = pg.find_repeat()
print(f'State repeats at generation {gen} with a sum change of {sum_dif}.')
end_sum = (DO_GEN - gen) * sum_dif + cur_sum
print(f'part 2: {end_sum}')
`.trim()

function Day12(props) {
    const classes = useStyles()
    return (
        <div>
            <Card
                id='day12'
                className={classes.card}
                style={{marginTop: 10}}>
                <h3>
                    Day 12{' '}
                    <a
                        style={{fontSize: 'small'}}
                        rel='noopener noreferrer'
                        target='_blank'
                        href="https://github.com/brianjp93/aoc2018/blob/master/day12/day12.py">code</a>
                </h3>
                <h2>Part 1</h2>

                <div>
                    Part 1 is easy enough.  We just need to create a map of how the plant list changes every generation.
                    This is how I parsed that bit.
                </div>

                <Highlight language='python'>{part1_process}</Highlight>

                <div style={{height: 30}}></div>

                <div>
                    You may notice that I don't actually keep a list
                    for the plant states.  Because the plants can move
                    backwards into negative indeces, I felt it was easier
                    just to keep this data in a dictionary with the index as
                    the key.  To keep track of the range of values, I've created{' '}
                    <i>minpot</i> and <i>maxpot</i> attributes.
                </div>
                <div style={{height: 30}}></div>

                <div>
                    To iterate through generations, I created a <i>next</i> method,
                    which iterates through each plant to see how it will evolve in
                    the next generation.
                </div>
                <Highlight language='python'>{part1_next}</Highlight>

                <hr />
                <h2>Part 2</h2>
                <div>
                    Part 2 asks you to determing the sum of the indeces of pots
                    which contain plants in them after 50000000000 generations.
                    Because this number is so large, it is impossible to do naively,
                    like we did in part 1. 
                </div>
                <div>
                    The trick is to notice that after some time, the state will repeat.
                    I noticed this by just running through generations.
                </div>
                <img
                    style={{maxWidth:'100%', marginTop: 10}}
                    src="/static/aoc2018/day12/generations.png"
                    alt="" />

                <div style={{height:30}}></div>
                <div>
                    Once we know this, we can just write some code to find the
                    first repeated state and then calculate the end sum from there.
                </div>
                <Highlight language='python'>
                    {part2}
                </Highlight>
                <Highlight language='python'>{part2_end}</Highlight>
                <div>
                    This gives us our answer of <b>5100000001377</b>.
                </div>
                <div style={{height:30}}></div>
            </Card>
        </div>
    )
}


export default Day12

