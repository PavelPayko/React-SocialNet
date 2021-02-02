import React from 'react'
import classes from './Loader.module.css'

const Loader = (props) => {
    return(
        <div className={classes.ldsSpinner + ' ' + classes[props.size]}>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
        </div>
    )
}
export default Loader