import React from 'react'
import {Link} from "react-router-dom"
import {
    Table, TableRow, TableBody, TableCell,
    Grid
} from '@material-ui/core'

function Home() {
    const div_width = 400
    const link_style = {fontWeight: 'bold'}
    return (
        <div>
            <div style={{paddingLeft: 30, paddingRight: 30, marginTop: 30, marginBottom: 400}}>
                <Grid container spacing={1} style={{maxWidth: div_width}}>
                    <Grid item xs={3}>
                        <a href="https://github.com/brianjp93/aoc2019">
                            <img
                                style={{height: 150, borderRadius: 6}}
                                src="/static/day15.gif"
                                alt="AOC Day 15 animation"
                                title="An animation of a BFS of an unexplored maze. This was for the 15th day of AOC2019."/>
                        </a>
                    </Grid>
                    <Grid item xs={9}>
                        <div style={{fontSize: 30}}>
                            Brian Perrett
                        </div>
                        <div>
                            Denver, CO 80204
                        </div>

                        <div style={{height: 10}}>
                        </div>

                        <div>
                            <a target='_blank' rel="noopener noreferrer" href="https://github.com/brianjp93">
                                >>> github
                            </a>
                        </div>

                        <div style={{height: 10}}>
                        </div>

                        <div style={{maxWidth: div_width}}>
                            <Table size='small'>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={{fontWeight: 'bold'}}>
                                            languages
                                        </TableCell>
                                        <TableCell>
                                            python, javascript, HTML, CSS
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={{fontWeight: 'bold'}}>frameworks</TableCell>
                                        <TableCell>django, reactjs</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </Grid>
                    
                </Grid>

                <div style={{height: 30}}></div>
                <div>
                    <div style={{fontSize: 25, maxWidth: div_width, textAlign: 'center'}}>Projects</div>

                    <div style={{maxWidth: div_width}}>
                        
                        <Link to='/zernike' style={link_style}>Zernike Polynomials</Link>{' '}- bend the light
                        <div style={{marginLeft: 30}}>
                            <div style={{marginTop: 5}}>
                                During my junior year, I joined a physics lab that was dealing
                                with GRIN lenses.  They wanted to plot different sums of zernike polynomials
                                and be able to find a way to print out many layers of glass to average out
                                to some given configuration.  This was my attempt at that.
                            </div>
                        </div>
                        <div style={{height: 10}}></div>

                        <a
                            style={link_style}
                            target='_blank'
                            rel="noopener noreferrer"
                            href="http://www.hardstuck.club/na/import%20antigrvty/">
                            hardstuck.club
                        </a>{' '}- A League of Legends Site
                        <div style={{marginLeft: 30}}>
                            <div>
                                <div style={{fontSize: 'small', fontWeight: 'bold'}}>
                                    Django, Reactjs, EC2, RDS, ElastiCache
                                </div>
                                <div style={{marginTop: 5}}>
                                    League of Legends is a 5v5 MOBA and is one of the most
                                    popular video games in the world.  I enjoy playing and
                                    looking at all of the stats and massive amounts of data
                                    that Riot keeps on each game.  This site displays some
                                    of that data in what is hopefully an "easy to view" format.
                                </div>
                            </div>
                        </div>
                        <div style={{height: 10}}></div>

                        <a
                            style={link_style}
                            target='_blank'
                            rel="noopener noreferrer"
                            href="http://suitesale.com">
                            suitesale.com
                        </a>{' '}- Inventory/Order Management System
                        <div style={{marginLeft: 30}}>
                            <div>
                                <div style={{fontSize: 'small', fontWeight: 'bold'}}>
                                    Django, Reactjs, Celery Task Queue, SQS, RDS, EC2
                                </div>
                                <div style={{marginTop: 5}}>
                                    SuiteSale is a web application which communicates with
                                    many popular ecommerce sites and shipping services to
                                    help small to medium sized businesses keep track of,
                                    and automate inventory management.  Orders are imported
                                    into SuiteSale periodically and inventory is debited
                                    automatically.  The new inventory data is then pushed out
                                    to every connected ecommerce site like Amazon, eBay,
                                    Shopify, etc...
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div style={{height: 30}}></div>
                <div>
                    <div style={{fontSize: 25, maxWidth: div_width, textAlign: 'center'}}>
                        Little Projects
                    </div>
                    <div
                        style={{
                            marginTop: -5,
                            fontSize: 14,
                            maxWidth: div_width,
                            textAlign: 'center',
                            color: 'grey',
                        }}>
                        kinda like projects, but little-er
                    </div>


                    <div style={{maxWidth: div_width}}>
                        
                        <a
                            target='_blank'
                            rel="noopener noreferrer"
                            href='https://chrome.google.com/webstore/detail/ugpiano/ghafgonoapifjmpfpcnkbjlihapolngi'
                            style={link_style}>UGPiano</a>{' '}- show me the chords
                        <div style={{marginLeft: 30}}>
                            <div style={{fontSize: 'small', fontWeight: 'bold'}}>
                                Chrome Extension
                            </div>
                            <div style={{marginTop: 5}}>
                                I like to play guitar.  I use ultimate-guitar.com all of the time
                                to see songs and their chords.  Sadly, they only show chord diagrams
                                for guitar.  <b>SO</b>, I created this <i>chrome extension</i> to
                                show the piano chord diagram when you hover over chords in ultimate-guitar.com.
                            </div>
                            <div style={{marginTop: 5}}>
                                <a target='_blank' href="/static/ugpiano_demo.gif">
                                    <img style={{maxWidth: '100%', borderRadius: 6}} src="/static/ugpiano_demo.gif" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div style={{height: 10}}></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
