import React from 'react'
import {
    Card,
} from '@material-ui/core'
import useStyles from '../../general/mystyle'
import Highlight from 'react-highlight.js'

const day6_create_map = String.raw`
def create_map(self, xdomain, ydomain):
    out = []
    self.m = {}
    for y in range(ydomain[0], ydomain[1]):
        line = []
        for x in range(xdomain[0], xdomain[1]):
            cl = self.get_closest((x, y))
            self.m[(x, y)] = cl
            a = ALPHA[cl] if cl is not None else '.'
            if (x, y) in self.coord_set:
                a = '●'
            line.append(a)
        out.append(''.join(line))
    return '\n'.join(out)
`.trim()

const day6_count = String.raw`
def count(self, edges=False):
    not_allowed = set()
    count = {}
    domain = self.find_domain()
    (xmin, xmax), (ymin, ymax) = domain
    xmax, ymax = xmax-1, ymax-1
    if not self.m:
        self.create_map(*domain)
    for coord, l in self.m.items():
        x, y = coord
        if x in (0, xmax) or y in (0, ymax):
            not_allowed.add(l)
        else:
            count[l] = count.get(l, 0) + 1
    if not edges:
        for l in not_allowed:
            del count[l]
    return count
`.trim()

const day6_ans = String.raw`
data = get_data(data_path)
g = Grid(list(data))
domain = g.find_domain()
out = g.create_map(*domain)
count = g.count()
big = max(count, key=lambda x: count[x])
print(f'The biggest area is letter {ALPHA[big]} with area {count[big]}.')
`.trim()

const day6_equidistant = String.raw`
def find_total_distance(self, c):
    return sum(self.get_man_dist(c, coords) for coords in self.coords)

def find_equidistant(self):
    """Find all points equidistant to all coordinates.
    """
    domain = self.find_domain()
    xdom, ydom = domain
    min_dist = float('inf')
    group = []
    for y in range(ydom[0], ydom[1]):
        for x in range(xdom[0], xdom[1]):
            coord = (x, y)
            dist = self.find_total_distance(coord)
            if dist < min_dist:
                group = [coord]
                min_dist = dist
            elif dist == min_dist:
                group.append(coord)
    return group
`.trim()

const day6_find_perimeter = String.raw`
def find_perimeter(self, thresh=10_000):
    ranges = {}
    group = self.find_equidistant()
    xvals = sorted([c[0] for c in group])
    yvals = sorted([c[1] for c in group])
    xmin, xmax = xvals[0], xvals[-1]
    ymin, ymax = yvals[0], yvals[-1]

    xmidl = xmin + math.floor((xmax - xmin) / 2)
    xmidr = xmin + math.ceil((xmax - xmin) / 2)

    ymidt = ymin + math.floor((ymax - ymin) / 2)
    ymidb = ymin + math.ceil((ymax - ymin) / 2)

    c = [xmidr, ymax]
    dist = self.find_total_distance(c)
    while dist <= thresh:
        cmax = list(c)
        c[1] += 1
        dist = self.find_total_distance(c)
    c = cmax

    # top left
    c2 = [xmidl, ymax]
    while (dist := self.find_total_distance(c2)) <= thresh:
        cmax2 = list(c2)
        c2[1] += 1
    c2 = cmax2

    # bottom left
    c3 = [xmidl, ymin]
    while (dist := self.find_total_distance(c3)) <= thresh:
        cmax3 = list(c3)
        c3[1] -= 1
    c3 = cmax3

    # bottom right
    c4 = [xmidr, ymin]
    while (dist := self.find_total_distance(c4)) <= thresh:
        cmax4 = list(c4)
        c4[1] -= 1
    c4 = cmax4

    # top right quad
    while c[1] > ymidb - 1:
        # print(f'found edge {c}: {self.find_total_distance(c)}')
        ranges[c[0]] = ranges.get(c[0], []) + [c[1]]
        c[0] += 1
        while self.find_total_distance(c) >= thresh:
            # print(f'Trying to find edge at {c}')
            c[1] -= 1
            if c[1] < ymidb - 1:
                break

    # top left quadrant
    while c2[1] > ymidb - 1:
        ranges[c2[0]] = ranges.get(c2[0], []) + [c2[1]]
        c2[0] -= 1
        while self.find_total_distance(c2) >= thresh:
            # print(f'Trying to find edge at {c2}')
            c2[1] -= 1
            if c2[1] < ymidb - 1:
                break

    # bottom left quadrant
    while c3[1] < ymidt + 1:
        ranges[c3[0]] = ranges.get(c3[0], []) + [c3[1]]
        c3[0] -= 1
        while self.find_total_distance(c3) >= thresh:
            # print(f'Trying to find edge at {c3}')
            c3[1] += 1
            if c3[1] > ymidt + 1:
                break

    # bottom right quadrant
    while c4[1] < ymidt + 1:
        ranges[c4[0]] = ranges.get(c4[0], []) + [c4[1]]
        c4[0] += 1
        while self.find_total_distance(c4) >= thresh:
            # print(f'Trying to find edge at {c4}')
            c4[1] += 1
            if c4[1] > ymidt + 1:
                break

    total = 0
    for x, rg in ranges.items():
        rg = set(rg)
        top, bot = max(rg), min(rg)
        total += abs(top - bot) + 1
    print(f'Total area {total}')
    return total
`.trim()

function Day6(props) {
    let classes = useStyles()
    return (
        <div>
            <Card
                id='day6'
                style={{marginTop: 10}}
                className={classes.card}>
                <h3>
                    Day 6{' '}
                    <a 
                        style={{fontSize:'small'}}
                        rel="noopener noreferrer"
                        target='_blank'
                        href="https://github.com/brianjp93/aoc2018/blob/master/day06/day6.py">
                        code
                    </a>
                </h3>
                <h2>Part 1</h2>
                <div>
                    Yeah, I'm not really sure how I'm supposed to calculate
                    which pieces of this map will be infinite, so I'm just gonna
                    create the map first.
                </div>
                <div>
                    <Highlight style={{borderRadius: 8}} language='python'>
                        {day6_create_map}
                    </Highlight>
                </div>
                <div style={{height:30}}></div>
                <div>
                    Which gives me this mess.
                </div>
                <div style={{textAlign: 'center', marginTop:8}}>
                    <img
                        style={{maxWidth: '100%'}}
                        src="/static/aoc2018/day6/map.png"
                        alt="A map which shows which coordinate is closest to every point." />
                </div>
                <div style={{height: 30}}></div>
                <div>
                    Now I'll just count up the pieces and ignore all of the letters
                    that have points on the edge.  I will assume that those go on
                    infinitely.
                </div>
                <Highlight language='python'>
                    {day6_count}
                </Highlight>

                <div style={{height:30}}></div>
                <div>
                    Now, I can just use the count function to get a dictionary
                    of areas and find the maximum by using <b>max</b> with
                    a custom key.
                </div>
                <Highlight language='python'>{day6_ans}</Highlight>
                <div style={{height: 30}}></div>

                <div>And this outputs</div>
                <code>The biggest area is letter d with area <b>3969</b>.</code>

                <hr />
                <h2>Part 2</h2>
                <div>
                    Part 2 asks for us to find the area of the region in which
                    every point inside has a total distance to each coordinate
                    of &lt;10,000.
                </div>
                <div style={{height:20}}></div>
                <div>
                    Ok, so I'm thinking maybe I can find a kind of <i>epicenter</i>
                    {' '}which will be a point, or group of points which are equidistant
                    to all of our 50 coordinates.
                </div>

                <Highlight language='python'>
                    {day6_equidistant}
                </Highlight>

                <div style={{height: 30}}></div>
                <div>
                    This returns the coordinate group...
                    <Highlight language='python'>
                        [(177, 161), (178, 161), (179, 161), (180, 161), (177, 162), (178, 162), (179, 162), (180, 162), (177, 163), (178, 163), (179, 163), (180, 163), (177, 164), (178, 164), (179, 164), (180, 164)]
                    </Highlight>
                </div>

                <div style={{textAlign: 'center'}}>
                    <img 
                        style={{maxWidth:'100%'}}
                        src="/static/aoc2018/day6/equidistant.png" 
                        alt="equidistant to all coordinates." />
                </div>

                <div style={{height: 30}}></div>
                <div>
                    Ok, so there must be a better way to do this... But this works.
                    I ended up writing a method which basically just traces around the edge
                    of whatever threshold value that you provide (namely 10,000 in this case).
                </div>
                <Highlight language='python'>{day6_find_perimeter}</Highlight>

                <div style={{height: 30}}></div>
                <div>
                    At the end, I just subtract the y-ranges for each x value and sum them up
                    to get the area.  Fantastic.
                </div>


                <div style={{height: 60}}></div>

            </Card>
        </div>
    )
}

export default Day6
