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
        var check = true;
        for(i=0;i<tempTxt.length-3;i++){
            //if we find an < in the html
            if(tempTxt[i]=="<" ){
                j = i;
                //begin a new loop that will stop once we hit the end of the tag
                while(tempTxt[j] !== ">"){
                    //if we see the beginning of the word style, we know its a style attribute
                    if(tempTxt[j] == "s" && tempTxt[j+1] == "t" && tempTxt[j+2] == "y"){
                        //new iterator for going from beginning to end of style attribute
                        console.log(i, tempt[Txt[j]]);
                        y =j;
                        //while we know the if statements are false
                        while(check == true){
                            //if our current character is a double quote followed by a space, we know the style attribute has ended
                            if(tempTxt[y] == '"' && tempTxt[y+1] ==" "){
                                tempTxt[y+1] = '';
                                check = false;
                            }
                            //we also know it has ended if
                            else if(tempTxt[y]=='"'&& tempTxt[y+1]==">"){
                                check = false;
                            }
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