window.onload = function() {
    document.getElementById("btn").onclick = function(){removestyles()};
    function removestyles(){
        var txt = document.getElementById("userInputBox").value;
        var tempTxt = txt;
        //iterate through text and stop if we see "<style or style=" "
        var i=0;
        for(i=0;i<txt.length-5;i++){
            if(txt[i]=="<" && txt[i+1] == "s" && txt[i+2] == "t" && txt[i+3] == "y"){

            }
        }
        document.getElementById("result").innerText = i;

    }
}