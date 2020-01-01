import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core'
import Swipe from 'react-easy-swipe'

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
        <Swipe
            tolerance={110}
            onSwipeRight={() => {
                setIndex(index - 1)
            }}
            onSwipeLeft={() => {
                setIndex(index + 1)
            }}>
            <div style={{minHeight: 800}}>
                <Container maxWidth='sm'>
                    <div style={{height: 50}}></div>

                    <div style={{fontSize: 25}}>
                        <Show index={index} />
                    </div>
                </Container>
            </div>
        </Swipe>
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
                That's me taking this photo with two of my friends in Korea.
            </div>
            <div>
                <img
                    style={img_style}
                    src='/static/slideshow/korea.jpg'
                    alt="Two friends and me in Korea."/>
            </div>
            <div>
                We got grossly overcharged by the lady at this food cart, but it was worth it
                because we made some friends that took us out.
            </div>

            <div style={{paddingTop: 10, ...caption}}>
                <div>
                    Use right(or L) and left(or J) arrow to go next or back.
                </div>
                <div>You can also swipe left and right.</div>
            </div>
        </div>,
        <div>
            <div>
                Uhhhhhhh....
            </div>
            <div>
                What should I talk about?
            </div>
            <div>Where I was born?</div>
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
            Great.  Glad we got that out of the way.
        </div>,
        <div>
            <div>
                Now what..?
            </div>
            <div>
                School?  I did school.
            </div>
        </div>,
        <div>
            I went to the University of Oregon and studied phsyics
            along with math and computer science.
            <img
                style={img_style}
                src={'/static/slideshow/humpylumpy.jpg'}
                alt="humpy lumpy lawn"/>
        </div>,
        <div>
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
            <img
                style={img_style}
                src="/static/slideshow/group blue pool.jpg"
                alt="blue pool with people" />
            <div style={caption}>Running around outside.</div>
        </div>,

        <div>
            <img
                style={img_style}
                src="/static/slideshow/theloop.jpg"
                alt="Eating churros" />
            <div style={caption}>nerds</div>
        </div>,

        <div>
            <div>
                So yeah.  Oregon was cool.
                <div>
                    My friends are alright.
                </div>
            </div>
        </div>,

        <div>
            <div>
                After graduating I worked for a few years
                at a company called Moonlight Feather.
            </div>
            <div>
                They sell feathers online.
            </div>
        </div>,

        <div>
            <div>
                This is exactly what I planned to do with my
                physics degree.
            </div>
        </div>,

        <div>
            <div>
                It was a good time for the most part.
            </div>
            <div>
                I learned a lot.  I spent most of my time writing
                an inventory and order management web application.
            </div>
        </div>,

        <div>
            <div>
                It was during this time that I learned a lot about django
                and react.  I built the system on top of these frameworks.
            </div>
            <img style={img_style} src="/static/slideshow/workcode.jpg" alt="work code"/>
            <div>
                I had a lot of fun problem solving through the issues
                of synchronizing orders and inventory between all of the
                ecommerce sites we used.
            </div>

        </div>,

        <div>
            <div>
                I've left Moonlight but the app I wrote is still up and running
                and they use it every day for inventory sync and shipping orders.
            </div>

            <div style={{paddingTop: 10}}>
                I believe they are trying to build where I left off.
            </div>
        </div>,

        <div>
            <div style={{fontSize: 40, textAlign: 'center'}}>
                End
            </div>
            <div>
                This is the end of the slides for now, but imma add more.
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
