 function k()
{ alert("hg")
     var k1 =parseFloat(document.getElementById("KM").value);
    var k2 =parseFloat(document.getElementById("kTh").value);
    var k3 =parseFloat(document.getElementById("kMh").value);
    var reslt ;
     var tips ;
    if(k1 == "0.0")
    {
        reslt= (k2*100)/k3;
        
         document.getElementById("result").innerHTML= reslt; 
        
    }
    else if(k2 == "0.0")
    {
         reslt= (k1*k3)/100;
        
         document.getElementById("result").innerHTML= reslt; 
        
    }
    else if(k3 == "0.0")
    {
       reslt= (k2*100)/k1;
        
         document.getElementById("result").innerHTML= reslt; 
        
    }
   
     
}
function mlar()
{
     var m1 =parseFloat(document.getElementById("KM").value);
    var m2 =parseFloat(document.getElementById("kTh").value);
    var m3 =parseFloat(document.getElementById("kMh").value);
    var reslt ;
     var tips ;
    if(m1 == "0.0")
    {
        reslt= (m2)/m3;
        
         document.getElementById("result").innerHTML= reslt; 
        
    }
    else if(m2 == "0.0")
    {
         reslt= (m1*m3);
        
         document.getElementById("result").innerHTML= reslt; 
        
    }
    else if(m3 == "0.0")
    {
       reslt= (m2)/m1;
        
         document.getElementById("result").innerHTML= reslt; 
        
    }
   
     
}

function T7FEF()
{
     var M1 =parseFloat(document.getElementById("m1").value);
    var M2 =parseFloat(document.getElementById("m2").value);
    var V1 =parseFloat(document.getElementById("v1").value);
    var V2 =parseFloat(document.getElementById("v2").value);
    var reslt ;
     var tips ;
    if(M1=="0.0")
        {
            
            reslt = (V2 / V1) * M2;
            tips   = "M1 V1 = M2 V2 "
            tips  += "<br /> ";
            tips  += "M1 = (M2 / V1) * M2 ";
            tips  += "<br />";
            tips  += "M1 = "+"("+V2+" / "+V1+") "+" * "+M2;
            reslt += "<br />";
            document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
    else if(M2=="0.0")
        {
            
            reslt = (V1 / V2) * M1;
             tips   = "M1 V1 = M2 V2 "
            tips  += "<br /> ";
            tips  += "M2 = (V1 / V2) * M1 ";
            tips  += "<br />";
            tips  += "M2 = "+"("+V1+" / "+V2+") "+" * "+M1;
            reslt += "<br />";
            document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
    else if(V1=="0.0")
        {
            
            reslt = (M2 / M1) * V2;
             tips   = "M1 V1 = M2 V2 "
            tips  += "<br /> ";
            tips  += "V1 = (M2 / M1) * V2 ";
            tips  += "<br />";
            tips  += "V1 = "+"("+M2+" / "+M1+") "+" * "+V2;
            reslt += "<br />";
            document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
            
        }
    
    else if(V2=="0.0")
        {
            
            reslt = (M1 / M2) * V1;
             tips   = "M1 V1 = M2 V2 "
            tips  += "<br /> ";
            tips  += "V1 = (M1 / PM) * V1 ";
            tips  += "<br />";
            tips  += "V1 = "+"("+M1+" / "+M2+") "+" * "+V1;
            reslt += "<br />";
            document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
    
}

function ARTF3()
{
     var TF =parseFloat(document.getElementById("m1").value);
    var BF =parseFloat(document.getElementById("v1").value);
    var M =parseFloat(document.getElementById("m2").value);
    var reslt ;
     var tips ;
    if(TF=="0.0")
        {
            
            reslt = BF * M;
            tips   = "Tf = Bf M"
            tips  += "<br /> ";
            tips  += "Tf = Bf * M ";
            tips  += "<br />";
            tips  += "Tf = "+"("+BF+" * "+M+") ;
            reslt += "<br />";
            document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
    else if(BF=="0.0")
        {
           reslt = M / TF;
            tips   = "Tf = Bf M"
            tips  += "<br /> ";
            tips  += "Bf =  M / Tf ";
            tips  += "<br />";
            tips  += "Bf = "+"("+M+" /"+TF+") ;
            reslt += "<br />";
            document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
    else if(M=="0.0")
        {
            
            reslt = BF / TF;
            tips   = "Tf = Bf M"
            tips  += "<br /> ";
            tips  += "M =  Bf / Tf ";
            tips  += "<br />";
            tips  += "M  = "+"("+BF+" /"+TF+") ;
            reslt += "<br />";
            document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt;
            
        }
    
}

function HERNY()
{
    
    var P1 =parseFloat(document.getElementById("v1").value);
    var P2 =parseFloat(document.getElementById("v2").value);
    var S1 =parseFloat(document.getElementById("m1").value);
    var S2 =parseFloat(document.getElementById("m2").value);
    var reslt ;
     var tips ;
    if(S1 == "0.0")
    {
        reslt= (P1*S2)/P2;
        reslt+= "<br /";
        tips = "P1 / S1 = P2 / S2";
        tips+="<br /";
        tips+="S1 = (P1 * S2) / S2 "+"<br />";
        tips+= "S1 = "+"("+P1+" * "+ S2+")  / "+P2;
         document.getElementById("tips").innerHTML= tips;
         document.getElementById("result").innerHTML= reslt; 
        
    }
    else if(S2 == "0.0")
    {
        reslt= (P2*S1)/P1;
        reslt+= "<br /";
        tips = "S1 / P1 = P2 / S2";
        tips+="<br /";
        tips+="S1 = (P2 * S1) / P1 "+"<br />";
        tips+= "S1 = "+"("+P2+" * "+ S1+")  / "+P1;
         document.getElementById("tips").innerHTML= tips;
         document.getElementById("result").innerHTML= reslt; 
        
    }
    else if(P1 == "0.0")
    {
        reslt= ( S2 * P1 ) / S2;;
        reslt+= "<br /";
        tips = "P1 / S1 = S2 / P2";
        tips+="<br /";
        tips+="S1 = (P2 * S1) / S2 "+"<br />";
        tips+= "T1 = "+"("+P2+" * "+ S1+")  / "+S2;
         document.getElementById("").innerHTML= tips;
         document.getElementById("result").innerHTML= reslt; 
        
    }
    else if(P2 == "0.0")
    {
        reslt= ( P1 * S2 ) / S1;;
        reslt+= "<br /";
        tips = "S1 / P1 = S2 / P2";
        tips+="<br /";
        tips+="S1 = (P1 * S2) / S1 "+"<br />";
        tips+= "T1 = "+"("+P1+" * "+ S2+")  / "+S1;
         document.getElementById("tips").innerHTML= tips;
         document.getElementById("result").innerHTML= reslt; 
        
    }
     
}

function KSER()
{
     var X =document.getElementById("X").value;
    var A =parseFloat(document.getElementById("Xa").value);
    var B =parseFloat(document.getElementById("Xb").value);
    var reslt ;
     var tips ;
    if(X == "A")
    {
        reslt= (A)/A+B;
        reslt+= "<br /";
        tips = "X = nx / na +nb";
        tips+="<br /";
        tips+="X = (A) / A + B "+"<br />";
        tips+= "X = "+"("+A+")  /  "+A+"+"+B;
         document.getElementById("tips").innerHTML= tips;
         document.getElementById("result").innerHTML= reslt; 
        
    }
    else if(X == "B")
    {
        reslt= (B)/A+B;
        reslt+= "<br /";
        tips = "X = nx / na +nb";
        tips+="<br /";
        tips+="X = (A) / B + B "+"<br />";
        tips+= "X = "+"("+B+")  /  "+A+"+"+B;
         document.getElementById("tips").innerHTML= tips;
         document.getElementById("result").innerHTML= reslt; 
    }
}

