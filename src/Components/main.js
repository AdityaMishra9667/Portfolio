import React from 'react'
import {Switch, Route} from 'react-router-dom'
import resume from './resume'
import mainpage from './mainpage'
import contact from './contact'
import projects from './projects'

const Main = () =>(
    <Switch>
        <Route exact path="/" component={mainpage} />
        <Route path="/contact" component={contact} />
        <Route path="/projects" component={projects} />
        <Route path="/resume" component={resume} />
    </Switch>

    
)

export default Main
