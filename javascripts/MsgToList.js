/**Convert Message to list_msg */
function MessagetoList(Message){
    var list_msg=[];
    list_msg[0]=Message.GetMsgType();
    list_msg[2]=Message.GetDstReceive();
    list_msg[3]=Message.GetportReceive();
    list_msg[4]=Message.GetDstSend();
    list_msg[5]=Message.GetRecipientChatName();
    list_msg[6]=Message.GetchatName();
    
    switch(parseInt(list_msg[0])){
      case 1:
      list_msg[1]=Message.GetMsgText();
      break;
      case 2:
      list_msg[1]=Message.GetBase64Img();
      break;
    }
    
    return list_msg;
    }