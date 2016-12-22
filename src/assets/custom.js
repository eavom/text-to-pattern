
function Clicked()
{
    
    var str = document.getElementById('txtString').value;
    var intNot = isNaN(parseInt(document.getElementById('txtLuckyNumber').value)) ? -1 : parseInt(document.getElementById('txtLuckyNumber').value);
    
    
    if(str.length<= 0){
        alert("Please enter at least one characted!");
        return;
    }
    
    if(intNot.length>1 || intNot<0 || intNot==1){
        alert("Please enter lucky number between 0 to 9 except 1!");
        return;
    }
    
    str = str.toLowerCase();
    
    str = str.replace(/ /g, '_'); 
    
    var line = new Array(7);

    var letter = [];
    
    letter['_1'] = '--';
    letter['_2'] = '--';
    letter['_3'] = '--';
    letter['_4'] = '--';
    letter['_5'] = '--';
    letter['_6'] = '--';
    letter['_7'] = '--';
    
    letter['a1'] = '---###---';
    letter['a2'] = '--#####--';
    letter['a3'] = '-##---##-';
    letter['a4'] = '##-----##';
    letter['a5'] = '#########';
    letter['a6'] = '##-----##';
    letter['a7'] = '##-----##';
    
    letter['b1'] = '#######--';
    letter['b2'] = '##-----##';
    letter['b3'] = '##-----##';
    letter['b4'] = '#######--';
    letter['b5'] = '##-----##';
    letter['b6'] = '##-----##';
    letter['b7'] = '#######--';
    
    letter['c1'] = '-#######';
    letter['c2'] = '##------';
    letter['c3'] = '##------';
    letter['c4'] = '##------';
    letter['c5'] = '##------';
    letter['c6'] = '##------';
    letter['c7'] = '-#######';
    
    letter['d1'] = '#######--';
    letter['d2'] = '##-----##';
    letter['d3'] = '##-----##';
    letter['d4'] = '##-----##';
    letter['d5'] = '##-----##';
    letter['d6'] = '##-----##';
    letter['d7'] = '#######--';
    
    letter['e1'] = '#########';
    letter['e2'] = '##-------';
    letter['e3'] = '##-------';
    letter['e4'] = '#######--';
    letter['e5'] = '##-------';
    letter['e6'] = '##-------';
    letter['e7'] = '#########';
    
    letter['f1'] = '#########';
    letter['f2'] = '##-------';
    letter['f3'] = '##-------';
    letter['f4'] = '#######--';
    letter['f5'] = '##-------';
    letter['f6'] = '##-------';
    letter['f7'] = '##-------';
    
    letter['g1'] = '########-';
    letter['g2'] = '##-------';
    letter['g3'] = '##-------';
    letter['g4'] = '##--#####';
    letter['g5'] = '##--##-##';
    letter['g6'] = '##-----##';
    letter['g7'] = '########-';		
    
    letter['h1'] = '##------##';
    letter['h2'] = '##------##';
    letter['h3'] = '##------##';
    letter['h4'] = '##########';
    letter['h5'] = '##------##';
    letter['h6'] = '##------##';
    letter['h7'] = '##------##';
    
    letter['i1'] = '##########';
    letter['i2'] = '----##----';
    letter['i3'] = '----##----';
    letter['i4'] = '----##----';
    letter['i5'] = '----##----';
    letter['i6'] = '----##----';
    letter['i7'] = '##########';
    
    letter['j1'] = '-#########';
    letter['j2'] = '-----##---';
    letter['j3'] = '-----##---';
    letter['j4'] = '-----##---';
    letter['j5'] = '-----##---';
    letter['j6'] = '-##--##---';
    letter['j7'] = '--####----';
    
    letter['k1'] = '##----###';
    letter['k2'] = '##---##--';
    letter['k3'] = '##-###---';
    letter['k4'] = '####-----';
    letter['k5'] = '##-###---';
    letter['k6'] = '##---##--';
    letter['k7'] = '##----###';
    
    letter['l1'] = '##--------';
    letter['l2'] = '##--------';
    letter['l3'] = '##--------';
    letter['l4'] = '##--------';
    letter['l5'] = '##--------';
    letter['l6'] = '##--------';
    letter['l7'] = '##########';
    
    letter['m1'] = '####----####';
    letter['m2'] = '##-##--##-##';
    letter['m3'] = '##--####--##';
    letter['m4'] = '##---##---##';
    letter['m5'] = '##--------##';
    letter['m6'] = '##--------##';
    letter['m7'] = '##--------##';
    
    letter['n1'] = '####------##';
    letter['n2'] = '##-##-----##';
    letter['n3'] = '##--##----##';
    letter['n4'] = '##---##---##';
    letter['n5'] = '##----##--##';
    letter['n6'] = '##-----##-##';
    letter['n7'] = '##------####';
    
    letter['o1'] = '--######--';
    letter['o2'] = '##------##';
    letter['o3'] = '##------##';
    letter['o4'] = '##------##';
    letter['o5'] = '##------##';
    letter['o6'] = '##------##';
    letter['o7'] = '--######--';
    
    letter['p1'] = '-#######--';
    letter['p2'] = '##------##';
    letter['p3'] = '##------##';
    letter['p4'] = '########--';
    letter['p5'] = '##--------';
    letter['p6'] = '##--------';
    letter['p7'] = '##--------';
    
    letter['q1'] = '-#########-';
    letter['q2'] = '##-------##';
    letter['q3'] = '##-------##';
    letter['q4'] = '##-------##';
    letter['q5'] = '##---##--##';
    letter['q6'] = '##----##-##';
    letter['q7'] = '-#########-';
    
    letter['r1'] = '-#######--';
    letter['r2'] = '##------##';
    letter['r3'] = '##------##';
    letter['r4'] = '########--';
    letter['r5'] = '##--##----';
    letter['r6'] = '##---##---';
    letter['r7'] = '##----###-';
    
    letter['s1'] = '-########-';
    letter['s2'] = '##--------';
    letter['s3'] = '##--------';
    letter['s4'] = '-########-';
    letter['s5'] = '--------##';
    letter['s6'] = '--------##';
    letter['s7'] = '#########-';
    
    letter['t1'] = '##########';
    letter['t2'] = '----##----';
    letter['t3'] = '----##----';
    letter['t4'] = '----##----';
    letter['t5'] = '----##----';
    letter['t6'] = '----##----';
    letter['t7'] = '----##----';
    
    letter['u1'] = '##------##';
    letter['u2'] = '##------##';
    letter['u3'] = '##------##';
    letter['u4'] = '##------##';
    letter['u5'] = '##------##';
    letter['u6'] = '##------##';
    letter['u7'] = '--######--';
    
    letter['v1'] = '##-----##';
    letter['v2'] = '##-----##';
    letter['v3'] = '##-----##';
    letter['v4'] = '##-----##';
    letter['v5'] = '-##---##-';
    letter['v6'] = '--##-##--';
    letter['v7'] = '---###---';
    
    letter['w1'] = '##--------##';
    letter['w2'] = '##--------##';
    letter['w3'] = '##--------##';
    letter['w4'] = '##--------##';
    letter['w5'] = '##---##---##';
    letter['w6'] = '-##-##-##-##';
    letter['w7'] = '--##----##--';
    
    letter['x1'] = '##----##';
    letter['x2'] = '-##--##-';
    letter['x3'] = '--####--';
    letter['x4'] = '---##---';
    letter['x5'] = '--####--';
    letter['x6'] = '-##--##-';
    letter['x7'] = '##----##';
    
    letter['y1'] = '##----##';
    letter['y2'] = '-##--##-';
    letter['y3'] = '--####--';
    letter['y4'] = '---##---';
    letter['y5'] = '---##---';
    letter['y6'] = '---##---';
    letter['y7'] = '---##---';
    
    letter['z1'] = '########';
    letter['z2'] = '-----##-';
    letter['z3'] = '----##--';
    letter['z4'] = '---##---';
    letter['z5'] = '--##----';
    letter['z6'] = '-##-----';
    letter['z7'] = '########';
    
    for (var i = 0; i < line.length; i++)
    {
        var val = i+1;
        var chr ;
        line[i] = "";
        
        for (var j = 0; j < str.length; j++)
        {
            chr = str.charAt(j);
            var position = chr+val;
            line[i] = line[i]+'--'+letter[position];
        }
    }
    
    var currentLine = 0;
    var finalString="";
    while(currentLine < line.length)
    {
        finalString = finalString + line[currentLine]+"<br />";
        
        currentLine = currentLine + 1;
    }
    
    finalString = getProperString(finalString, intNot);
    document.getElementById('par').innerHTML = finalString;
    document.getElementById("outputTextToSave").value = finalString;
    
}

function getProperString(str, intNot) {
    var currentIndex = 0;
    
    while(currentIndex < str.length){
        var chr = str.charAt(currentIndex);
        if(chr == "-")
        {
            str = str.substr(0, currentIndex) + getRandomInt(intNot) + str.substr(currentIndex + 1);
        }
        if(chr == '#')
        {
            str = str.substr(0, currentIndex) + intNot + str.substr(currentIndex + 1);
        }
        
        currentIndex = currentIndex + 1;
    }
    return str;
}

function getRandomInt(intNot) {

    var randInt = intNot;
    
    while (randInt == intNot || randInt == 1)
    {
        randInt = Math.floor(Math.random() * (9 - 0 + 1));
    }
    
    return randInt;
}

function saveTextToFile(event)
{

var textToWrite = document.getElementById("outputTextToSave").value;
if (textToWrite == "")
{
    alert("Please generate code first!");
    return;
}

var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
var fileNameToSaveAs = "MyMessageForYou.html";
var downloadLink = document.createElement("a");

downloadLink.download = fileNameToSaveAs;
downloadLink.innerHTML = "Download File";

if (window.webkitURL != null)
{
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
}
else
{
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
}
downloadLink.click();
}
