import React from 'react'
import {
    Card,
} from '@material-ui/core'
import useStyles from '../../general/mystyle'
import Highlight from 'react-highlight.js'


const part1 = String.raw`
def next(self):
    newm = {}
    for coord, val in self.m.items():
        adj = self.adjacent(coord)
        newval = val
        if val == OPEN:
            if adj.count(TREE) >= 3:
                newval = TREE
        elif val == TREE:
            if adj.count(LUMBERYARD) >= 3:
                newval = LUMBERYARD
        elif val == LUMBERYARD:
            if adj.count(LUMBERYARD) >= 1 and adj.count(TREE) >= 1:
                newval = LUMBERYARD
            else:
                newval = OPEN
        newm[coord] = newval
    self.m = newm
`.trim()

const part2 = String.raw`
def find_repeat(self):
    history = {}
    history_list = []
    state = self.get_state()
    i = 0
    while state not in history:
        history[state] = i
        history_list.append(dict(self.m))
        i += 1
        self.next()
        state = self.get_state()
    return (history[state], i-history[state], history_list[history[state]: i])

def go(self, n):
    start, rlength, history = self.find_repeat()
    true_n = n - start
    history_index = true_n % rlength
    return history[history_index]
`.trim()

function Day18(props) {
    const classes = useStyles()
    return (
        <div>
            <Card
                id='day18'
                className={classes.card}
                style={{marginTop: 10}}>
                <h3>
                    Day 18{' '}
                    <a
                        style={{fontSize: 'small'}}
                        rel='noopener noreferrer'
                        target='_blank'
                        href="https://github.com/brianjp93/aoc2018/blob/master/day18/day18.py">code</a>
                </h3>
                <h2>Part 1</h2>

                <div>
                    Day 18 gives us a "Game of Life"-esque scenario where
                    each coordinate changes based on the adjacent 8 blocks.
                    Each block will be either a lumberyard, a tree, or empty.
                    To hold this data, I created a dictionary.  I could also
                    represent the map as a list of lists, but I like that I can
                    access a dictionary and return a default value if the key
                    doesn't exist, whereas with a list it's a bit more work.
                </div>

                <Highlight language='python'>
                    {part1}
                </Highlight>

                <div>
                    Part 1 basically asks us to find the state of the map
                    after 10 iterations, so we can just run our <code>next()</code>
                    {' '} method 10 times, and we will have our answer.
                </div>

                <div style={{height: 30}}></div>

                <hr />
                <h2>Part 2</h2>
                <div>
                    Part 2 asks us to find the state of the map after a billion
                    iterations.  Because running our <code>next()</code> method
                    is a fairly expensive operation, finding the billionth state
                    by brute force is basically impossible.  We have to find a more
                    clever way to reach this state.
                </div>
                <div>
                    My First assumption would be that this map eventually reaches
                    a repeating group of states.
                </div>
                <div>
                    At first our map evolves like this...
                </div>
                <div style={{textAlign: 'center'}}>
                    <img 
                        style={{maxWidth: 300}}
                        src="/static/aoc2018/day18/day18start.gif" 
                        alt="" />
                </div>
                <div style={{textAlign: 'center', marginTop:10, marginBottom:5}}>
                    But then fairly quickly reaches a repeating group of states.
                </div>
                <div style={{textAlign: 'center'}}>
                    <img 
                        style={{maxWidth: 300}}
                        src="/static/aoc2018/day18/day18end.gif" 
                        alt="" />
                </div>

                <div>
                    To find exactly when we reach a repeating state, and how long
                    the loop is, I wrote a function.  I convert each state to a
                    string so that I can store it as a dictionary key and then
                    check every iteration if the new state is already in the dictionary.
                    Because the map state is <b>completely deterministic</b> based on the
                    previous state, we know that if we ever reach a state that we've
                    already seen, it will repeat.
                </div>
                <Highlight language='python'>
                    {part2}
                </Highlight>
                <div>
                    Now that we have determined when the loop starts and how long the loop
                    is, we no longer have to calculate each proceeding state and can
                    retrieve the map state using the mod of the loop length.
                </div>
            </Card>
        </div>
    )
}


export default Day18

