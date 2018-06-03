import conversations from '../data/ConversationData'

const ConversationsApi = {
    getAll: function () {
        return conversations;
    }
}

export default ConversationsApi;