import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'

function About() {
    let [index, setIndex] = useState(0)
    let handleKeyDown = (event) => {
        if (['l', 'L', 'ArrowRight'].indexOf(event.key) >= 0) {
            setIndex(index+1)
        }
        else if (['j', 'J', 'ArrowLeft'].indexOf(event.key) >= 0) {
            setIndex(index-1)
        }
        else {
            return event
        }
    }
    // USE RIGHTARROW/LEFTARROW TO PROGRESS IN THE SLIDESHOW
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown, false)

        return () => {
            document.removeEventListener('keydown', handleKeyDown, false)
        }
    })

    return (
        <div>
            <Container maxWidth='sm'>
                <div style={{height: 50}}></div>

                <div style={{fontSize: 25}}>
                    <Show index={index} />
                </div>
            </Container>
        </div>
    )
}

function Show(props) {
    let img_style = {maxWidth: 500, borderRadius: 7, width: '100%'}
    let caption = {fontSize: 15}
    let parts = [
        <div>
            <div>
                Hello.
            </div>
            <div>
                My name is Brian Perrett.    
            </div>
            <div>
                <img
                    style={img_style}
                    src='/static/slideshow/korea.jpg'
                    alt="Two friends and me in Korea."/>
            </div>
            <div>
                This is a picture of two of my friends and me in Korea.
            </div>
            <div>
                We got grossly overcharged by the lady at this food cart, but it was worth it
                because we made some friends that tooks us out.
            </div>

            <div style={{paddingTop: 10, ...caption}}>
                Use right(or L) and left(or J) arrow to go next or back.
            </div>
        </div>,
        <div>
            <div>
                I was born in Seattle.
                <img src="/static/seattle.png" alt="Seattle map" style={img_style}/>
                <div>
                    But I only spent
                    the first 2 years of my life there so I don't
                    remember anything about it.
                </div>
            </div>
        </div>,
        <div>
            <div>
                And here's a photo of me about to kidnap my cousins' dogs.
            </div>
            <img
                style={img_style}
                src={'/static/slideshow/doggos.jpg'}
                alt="Cute doggos"/>
        </div>,
        <div>
            <div>You're welcome.</div>
        </div>,
        <div>
            <div>
                I spent most of my school years undecided about
                what I wanted to do.  I only knew that I would
                tend toward math and science.
            </div>
        </div>,
        <div>
            I applied to many schools toward the end of high school.
            Every single one of them was a California school aside from
            1, which ironically, is the one I ended up going to.
            <img
                style={img_style}
                src={'/static/slideshow/humpylumpy.jpg'}
                alt="humpy lumpy lawn"/>
        </div>,
        <div>
            <div>The University of Oregon, in Eugene.</div>
            <div>It is very pretty there.</div>
            <img
                style={img_style}
                src={'/static/slideshow/cliff eugene.jpg'}
                alt="On the east side of campus."/>
        </div>,
        <div>
            <div>See?</div>
            <img
                style={img_style}
                src={'/static/slideshow/snowpocalypse1.jpg'}
                alt="Snowpocalypse"/>
            <div style={caption}>Snowpocalypse</div>
        </div>,
        <div>
            <div>DO YOU?</div>
            <img
                style={img_style}
                src={'/static/slideshow/dormview.jpg'}
                alt="view from my dorm"/>
            <div style={caption}>The view from my dorm, freshman year.</div>
        </div>,
        <div>
            <div>ARE YOU SEEING THIS</div>
            <img
                style={img_style}
                src={'/static/slideshow/butteview.jpg'}
                alt="view from the butte"/>
            <div style={caption}>View from Spencer Butte.</div>
        </div>,
        <div>
            <div>IT'S PRETTY THERE, YES?</div>
            <img
                style={img_style}
                src={'/static/slideshow/bluepoolhike.jpg'}
                alt="Blue Pool hike"/>
            <div style={caption}>On a hike</div>
        </div>,
        <div>
            <div style={{fontSize: 15}}>I'm glad we all agree.</div>
        </div>,
        <div>
            <div>I made a lot of good friends at UO.</div>
            <img
                style={img_style}
                src={'/static/slideshow/freshmanboyband.jpg'}
                alt="boyband?" />
        </div>,
        <div>
            <img
                style={img_style}
                src={'/static/slideshow/jamienerd.jpg'}
                alt="Jamie wearing my glasses."/>
            <div style={caption}>Sorry Jamie, wearing my glasses doesn't make you cool like me.</div>
        </div>,
        <div>
            <img
                style={img_style}
                src="/static/slideshow/samuel.gif"
                alt="cayoot" />
            <div style={caption}>This looks endearing but he's actually trying to push me off the bridge.</div>
        </div>,

        <div>
            <div>
                This is the end of the slides, but imma add more.
            </div>

            <div>Hold your horses.</div>
        </div>
    ]

    let index = props.index
    if (index < 0) {
        index = parts.length + index
    }
    index = index % parts.length

    return parts[index]
}

export default About
