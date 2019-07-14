

//This webSocket function is working!
function client(json){

    var displaytext=document.createElement("div");
    var displaytext=document.getElementById("displayTextClient");
    /**Convert json string back to message list*/
    var list_msg=JsonToMsg(json);

    /**Test if base64 image string can be put to message area */

    var block_to_insert = document.createElement( 'div' );
    block_to_insert.style.backgroundColor="#f1f1f1";
    block_to_insert.style.border= "2px solid #dedede";
    block_to_insert.style.maxWidth='600px';
 
  
    /**Alternative to onopen as websocket is already open when html file is open! */
    connection.send(json)
    //For text message
    if(parseInt(list_msg[0])==1){
      var replystr1=list_msg[6]+": "+list_msg[1]+"<br>";
      var result1=replystr1.fontcolor('f45384');
      block_to_insert.innerHTML+=result1;
      displaytext.appendChild(block_to_insert);    
    }else
    //For image message
    if(parseInt(list_msg[0])==2){
      var image = new Image();
      image.src='data:image/png;base64,'+list_msg[1];
      image.style.maxWidth='600px';
      //Maybe can append image into a conversation box before put to div(displaytext)
      block_to_insert.appendChild(image);
      displaytext.appendChild(block_to_insert);
      document.getElementById("typedTextClient").focus();
    }
    displaytext.scrollTop = displaytext.scrollHeight;


    /**WebSocket OnError */
    connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
    }

    /**WebSocket OnMessage */
    
    connection.onmessage = (e) => {
     

    //Convert received string back to message list  
    var list_msg_r=JsonToMsg(e.data);

    //Check if message type is 9 for user list
    if(parseInt(list_msg_r[0])==9) {

      var userList=JSON.parse(list_msg_r[1]);
      if(userList.length>list_of_chatElement.length){ //It's time to update list_of_chatElement if there is new user
        var newChat=new chat(userList[userList.length-1],createChatEle())
        list_of_chatElement.add(newChat)
      }
      var userDiv=document.getElementById('displayUserList');
      //Empty userList before insert new one
      userDiv.innerHTML="";
      for(var i=0;i<userList.length;i++){
      //userDiv.innerHTML+=userList[i]+"<br>";
      //Call for function createListElement
      createListElement(userList[i]);
      }
    } else
    //For text message
    if(parseInt(list_msg_r[0])==1) {
      
      var replystr="&emsp;&emsp;"+list_msg_r[6]+": "+list_msg_r[1]+"<br>";
      var result=replystr.fontcolor('#997106');
      block_to_insert.innerHTML+=result;
      displaytext.appendChild(block_to_insert); 
      
    } else
    //For image message
    if(parseInt(list_msg_r[0])==2){
      alert('type 2 msg')
      var image = new Image();
      image.style.maxWidth='600px';
      image.src='data:image/png;base64,'+list_msg_r[1];
      block_to_insert.appendChild(image);
      displaytext.appendChild(block_to_insert);
      document.getElementById("typedTextClient").focus();
    }
    
    displaytext.scrollTop = displaytext.scrollHeight;
  }
  /** */

}

/**Bind "Enter" key to send text message button */
function bindEnterkey(){
var input = document.getElementById("typedTextClient");
        input.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
           event.preventDefault();
           document.getElementById("sendButton").click();
          }
});
}






