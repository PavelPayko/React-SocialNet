import MessagesPage from "./MessagesPage";
import {connect} from "react-redux";

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        messageData : state.messagesPage.messageData,
        dialogsData : state.messagesPage.dialogsData
    }
}

const mapDispatchToProps = {}
const MessagesPageContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesPage)
export default MessagesPageContainer