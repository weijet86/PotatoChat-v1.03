var chatNameDisplay=document.createElement('div')
chatNameDisplay.style.position='absolute'
chatNameDisplay.style.overflow='visible'
chatNameDisplay.style.width='250px'
chatNameDisplay.style.height='50px'
chatNameDisplay.style.left='1150px'
chatNameDisplay.style.top='80px'
chatNameDisplay.style.fontSize='18px'
chatNameDisplay.style.border="2px solid black"


var chatNameEntry=document.createElement('input')
chatNameEntry.type='text'
chatNameEntry.placeholder='Enter your chat name...'
chatNameEntry.style.position='absolute'
chatNameEntry.style.overflow='visible'
chatNameEntry.style.width='250px'
chatNameEntry.style.height='50px'
chatNameEntry.style.left='1150px'
chatNameEntry.style.top='80px'
chatNameEntry.style.fontSize='18px'

var setChatNameBut=document.createElement('button')
setChatNameBut.innerHTML='Click to set chat name'
setChatNameBut.style.cssText='position: absolute;overflow: visible;width: 250px;height: 50px;left: 1150px;top: 150px;font-size: 18px'
document.getElementById('ChatNameSection').appendChild(chatNameEntry)
document.getElementById('ChatNameSection').appendChild(setChatNameBut)


//var setChatNameBut=document.getElementById('EnterChatNameBut')
setChatNameBut.addEventListener('click',function(e){
    //alert('setchatname button is clicked!')

    chatName=document.getElementById('ChatNameSection').getElementsByTagName('input')[0].value
    
    
    

    refreshUserList.click()

    //TODO-After you click set chat name, there will be 3 potential outcomes.
    //1) conStatus=2, client can't connect to server.
    //2) conStatus=1, client connects to server, but can't retrieve userlist, means username already exists!
    //3) conStatus=1, client connects to servver, everything is running perfectly!
    switch(conStatus){
        case 1:
        setTimeout(function (){
        if(userList==undefined){
            alert("Username already exists, please choose another name!")
            
        }else
        {
        alert("Connected to server successfully!")
        document.getElementById('ChatNameSection').innerHTML=''
        chatNameDisplay.innerHTML="I'm "+chatName
        document.getElementById('ChatNameSection').appendChild(chatNameDisplay)
        }
        },200)
        break;
        
        case 2:
        alert("Can't connect to server!")
        break;
    }
    
})  