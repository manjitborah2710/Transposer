var convert_btn=document.getElementById("convert-btn");

convert_btn.onclick=convert;

function convert(){
    var org_key=Number(document.getElementById("org_key").value);
    var fin_key=Number(document.getElementById("fin_key").value);

    var res=document.getElementById("res-p");

    var notes=['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
    var n=12;
    var diff=fin_key-org_key;
    diff=((diff%12)+12)%12
    var result_str="<span class='title-blue'>Resultant Chord Sheet</span><br>";
    for(var i=0;i<12;i++){
        result_str+="<span class='org'>"+notes[i]+"</span>"+" ---> "+"<span class='fin'>"+notes[((i+diff)%12)]+"</span><br>";
    }

    res.innerHTML=result_str;
}

