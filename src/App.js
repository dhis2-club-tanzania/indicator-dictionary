import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'


import { Route,Switch, HashRouter } from 'react-router-dom';
import HomePage from './pages/home';
import IndicatiorPage from './pages/indicator';
import Layout from './layouts/layout';


const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => (
    <div className={classes.container}>
        <DataQuery query={query}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                    <>
                         {/* <h1>
                             {i18n.t('Hello {{name}}', { name: data.me.name })}
                         </h1>
                         <h3>{i18n.t('Welcome to DHIS2!')}</h3> */}

                        

                            <HashRouter>
                            <Layout>
                                <Switch>
                                    <Route path="/" exact >
                                        <HomePage></HomePage>
                                    </Route>
                                    <Route path="/indicator/:id">
                                        <IndicatiorPage></IndicatiorPage>
                                    </Route>
                                </Switch>
                                </Layout>
                            </HashRouter>

                        
                    

                    </>
                )
            }}
        </DataQuery>
    </div>
)

export default MyApp
