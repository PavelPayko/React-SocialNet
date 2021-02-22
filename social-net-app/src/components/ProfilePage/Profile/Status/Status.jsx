import React, {useEffect, useState} from 'react'
import classes from './Status.module.css'
import LoaderLine from "../../../commonComponents/LoaderLine/LoaderLine";

const Status = props => {
    const [isStatusEdit, isStatusEditToggle] = useState(false)
    const [localStatus, setLocalStatus] = useState(props.status)
    const [isUpdating, isUpdatingToggle] = useState(false)

    const setStatusHandler = () => {
        props.setStatus(localStatus)
        isStatusEditToggle(false)
        if (props.status !== localStatus)
            isUpdatingToggle(true)
    }
    const editStatus = () => {
        props.myProfile && isStatusEditToggle(true)
    }
    const inputHandler = event => {
        console.log(event)
        setLocalStatus(event.target.value)
    }
    const inputKeypressHandler = e => {
        if (e.charCode === 13 || e.key === "Enter") {
            setStatusHandler()
        }
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

    return (<div className={classes.status}>
            {isUpdating
                ? <div className={classes.loader}><LoaderLine/></div>
                : isStatusEdit
                    ? <div className={classes.inputWrapper}>
                        <input type="text" id='statusInput'
                               autoFocus={true} className={classes.input}
                               onBlur={setStatusHandler} onKeyPress={inputKeypressHandler}
                               value={localStatus} onChange={inputHandler}
                        />
                    </div>
                    : <div className={classes.statusBody}>
                        <span>{props.status || 'No Status'}</span>
                        {props.myProfile && <div onClick={editStatus} className={classes.statusEdit}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 viewBox="0 0 1000 1000">
                                <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                                    <path
                                        d="M3609.8,1492.6L100-2017.1v-1384.8v-1382.6h1384.8h1382.6l3516.3,3516.3L9900,2248L8521.7,3626.3c-757.5,757.5-1382.6,1378.3-1389.1,1378.3S5541.6,3424.4,3609.8,1492.6z M8087.6,3192.2l944.2-944.2l-293-293l-293-293l-948.5,948.5l-950.7,950.7l286.5,286.5c158.4,158.4,293,288.7,299.5,288.7S7568.8,3710.9,8087.6,3192.2z M7067.4,2172l944.2-944.2l-267-264.8l-264.8-267l-948.5,948.5l-950.7,950.7l260.5,260.5c143.3,143.3,264.8,260.5,271.3,260.5S6548.7,2690.8,7067.4,2172z M4827.4-1958.5L2607-4176.8l-944.2,4.3l-944.2,6.5l-6.5,944.2l-4.3,944.2L2926-59.3l2220.5,2220.5l948.5-948.5l950.7-950.7L4827.4-1958.5z"/>
                                </g>
                            </svg>
                        </div>}
                    </div>
            }

            {/*<div className={classes.loader}><LoaderLine/></div>*/}
        </div>
    )
}

export default Status