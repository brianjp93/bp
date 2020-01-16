import React from 'react'
import {
    Card,
} from '@material-ui/core'
import useStyles from '../../general/mystyle'
import Highlight from 'react-highlight.js'


const part1 = String.raw`
d = f.read().splitlines()
d.sort(key=lambda x: x.split(']')[0])
pattern = re.compile('([0-9]+)-([0-9]+)-([0-9]+) ([0-9]+):([0-9]+)')
sleeptime = {}
for event in d:
    s = pattern.search(event)
    year, month, day, hour, minute = s.groups()
    dt = datetime(year=int(year), month=int(month), day=int(day), hour=int(hour), minute=int(minute))
    if 'Guard' in event:
        guard_id = re.search('#([0-9]+)', event).groups()[0]
        if guard_id not in sleeptime:
            sleeptime[guard_id] = set()
    elif 'falls' in event:
        prev_time = dt
    elif 'wakes' in event:
        cur = prev_time
        while cur < dt:
            sleeptime[guard_id].add(cur)
            cur = cur + timedelta(minutes=1)
guard_id = max(sleeptime, key=lambda x: len(sleeptime[x]))
most_slept_time = defaultdict(int)
for val in sleeptime[guard_id]:
    most_slept_time[val.minute] += 1
minute = max(most_slept_time, key=lambda x: most_slept_time[x])
part1 = int(guard_id) * int(minute)
print(f'Part 1: {part1}')
`.trim()

const part2 = String.raw`
guardsleep = {}
for g, val in sleeptime.items():
    most_slept_time = defaultdict(int)
    for val in sleeptime[g]:
        most_slept_time[val.minute] += 1
    if most_slept_time:
        minute = max(most_slept_time, key=lambda x: most_slept_time[x])
        times_slept = most_slept_time[minute]
        guardsleep[g] = (minute, times_slept)
guard_most_sleep = max(guardsleep, key=lambda x: guardsleep[x][1])
part2 = int(guard_most_sleep) * guardsleep[guard_most_sleep][0]
print(f'Part 2: {part2}')
`.trim()

function Day4(props) {
    const classes = useStyles()
    return (
        <div>
            <Card
                id='day7'
                className={classes.card}
                style={{marginTop: 10}}>
                <h3>
                    Day 4{' '}
                    <a
                        style={{fontSize: 'small'}}
                        rel='noopener noreferrer'
                        target='_blank'
                        href="https://github.com/brianjp93/aoc2018/blob/master/day04/day4.py">code</a>
                </h3>
                <h2>Part 1</h2>

                <div>
                    For part 1 we need to find the guard that slept the most minutes
                    overall.  I created a <code>set</code> for each guard and add every
                    minute that they are asleep.
                </div>

                <Highlight language='python'>{part1}</Highlight>

                <div style={{height: 30}}></div>

                <hr />
                <h2>Part 2</h2>
                <div>
                    For part 2 we need to find the most slept minute.  I'll just
                    create a dict with counts for each minute.
                </div>
                <Highlight language='python'>
                    {part2}
                </Highlight>
            </Card>
        </div>
    )
}


export default Day4
