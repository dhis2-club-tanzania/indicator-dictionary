
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Chip } from '@dhis2/ui'

import classes from './navigation.module.css'

function Navigation(){

    return(
        <div className={classes.navigationBar}>

            {/* {indicators.map( (ind)=>{
                return(
                  <Link className={classes.navigationLink} key={ind.id}
                   to={"/indicator/"+ind.id}>
                       <Chip  onClick={onClick} selected overflow >
                  {ind.name}
                </Chip>
                </Link> 
                )
            } )} */}

   
    </div>
    )
}


export default Navigation;