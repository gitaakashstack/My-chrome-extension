
var defaultmsgobj={type:"color",txt:"orangered"};
var msgobj=defaultmsgobj;
document.addEventListener("mouseup",callback);
chrome.runtime.onMessage.addListener(function(msg,sender){
    msgobj=msg;
    if(msgobj.type=="clear")
     {
          console.log("here");
          $(document).ready(function(){
              $(".highlight > *").unwrap();
              let nodelist=document.querySelectorAll(".highlight");
              for(let i=0;i<nodelist.length;i++)
                  $(nodelist[i].childNodes[0]).unwrap();

          });
          console.log("done");
          msgobj=defaultmsgobj;
     }
});


    

function callback(event)
{
    let selobj=window.getSelection();
    let selstr=selobj.toString();
    
    let str=selobj.anchorNode.nodeValue;
    if(selstr.length!=0)
    {
        let currange=selobj.getRangeAt(0);
        let cac=currange.commonAncestorContainer;
        let scPn=currange.startContainer.parentNode;
        let ecPn=currange.endContainer.parentNode;
        console.log(currange.commonAncestorContainer.nodeType);

        if(cac.nodeType==3 || (cac.nodeType!=3 && scPn.isEqualNode(cac) && ecPn.isEqualNode(cac)))
        {
            let newnode=document.createElement("span");
            newnode.className="highlight";
            newnode.style.backgroundColor=msgobj.txt;
            currange.surroundContents(newnode);
            colordeep(newnode); 
        }   
        else if(cac.nodeType!=3 && scPn.isEqualNode(cac) && !ecPn.isEqualNode(cac))
        {
            let Lrange=selobj.getRangeAt(0);
            let l=selstr.length;
            let Rrange=document.createRange();
            Rrange.setStart(Lrange.endContainer,0);
            Rrange.setEnd(Lrange.endContainer,Lrange.endOffset);
            let cacname=cac.nodeName;
            let cacnameinlc=cacname.toLowerCase();
            let immedparent=Lrange.endContainer.parentElement;
            let z=cacnameinlc+">*";
            let y=immedparent.closest(z);
            console.log(cacnameinlc);
            console.log(y);
            let endnode=y.previousSibling;
            console.log(endnode.nodeValue.length);
            Lrange.setEnd(endnode ,endnode.nodeValue.length);
            
            let Lnewnode=document.createElement("span");
            Lnewnode.className="highlight";
            Lnewnode.style.backgroundColor=msgobj.txt;
            let Rnewnode=Lnewnode.cloneNode(true);
            Lrange.surroundContents(Lnewnode);
            Rrange.surroundContents(Rnewnode);
            colordeep(Lnewnode);
           

        }       
        else if(cac.nodeType!=3 && !scPn.isEqualNode(cac) && ecPn.isEqualNode(cac))
        {
            let Rrange=selobj.getRangeAt(0);
            let l=selstr.length;
            let Lrange=document.createRange();
            Lrange.setStart(Rrange.startContainer,Rrange.startOffset);
            Lrange.setEnd(Rrange.startContainer,Rrange.startContainer.nodeValue.length);
            let cacname=cac.nodeName;
            let cacnameinlc=cacname.toLowerCase();
            let immedparent=Rrange.startContainer.parentElement;
            let z=cacnameinlc+">*";
            let y=immedparent.closest(z);
            console.log(cacnameinlc);
            console.log(y);
            let startnode=y.nextSibling;
            console.log(startnode.nodeValue.length);
            Rrange.setStart(startnode ,0);
            
            let Lnewnode=document.createElement("span");
            Lnewnode.className="highlight";
            Lnewnode.style.backgroundColor=msgobj.txt;
            let Rnewnode=Lnewnode.cloneNode(true);
            Lrange.surroundContents(Lnewnode);
            Rrange.surroundContents(Rnewnode);
            colordeep(Rnewnode);
           
        }
        else
        {
            let Lrange=selobj.getRangeAt(0);
            let l=selstr.length;
            let Mrange=document.createRange();
            let cacname=cac.nodeName;
            let cacnameinlc=cacname.toLowerCase();
            let immedparent=Lrange.startContainer.parentElement;
            let z=cacnameinlc+">*";
            let y=immedparent.closest(z);
            let startnode=y.nextSibling
            Mrange.setStart(startnode,0);
            cacname=cac.nodeName;
            cacnameinlc=cacname.toLowerCase();
            immedparent=Lrange.endContainer.parentElement;
            z=cacnameinlc+">*";
            y=immedparent.closest(z);
            let endnode=y.previousSibling;
            Mrange.setEnd(endnode,endnode.nodeValue.length);
            let Rrange=document.createRange();
            Rrange.setStart(Lrange.endContainer,0);
            Rrange.setEnd(Lrange.endContainer,Lrange.endOffset);
            Lrange.setEnd(Lrange.startContainer,Lrange.startContainer.nodeValue.length);

            let Lnewnode=document.createElement("span");
            Lnewnode.className="highlight";
            Lnewnode.style.backgroundColor=msgobj.txt;
            let Rnewnode=Lnewnode.cloneNode(true);
            let Mnewnode=Lnewnode.cloneNode(true);
            Lrange.surroundContents(Lnewnode);
            Rrange.surroundContents(Rnewnode);
            Mrange.surroundContents(Mnewnode);
            colordeep(Lnewnode);
            colordeep(Rnewnode);
            colordeep(Mnewnode);
        }
    }
    function colordeep(newnode)
    {
        let x=newnode.querySelectorAll("span *");
        $(document).ready(function(){
            $(x).wrapInner(`<span class="highlight" style="background-color:${msgobj.txt};"></span>`);
        });
            
    }
    

}
