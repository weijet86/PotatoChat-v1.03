

class chat{
    constructor(username,chatElement){
        this.username=username
        this.chatElement=chatElement
    }
    setUsername(username){this.username=username}
    getUsername(){return this.username}
    setChatElement(chatElement){this.chatElement=chatElement}
    getChatElement(){return this.chatElement}
}