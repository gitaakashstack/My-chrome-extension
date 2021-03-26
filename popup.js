document.addEventListener("DOMContentLoaded",execute);
function execute(){
document.getElementById("c1").addEventListener("click",callback1);
document.getElementById("c2").addEventListener("click",callback2);
document.getElementById("c3").addEventListener("click",callback3);
document.getElementById("c4").addEventListener("click",callback4);
document.getElementById("btn").addEventListener("click",callback5);
}
function callback1(){
    let param={active:true , currentWindow:true};
    chrome.tabs.query(param,function(tabs){
        console.log(tabs);
        let msg={type:"color",txt:"orangered"};
        chrome.tabs.sendMessage(tabs[0].id,msg);
    });

}
function callback2(){
    let param={active:true , currentWindow:true};
    chrome.tabs.query(param,function(tabs){
        console.log(tabs);
        let msg={type:"color",txt:"steelblue"};
        chrome.tabs.sendMessage(tabs[0].id,msg);
    });

}
function callback3(){
    let param={active:true , currentWindow:true};
    chrome.tabs.query(param,function(tabs){
        console.log(tabs);
        let msg={type:"color",txt:"greenyellow"};
        chrome.tabs.sendMessage(tabs[0].id,msg);
    });

}
function callback4(){
    let param={active:true , currentWindow:true};
    chrome.tabs.query(param,function(tabs){
        console.log(tabs);
        let msg={type:"color",txt:"mediumorchid"};
        chrome.tabs.sendMessage(tabs[0].id,msg);
    });

}
function callback5(){
    let param={active:true , currentWindow:true};
    chrome.tabs.query(param,function(tabs){
        console.log(tabs);
        let msg={type:"clear",txt:"true"};
        chrome.tabs.sendMessage(tabs[0].id,msg);
    });

}
