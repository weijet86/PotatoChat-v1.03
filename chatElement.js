//Got to create a chat element "div" template programmatically with:
//1) Menu on top that displays name of user.
//2) Conversation area.
//3) Text input area.
//4) Send button.
//5) Button to browse picture in folder to be sent.
var chatName="SuperFanShuZai";
var recipientChatName
function createChatEle(recipientChatName){
/**1)Top menu with user name */
var topMenu=document.createElement('div')
topMenu.innerHTML='Chatting with...'+recipientChatName
topMenu.style.border="2px solid black"
topMenu.style.position="absolute"
topMenu.style.overflow='auto'
topMenu.style.top="80px"
topMenu.style.left="450px"
topMenu.style.width='654px'
topMenu.style.height="50px"
topMenu.style.color="rgba(245,0,47,0.341)"
topMenu.style.fontSize='25px'
topMenu.style.fontFamily='Seravek'
topMenu.style.fontStyle='italic'
topMenu.style.fontWeight='normal'


/**2)Conversation area */
var conversationArea= document.createElement('div')
conversationArea.innerHTML=`Your conversation...<br>`
conversationArea.style.position='absolute'
conversationArea.style.overflow='auto'
conversationArea.style.width='654px'
conversationArea.style.height='500px'
conversationArea.style.left='450px'
conversationArea.style.top='150px'
conversationArea.style.fontFamily='Seravek'
conversationArea.style.fontSytle='italic'
conversationArea.style.fontWeight='normal'
conversationArea.style.fontSize='25px'
conversationArea.style.color="rgba(245,0,47,0.341)"
conversationArea.style.border="2px solid black"

/**3)Text input box */
var textInput=document.createElement('input')
textInput.type="text"
textInput.autofocus='true'
textInput.innerHTML='Type your text here...'
textInput.style.width='530px'
textInput.style.height='50px'
textInput.style.position="absolute"
textInput.style.overflow='auto'
textInput.style.left='450px'
textInput.style.top='680px'
textInput.style.color='rgba(245,0,47,0.341)'
textInput.style.border="2px solid black"
textInput.style.fontFamily='Seravek'
textInput.style.fontSytle='italic'
textInput.style.fontSize='25px'
textInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        sendButton.click()
       }
})

/**4)Send Button */
var sendButton=document.createElement('Button')
sendButton.innerHTML='Send'
sendButton.style.position="absolute"
sendButton.style.overflow='auto'
sendButton.style.width='110px'
sendButton.style.height='50px'
sendButton.style.left='1000px'
sendButton.style.top='680px'
sendButton.style.color='rgba(245,0,47,0.341)'
sendButton.style.border="2px solid black"
sendButton.style.fontFamily='Seravek'
sendButton.style.fontSytle='italic'
sendButton.style.fontSize='25px'
sendButton.addEventListener("click",function(e){
    //alert("Send Button activated!")
    textClick()
   
})


/**Chat element that compiles all the elements in chat UI */
var chat=document.createElement('div')
chat.appendChild(conversationArea)
chat.appendChild(topMenu)
chat.appendChild(textInput)
chat.appendChild(sendButton)


return chat;
}



