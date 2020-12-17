import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import Booking from '../components/Booking'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sobre' component={About} />
            <Route path='/contato' component={Contact} />
            <Route path='/agendamento' component={Booking} />
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes