var yin=["OH","NO<sub>3<sub>","Cl","SO<sub>4<sub>","CO<sub>3<sub>"];
var yang=["H","NH<sub>4<sub>","K","Na","Ba","Ca","Mg","Al","Mn","Zn","Fe","Fe","Cu","Ag"];
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

var Ayang=Math.floor(Math.random()*15);
var Ayin=Math.floor(Math.random()*5);
var Byang=Math.floor(Math.random()*15);
var Byin=Math.floor(Math.random()*5);

while(Ayang==0 && Ayin==4) Ayang=Math.floor(Math.random()*15),Ayin=Math.floor(Math.random()*5);
while(Byang==0 && Byin==4) Byang=Math.floor(Math.random()*15),Byin=Math.floor(Math.random()*5);

function compound(yang,yin)
{
    var yangstl="",yangstr="",yinstl="",yinstr="";
    if(yang==1) yangstl="(",yangstr=")";
    if(yin!=2) yinstl="(",yinstr=")";
    if(yinv[yin]==-1 && yangv[yang]==1) return yangn[yang]+yinn[yin];
    if(yinv[yin]==-1 && yangv[yang]==2) return yangn[yang]+yinstl+yinn[yin]+yinstr+"<sub>2</sub>";
    if(yinv[yin]==-1 && yangv[yang]==3) return yangn[yang]+yinstl+yinn[yin]+yinstr+"<sub>3</sub>";
    if(yinv[yin]==-2 && yangv[yang]==1) return yangstl+yangn[yang]+yangstr+"<sub>2</sub"+yinn[yin];
    if(yinv[yin]==-2 && yangv[yang]==2) return yangn[yang]+yinn[yin];
    if(yinv[yin]==-2 && yangv[yang]==3) return yangstl+yangn[yang]+yangstr+"<sub>2</sub>"+yinstl+yinn[yin]+yinstr+"<sub>3</sub>";
}

document.getElementById("prob").innerHTML=compound(7,3);