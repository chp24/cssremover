window.onload = function() {
    document.getElementById("btn").onclick = function(){removestyles()};
    function removestyles(){
        var txt = document.getElementById("userInputBox").value;
        var tempTxt = txt;
        //iterate through text and stop if we see "<style or style=" "
        var i=0;
        var tempString = "";
        for(i=0;i<txt.length-5;i++){
            //if we find a < in the html, check if the next 3 characters begin to spell style
            if(txt[i]=="<" && txt[i+1] == "s" && txt[i+2] == "t" && txt[i+3] == "y"){
                //establish a temp array to mark the beginning of the tag

            }
        }
        document.getElementById("result").innerText = i;

    }
}