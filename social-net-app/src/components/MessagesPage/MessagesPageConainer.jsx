import MessagesPage from "./MessagesPage";
import {connect} from "react-redux";

const MessagesPageContainer = props => <MessagesPage {...props}/>

const mapStateToProps = (state /*, ownProps*/) => ({
        messageData : state.messagesPage.messageData,
        dialogsData : state.messagesPage.dialogsData,
        myId: state.auth.id
    })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPageContainer)