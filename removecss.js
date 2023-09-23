window.onload = function() {
    document.getElementById("btn").onclick = function(){removestyles()};
    function removestyles(){
        var txt = document.getElementById("userInputBox").value;
        var tempTxt = txt;
        //iterate through text and stop if we see "<style or style=" "
        var i=0;
        var j=0;
        //setting up temp string to hold chunk of text we will be removing from the larger text
        var tempString = "";
        for(i=0;i<txt.length-5;i++){
            //if we find an < in the html
            if(txt[i]=="<" ){
                j = i;
                //begin a new loop that will stop once we hit the end of the tag
                while(txt[j] !== ">"){
                    if(txt[j] == "s" && txt[j+1] == "t" && txt[j+2] == "y"){
                        
                    }
                }
                //now we know we have found a style=
            }
        }
        document.getElementById("result").innerText = i;

    }
}