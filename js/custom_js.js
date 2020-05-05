var convert_btn=document.getElementById("convert-btn");

convert_btn.onclick=convert;

function convert(){

    var notes=['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
    var chord_types={
        'major':['maj','min','min','maj','maj','min','dim'],
        'minor':['min','dim','maj','min','min','maj','maj']
    };
    var chord_intervals={
        'major':[0,2,2,1,2,2,2],
        'minor':[0,2,1,2,2,1,2]
    };
    var type_of_key_det=["major","minor"];

    // var chord_types_maj=['maj','min','min','maj','maj','min','dim'];
    // var chord_interval_maj=[0,2,2,1,2,2,2];
    // var chord_types_min=['min','dim','maj','min','min','maj','maj'];
    // var chord_interval_min=[0,2,1,2,2,1,2];
    // w w h w w w h
    // w h w w h w w
    var org_key=document.getElementById("org_key").value;
    var fin_key=document.getElementById("fin_key").value;
    var type=document.getElementById("type").value;


    if(org_key!="" && fin_key!="" && type!=""){
        var rm=false;
        org_key=Number(org_key);
        fin_key=Number(fin_key);
        if(fin_key==12) {
            fin_key=org_key;
            rm=true;
        }
        type=Number(type);
        var type_of_key=type_of_key_det[type];


        var n=12;
        var diff=fin_key-org_key;
        diff=((diff%12)+12)%12;


        var chords_in_org_key=[];
        var chords_in_fin_key=[];

        var temp=org_key;
        for(var i=0;i<chord_intervals[type_of_key].length;i++){
            temp=(temp+chord_intervals[type_of_key][i])%12;
            chords_in_org_key.push((notes[temp]+chord_types[type_of_key][i]));
            chords_in_fin_key.push((notes[(temp+diff)%12]+chord_types[type_of_key][i]));
        }


        if(rm){
            var start;
            if(type_of_key=="minor") start=2;
            else start=5;
            var result_str="<span class='title-blue'>The <b>relative "+type_of_key_det[(type+1)%2]+"</b> key of <b>"+chords_in_org_key[0]+"</b> is <b>"+chords_in_org_key[start]+"</b> and the chords are</span><br>";
            result_str+="Key : <span><b>"+chords_in_org_key[start]+"</b></span><br>"

            for(var i=0;i<chords_in_org_key.length;i++){
                result_str+="<span class='fin'>"+chords_in_fin_key[(i+start)%chords_in_fin_key.length]+"</span>&nbsp;&nbsp;&nbsp;";
            }
            result_str+="<br>"

            var res=document.getElementById("res-p");
            res.innerHTML=result_str;
        }

        else{
            var result_str="<span class='title-blue'>Resultant Chord Sheet</span><br>";
            result_str+="<span><b>"+notes[org_key]+" "+type_of_key+"</b></span> to <span><b>"+notes[fin_key]+" "+type_of_key+"</b></span><br>"
            for(var i=0;i<chords_in_org_key.length;i++){
                result_str+="<span class='org'>"+chords_in_org_key[i]+"</span>"+" ---> "+"<span class='fin'>"+chords_in_fin_key[i]+"</span><br>";
            }

            var res=document.getElementById("res-p");
            res.innerHTML=result_str;
        }

    }
    else {
        alert("You must choose all the 3 options");
    }


}

