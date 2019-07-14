var unreadMsgCount=0
var STO

function blinktab() {
    normaltab()    
    unreadMsgCount++    
    var n = 0;
    var t = `You got ${unreadMsgCount} unread message`; // original page title
    var f = function() {
        n ++;
        switch (n) {
            case 3: 
                n = 1; // no break, so continue to next label
            case 1: 
                document.title = '☆ ☆ '+ t + ' ★ ★'; 
                break;
            default: 
                document.title = '★ ★ '+ t + ' ☆ ☆';
        }
        STO=window.setTimeout(f, 500); // every 500ms, adjust if necessary
        
    }
    f(); // start the animation
    hiddencheck();
}; 


function normaltab(){ //call normal tab after chat window is open
    window.clearTimeout(STO)
    document.title='PotatoChat';

}
function hiddencheck(){
    if(document.hidden==false){ //When app tab is currently open
        setTimeout(normaltab(),3000)
        unreadMsgCount=0
    }
}


document.addEventListener('visibilitychange', function(e) {
    //alert(`I'm back!`)
    hiddencheck();
    normalDiv(list_of_chatElement[index].getUsername())
    unreadMsgCountList[index]=0
});

var listInfo
var unreadMsgCountList=[]
var STOdiv=[]
function blinkdiv(senderName){
    var sendPos
    //Get user position in user list
    sendPos=searchSenderPos(senderName)
    
    normalDiv(senderName)
    
   
    unreadMsgCountList[sendPos]++ 
    var n = 0;
    var t = `(${unreadMsgCountList[sendPos]})`; // original page title
    var f = function() {
        n ++;
        switch (n) {
            case 3: 
                n = 1; // no break, so continue to next label
            case 1: 
                notiListEle.getElementsByTagName('div')[sendPos].innerHTML = '☆'+ t + '★'; 
                break;
            default: 
                notiListEle.getElementsByTagName('div')[sendPos].innerHTML = '★'+ t + '☆';
        }
        STOdiv[sendPos]=setTimeout(f, 500); // every 500ms, adjust if necessary
        
    }
    f();
}

function normalDiv(senderName){
    var sendPos
    sendPos=searchSenderPos(senderName)
    clearTimeout(STOdiv[sendPos])
    notiListEle.getElementsByTagName('div')[sendPos].innerHTML =""+"<br>"
}
