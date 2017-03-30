function Poyle()
{
     var P1 =parseFloat(document.getElementById("").value);
    var P2 =parseFloat(document.getElementById("").value);
    var V1 =parseFloat(document.getElementById("").value);
    var V2 =parseFloat(document.getElementById("").value);
    var reslt ;
     var tips ;
    if(P1==null)
        {
            
            reslt = (V2 / V1) * P2;
            tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "P1 = (V2 / V1) * P2 ";
            tips  += "<br />";
            tips  += "P1 = "+"("+V2+" / "+V1+") "+" * "+P2;
            reslt += "<br />";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value; 
        }
    else if(P2==null)
        {
            
            reslt = (V1 / V2) * P1;
             tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "P2 = (V1 / V2) * P1 ";
            tips  += "<br />";
            tips  += "P2 = "+"("+V1+" / "+V2+") "+" * "+P1;
            reslt += "<br />";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value; 
        }
    else if(V1==null)
        {
            
            reslt = (P2 / P1) * V2;
             tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "V1 = (P2 / P1) * V2 ";
            tips  += "<br />";
            tips  += "V1 = "+"("+P2+" / "+P1+") "+" * "+V2;
            reslt += "<br />";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value; 
            
        }
    
    else if(V2==null)
        {
            
            reslt = (P1 / P2) * V1;
             tips   = "P1 V1 = P2 V2 "
            tips  += "<br /> ";
            tips  += "V1 = (P1 / P2) * V1 ";
            tips  += "<br />";
            tips  += "V1 = "+"("+P1+" / "+P2+") "+" * "+V1;
            reslt += "<br />";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value; 
        }
    
    
    
}
function Sharles()
{
     var T1 =parseFloat(document.getElementById("").value);
    var T2 =parseFloat(document.getElementById("").value);
    var V1 =parseFloat(document.getElementById("").value);
    var V2 =parseFloat(document.getElementById("").value);
    var reslt ;
     var tips ;
    if(T1 == null)
    {
        reslt= (V1*T2)/V2;
        reslt+= "<br /";
        tips = "V1 / T1 = V2 / T2";
        tips+="<br /";
        tips+="T1 = (V1 * T2) / V2 "+"<br />";
        tips+= "T1 = "+"("+V1+" * "+ T2+")  / "+V2;
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
        
    }
    else if(T2 == null)
    {
        reslt= (V2*T1)/V1;
        reslt+= "<br /";
        tips = "V1 / T1 = V2 / T2";
        tips+="<br /";
        tips+="T1 = (V2 * T1) / V1 "+"<br />";
        tips+= "T1 = "+"("+V2+" * "+ T1+")  / "+V1;
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
        
    }
    else if(V1 == null)
    {
        reslt= ( V2 * T1 ) / T2;;
        reslt+= "<br /";
        tips = "V1 / T1 = V2 / T2";
        tips+="<br /";
        tips+="T1 = (V2 * T1) / T2 "+"<br />";
        tips+= "T1 = "+"("+V2+" * "+ T1+")  / "+T2;
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
        
    }
    else if(V2 == null)
    {
        reslt= ( V1 * T2 ) / T1;;
        reslt+= "<br /";
        tips = "V1 / T1 = V2 / T2";
        tips+="<br /";
        tips+="T1 = (V1 * T2) / T1 "+"<br />";
        tips+= "T1 = "+"("+V1+" * "+ T2+")  / "+T1;
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
        
    }
     
}
function Lusac()
{
    var P1 =parseFloat(document.getElementById("").value);
    var P2 =parseFloat(document.getElementById("").value);
    var T1 =parseFloat(document.getElementById("").value);
    var T2 =parseFloat(document.getElementById("").value);
    var reslt ;
     var tips ;
    if(T1 == null)
    {
        reslt= (P1*T2)/P2;
        reslt+= "<br /";
        tips = "P1 / T1 = P2 / T2";
        tips+="<br /";
        tips+="T1 = (P1 * T2) / P2 "+"<br />";
        tips+= "T1 = "+"("+P1+" * "+ T2+")  / "+P2;
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
        
    }
    else if(T2 == null)
    {
        reslt= (P2*T1)/P1;
        reslt+= "<br /";
        tips = "P1 / T1 = V2 / P2";
        tips+="<br /";
        tips+="T1 = (P2 * T1) / P1 "+"<br />";
        tips+= "T1 = "+"("+P2+" * "+ T1+")  / "+P1;
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
        
    }
    else if(P1 == null)
    {
        reslt= ( V2 * T1 ) / T2;;
        reslt+= "<br /";
        tips = "P1 / T1 = P2 / T2";
        tips+="<br /";
        tips+="T1 = (P2 * T1) / T2 "+"<br />";
        tips+= "T1 = "+"("+P2+" * "+ T1+")  / "+T2;
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
        
    }
    else if(P2 == null)
    {
        reslt= ( P1 * T2 ) / T1;;
        reslt+= "<br /";
        tips = "P1 / T1 = P2 / T2";
        tips+="<br /";
        tips+="T1 = (P1 * T2) / T1 "+"<br />";
        tips+= "T1 = "+"("+P1+" * "+ T2+")  / "+T1;
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
        
    }
    
    
    
}
function publicc()
{   var P1 =parseFloat(document.getElementById("").value);
    var P2 =parseFloat(document.getElementById("").value);
    var V1 =parseFloat(document.getElementById("").value);
    var V2 =parseFloat(document.getElementById("").value);
    var T1 =parseFloat(document.getElementById("").value);
    var T2 =parseFloat(document.getElementById("").value);
    var reslt;
    var tips;
 
 if(P1 == null)
     {
          reslt= P2 * (V2/ V1) * (T1 / T2);
         reslt+= "<br /";
         tips = "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br /";
         tips+="T1 = P2 * (V2/ V1) * (T1 / T2) "+"<br />";
         tips+ "P1 = "+P2+" * "+" ( "+V2+" / "+ V1+" ) * " +" ( "+T1+ " / "+T2+" ) ";
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
          
     }
 else if(V1 == null)
     {
          reslt= V2 * (P2 / P1) * (T1 / T2);
         reslt+= "<br /";
         tips = "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br /";
         tips+="V1 = V2 * (P2 / P1) * (T1 / T2) "+"<br />";
         tips+="T1 = "+V2+" * "+" ( "+P2+" / "+P1+")  *  "+" ( "+T1+" / "+T2+" ) ";
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
          
     }
 else if(T1 == null)
     {
          reslt= T2 * (P1 /P2) * (V1 / V2);
         reslt+="<br /";
         tips ="P1 V1 / T1 = P2 V2 / T2";
         tips+="<br /";
         tips+="T1 =T2 * (P1 /P2) * (V1 / V2) "+"<br />";
         tips+="T1 = "+T2+" * "+" ( "+P1+" / "+P2+" ) * "+" ( "+V1+" / "+V2+" ) ";
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
     }
 else if(P2 == null)
     {
          reslt= P1 * (V1/ V2) * (T2 / T1);
         reslt+= "<br /";
         tips = "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br /";
         tips+="P2 = P1 * (V1/ V2) * (T2 / T1) "+"<br />";
         tips+= "P2 = "+P1+" * "+" ( "+V1+" / "+ V2+" ) * " +" ( "+T2+ " * "+ T1+" ) ";
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
          
     }
 else if(V2 == null)
     {
          reslt= V1 * (P1 / P2) * (T2 / T1);
         reslt+= "<br /";
         tips = "P1 V1 / T1 = P2 V2 / T2";
         tips+="<br /";
         tips+="V2 = V1 * (P1 / P2) * (T2 / T1) "+"<br />";
         tips+= "T1 = "+V2 +" * "+" ( "+P2+" / "+ P1+")  *  "+" ( "+T1+" * " +T2+" ) ";
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
          
     }
 else if(T2 == null)
     {
          reslt= T1 * (P2 /P1) * (V2 / V1);
         reslt+="<br /";
         tips ="P1 V1 / T1 = P2 V2 / T2";
         tips+="<br /";
         tips+="T1 =T1 * (P2 /P1) * (V2 / V1) "+"<br />";
         tips+="T1 = "+T1+" * "+" ( "+P2+" / "+P1+" ) * "+" ( "+V2+" / "+V1+" ) ";
         document.getElementById("").innerHTML= tips.value;
         document.getElementById("").innerHTML= reslt.value; 
     }
    
    
    
}
function STPP()
{
    var m =parseFloat(document.getElementById("").value);
    var M =parseFloat(document.getElementById("").value);
    var n =parseFloat(document.getElementById("").value);
    var reslt;
    var tips;
    
     
    if(m == null)
        {
            reslt = n * M;
            reslt +="<br />";
            tips = "m = n * M"+"<br />";
            tips += "m = "+n+" * "+M;
            tips+= "<br /";
             document.getElementById("").innerHTML= tips.value;
             document.getElementById("").innerHTML= reslt.value; 
            
        }
    else if (n == null)
        {   reslt =m / M;
            reslt +="<br />";
            tips = "n = m / M"+"<br />";
            tips += "m = "+m+" / "+M;
            tips+= "<br /";
             document.getElementById("").innerHTML= tips.value;
             document.getElementById("").innerHTML= reslt.value; 
        }
    else if (M == null)
        {   reslt =m / n;
            reslt +="<br />";
            tips = "M = m / n"+"<br />";
            tips += "M = "+m+" / "+n;
            tips+= "<br /";
             document.getElementById("").innerHTML= tips.value;
             document.getElementById("").innerHTML= reslt.value; 
        }
             
    
}
function perfect()
{
    var P =parseFloat(document.getElementById("").value);
    var V =parseFloat(document.getElementById("").value);
    var n =parseFloat(document.getElementById("").value);
    var T =parseFloat(document.getElementById("").value);
    var R = 0.0821;
    var reslt;
    var tips; 
    if( P == null)
       { 
        tips= "PV = nRT"+"<br />";
        tips +="P = nRT / V"+"<br />";
        tips += "P = "+n+"*"+R+"*"+T+" / "+V;
        reslt = (n*R*T) / (V);
        reslt ="<br />";
        document.getElementById("").innerHTML= tips.value;
        document.getElementById("").innerHTML= reslt.value; 
       
       }
    else if( V == null)
       { 
        tips= "PV = nRT"+"<br />";
        tips +="V = nRT / P"+"<br />";
        tips += "V = "+n+"*"+R+"*"+T+" / "+V;
        reslt = (n*R*T) / (P);
        reslt ="<br />";
        document.getElementById("").innerHTML= tips.value;
        document.getElementById("").innerHTML= reslt.value; 
       }
     else if( n == null)
       { 
        tips= "PV = nRT"+"<br />";
        tips +="n = PV / RT "+"<br />";
        tips += "n = "+P+" * "+V+" / "+R+" * "+T;
        reslt = (P*V) / (R*T);
        reslt ="<br />";
        document.getElementById("").innerHTML= tips.value;
        document.getElementById("").innerHTML= reslt.value; 
       }
    else if( T == null)
       { 
        tips= "PV = nRT"+"<br />";
        tips +="T = PV / Rn "+"<br />";
        tips += "n = "+P+" * "+V+" / "+R+" * "+n;
        reslt = (P*V) / (R*n);
        reslt ="<br />";
        document.getElementById("").innerHTML= tips.value;
        document.getElementById("").innerHTML= reslt.value;
       }
    
}
function Density()
{
    var P =parseFloat(document.getElementById("").value);
    var M =parseFloat(document.getElementById("").value);
    var D =parseFloat(document.getElementById("").value);
    var T =parseFloat(document.getElementById("").value);
    var R = 0.0821;
    var reslt;
    var tips; 
    
    if (D == null )
        {
            tips= "D = MP / RT"+"<br />"+"D = "+M+" * "+P+" / "+R+" * "+T;
            reslt = (M*P)/(R*T)+"<br /";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value;        
            
        }
    else  if (T == null )
        {
            tips= "D = MP / RT"+"<br />"+"T = MP / RD "+"<br />"+"T = "+M+" * "+P+" / "+R+" * "+D;
            reslt = (M*P)/(R*D)+"<br /";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value;         
        }
      else  if (M == null )
        {
            tips= "D = MP / RT"+"<br />"+"M = RTD / P "+"<br />"+"M = "+R+" * "+T+"*"+D+" / "+P;
            reslt = (R*T*D)/(P)+"<br /";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value;         
        }
     else  if (P== null )
        {
            tips= "D = MP / RT"+"<br />"+"P = RTD / m "+"<br />"+"P = "+R+" * "+T+"*"+D+" / "+M;
            reslt = (R*T*D)/(M)+"<br /";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value;         
        }
    
    
    
    
    
}
function Molarr()
{   var M =parseFloat(document.getElementById("").value);
    var P =parseFloat(document.getElementById("").value);
    var m =parseFloat(document.getElementById("").value);
    var V =parseFloat(document.getElementById("").value);
    var T =parseFloat(document.getElementById("").value);
    var R = 0.0821;
    var reslt;
    var tips;
 if(M == null)
     {
         tips= "M = mRT / PV"+"<br />"+"M = "+m+" * "+R+" * "T+" / "+P+" * "+V+"<br />";
         reslt =(m*R*T)/(P*V)+"<br />";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value;
     }
 else if(P == null)
     {
         tips= "M = mRT / PV"+"<br />"+"P = mRT / MV "+"<br />"+"P = "+m+" * "+R+" * "T+" / "+M+" * "+V+"<br />";
         reslt =(m*R*T)/(M*V)+"<br />";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value;
     }
 else if(V == null)
     {
         tips= "M = mRT / PV"+"<br />"+"V = mRT / MP "+"<br />"+"V = "+m+" * "+R+" * "T+" / "+M+" * "+P+"<br />";
         reslt =(m*R*T)/(P*M)+"<br />";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value;
     }
 else if(m == null)
     {
         tips= "M = mRT / PV"+"<br />"+"m = MPV / RT "+"<br />"+" m = "+M+" * "+P+" * "V+" / "+R+" * "+T+"<br />";
         reslt =(M*P*V)/(R*T)+"<br />";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value;
     }
 else if(T == null)
     {
         tips= "M = mRT / PV"+"<br />"+"T = MPV / Rm "+"<br />"+" T = "+M+" * "+P+" * "V+" / "+R+" * "+m+"<br />";
         reslt =(M*P*V)/(R*m)+"<br />";
            document.getElementById("").innerHTML= tips.value;
            document.getElementById("").innerHTML= reslt.value;
    
}
}