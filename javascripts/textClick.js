/**Fuction for click button to create text Message */


function textClick(){
    //alert('textClick is activated!')
    var typedText=currentChat.getElementsByTagName('input')[0].value
    currentChat.getElementsByTagName('input')[0].value=''
    //alert('typed text is '+typedText)
    
    /**Try out Message Class */
    var textmessage=new Message("1",typedText);
    textmessage.SetRecipientChatName(recipientChatName);
    textmessage.SetchatName(chatName);
    /**Convert typed text into JSON String**/ 
    var list_msg=MessagetoList(textmessage);
    var replystr1=list_msg[6]+": "+list_msg[1]+"<br>";
    var result1=replystr1.fontcolor('f45384');
    currentChat.getElementsByTagName('div')[0].innerHTML+=result1
    currentChat.getElementsByTagName('div')[0].scrollTop = currentChat.getElementsByTagName('div')[0].scrollHeight;

    var json=MsgToJson(list_msg);
    connection.send(json)
  }