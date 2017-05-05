function P()
{
     var P1 =document.getElementById("p1").value;
    var P2 =document.getElementById("p2").value;
    var V1 =document.getElementById("v1").value;
    var V2 =document.getElementById("v2").value;
    var reslt ;
     var tips = "" ;
    if( P1=="X"|| P1 == "x" || P1=="?")
        {
            
            var p2 =parseFloat(P2);
            var v1 =parseFloat(V1);
            var v2 =parseFloat(V2);
            reslt = (v2 / v1) * p2;
            tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "P1 = (V2 / V1) * P2 ";
            tips  += "<br />";
            tips  += "P1 = "+"("+v2+" / "+v1+") "+" * "+p2;
            reslt += "<br />";
            document.getElementById("tips2").innerHTML= tips;
            document.getElementById("result2").innerHTML= reslt; 
        }
    else if( P2=="X"|| P2 ==" x" || P2=="?")
        {
             var p1 =parseFloat(P1);
            var v1 =parseFloat(V1);
            var v2 =parseFloat(V2);
            reslt = (v1 / v2) * p1;
             tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "P2 = (V1 / V2) * P1 ";
            tips  += "<br />";
            tips  += "P2 = "+"("+v1+" / "+v2+") "+" * "+p1;
            reslt += "<br />";
            document.getElementById("tips2").innerHTML= tips;
            document.getElementById("result2").innerHTML= reslt; 
        }
    else if( V1=="X"|| V1 == "x" || V1=="?")
        {
            var p2 =parseFloat(P2);
            var p1 =parseFloat(P1);
            var v2 =parseFloat(V2);
            
            reslt = (p2 / p1) * v2;
             tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "V1 = (P2 / P1) * V2 ";
            tips  += "<br />";
            tips  += "V1 = "+"("+p2+" / "+p1+") "+" * "+v2;
            reslt += "<br />";
            document.getElementById("tips2").innerHTML= tips;
            document.getElementById("result2").innerHTML= reslt; 
            
        }
    
    else if( V2=="X"|| V2 =="x" || V2 =="?")
        {
            var p2 =parseFloat(P2);
            var v1 =parseFloat(V1);
            var p1 =parseFloat(P1);
            reslt = (p1 / p2) * v1;
             tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "V2 = (P1 / P2) * V1 ";
            tips  += "<br />";
            tips  += "V2 = "+"("+p1+" / "+p2+") "+" * "+v1;
            reslt += "<br />";
            document.getElementById("tips2").innerHTML= tips;
            document.getElementById("result2").innerHTML= reslt; 
        }
    
    
    
}
function S()
{
    
     var T1 =document.getElementById("t1").value;
    var T2 =document.getElementById("t2").value;
    var V1 =document.getElementById("v3").value;
    var V2 =document.getElementById("v4").value;
    var reslt ;
     var tips = "" ;
  
    if( T1=="X"|| T1 == "x" || T1=="?")
    {  
        var t2 =parseFloat(T2);
            var v1 =parseFloat(V1);
            var v2 =parseFloat(V2);
        reslt=(t2 /v1) * v2+ "<br />";
       
        
    tips += "V1 / T1 = V2 / T2 " + "<br />"+"T1 = (V1 * T2) / V2 "+"<br />" +"T1 = "+"("+V1+" * "+ T2+")  / "+V2;
       document.getElementById("tips1").innerHTML= tips;
       document.getElementById("result1").innerHTML= reslt; 
      
    }
  
    else if( V1=="X"|| V1 == "x" || V1=="?")
    { 
        var t1 =parseFloat(T1);
            var t2 =parseFloat(T2);
            var v2 =parseFloat(V2);
        
        reslt= ( v2 * t1 ) / t2+"<br />";
        tips+= "V1 / T1 = V2 / T2"+"<br />"+"V1 = (V2 * T1) / T2 "+"<br />"+"V1 = "+"("+V2+" * "+ T1+")  / "+T2;
          document.getElementById("tips1").innerHTML= tips;
            document.getElementById("result1").innerHTML= reslt; 
        
    }
    else if( V2=="X"|| V2 == "x" || V2=="?")
    {
        var t1 =parseFloat(T1);
            var v1 =parseFloat(V1);
            var t2 =parseFloat(T2);
        reslt= ( v1 * t2 ) / t1;;
        reslt+= "<br />";
        tips += "V1 / T1 = V2 / T2";
        tips+="<br />";
        tips+="V2 = (V1 * T2) / T1 "+"<br />";
        tips+= "V2 = "+"("+V1+" * "+ T2+")  / "+T1;
         document.getElementById("tips1").innerHTML= tips;
            document.getElementById("result1").innerHTML= reslt; 
        
    }
      else if( T2=="X"|| T2 == "x" || T2=="?")
    {
            var t1 =parseFloat(T1);
            var v1 =parseFloat(V1);
            var v2 =parseFloat(V2);
        reslt= (v2*t1)/V1;
        reslt+= "<br />";
        tips += "V1 / T1 = V2 / T2";
        tips+="<br />";
        tips+="T2 = (V2 * T1) / V1 "+"<br />";
        tips+= "T2 = "+"("+V2+" * "+ T1+")  / "+V1;
          document.getElementById("tips1").innerHTML= tips;
            document.getElementById("result1").innerHTML= reslt; 
    }
     
}
function Lusac()
{
    var P1 =document.getElementById("P1").value;
    var P2 =document.getElementById("P2").value;
    var T1 =document.getElementById("T1").value;
    var T2 =document.getElementById("T2").value;
    var reslt ;
     var tips = "" ;
    if( T1=="X"|| T1 == "x" || T1=="?")
    {       var p1 =parseFloat(P1);
            var p2 =parseFloat(P2);
            var t2 =parseFloat(T2);
        reslt= (p1*t2)/p2;
        reslt+= "<br />";
        tips += "P1 / T1 = P2 / T2";
        tips+="<br />";
        tips+="T1 = (P1 * T2) / P2 "+"<br />";
        tips+= "T1 = "+"("+P1+" * "+ T2+")  / "+P2;
        document.getElementById("tips3").innerHTML= tips;
            document.getElementById("result3").innerHTML= reslt; 
    }
    else if( T2=="X"|| T2 == "x" || T2=="?")
    {
         var p1 =parseFloat(P1);
            var p2 =parseFloat(P2);
            var t1 =parseFloat(T1);
        reslt= (p2*t1)/p1;
        reslt+= "<br />";
        tips+= "P1 / T1 = V2 / P2";
        tips+="<br />";
        tips+="T2 = (P2 * T1) / P1 "+"<br />";
        tips+= "T2 = "+"("+P2+" * "+ T1+")  / "+P1;
         document.getElementById("tips3").innerHTML= tips;
            document.getElementById("result3").innerHTML= reslt; 
        
    }
    else if( P1=="X"|| P1 == "x" || P1=="?")
    {
        var t2 =parseFloat(T2);
            var p2 =parseFloat(P2);
            var t1 =parseFloat(T1);
        reslt= ( p2 * t1 ) / t2;;
        reslt+= "<br />";
        tips += "P1 / T1 = P2 / T2";
        tips+="<br />";
        tips+="P1 = (P2 * T1) / T2 "+"<br />";
        tips+= "P1 = "+"("+P2+" * "+ T1+")  / "+T2;
         document.getElementById("tips3").innerHTML= tips;
            document.getElementById("result3").innerHTML= reslt; 
        
    }
    else if( P2=="X"|| P2 == "x" || P2=="?")
    { var t2 =parseFloat(T2);
            var p1 =parseFloat(P1);
            var t1 =parseFloat(T1);
        reslt= ( p1 * t2 ) / t1;;
        reslt+= "<br />";
        tips += "P1 / T1 = P2 / T2";
        tips+="<br />";
        tips+="P2 = (P1 * T2) / T1 "+"<br />";
        tips+= "P2 = "+"("+P1+" * "+ T2+")  / "+T1;
         document.getElementById("tips3").innerHTML= tips;
            document.getElementById("result3").innerHTML= reslt; 
        
    }
    
    
    
}
function publicc()
{   var P1 =document.getElementById("pp1").value;
    var P2 =document.getElementById("pp2").value;
    var V1 =document.getElementById("vv1").value;
    var V2 =document.getElementById("vv2").value;
    var T1 =document.getElementById("tt1").value;
    var T2 =document.getElementById("tt2").value;
    var reslt;
    var tips = "";
 
 if( P1=="X"|| P1 == "x" || P1=="?")
     {
          var t2 =parseFloat(T2);
            var v1 =parseFloat(V1);
            var t1 =parseFloat(T1);
          var v2 =parseFloat(V2);
            var p2 =parseFloat(P2);
          reslt= p2 * (v2/ v1) * (t1 / t2);
         reslt+= "<br />";
         tips += "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="T1 = P2 * (V2/ V1) * (T1 / T2) "+"<br />";
         tips+="P1 = "+P2+" * "+" ( "+V2+" / "+ V1+" ) * " +" ( "+T1+ " / "+T2+" ) ";
       document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
          
     }
 else if( V1=="X"|| V1 == "x" || V1=="?")
     {
         var t2 =parseFloat(T2);
            var p1 =parseFloat(P1);
            var t1 =parseFloat(T1);
          var v2 =parseFloat(V2);
            var p2 =parseFloat(P2);
          reslt= v2 * (p2 / p1) * (t1 / t2);
         reslt+= "<br />";
         tips += "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="V1 = V2 * (P2 / P1) * (T1 / T2) "+"<br />";
         tips+="V1 = "+V2+" * "+" ( "+P2+" / "+P1+")  *  "+" ( "+T1+" / "+T2+" ) ";
         document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
          
     }
 else if( T1=="X"|| T1 == "x" || T1=="?")
     {var t2 =parseFloat(T2);
            var v1 =parseFloat(V1);
            var p1 =parseFloat(P1);
          var v2 =parseFloat(V2);
            var p2 =parseFloat(P2);
          reslt= t2 * (p1 /p2) * (v1 / v2);
         reslt+="<br />";
         tips +="P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="T1 =T2 * (P1 /P2) * (V1 / V2) "+"<br />";
         tips+="T1 = "+T2+" * "+" ( "+P1+" / "+P2+" ) * "+" ( "+V1+" / "+V2+" ) ";
        document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
     }
 else if( P2=="X"|| P2 == "x" || P2=="?")
     {
         var t1 =parseFloat(T1);
            var v1 =parseFloat(V1);
            var t2 =parseFloat(T2);
          var v2 =parseFloat(V2);
            var p1 =parseFloat(P1);
          reslt= p1 * (v1+ v2) * (t2 + t1);
         reslt+= "<br />";
         tips += "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="P2 = P1 * (V1/ V2) * (T2 / T1) "+"<br />";
         tips+= "P2 = "+P1+" * "+" ( "+V1+" / "+ V2+" ) * " +" ( "+T2+ " / "+ T1+" ) ";
        document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
     }
 else if( V2=="X"|| V2 == "x" || V2=="?")
     {
         var t1 =parseFloat(T1);
            var v1 =parseFloat(V1);
            var t2 =parseFloat(T2);
          var p1 =parseFloat(P1);
            var p2 =parseFloat(P2);
          reslt= v1 * (p1 / p2) * (t2 / t1);
         reslt+= "<br />";
         tips += "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="V2 = V1 * (P1 / P2) * (T2 / T1) "+"<br />";
         tips+= "V2 = "+V1 +" * "+" ( "+P1+" / "+ P2+")  *  "+" ( "+T2+" / " +T1+" ) ";
          document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
          
     }
 else if(T2=="X"|| T2 == "x" || T2=="?")
     {
         var p1 =parseFloat(P1);
            var v1 =parseFloat(V1);
            var t1 =parseFloat(T1);
          var v2 =parseFloat(V2);
            var p2 =parseFloat(P2);
          reslt= t1 * (p2 /p1) * (v2 / v1);
         reslt+="<br />";
         tips +="P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="T1 =T1 * (P2 /P1) * (V2 / V1) "+"<br />";
         tips+="T1 = "+T1+" * "+" ( "+P2+" / "+P1+" ) * "+" ( "+V2+" / "+V1+" ) ";
         document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
     }
    
    
    
} /*  
function STPP()
{
    var m =parseFloat(document.getElementById("").value);
    var M =parseFloat(document.getElementById("").value);
    var n =parseFloat(document.getElementById("").value);
    var reslt;
    var tips = "";
    
  
    if(m == 0.0)
        {
            reslt = n * M;
            reslt +="<br />";
            tips += "m = n * M"+"<br />";
            tips += "m = "+n+" * "+M;
            tips+= "<br />";
            document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
    else if (n == 0.0)
        {   reslt =m / M;
            reslt +="<br />";
            tips += "n = m / M"+"<br />";
            tips += "m = "+m+" / "+M;
            tips+= "<br />";
              document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
    else if (M == 0.0)
        {   reslt =m / n;
            reslt +="<br />";
            tips += "M = m / n"+"<br />";
            tips += "M = "+m+" / "+n;
            tips+= "<br />";
             document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
             
    
}
*/
function perfect()
{
    var P =document.getElementById("P").value;
    var V =document.getElementById("V").value;
    var n =document.getElementById("n").value;
    var T =document.getElementById("T").value;
    var R = 0.0821;
    var reslt;
    var tips = ""; 
    if( P=="X"|| P == "x" || P=="?")
       { 
            var v =parseFloat(V);
            var N =parseFloat(n);
            var t =parseFloat(T);
           
        tips += "PV = nRT"+"<br />";
        tips +="P = nRT / V"+"<br />";
        tips += "P = "+n+"*"+R+"*"+T+" / "+V;
        reslt = (N*R*t) / (v);
        reslt +="<br />";
       document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
       }
    else if( V=="X"|| V == "x" || V=="?")
       { 
           var p =parseFloat(P);
            var N =parseFloat(n);
            var t =parseFloat(T);
           
        tips+= "PV = nRT"+"<br />";
        tips +="V = nRT / P"+"<br />";
        tips += "V = "+n+"*"+R+"*"+T+" / "+V;
        reslt = (N*R*t) / (p);
        reslt +="<br />";
    document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
       }
     else if( n=="X"|| n == "x" || n=="?")
       { var v =parseFloat(V);
            var p =parseFloat(P);
            var t =parseFloat(T);
        tips+= "PV = nRT"+"<br />";
        tips +="n = PV / RT "+"<br />";
        tips += "n = "+P+" * "+V+" / "+R+" * "+T;
        reslt = (v * p) / (R*t);
        reslt +="<br />";
     document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
       }
    else if( T=="X"|| T == "x" || T=="?")
       { 
           var v =parseFloat(V);
            var N =parseFloat(n);
            var p =parseFloat(P);
        tips+= "PV = nRT"+"<br />";
        tips +="T = PV / Rn "+"<br />";
        tips += "n = "+P+" * "+V+" / "+R+" * "+n;
        reslt = (p*v) / (R*N);
        reslt +="<br />";
        document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
       }
    
}
function Density()
{
    var P =document.getElementById("PP").value;
    var M =document.getElementById("MM").value;
    var D =document.getElementById("D").value;
    var T =document.getElementById("TT").value;
    var R = 0.0821;
    var reslt;
    var tips = ""; 

    if (D =="X"|| D == "x" || D =="?")
        {  
            var m =parseFloat(M);
            var p =parseFloat(P);
            var t =parseFloat(T);
            tips= "D = MP / RT"+"<br />"+"D = "+M+" * "+P+" / "+R+" * "+T;
            reslt = (m*p)/(R*t)+"<br />";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt; 
            
        }
    else  if (T=="X"|| T == "x" || T=="?" )
        {
            var m =parseFloat(M);
            var p =parseFloat(P);
            var d =parseFloat(D);
            tips+= "D = MP / RT"+"<br />"+"T = MP / RD "+"<br />"+"T = "+M+" * "+P+" / "+R+" * "+D;
            reslt = (m*p)/(R*d)+"<br />";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt; 
        }
      else  if (M=="X"|| M == "x" || M=="?" )
        {
             var d =parseFloat(D);
            var p =parseFloat(P);
            var t =parseFloat(T);
            tips+= "D = MP / RT"+"<br />"+"M = RTD / P "+"<br />"+"M = "+R+" * "+T+"*"+D+" / "+P;
            reslt = (R*t*d)/(p)+"<br />";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt; 
        }
     else  if (P=="X"|| P == "x" || P=="?")
        { var m =parseFloat(M);
            var d =parseFloat(D);
            var t =parseFloat(T);
            tips+= "D = MP / RT"+"<br />"+"P = RTD / m "+"<br />"+"P = "+R+" * "+T+"*"+D+" / "+M;
            reslt = (R*t*d)/(m)+"<br />";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt; 
        }
    
    
    
    
    
}
function M()
{   
    //اذا o || V  صفر بعطيك "?"
    var M =document.getElementById("M1").value;
    var m =document.getElementById("m3").value;
    var o =document.getElementById("_P").value;
    var V =document.getElementById("V5").value;
    var T =document.getElementById("T5").value;
    var R = 0.0821;
    var reslt;
    var tips = "";
 if(M=="X"|| M == "x" || M=="?")
     {
          var v =parseFloat(V);
            var p =parseFloat(o);
            var t =parseFloat(T);
          var _m =parseFloat(m);
         tips+= "M = mRT / PV"+"<br />"+"M = "+m+" * "+R+" * "+T+" / "+o+" * "+V+"<br />";
         reslt =(_m*R*t)/(p*v)+"<br />";
             document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; }
 else if(o=="X"|| o == "x" || o=="?")
     {
         var v =parseFloat(V);
            var _M =parseFloat(M);
            var t =parseFloat(T);
          var _m =parseFloat(m);
         
         tips+= "M = mRT / PV"+"<br />"+"P = mRT / MV "+"<br />"+" P = "+m+" * "+R+" * "+T+" / "+M+" * "+V+"<br />";
         reslt =(_m*R*t)/(_M*v)+"<br />";
           document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; 
     }
 else if(V=="X"|| V == "x" || V=="?")
     {
         var _M =parseFloat(M);
            var p =parseFloat(o);
            var t =parseFloat(T);
          var _m =parseFloat(m);
         tips= "M = mRT / PV"+"<br />"+"V = mRT / MP "+"<br />"+"V = "+m+" * "+R+" * "+T+" / "+M+" * "+o+"<br />";
         reslt =(_m*R*t)/(p*_M)+"<br />";
            document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; 
     }
 else if(m=="X"|| m == "x" || m=="?")
     {
         var v =parseFloat(V);
            var p =parseFloat(o);
            var t =parseFloat(T);
          var _M =parseFloat(M);
         tips+= "M = mRT / PV"+"<br />"+"m = MPV / RT "+"<br />"+" m = "+M+" * "+o+" * "+V+" / "+R+" * "+T+"<br />";
         reslt =(_M*p*v)/(R*t)+"<br />";
           document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; 
     }
 else if(T=="X"|| T == "x" || T=="?")
     {
         var v =parseFloat(V);
            var p =parseFloat(o);
            var _M =parseFloat(M);
          var _m =parseFloat(m);
         tips+= "M = mRT / PV"+"<br />"+"T = MPV / Rm "+"<br />"+" T = "+M+" * "+o+" * "+V+" / "+R+" * "+m+"<br />";
         reslt =(_M*p*v)/(R*_m)+"<br />";
            document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; 
}
    
 

}
