var connection
var list_of_chatElement=[]
var userList

var conStatus=2 //1-Connected to server successfully, 2- Can't connect to server

class runWebSoc{
runWs(){

        connection=new WebSocket("ws://localhost:8080") //start websocket
        connection.onopen=()=>{
                alert('connection is open')
                conStatus=1
        }
        
        
        /**WebSocket OnMessage */
        connection.onmessage = (e) => {
               
        //Convert received string back to message list  
        var list_msg_r=JsonToMsg(e.data);

        /**For message type 1-text message */
        if(parseInt(list_msg_r[0])==1){
                blinktab()
                   
                refreshUserList.click() //This is temporary solution for receiving message from users not on app userlist yet!
                
                setTimeout(function (){
                // Something you want delayed.
         
                updateType1Msg(list_msg_r)
                
                }, 200);
                
        }
        /** */
        /**Check if message type is 9 for user list */
        if(parseInt(list_msg_r[0])==9) {
        userList=JSON.parse(list_msg_r[1]);
        userlistElement.innerHTML=""
        notiListEle.innerHTML=""
        for(var i=0;i<userList.length;i++){
        //Call for function createListElement
        createListElement(userList[i]);
      
        } 
        
        //It's time to update list_of_chatElement if there is new user
        //alert("userList size is "+userList.length);
        //alert("list_of_chatElement size is "+list_of_chatElement.length);
        if(userList.length>list_of_chatElement.length){ 
                //alert('userList is bigger than list_of_chatElement');
                var netLength=userList.length-list_of_chatElement.length
                for(var i=0;i<netLength;i++){ //Loop as many time as netLength to create as many new Chat elements.
                        var newChat=new chat(userList[userList.length-i-1],createChatEle(userList[userList.length-i-1]))
                        list_of_chatElement[userList.length-i-1]=newChat
                        unreadMsgCountList[userList.length-i-1]=0  //This would create count list only once when there is new user
                        //alert('i is '+i+"URMCL is "+unreadMsgCountList[i])
                }
                
                
        } 
        //blinkdiv(userList[0])
        
        }
        /** */
}

        

}


        

}


function updateType1Msg(list_msg_r){
        var replystr="&emsp;&emsp;"+list_msg_r[6]+": "+list_msg_r[1]+"<br>";
        var result=replystr.fontcolor('#997106');
        //Search for the right position of chat element with sender's name
        var senderName=list_msg_r[6]
        //alert(`Sender's name is `+senderName)
        var sendPos
        //alert(`list_of_chatElement length is `+list_of_chatElement.length)
        sendPos=searchSenderPos(senderName)
        //Call of the right chat element with acquired sender's position
        list_of_chatElement[sendPos].getChatElement().getElementsByTagName('div')[0].innerHTML+=result
        list_of_chatElement[sendPos].getChatElement().getElementsByTagName('div')[0].scrollTop = list_of_chatElement[sendPos].getChatElement().getElementsByTagName('div')[0].scrollHeight
        blinkdiv(userList[sendPos])
}

function searchSenderPos(senderName){
        var sendPos
        for(var x=0;x<userList.length;x++){
                if(userList[x]==senderName){sendPos=x; /** alert(`sender position is `+sendPos)*/}
        }
        return sendPos
}