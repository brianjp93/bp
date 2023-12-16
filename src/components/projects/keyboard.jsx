import React from 'react'
import {
    Card,
    Container
} from '@material-ui/core'
import useStyles from '../general/mystyle'


export default function Keyboard(props) {
    const classes = useStyles()
    return (
        <div>
            <Container width='md'>
                <div style={{height:20}}></div>
                <Card className={classes.card}>
                    <h1>I have been using ZSA's Voyager keyboard, using the configuration below.</h1>

                    <div style={{paddingTop: "60%", position: 'relative'}}>
                        <iframe
                            src="https://configure.zsa.io/embed/voyager/layouts/KY3L9/A5e6B/0"
                            style={{border: 0, height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}
                        >
                        </iframe>
                    </div>

                    <div>
                        There are a few things I like about this keyboard and layout.

                        <h4>The Size</h4>
                        <div>
                            It's quite small.<br/> <br/> Originally, I was
                            using the ZSA's moonlander M1 as my main work
                            keyboard. It is also fantastic but just a bit too
                            large for me to want to take anywhere if I was
                            working away from home. So every time I was working
                            away from home, I was faced with the gloomy reality
                            that I had to type on a normal keyboard. Very sad.
                        </div>

                        <h4>Onboard Memory</h4>
                        <div>
                            The keyboard has onboard memory and works the same
                            way, connected to any computer.
                        </div>

                        <h4>Symbols Layer</h4>
                        <div>
                            Being able to use a numpad by holding a layer
                            toggle is awesome.
                        </div>

                        <h4>Navigation Layer</h4>
                        <div>
                            Mapping up/down/left/right to k/j/h/l on the
                            navigation layer makes vim users feel right at
                            home.<br/>
                            <br/>
                            I can hold down the backspace key on my left hand
                            and use h/j/k/l as arrow keys. It's pretty great.
                        </div>

                        <h4>Navigation in Kitty</h4>
                        <div>
                            In Kitty (my terminal emulator), I can switch
                            between tabs using <code>[command + arrow_key]</code>. Although
                            there are no arrow keys on the main layer, this is
                            still very easy.  I can press the 2 thumb cluster
                            buttons on my left hand, using my thumb over both
                            buttons. This activates my navigation layer while
                            also pressing the <code>[command]</code> key. Then I can easily
                            press the arrow keys while <code>[command]</code> is held down.
                        </div>

                        <h4>Hyper Key</h4>
                        <div>
                            To avoid clashing with other application's keyboard
                            shortcuts, you can assign a single key to an
                            ordinarily uncomfortable combination of modifier
                            keys. The <code>hyper</code> key, is a combination of
                            <code>[command + alt + shift + ctrl]</code>. You can then
                            use this for whatever sort of shortcuts you want.
                            <br/>
                            <br/>
                            For example, I use<br/>
                            <code>hyper + 1</code> to open kitty<br/>
                            <code>hyper + 2</code> to open chrome<br/>
                            <code>hyper + 3</code> to open slack ...
                        </div>
                    </div>
                </Card>
            </Container>
        </div>
    )
}
