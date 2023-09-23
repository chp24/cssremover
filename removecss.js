window.onload = function() {
    document.getElementById("btn").onclick = function(){removestyles()};
    function removestyles(){
        var txt = document.getElementById("userInputBox").value;
        var tempTxt = txt;
        //iterate through text and stop if we see "<style or style=" "
        var i=0;
        var j=0;
        var y = 0;
        //setting up temp string to hold chunk of text we will be removing from the larger text
        var tempString = "";
        var styleStart = "";
        for(i=0;i<tempTxt.length-3;i++){
            //if we find an < in the html
            if(tempTxt[i]=="<" ){
                j = i;
                //begin a new loop that will stop once we hit the end of the tag
                while(tempTxt[j] !== ">"){
                    //if we see the beginning of the word style, we know its a style tag
                    if(tempTxt[j] == "s" && tempTxt[j+1] == "t" && tempTxt[j+2] == "y"){
                        //store beginning of style attribute
                        styleStart = j;
                        //new iterator for going from beginning to end of style attribute
                        y =j;
                        //continue until we hit a double quotation mark followed by a space, or the end of the tag >
                        while(tempTxt[y] !== '"' && tempTxt[y+1] !== " " && tempTxt[y+1] !== ">"){
                            //mark the new end
                            styleEnd = y+1;
                            //replace with empty character :)
                            tempTxt[y] = '';
                            y++;
                        }
                    }
                    j++;
                }
            }
        }
        document.getElementById("result").innerText = tempTxt;

    }
}