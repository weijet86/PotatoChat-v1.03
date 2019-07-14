/**Function to convert JSON String back to message**/
function JsonToMsg(json){
    var list_msg=JSON.parse(json);
    var list_msg_final
    switch(parseInt(list_msg[0])){
      case 1:
        list_msg_final=list_msg;
      break;
      case 2:
        var Img=JSON.parse(list_msg[1]);
        list_msg[1]=Img;
        list_msg_final=list_msg;
      break;
      case 9:
        list_msg_final=list_msg;
        break;
    }
  
    return list_msg_final;
  }
  
  /**Function to convert message to JSON string**/
  function MsgToJson(list_msg){
    var json;
    
    switch(parseInt(list_msg[0])){
      case 1:
      json=JSON.stringify(list_msg);
      break;
      case 2:
      var JStringImg=JSON.stringify(list_msg[1]);
      list_msg[1]=JStringImg;
      json=JSON.stringify(list_msg);
      break;
    }
  
  
    return json;
  }