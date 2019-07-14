/**Class to store message content **/

class Message{
    //Define all the info comprised in message and leave null for default
    constructor(MsgType,MsgText,dstAddressReceive,portNoReceive,dstAddressSend,recipientChatName,chatName){
      
    if(MsgType==null){MsgType="1";}
    if(MsgText==null){MsgText="BabaLand";}
    if(dstAddressReceive==null){dstAddressReceive="192.168.1.103";}
    if(portNoReceive==null){portNoReceive="8080";} 
    if(dstAddressSend==null) {dstAddressSend="192.168.1.104";}
    if(recipientChatName==null){recipientChatName="potatoBoy1";}
    if(chatName==null){chatName="potatoBoy1";}
  
    this.MsgType=MsgType; 
    this.MsgText=MsgText; 
    this.dstAddressReceive=dstAddressReceive; 
    this.portNoReceive=portNoReceive; 
    this.dstAddressSend=dstAddressSend; 
    this.recipientChatName=recipientChatName; 
    this.chatName=chatName; 
    
  }
  
    GetMsgType(){return this.MsgType;}
    GetMsgText(){return this.MsgText;}
    GetDstReceive(){return this.dstAddressReceive;}
    GetportReceive(){return this.portNoReceive;}
    GetDstSend(){return this.dstAddressSend;}
   
    SetRecipientChatName(recipientChatName){this.recipientChatName=recipientChatName;}
    GetRecipientChatName(){return this.recipientChatName;}
    SetchatName(chatName){this.chatName=chatName;}
    GetchatName(){return this.chatName;}
    SetBase64Img(base64Img){this.base64Img=base64Img;}
    GetBase64Img(){return this.base64Img;}
  
  }
  