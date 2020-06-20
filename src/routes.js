//Arquivo responsável pelas rotas
//intalar o react-router-dom
//npm install react-router-dom

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Routes(){
    return(
        <BrowserRouter> {/* BrowserRouter : container principal do react-router-dom */}
            <Switch> {/* //Switch : container que irá armazenar as rotas */}
                <Route path='/' exact component={Home}/>
                <Route path='/repositories' component={Repositories}/>
            </Switch>
        </BrowserRouter>
    )
}