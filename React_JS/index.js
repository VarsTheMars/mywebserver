import ReactDom from 'react-dom'
import React from 'react'

import {AppComponent} from './app/app.component'
import LoginComponent from './login/login.component'

//ReactDom.render(<AppComponent/>, document.getElementById('root'));
ReactDom.render(<LoginComponent/>, document.getElementById('root'));