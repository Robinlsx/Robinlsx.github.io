var yin=["OH","NO<sub>3</sub>","Cl","SO<sub>4</sub>","CO<sub>3</sub>"];
var yang=["H","NH<sub>4</sub>","K","Na","Ba","Ca","Mg","Al","Mn","Zn","Fe","Fe","Cu","Ag"];
var yinn=["氢氧化","硝酸","氯化","硫酸","碳酸"];
var yangn=["氢","铵","钾","钠","钡","钙","镁","铝","锰","锌","亚铁","铁","铜","银"];
var yinv=[-1,-1,-1,-2,-2];
var yangv=[1,1,1,1,2,2,2,3,2,2,2,3,2,1];
var rjx=[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,3,2],
    [1,0,0,1,2],
    [2,0,0,0,1],
    [2,0,0,0,-1],
    [2,0,0,0,2],
    [2,0,0,0,2],
    [2,0,0,0,2],
    [2,0,0,0,-1],
    [2,0,0,0,-1],
    [-1,0,3,1,2]
];

function compound(yangno,yinno)
{
    if(yangno==0 && yinno==0) return "H<sub>2</sub>O";
    if(yangno==1 && yinno==0) return "NH<sub>3</sub>·H<sub>2</sub>O";
    var yangstl="",yangstr="",yinstl="",yinstr="";
    if(yangno==1) yangstl="(",yangstr=")";
    if(yinno!=2) yinstl="(",yinstr=")";
    if(yinv[yinno]==-1 && yangv[yangno]==1) return yang[yangno]+yin[yinno];
    if(yinv[yinno]==-1 && yangv[yangno]==2) return yang[yangno]+yinstl+yin[yinno]+yinstr+"<sub>2</sub>";
    if(yinv[yinno]==-1 && yangv[yangno]==3) return yang[yangno]+yinstl+yin[yinno]+yinstr+"<sub>3</sub>";
    if(yinv[yinno]==-2 && yangv[yangno]==1) return yangstl+yang[yangno]+yangstr+"<sub>2</sub>"+yin[yinno];
    if(yinv[yinno]==-2 && yangv[yangno]==2) return yang[yangno]+yin[yinno];
    if(yinv[yinno]==-2 && yangv[yangno]==3) return yangstl+yang[yangno]+yangstr+"<sub>2</sub>"+yinstl+yin[yinno]+yinstr+"<sub>3</sub>";
}

function getCompoundName(yangno,yinno)
{
    if(yangno==0 && yinno==0) return "水";
    if(yangno==1 && yinno==0) return "氨水";
    if(yangno==0 && (yinno==1 || yinno==3 || yinno==4)) return yinn[yinno];
    return yinn[yinno]+yangn[yangno];
}

function test()
{
    for(var i=0; i<5; i++)
        for(var j=0; j<14; j++)
            document.getElementById("prob").innerHTML+="<br>"+compound(j,i)+" "+getCompoundName(j,i);
}

function generateProblem()
{
    var Ayang=Math.floor(Math.random()*14);
    var Ayin=Math.floor(Math.random()*5);
    var Byang=Math.floor(Math.random()*14);
    var Byin=Math.floor(Math.random()*5);

    //while (Ayang == 15) Ayang = Math.floor(Math.random() * 15);
    //while (Byang == 15) Byang = Math.floor(Math.random() * 15);
    //while (Ayin == 5) Ayin = Math.floor(Math.random() * 5);
    //while (Byin == 5) Byin = Math.floor(Math.random() * 5);
    
    while(Ayang==0 && Ayin==4) Ayang=Math.floor(Math.random()*14),Ayin=Math.floor(Math.random()*5);
    while(Byang==0 && Byin==4) Byang=Math.floor(Math.random()*14),Byin=Math.floor(Math.random()*5);
    while(Byang==Ayang && Byin==Ayin) Byang=Math.floor(Math.random()*14),Byin=Math.floor(Math.random()*5);

    console.log("A=["+Ayang+","+Ayin+"], B=["+Byang+","+Byin+"]")
    document.getElementById("prob").innerHTML+="写出"+getCompoundName(Ayang,Ayin)+"和"+getCompoundName(Byang,Byin)+"反应的化学方程式：<br>";
}

function getProblem()
{
    var probNum=parseInt(document.getElementById("probNum").value);
    document.getElementById("prob").innerHTML="";
    for(var _=0; _<probNum; _++)
        document.getElementById("prob").innerHTML+=(_+1)+". ",generateProblem();
}