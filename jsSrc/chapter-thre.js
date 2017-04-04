function KW()
{
    var pH = parseFloat(document.getElementById("H").value); var pOH = parseFloat(document.getElementById("OH").value); var Kw = parseFloat(document.getElementById("kw").value);
    var result; var tips;
    if(Kw=="0.0"){result=pH*pOH+"<br />"; tips="Kw = [pOH][pH]"+"<br />"+"Kw = "+"["+pOH+"]"+"["+pH+"]";
                 document.getElementById("result").innerHTML=result;document.getElementById("tips").innerHTML=tips;
                 }
    else if(pH=="0.0"){result=Kw/pOH+"<br />"; tips="Kw = [pOH][pH]"+"<br />"+"pH = [Kw] / [pOH]"+"<br />"+"pH = "+"["+Kw+"]"+" / "+"["+pOH+"]";
                 document.getElementById("result").innerHTML=result;document.getElementById("tips").innerHTML=tips;
                 }
    else if(pOH=="0.0"){result=Kw/pOH+"<br />"; tips="Kw = [pOH][pH]"+"<br />"+"pOH = [Kw] / [pH]"+"<br />"+"pOH = "+"["+Kw+"]"+" / "+"["+pH+"]";
                 document.getElementById("result").innerHTML=result;document.getElementById("tips").innerHTML=tips;  }
}
function PH(){
    var pH = parseFloat(document.getElementById("pH").value);var H = parseFloat(document.getElementById("trkez").value);
    var result ;var tips;
    if(pH == "0.0"){ result =Math.log10(H);result*=-1;tips="pH = - log[H] "+"<br />"+"pH = - log("+H+")"
            document.getElementById("result").innerHTML=result;document.getElementById("").innerHTML=tips;     }
       else if(H == "0.0"){ result =Math.pow(10,-pH);tips="[H] = 10^-pH "+"<br />"+"[pH] = 10^ -"+pH;
      document.getElementById("result").innerHTML=result;document.getElementById("tips").innerHTML=tips;}
}
function POH(){
    var pOH = parseFloat(document.getElementById("pH").value);var OH = parseFloat(document.getElementById("trkez").value);
    var result ;var tips;
    if(pOH == "0.0"){ result =Math.log10(OH);result*=-1;tips="pOH = - log[H] "+"<br />"+"pOH = - log("+OH+")"
            document.getElementById("result").innerHTML=result;document.getElementById("sh2").innerHTML=tips;     }
       else if(OH == "0.0"){ result =Math.pow(10,-pOH);tips="[OH] = 10^-pOH "+"<br />"+"[pOH] = 10^ -"+pOH;
      document.getElementById("result").innerHTML=result;document.getElementById("tips").innerHTML=tips;}
}
function _ppOh (){ var pH = parseFloat(document.getElementById("H").value); var pOH = parseFloat(document.getElementById("OH").value); var result; var tips; 
                  if(pH =="0.0"){result=14 - pOH;tips=" 14.00 = pH+pOH"+"<br />"+"pH = 14.00 - pOH"+"<br />"+"pH = 14.00 - "+pOH; document.getElementById("result").innerHTML=result;document.getElementById("tips").innerHTML=tips;}
                else if(pOH =="0.0"){result=14 - pH;tips=" 14.00 = pH+pOH"+"<br />"+"pOH = 14.00 - pH"+"<br />"+"pOH = 14.00 - "+pH ;document.getElementById("result").innerHTML=result;document.getElementById("tips").innerHTML=tips;}}