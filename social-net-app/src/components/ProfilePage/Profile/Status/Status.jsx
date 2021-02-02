import React, {useEffect, useState} from 'react'
import classes from './Status.module.css'
import LoaderLine from "../../../commonComponents/LoaderLine/LoaderLine";

const Status = props => {
    const [isStatusEdit, isStatusToggle] = useState(false)
    const [localStatus, setLocalStatus] = useState(props.status)
    const [isUpdating, isUpdatingToggle] = useState(false)

    const setStatusHandler = () => {
        props.setStatus(localStatus)
        isStatusToggle(false)
        if(props.status !== localStatus)
        isUpdatingToggle(true)
    }
    const editStatus = () => {
        props.myProfile && isStatusToggle(true)
    }
    const inputHandler = event => {
        setLocalStatus(event.target.value)
    }
    useEffect(() => {
        if (props.status !== localStatus) {
            setLocalStatus(props.status)
        }
        isUpdatingToggle(false)
    }, [props.status])


    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(prevProps.status !== this.props.status){
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    return (<div onClick={editStatus} className={classes.status}>
            {isUpdating
                ? <div className={classes.loader}><LoaderLine/></div>
                : isStatusEdit
                    ? <div>
                        <input type="text" autoFocus={true} onBlur={setStatusHandler} value={localStatus}
                               onChange={inputHandler}/>
                    </div>
                : <span >{props.status || 'No Status'}</span>
            }

            {/*<div className={classes.loader}><LoaderLine/></div>*/}
        </div>
    )
}

export default Status