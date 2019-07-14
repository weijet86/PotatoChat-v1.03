var userlistElement=document.createElement('div') //This element holds the username list
userlistElement.style.border="2px solid black"
userlistElement.style.position="absolute"
userlistElement.style.overflow='auto'
userlistElement.style.top="80px"
userlistElement.style.left="50px"
userlistElement.style.width='250px'
userlistElement.style.height="570px"
userlistElement.style.color="rgba(245,0,47,0.341)"
userlistElement.style.fontSize='25px'
userlistElement.style.fontFamily='Seravek'
userlistElement.style.fontStyle='italic'
userlistElement.style.fontWeight='normal'
document.getElementById('UserListSection').appendChild(userlistElement)

//Function to create list elements!
function createListElement(userNameString) { //userNameString is received by websocket client from server
   
    var node = document.createElement("LI");
    var textnode = document.createTextNode(userNameString);
    node.appendChild(textnode);
    //document.getElementById("UserListSection").appendChild(node);
    userlistElement.appendChild(node)
    createNotiList()
    
  }
  

  var notiListEle=document.createElement('div')
  notiListEle.style.cssText='position: absolute;overflow: visible;width: 100px;height: 50px;left: 320px;top: 80px;font-size: 25px;font-family:Seravek;color:rgba(245,0,47,0.341)'
  document.getElementById('UserListSection').appendChild(notiListEle)
  //Function to create notification list elements!
  function createNotiList(){
    var node = document.createElement("div");
    node.innerHTML=""+"<br>"
    //var textnode = document.createTextNode("lalala");
    //node.appendChild(textnode);
    notiListEle.appendChild(node)
  }

  //Create a refresh button to send a request msg to server and then call createListElement function 
  var refreshUserList=document.createElement("Button")
  refreshUserList.innerHTML='Refresh'
  refreshUserList.style.position="absolute"
  refreshUserList.style.overflow='auto'
  refreshUserList.style.width='250px'
  refreshUserList.style.height='50px'
  refreshUserList.style.left='50px'
  refreshUserList.style.top='680px'
  refreshUserList.style.color='rgba(245,0,47,0.341)'
  refreshUserList.style.border="2px solid black"
  refreshUserList.style.fontFamily='Seravek'
  refreshUserList.style.fontSytle='italic'
  refreshUserList.style.fontSize='25px'
  document.getElementById('UserListSection').appendChild(refreshUserList)

  
  refreshUserList.addEventListener("click",function(e){
    //alert("Refresh userlist button is clicked!")
   
    var reqUserListmessage=new Message("1","I want userList");
    reqUserListmessage.SetRecipientChatName(chatName);
    reqUserListmessage.SetchatName(chatName);
    var list_msg_userList=MessagetoList(reqUserListmessage);
    var json_userList=MsgToJson(list_msg_userList);
    connection.send(json_userList); //WebSocket in potatoChat.js onMessage type 9 message section will update userList to <div> with createListElement function
    //setTimeout(setChatElement,1000)
  })

var retrievedItem=document.getElementById('UserListSection').getElementsByTagName('div')[0]; //UserListSection is shared with refreshUserList button too.
var myRetrievedItems=retrievedItem.getElementsByTagName('LI');
var p;
var index;
var UserNameInList;
var currentChat;
//Set click function to username in list
retrievedItem.addEventListener("click",function(e){
  //alert("retrievedItem is clicked");

    //Get element position when clicked
    p = e.target.parentElement;
    index = Array.prototype.indexOf.call(p.children, e.target);

    //Replace element content with intended text!
    UserNameInList=myRetrievedItems[index].innerHTML;
  
    //myRetrievedItems[index].innerHTML+=' is ready to chat!';

    //Include codes to change chat session to the designated potatoBoy users here!
    recipientChatName=UserNameInList;
    //imgMsgRecipientChatName=UserNameInList;
    //Get respected chatElement from list_of_chatElement and appendChild to main html file <div>
    currentChat=list_of_chatElement[index].getChatElement()
    document.getElementById('ConverWindow').innerHTML=''
    document.getElementById('ConverWindow').appendChild(currentChat)
    currentChat.getElementsByTagName('input')[0].focus()
    normalDiv(list_of_chatElement[index].getUsername())
    unreadMsgCountList[index]=0
})

