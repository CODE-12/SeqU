 function k()
{ 
     var k1 =document.getElementById("KM").value;
    var k2 =document.getElementById("kTh").value;
    var k3 =document.getElementById("kMh").value;
    var reslt ;
     var tips ="" ;
    if(k1  == "x" || k1 =="X" || k1 =="?")
    {
        var K2 =parseFloat(k2);var K3 =parseFloat(k3);
        reslt= (K2*100)/K3;
        
         document.getElementById("result").innerHTML= reslt; 
        
    }
    else if(k2  == "x" || k2 =="X" || k2 =="?")
    {
                var K1 =parseFloat(k1);var K3 =parseFloat(k3);

         reslt= (K1*K3)/100;
        
         document.getElementById("result").innerHTML= reslt; 
        
    }
    else if(k3  == "x" || k3 =="X" || k3 =="?")
    {        var K2 =parseFloat(k2);var K1 =parseFloat(k1);

       reslt= (K2*100)/K1;
        
         document.getElementById("result").innerHTML= reslt; 
        
    }
   
     
}
 function g()
{  var k1 =document.getElementById("KM1").value;
    var k2 =document.getElementById("kTh1").value;
    var k3 =document.getElementById("kMh1").value;
     var tips ;
    if(k1  == "x" || k1 =="X" || k1 =="?")
    {
       var K2 =parseFloat(k2);var K3 =parseFloat(k3);
        reslt= (K2*100)/K3;
         document.getElementById("result1").innerHTML= reslt; 
        
    }
    else if(k2  == "x" || k2 =="X" || k2 =="?")
    {var K1 =parseFloat(k1);var K3 =parseFloat(k3);

         reslt= (K1*K3)/100;
        
         document.getElementById("result1").innerHTML= reslt; 
        
    }
    else if(k3  == "x" || k3 =="X" || k3 =="?")
    {
       var K2 =parseFloat(k2);var K1 =parseFloat(k1);
               reslt= (K2*100)/K1;

         document.getElementById("result1").innerHTML= reslt; 
        
    }
   
     
}
function mlar()
{
    
     var m1 =document.getElementById("KM2").value;
    var m2 =document.getElementById("kTh2").value;
    var m3 =document.getElementById("kMh2").value;
    var reslt ;
     var tips="";
    if(m1  == "x" || m1 =="X" || m1 =="?")
    {
        var M2 =parseFloat(m2);
        var M3 =parseFloat(m3);
        reslt= (M2)/M3;
        
         document.getElementById("result2").innerHTML= reslt; 
        
    }
    else if(m2  == "x" || m2 =="X" || m2 =="?")
    {
         var M1 =parseFloat(m1);
        var M3 =parseFloat(m3);
         reslt= (M1*M3);
        
         document.getElementById("result2").innerHTML= reslt; 
        
    }
    else if(m3  == "x" || m2 =="X" || m2 =="?")
    { var M2 =parseFloat(m2);
        var M1 =parseFloat(m1);
       reslt= (M2)/M1;
        
         document.getElementById("result2").innerHTML= reslt; 
        
    }
   
     
}
function mlor()
{
     var m1 =document.getElementById("KM3").value;
    var m2 =document.getElementById("kTh3").value;
    var m3 =document.getElementById("kMh3").value;
    var reslt ;
     
    if(m1  == "x" || m1 =="X" || m1 =="?")
    {
         var M2 =parseFloat(m2);
        var M3 =parseFloat(m3);
        reslt= (M2)/M3;
        
         document.getElementById("result3").innerHTML= reslt; 
        
    }
    else if(m2  == "x" || m2 =="X" || m2 =="?")
    {
          var M1 =parseFloat(m1);
        var M3 =parseFloat(m3);
         reslt= (M1*M3);
        
         document.getElementById("result3").innerHTML= reslt; 
        
    }
    else if(m3  == "x" || m3 =="X" || m3 =="?")
    {
       var M2 =parseFloat(m2);
        var M1 =parseFloat(m1);
       reslt= (M2)/M1;
        
        
         document.getElementById("result3").innerHTML= reslt; 
        
    }
   
     
}
function T7FEF()
{
     var M1 =document.getElementById("m1").value;
    var M2 =document.getElementById("m2").value;
    var V1 =document.getElementById("v1").value;
    var V2 =document.getElementById("v2").value;
    var reslt ;
     var tips ;
    if(M1== "x"||  M1=="X" ||  M1=="?")
        {
            var m2 =parseFloat(M2);
             var v2 =parseFloat(V2);
             var v1 =parseFloat(V1);
            reslt = (v2 / v1) * m2;
            tips   = "M1 V1 = M2 V2 "
            tips  += "<br /> ";
            tips  += "M1 = (M2 / V1) * M2 ";
            tips  += "<br />";
            tips  += "M1 = "+"("+V2+" / "+V1+") "+" * "+M2;
            reslt += "<br />";
            document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
        }
    else if(M2== "x"||  M2=="X" ||  M2=="?")
        {    var m1 =parseFloat(M1);
             var v2 =parseFloat(V2);
             var v1 =parseFloat(V1);
            
            reslt = (v1 / v2) * m1;
             tips   = "M1 V1 = M2 V2 "
            tips  += "<br /> ";
            tips  += "M2 = (V1 / V2) * M1 ";
            tips  += "<br />";
            tips  += "M2 = "+"("+V1+" / "+V2+") "+" * "+M1;
            reslt += "<br />";
            document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
        }
    else if(V1== "x"||  V1=="X" ||  V1=="?")
        {
             var m1 =parseFloat(M1);
             var v2 =parseFloat(V2);
             var m2 =parseFloat(M2);
            reslt = (m2 / m1) * v2;
             tips   = "M1 V1 = M2 V2 "
            tips  += "<br /> ";
            tips  += "V1 = (M2 / M1) * V2 ";
            tips  += "<br />";
            tips  += "V1 = "+"("+M2+" / "+M1+") "+" * "+V2;
            reslt += "<br />";
            document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
            
        }
    
    else if(V2== "x"||  V2=="X" ||  V2=="?")
        {
             var m1 =parseFloat(M1);
             var v1 =parseFloat(V1);
             var m2 =parseFloat(M2);
            reslt = (m1 / m2) * v1;
             tips   = "M1 V1 = M2 V2 "
            tips  += "<br /> ";
            tips  += "V2 = (M1 / PM) * V1 ";
            tips  += "<br />";
            tips  += "V2 = "+"("+M1+" / "+M2+") "+" * "+V1;
            reslt += "<br />";
            document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
        }
    
}

function ARTF3()
{
     var TF =document.getElementById("T1").value;
    var BF =document.getElementById("B1").value;
    var M =document.getElementById("M1").value;
    var reslt ;
     var tips ;
    if(TF== "x"||  TF=="X" ||  TF=="?")
        {
            var bf = parseFloat(BF);
            var m = parseFloat(M);
            reslt = bf * m;
            tips   = "Tf = Bf M"
            tips  += "<br /> ";
            tips  += "Tf = Bf * M ";
            tips  += "<br />";
            tips  += "Tf = "+"("+BF+" * "+M+")" ;
            reslt += "<br />";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt; 
        }
    else if(BF== "x"||  BF=="X" ||  BF=="?")
        {
             var tf = parseFloat(TF);
            var m = parseFloat(M);
           reslt = tf / m;
            tips   = "Tf = Bf M"
            tips  += "<br /> ";
            tips  += "Bf =  M / Tf ";
            tips  += "<br />";
            tips  += "Bf = "+"("+M+" /"+TF+") ";
            reslt += "<br />";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt; 
        }
    else if(M== "x"||  M=="X" ||  M=="?")
        {
             var bf = parseFloat(BF);
            var tf = parseFloat(TF);
            reslt = tf/ bf;
            tips   = "Tf = Bf M"
            tips  += "<br /> ";
            tips  += "M =  Bf / Tf ";
            tips  += "<br />";
            tips  += "M  = "+"("+BF+" /"+TF+")" ;
            reslt += "<br />";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt;
            
        }
    
}
function AN7FATH()
{
     var TF =document.getElementById("T2").value;
    var BF =document.getElementById("B2").value;
    var M =document.getElementById("M2").value;
    var reslt ;
     var tips ;
    if(TF== "x"||  TF=="X" ||  TF=="?")
        {  var bf = parseFloat(BF);
            var m = parseFloat(M);
            reslt = bf * m;
            tips   = "Tf = Bf M"
            tips  += "<br /> ";
            tips  += "Tf = Bf * M ";
            tips  += "<br />";
            tips  += "Tf = "+"("+BF+" * "+M+")" ;
            reslt += "<br />";
            document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; 
        }
    else if(BF== "x"||  BF=="X" ||  BF=="?")
        {
            var tf = parseFloat(TF);
            var m = parseFloat(M);
           reslt = tf / m;
            tips   = "Tf = Bf M"
            tips  += "<br /> ";
            tips  += "Bf =  M / Tf ";
            tips  += "<br />";
            tips  += "Bf = "+"("+M+" /"+TF+") ";
            reslt += "<br />";
            document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; 
        }
    else if( M == "x"||  M =="X" ||  M == "?")
        {
            
           var bf = parseFloat(BF);
            var tf = parseFloat(TF);
            reslt = tf / bf;
            tips   = "Tf = Bf M"
            tips  += "<br /> ";
            tips  += "M =  Bf / Tf ";
            tips  += "<br />";
            tips  += "M  = "+"("+BF+" /"+TF+")" ;
            reslt += "<br />";
            document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt;
            
        }
    
}

function HERNY()
{
    
    var P1 =document.getElementById("p1").value;
    var P2 =document.getElementById("p2").value;
    var S1 =document.getElementById("s1").value;
    var S2 =document.getElementById("s2").value;
    var reslt ;
     var tips ;
    if(S1  == "x" || S1 == "X" || S1 == "?")
    {
        var p1 = parseFloat(P1);
        var p2= parseFloat(P2);
         var s2 = parseFloat(S2);
        reslt= (p1*s2)/p2;
        reslt+= "<br /";
        tips = "P1 / S1 = P2 / S2";
        tips+="<br /";
        tips+="S1 = (P1 * S2) / S2 "+"<br />";
        tips+= "S1 = "+"("+P1+" * "+ S2+")  / "+P2;
         document.getElementById("tips7").innerHTML= tips;
         document.getElementById("result7").innerHTML= reslt; 
        
    }
    else if(S2  == "x" || S2 =="X" || S2 =="?")
    {
        var p1 = parseFloat(P1);
        var p2= parseFloat(P2);
         var s1 = parseFloat(S1);
        reslt= (p2*s1)/p1;
        reslt+= "<br /";
        tips = "S1 / P1 = P2 / S2";
        tips+="<br /";
        tips+="S1 = (P2 * S1) / P1 "+"<br />";
        tips+= "S1 = "+"("+P2+" * "+ S1+")  / "+P1;
         document.getElementById("tips7").innerHTML= tips;
         document.getElementById("result7").innerHTML= reslt; 
        
    }
    else if(P1  == "x" || P1 =="X" || P1 =="?")
    {    var s1 = parseFloat(S1);
         var p2 = parseFloat(P2);
         var d2 = parseFloat(S2);
          reslt= (p2*s1)/d2;
        reslt+= "<br /";
        tips = "S1 / P1 = S2 / P2";
        tips+="<br />";
        tips+="P1 = (P2 * S1) / S2 "+"<br />";
        tips+= "P1 = "+"("+P2+" * "+ S1+")  / "+S2;
         document.getElementById("tips7").innerHTML= tips;
         document.getElementById("result7").innerHTML= reslt; 
        
    }
    else if(P2  == "x" || P2 =="X" || P2 =="?")
    {
        var p1 = parseFloat(P1);
        var s1 =parseFloat(S1);
         var s2 = parseFloat(S2);
        reslt= ( p1 * s2 ) / s1;;
        reslt+= "<br /";
        tips = "S1 / P1 = S2 / P2";
        tips+="<br /";
        tips+="P2 = (P1 * S2) / S1 "+"<br />";
        tips+= "P2 = "+"("+P1+" * "+ S2+")  / "+S1;
         document.getElementById("tips7").innerHTML= tips;
         document.getElementById("result7").innerHTML= reslt; 
        
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
         document.getElementById("tips8").innerHTML= tips;
         document.getElementById("result8").innerHTML= reslt; 
        
    }
    else if(X == "B")
    {
        reslt= (B)/A+B;
        reslt+= "<br /";
        tips = "X = nx / na +nb";
        tips+="<br /";
        tips+="X = (B) / A + B "+"<br />";
        tips+= "X = "+"("+B+")  /  "+A+"+"+B;
         document.getElementById("tips8").innerHTML= tips;
         document.getElementById("result8").innerHTML= reslt; 
    }
}

