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
            
            reslt = (V2 / V1) * P2;
            tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "P1 = (V2 / V1) * P2 ";
            tips  += "<br />";
            tips  += "P1 = "+"("+V2+" / "+V1+") "+" * "+P2;
            reslt += "<br />";
            document.getElementById("tips2").innerHTML= tips;
            document.getElementById("result2").innerHTML= reslt; 
        }
    else if( P2=="X"|| P2 ==" x" || P2=="?")
        {
            
            reslt = (V1 / V2) * P1;
             tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "P2 = (V1 / V2) * P1 ";
            tips  += "<br />";
            tips  += "P2 = "+"("+V1+" / "+V2+") "+" * "+P1;
            reslt += "<br />";
            document.getElementById("tips2").innerHTML= tips;
            document.getElementById("result2").innerHTML= reslt; 
        }
    else if( V1=="X"|| V1 == "x" || V1=="?")
        {
            
            reslt = (P2 / P1) * V2;
             tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "V1 = (P2 / P1) * V2 ";
            tips  += "<br />";
            tips  += "V1 = "+"("+P2+" / "+P1+") "+" * "+V2;
            reslt += "<br />";
            document.getElementById("tips2").innerHTML= tips;
            document.getElementById("result2").innerHTML= reslt; 
            
        }
    
    else if( V2=="X"|| V2 =="x" || V2 =="?")
        {
            
            reslt = (P1 / P2) * V1;
             tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "V1 = (P1 / P2) * V1 ";
            tips  += "<br />";
            tips  += "V1 = "+"("+P1+" / "+P2+") "+" * "+V1;
            reslt += "<br />";
            document.getElementById("tips2").innerHTML= tips;
            document.getElementById("result2").innerHTML= reslt; 
        }
    
    
    
}
function S()
{
    
     var T1 =parseFloat(document.getElementById("t1").value);
    var T2 =parseFloat(document.getElementById("t2").value);
    var V1 =parseFloat(document.getElementById("v3").value);
    var V2 =parseFloat(document.getElementById("v4").value);
    var reslt ;
     var tips = "" ;
  
    if( T1=="X"|| T1 == "x" || T1=="?")
    {  
        reslt=(T2 / V1) * V2+ "<br /";
       
        
    tips += "V1 / T1 = V2 / T2 " + "<br />"+"T1 = (V1 * T2) / V2 "+"<br />" +"T1 = "+"("+V1+" * "+ T2+")  / "+V2;
       document.getElementById("tips1").innerHTML= tips;
       document.getElementById("result1").innerHTML= reslt; 
      
    }
    else if( T2=="X"|| T2 == "x" || T2=="?")
    {
        reslt= (V2*T1)/V1;
        reslt+= "<br /";
        tips += "V1 / T1 = V2 / T2";
        tips+="<br /";
        tips+="T2 = (V2 * T1) / V1 "+"<br />";
        tips+= "T2 = "+"("+V2+" * "+ T1+")  / "+V1;
          document.getElementById("tips1").innerHTML= tips;
            document.getElementById("result1").innerHTML= reslt; 
    }
    else if( V1=="X"|| V1 == "x" || V1=="?")
    {
        reslt= ( V2 * T1 ) / T2+"<br /";
        tips+= "V1 / T1 = V2 / T2"+"<br />"+"V1 = (V2 * T1) / T2 "+"<br />"+"V1 = "+"("+V2+" * "+ T1+")  / "+T2;
          document.getElementById("tips1").innerHTML= tips;
            document.getElementById("result1").innerHTML= reslt; 
        
    }
    else if( V2=="X"|| V2 == "x" || V2=="?")
    {
        reslt= ( V1 * T2 ) / T1;;
        reslt+= "<br /";
        tips += "V1 / T1 = V2 / T2";
        tips+="<br />";
        tips+="V2 = (V1 * T2) / T1 "+"<br />";
        tips+= "V2 = "+"("+V1+" * "+ T2+")  / "+T1;
         document.getElementById("tips1").innerHTML= tips;
            document.getElementById("result1").innerHTML= reslt; 
        
    }
     
}
function Lusac()
{
    var P1 =parseFloat(document.getElementById("P1").value);
    var P2 =parseFloat(document.getElementById("P2").value);
    var T1 =parseFloat(document.getElementById("T1").value);
    var T2 =parseFloat(document.getElementById("T2").value);
    var reslt ;
     var tips = "" ;
    if( T1=="X"|| T1 == "x" || T1=="?")
    {
        reslt= (P1*T2)/P2;
        reslt+= "<br /";
        tips += "P1 / T1 = P2 / T2";
        tips+="<br />";
        tips+="T1 = (P1 * T2) / P2 "+"<br />";
        tips+= "T1 = "+"("+P1+" * "+ T2+")  / "+P2;
        document.getElementById("tips3").innerHTML= tips;
            document.getElementById("result3").innerHTML= reslt; 
    }
    else if( T2=="X"|| T2 == x || T2=="?")
    {
        reslt= (P2*T1)/P1;
        reslt+= "<br /";
        tips += "P1 / T1 = V2 / P2";
        tips+="<br /";
        tips+="T1 = (P2 * T1) / P1 "+"<br />";
        tips+= "T1 = "+"("+P2+" * "+ T1+")  / "+P1;
         document.getElementById("tips3").innerHTML= tips;
            document.getElementById("result3").innerHTML= reslt; 
        
    }
    else if( P1=="X"|| P1 == "x" || P1=="?")
    {
        reslt= ( P2 * T1 ) / T2;;
        reslt+= "<br /";
        tips += "P1 / T1 = P2 / T2";
        tips+="<br />";
        tips+="T1 = (P2 * T1) / T2 "+"<br />";
        tips+= "T1 = "+"("+P2+" * "+ T1+")  / "+T2;
         document.getElementById("tips3").innerHTML= tips;
            document.getElementById("result3").innerHTML= reslt; 
        
    }
    else if( P2=="X"|| P2 == "x" || P2=="?")
    {
        reslt= ( P1 * T2 ) / T1;;
        reslt+= "<br /";
        tips += "P1 / T1 = P2 / T2";
        tips+="<br />";
        tips+="T1 = (P1 * T2) / T1 "+"<br />";
        tips+= "T1 = "+"("+P1+" * "+ T2+")  / "+T1;
         document.getElementById("tips3").innerHTML= tips;
            document.getElementById("result3").innerHTML= reslt; 
        
    }
    
    
    
}
function publicc()
{   var P1 =parseFloat(document.getElementById("pp1").value);
    var P2 =parseFloat(document.getElementById("pp2").value);
    var V1 =parseFloat(document.getElementById("vv1").value);
    var V2 =parseFloat(document.getElementById("vv2").value);
    var T1 =parseFloat(document.getElementById("tt1").value);
    var T2 =parseFloat(document.getElementById("tt2").value);
    var reslt;
    var tips = "";
 
 if( P1=="X"|| P1 == "x" || P1=="?")
     {
          reslt= P2 * (V2/ V1) * (T1 / T2);
         reslt+= "<br /";
         tips += "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="T1 = P2 * (V2/ V1) * (T1 / T2) "+"<br />";
         tips+ "P1 = "+P2+" * "+" ( "+V2+" / "+ V1+" ) * " +" ( "+T1+ " / "+T2+" ) ";
       document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
          
     }
 else if( V1=="X"|| V1 == "x" || V1=="?")
     {
          reslt= V2 * (P2 / P1) * (T1 / T2);
         reslt+= "<br /";
         tips += "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="V1 = V2 * (P2 / P1) * (T1 / T2) "+"<br />";
         tips+="V1 = "+V2+" * "+" ( "+P2+" / "+P1+")  *  "+" ( "+T1+" / "+T2+" ) ";
         document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
          
     }
 else if( T1=="X"|| T1 == "x" || T1=="?")
     {
          reslt= T2 * (P1 /P2) * (V1 / V2);
         reslt+="<br /";
         tips +="P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="T1 =T2 * (P1 /P2) * (V1 / V2) "+"<br />";
         tips+="T1 = "+T2+" * "+" ( "+P1+" / "+P2+" ) * "+" ( "+V1+" / "+V2+" ) ";
        document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
     }
 else if( P2=="X"|| P2 == "x" || P2=="?")
     {
          reslt= P1 * (V1/ V2) * (T2 / T1);
         reslt+= "<br /";
         tips += "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="P2 = P1 * (V1/ V2) * (T2 / T1) "+"<br />";
         tips+= "P2 = "+P1+" * "+" ( "+V1+" / "+ V2+" ) * " +" ( "+T2+ " / "+ T1+" ) ";
        document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
     }
 else if( V2=="X"|| V2 == "x" || V2=="?")
     {
          reslt= V1 * (P1 / P2) * (T2 / T1);
         reslt+= "<br /";
         tips += "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br />";
         tips+="V2 = V1 * (P1 / P2) * (T2 / T1) "+"<br />";
         tips+= "V2 = "+V1 +" * "+" ( "+P1+" / "+ P2+")  *  "+" ( "+T2+" / " +T1+" ) ";
          document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
          
     }
 else if(T2 == 0.0)
     {
          reslt= T1 * (P2 /P1) * (V2 / V1);
         reslt+="<br /";
         tips +="P1 V1 / T1 = P2 V2 / T2";
         tips+="<br /";
         tips+="T1 =T1 * (P2 /P1) * (V2 / V1) "+"<br />";
         tips+="T1 = "+T1+" * "+" ( "+P2+" / "+P1+" ) * "+" ( "+V2+" / "+V1+" ) ";
         document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
     }
    
    
    
}
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
            tips+= "<br /";
            document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
    else if (n == 0.0)
        {   reslt =m / M;
            reslt +="<br />";
            tips += "n = m / M"+"<br />";
            tips += "m = "+m+" / "+M;
            tips+= "<br /";
              document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
    else if (M == 0.0)
        {   reslt =m / n;
            reslt +="<br />";
            tips += "M = m / n"+"<br />";
            tips += "M = "+m+" / "+n;
            tips+= "<br /";
             document.getElementById("tips").innerHTML= tips;
            document.getElementById("result").innerHTML= reslt; 
        }
             
    
}
function perfect()
{
    var P =parseFloat(document.getElementById("P").value);
    var V =parseFloat(document.getElementById("V").value);
    var n =parseFloat(document.getElementById("n").value);
    var T =parseFloat(document.getElementById("T").value);
    var R = 0.0821;
    var reslt;
    var tips = ""; 
    if( P == 0.0)
       { 
        tips= "PV = nRT"+"<br />";
        tips +="P = nRT / V"+"<br />";
        tips += "P = "+n+"*"+R+"*"+T+" / "+V;
        reslt = (n*R*T) / (V);
        reslt +="<br />";
       document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
       }
    else if( V == 0.0)
       { 
        tips= "PV = nRT"+"<br />";
        tips +="V = nRT / P"+"<br />";
        tips += "V = "+n+"*"+R+"*"+T+" / "+V;
        reslt = (n*R*T) / (P);
        reslt +="<br />";
    document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
       }
     else if( n == 0.0)
       { 
        tips= "PV = nRT"+"<br />";
        tips +="n = PV / RT "+"<br />";
        tips += "n = "+P+" * "+V+" / "+R+" * "+T;
        reslt = (P*V) / (R*T);
        reslt ="<br />";
     document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
       }
    else if( T == 0.0)
       { 
        tips= "PV = nRT"+"<br />";
        tips +="T = PV / Rn "+"<br />";
        tips += "n = "+P+" * "+V+" / "+R+" * "+n;
        reslt = (P*V) / (R*n);
        reslt +="<br />";
        document.getElementById("tips4").innerHTML= tips;
            document.getElementById("result4").innerHTML= reslt; 
       }
    
}
function Density()
{
    var P =parseFloat(document.getElementById("PP").value);
    var M =parseFloat(document.getElementById("MM").value);
    var D =parseFloat(document.getElementById("D").value);
    var T =parseFloat(document.getElementById("TT").value);
    var R = 0.0821;
    var reslt;
    var tips = ""; 
    
    if (D == 0.0 )
        {
            tips= "D = MP / RT"+"<br />"+"D = "+M+" * "+P+" / "+R+" * "+T;
            reslt = (M*P)/(R*T)+"<br />";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt; 
            
        }
    else  if (T == 0.0 )
        {
            tips= "D = MP / RT"+"<br />"+"T = MP / RD "+"<br />"+"T = "+M+" * "+P+" / "+R+" * "+D;
            reslt = (M*P)/(R*D)+"<br /";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt; 
        }
      else  if (M == 0.0 )
        {
            tips= "D = MP / RT"+"<br />"+"M = RTD / P "+"<br />"+"M = "+R+" * "+T+"*"+D+" / "+P;
            reslt = (R*T*D)/(P)+"<br /";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt; 
        }
     else  if (P== 0.0 )
        {
            tips= "D = MP / RT"+"<br />"+"P = RTD / m "+"<br />"+"P = "+R+" * "+T+"*"+D+" / "+M;
            reslt = (R*T*D)/(M)+"<br /";
            document.getElementById("tips5").innerHTML= tips;
            document.getElementById("result5").innerHTML= reslt; 
        }
    
    
    
    
    
}
function M()
{   
    //اذا o || V  صفر بعطيك "?"
    var M =parseFloat(document.getElementById("M1").value);
    var m =parseFloat(document.getElementById("m3").value);
    var o =parseFloat(document.getElementById("_P").value);
    var V =parseFloat(document.getElementById("V5").value);
    var T =parseFloat(document.getElementById("T5").value);
    var R = 0.0821;
    var reslt;
    var tips = "";
 if(M == 0.0)
     {
         tips= "M = mRT / PV"+"<br />"+"M = "+m+" * "+R+" * "+T+" / "+o+" * "+V+"<br />";
         reslt =(m*R*T)/(o*V)+"<br />";
             document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; }
 else if(o == 0.0)
     {
         tips= "M = mRT / PV"+"<br />"+"P = mRT / MV "+"<br />"+" P = "+m+" * "+R+" * "+T+" / "+M+" * "+V+"<br />";
         reslt =(m*R*T)/(M*V)+"<br />";
           document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; 
     }
 else if(V == 0.0)
     {
         tips= "M = mRT / PV"+"<br />"+"V = mRT / MP "+"<br />"+"V = "+m+" * "+R+" * "+T+" / "+M+" * "+o+"<br />";
         reslt =(m*R*T)/(o*M)+"<br />";
            document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; 
     }
 else if(m == 0.0)
     {
         tips= "M = mRT / PV"+"<br />"+"m = MPV / RT "+"<br />"+" m = "+M+" * "+o+" * "+V+" / "+R+" * "+T+"<br />";
         reslt =(M*o*V)/(R*T)+"<br />";
           document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; 
     }
 else if(T == 0.0)
     {
         tips= "M = mRT / PV"+"<br />"+"T = MPV / Rm "+"<br />"+" T = "+M+" * "+o+" * "+V+" / "+R+" * "+m+"<br />";
         reslt =(M*o*V)/(R*m)+"<br />";
            document.getElementById("tips6").innerHTML= tips;
            document.getElementById("result6").innerHTML= reslt; 
}
 

}
function t(){alert("kk")}