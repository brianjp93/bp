import React from 'react'
import {Link} from "react-router-dom"
import {
    Table, TableRow, TableBody, TableCell
} from '@material-ui/core'

function Home() {
    const div_width = 400
    return (
        <div>
            <div style={{paddingLeft: 30, paddingRight: 30, marginTop: 30, marginBottom: 400}}>
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

                <div style={{height: 20}}>
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

                <div style={{height: 30}}></div>
                <div>
                    <div style={{fontSize: 25, maxWidth: div_width, textAlign: 'center'}}>Projects</div>

                    <div>
                        <div><Link to='/zernike'>Zernike Polynomials</Link></div>
                    </div>
                    <div style={{marginLeft: 30}}>
                        <div style={{maxWidth: div_width, marginTop: 5}}>
                            During my junior year, I joined a physics lab that was dealing
                            with GRIN lenses.  They wanted to plot different sums of zernike polynomials
                            and be able to find a way to print out many layers of glass to average out
                            to some given configuration.  This was my attempt at that.
                        </div>
                    </div>
                    <div style={{height: 10}}></div>

                    <div>
                        <div>
                            <a
                                target='_blank'
                                rel="noopener noreferrer"
                                href="http://www.hardstuck.club/na/import%20antigrvty/">
                                hardstuck.club
                            </a>{' '}- A League of Legends Site
                        </div>
                    </div>
                    <div style={{marginLeft: 30}}>
                        <div style={{maxWidth: div_width}}>
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

                    <div>
                        <div>
                            <a
                                target='_blank'
                                rel="noopener noreferrer"
                                href="http://suitesale.com">
                                suitesale.com
                            </a>{' '}- Ecommerce Inventory/Order Management System
                        </div>
                    </div>
                    <div style={{marginLeft: 30}}>
                        <div style={{maxWidth: div_width}}>
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
        </div>
    )
}

export default Home
