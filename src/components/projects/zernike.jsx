import React from 'react'
import Latex from 'react-latex'
import { Container, Card, Button } from '@material-ui/core'

import useStyles from '../general/mystyle'


function Zernike() {
    const classes = useStyles()
    return (
        <Container maxWidth='md'>
            <div>

                <h1>Zernike Polynomials</h1>

                <p>
                    Refer to the link below to see my notes and calculations on Zernike Polynomials.
                </p>
                <p>
                    <a
                        variant='contained'
                        rel="noopener noreferrer"
                        target="_blank"
                        href="http://nbviewer.ipython.org/gist/brianjp93/ce74319bf2b56f35b4e4">
                        Zernike Notes and Computation
                    </a>
                </p>

                <Card className={classes.card}>
                    <div className="panel-heading">
                        <h3>Zernike Plotter (Program)</h3>
                    </div>
                    <div className="panel-body">
                        <p>
                            I have created and compiled (with cx freeze) a standalone program in python using matplotlib, numpy, and other scientific 3rd party libraries.  This program will plot any valid Zernike Polynomial given n and m inputs, where n is the radial order, and m is the Azimuthal Frequency. 
                        </p>
                        <p>
                            To run the program, unzip the zip file, and go into the Zernike Plotter folder.  Then run the Zernike.exe executable.  All the files must be kept in their original folders, or else the program will not work.  You may download this below.
                        </p>
                        <table>
                            <thead><strong>Downloads</strong></thead>
                            <tbody>
                                <tr>
                                    <td>Windows 7/8</td>
                                    <td>
                                        <Button
                                            size='small'
                                            variant='contained'
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            href="https://app.box.com/s/a976rlnelzqpipmhyojd">
                                            Download(47mb)
                                        </Button>
                                        <br/><br/>
                                        <Button
                                            size='small'
                                            variant='contained'
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href="https://app.box.com/s/bf3hi7avrulfs02fhcid">
                                            Source Code
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>I may add a version for Apple OS's if I get my hands on a Mac.  Linux as well.</p>
                        <div className="updates">
                            <p className="small"><strong>Updates</strong></p>
                            <ul className="small">
                                <li>Fixed n=0, m=0 bug.</li>
                                <li>
                                    Zernike Addition support.  Input as many numbers as you want into the entry boxes.
                                    The Z values will be added and plotted in the end.
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card>
                <Card className={classes.card}>
                    <div className="panel-heading">
                        <h3>GRIN Lenses</h3>
                    </div>
                    <div className="panel-body">
                        <p>Definition: A lens which has become self-aware, and is happy.</p>
                        <p>
                            Convincing, I know. "GRIN" is actually short for GRadient INdex.
                            All this means is that the index of refraction within the lens is not
                            constant.  It may vary radially, along its length, or any other way.
                        </p>
                        <p>
                            Say we wanted to make a phase plate.  This can be done by making a
                            transparent object with a constant index of refraction (n) but varying thickness (d).
                            This can also be done using a GRIN lens with varying "n" and constant "d".
                        </p>
                        <p>
                            Take a look at the following pristine drawing.  Wow, that should be in a
                            museum somewhere.  Just look at those strokes.  Anyway...<br/>
                            This is meant to be a drawing of a "Rod Lens", a lens where the index
                            of refraction decreases radially from the center.
                        </p>
                        <div className="photo">
                            <img alt="Example of light bending through GRIN lens" src="http://brianjp93.com/GRIN_lens_example.jpg" style={{width: 300}}/>
                        </div>
                        <div className="computation">
                            <p>
                                Let's say that at most, we want a phase shift of 2pi.
                            </p>
                            <p>
                                <Latex displayMode={true}>$ 2\pi = \Phi_2 - \Phi_1 $</Latex>
                                This is the same as
                                <Latex displayMode={true}>{`$ 2\\pi = \\frac{2\\pi d n_2}{\\lambda_0 n_0} - \\frac{2\\pi d n_1}{\\lambda_0 n_0} $`}</Latex>
                                <Latex>Where $n_0 = 1$</Latex>
                                We can reduce and solve for thickness <Latex>$d$</Latex>.
                                <Latex displayMode={true}>{`$d\\left(\\frac{n_2-n_1}{\\lambda_0}\\right) = 1$`}</Latex>
                                <Latex displayMode={true}>{`$d = \\frac{\\lambda_0}{\\Delta n}$`}</Latex>
                            </p>
                            <p>
                                So, if we have a beam of wavelength = 632.8nm, and an index of refraction difference of .1, we get...
                                <Latex displayMode={true}>{`$d = \\frac{632.8nm}{.1} = 6.328\\mu m$`}</Latex>
                            </p>
                            <p>
                                This tells us that we need a lens 6.328 microns thick to attain a phase shift of 2pi.
                            </p>
                            <p>
                                An important thing to note is that technically the beam will
                                be curving as it travels through the lens.  The beam on the outer edge will move toward
                                the greater index of refraction.  However, with distances
                                as small as 6.328 microns this effect may be insignificant.
                            </p>
                        </div>
                    </div>
                </Card>

                <Card className={classes.card}>
                    <div className="panel-heading">
                        <h3>Binary Images Averaged to Zernike Contour Plot</h3>
                    </div>
                    <div className="panel-body">
                        <p>
                            Here, I made a program in which you can input which zernike polynomial you would like to plot,
                            and how many layers (x) you'd like.  It creates x layers of binary images which, when averaged,
                            will create the contour plot of the zernike polynomial you specified.
                        </p>
                        <p>Here is an example I did with n=5, m=3.</p>
                        <img
                            alt="gif of many different layers of images combining to create a radial depth map with zernike polynomials."
                            src="https://lh3.googleusercontent.com/HNNykAwBCeCT-90xC121WxWg05Sap326Ob3sWBUTte1-DJiLFVc9FFrWtKAyrpZE5wSWCtIuhpPr5Ga_7R-DiHvqr4i5wtbYImuTFdqAocEWkKdvxyS9UgIbKfxVfG6r6n2L78hfnBM23nkY-stw3iAOntP6_uHZ5C4BW94Gj4UM5z3RAN7OBNasr6viBSkt8QussCoUIBtrkDqaUU1VPuXXizaGrToMRkSJ6mOlvoQu8CajPod15r32MMay0FjTUIN6BSelqxgLYAVri_w5xVoUPv-uzuFsppMc6Wr3Ta3vGtatFghXOjCT5CMpQrG4FX9gCb1VdaocvE1ZpM77FYpz5cIlSRdfu1yebCFpotc-NGdU94vYlFaOxqgb3rprO_4tKGvEhkgE6DP8_xZaEmbw5u3VvzFU8_tcBsK7jUkaPaj-acW_J2ZOU0eJN2gcE2K1bQf2EiDWJzaS9Wj4kyB4SLMM8sZr_js1TgnHhn5h_vNK01eN261PtrXedEZPHfRH1a4jrDvXOg2VPOOmzeu7bEgUjHMr55hijK75HOl20VAHr4I42o8k_6oWV8y4EDkC=s500-no"
                            />
                    </div>
                </Card>
            </div>
        </Container>
    )
}

export default Zernike