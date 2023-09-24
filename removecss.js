window.onload  =  function () {
    document.getElementById ( "btn" ). onclick  =  function (){ removestyles ()};
    function   removestyles (){
        var   txt  =  document.getElementById ( "userInputBox" ).value ;
        var   tempTxt  =  txt.toString ();
        //iterate through text and stop if we see "<style or style=" "
        var   i = 0 ;
        var   j = 0 ;
        var   y  =  0 ;
        //setting up temp string to hold chunk of text we will be removing from the larger text
        var endTxt = "";
        var   styleStart  =  "" ;
        var   check  =  true ;
        for(i=0;i<tempTxt.length-3;i++){
            //if we find an < in the html
            if(tempTxt[i]=="<" ){
                j = i;
                //begin a new loop that will stop once we hit the end of the tag
                while (tempTxt[j] !==  ">" ){
                    //if we see the beginning of the word style, we know its a style attribute
                    if (tempTxt[j]== "s" && tempTxt [j+1] == "t" && tempTxt[j+2]== "y"){
                        //new iterator for going from beginning to end of style attribute
                        console.log (i,tempTxt[j]);
                        styleStart = j
                        y = j;
                        check = true;
                        //while we know the if statements are false
                        while ( check == true){
                            console.log(tempTxt[y], tempTxt[y+1]);
                            //if our current character is a double quote followed by a space, we know the style attribute has ended
                            if ( tempTxt[y]=='"' && tempTxt[y+1] == " "){
                                endTxt = tempTxt.substring(0,j-1)+tempTxt.substring(y+1);
                                console.log("string subbed");
                                check = false ;
                           }
                            //we also know it has ended if
                            else if(tempTxt[y]=='"'&& tempTxt[y+1]== ">"){
                                endTxt = tempTxt.substring(0,j-1)+tempTxt.substring(y+1);
                                console.log("string subbed");
                                check = false ;
                           }
                            console.log(y);
                            y++;
                       }
                   }
                j++;
               }
           }
       }
        document.getElementById("result").innerText = endTxt ;
   }
}