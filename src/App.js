import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'


import { Route,Switch, HashRouter } from 'react-router-dom';

import Layout from './layouts/layout';

import {RecoilRoot} from "recoil";
import Index from "./Index";
import FunctionIndex from "./FunctionIndex";


const MyApp = () => (
    <div className={classes.container}>
        <RecoilRoot>
            <HashRouter>
                <Layout>
                    <Switch>
                        <Route path="/" exact >
                            <Index />
                        </Route>
                        {/*<Route path="/indicator/:id">*/}
                        {/*    <Index />*/}
                        {/*</Route>*/}
                        <Route path="/functions" exact >
                            <FunctionIndex />
                        </Route>
                        <Route path="/functions/:id" exact >
                           <FunctionIndex />
                        </Route>
                    </Switch>
                </Layout>
            </HashRouter>
        </RecoilRoot>
    </div>
)

export default MyApp
