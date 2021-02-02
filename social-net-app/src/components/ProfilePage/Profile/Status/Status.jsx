import React from 'react'

class Status extends React.Component {
    state = {
        isStatusEdit: false,
        status: this.props.status
    }

    setStatusHandler = () => {
        this.props.setStatus(this.state.status)
        this.setState({
            isStatusEdit: false
        })
    }
    editStatus = () => {
        this.setState({
            isStatusEdit: true
        })
    }
    inputHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            status: event.target.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        console.log(this.props)
        return <div>
            {this.state.isStatusEdit
                ? <input type="text" autoFocus={true} onBlur={this.setStatusHandler} value={this.state.status}
                         onChange={this.inputHandler}/>
                : <span onClick={this.editStatus}>{this.props.status || 'No Status'}</span>
            }
            {/*<input type="text" onBlur={this.setStatusHandler}/>*/}
            {/*<span>{this.props.status}</span>*/}
        </div>
    }

}

export default Status