function Poyle()
{
     var P1 =parseFloat(document.getElementById("").value);
    var P2 =parseFloat(document.getElementById("").value);
    var V1 =parseFloat(document.getElementById("").value);
    var V2 =parseFloat(document.getElementById("").value);
    var reslt ;
     var tips ;
    if(P1==NaN)
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
    else if(P2==NaN)
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
    else if(V1==NaN)
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
    
    else if(V2==NaN)
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
function Charles ()
{
     var T1 =parseFloat(document.getElementById("").value);
    var T2 =parseFloat(document.getElementById("").value);
    var V1 =parseFloat(document.getElementById("").value);
    var V2 =parseFloat(document.getElementById("").value);
    var reslt ;
     var tips ;
    if(T1 == NaN)
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
    else if(T2 == NaN)
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
    else if(V1 == NaN)
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
    else if(V2 == NaN)
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
function Lusac ()
{
    var P1 =parseFloat(document.getElementById("").value);
    var P2 =parseFloat(document.getElementById("").value);
    var T1 =parseFloat(document.getElementById("").value);
    var T2 =parseFloat(document.getElementById("").value);
    var reslt ;
     var tips ;
    if(T1 == NaN)
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
    else if(T2 == NaN)
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
    else if(P1 == NaN)
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
    else if(P2 == NaN)
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
function public ()
{   var P1 =parseFloat(document.getElementById("").value);
    var P2 =parseFloat(document.getElementById("").value);
    var V1 =parseFloat(document.getElementById("").value);
    var V2 =parseFloat(document.getElementById("").value);
    var T1 =parseFloat(document.getElementById("").value);
    var T2 =parseFloat(document.getElementById("").value);
    var reslt;
    var tips;
 
 if(P1 == NaN)
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
 else if(V1 == NaN)
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
 else if(T1 == NaN)
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
 else if(P2 == NaN)
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
 else if(V2 == NaN)
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
 else if(T2 == NaN)
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