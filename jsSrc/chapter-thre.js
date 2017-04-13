function KW()
{
    var pH = document.getElementById("H").value;
    var pOH = document.getElementById("OH").value;
    var Kw = document.getElementById("kw").value;
    var result;  var tips ="";
    
    if(Kw=="?"||Kw=="x"||Kw=="X"){
        
        var ppH = parseFloat(pH);
    var ppOH = parseFloat(pOH);
       result=ppH*ppOH+"<br />";
       tips+="Kw = [pOH][pH]"+"<br />"+"Kw = "+"["+pOH+"]"+"["+pH+"]";
     document.getElementById("result").innerHTML=result;
      document.getElementById("tips").innerHTML=tips;
        
                 }
    
    
    else if(pH=="?"||pH=="x"||pH=="X"){
        
           var kw = parseFloat(Kw);
    var ppOH = parseFloat(pOH);
        result=kw/ppOH+"<br />";
        tips+="Kw = [pOH][pH]"+"<br />"+"pH = [Kw] / [pOH]"+"<br />"+"pH = "+"["+Kw+"]"+" / "+"["+pOH+"]";
        document.getElementById("result").innerHTML=result;
        document.getElementById("tips").innerHTML=tips;
        
                 }
    else if(pOH=="?"||pOH=="x"||pOH=="X"){
           var poH = parseFloat(pH);
    var kw = parseFloat(Kw);
        result=kw/poH+"<br />";
        tips+="Kw = [pOH][pH]"+"<br/>"+"pOH = [Kw] / [pH]"+"<br />"+"pOH = "+"["+Kw+"]"+" / "+"["+pH+"]";
         document.getElementById("result").innerHTML=result;
        document.getElementById("tips").innerHTML=tips;
    
    }
}
function PH(){
    
    var pH = document.getElementById("pH").value;
    var H = document.getElementById("trkez1").value;
    var result ;
    var tips="";
    
    if(pH=="?"||pH=="x"||pH=="X"){ 
                var h = parseFloat(H);

        
        result =Math.log10(h);result*=-1;
        tips+="pH = - log[H] "+"<br />"+"pH = - log("+H+")"
        document.getElementById("result1").innerHTML=result;
        document.getElementById("tips1").innerHTML=tips;    
    
    }
    
       else if(H=="?"||H=="x"||H=="X"){
           
            var ppH = parseFloat(pH);
        result = Math.pow(10,-ppH);
        tips+="[H] = 10^-pH "+"<br />"+"[H] = 10^ -"+pH;
        document.getElementById("result1").innerHTML=result;
        document.getElementById("tips1").innerHTML=tips;}
}
function POH(){
    
    var pOH = document.getElementById("pOH").value;
    var OH = document.getElementById("trkez3").value;
    var result ;
    var tips ="";
    if(pOH=="?"||pOH=="x"||pOH=="X"){
             var oh = parseFloat(OH);

        result =Math.log10(oh);result*=-1;
        tips+="pOH = - log[H] "+"<br />"+"pOH = - log("+OH+")";
            document.getElementById("result2").innerHTML=result;
        document.getElementById("tips2").innerHTML=tips; 
    }
       else if(OH=="?"||OH=="x"||OH=="X"){
           var poH = parseFloat(pOH);
           result =Math.pow(10,-poH);tips="[OH] = 10^-pOH "+"<br />"+"[OH] = 10^ -"+pOH;
      document.getElementById("result2").innerHTML=result;document.getElementById("tips2").innerHTML=tips;}
}
function _ppOh(){
    var pH = document.getElementById("h").value;
    var pOH = document.getElementById("oH").value;
    var result;
    var tips =""; 
                  if(pH=="?"||pH=="x"||pH=="X"){
                       var poH = parseFloat(pOH);
                      result=14 - poH;
                  tips+=" 14.00 = pH+pOH"+"<br />"+"pH = 14.00 - pOH"+"<br />"+"pH = 14.00 - "+pOH;
                                 document.getElementById("result3").innerHTML=result;
                                 document.getElementById("tips3").innerHTML=tips;}
                else if(pOH=="?"||pOH=="x"||pOH=="X"){
                     var ppH = parseFloat(pH);
                    
                    result=14 - ppH;
                    tips+=" 14.00 = pH+pOH"+"<br />"+"pOH = 14.00 - pH"+"<br />"+"pOH = 14.00 - "+pH ;
                    document.getElementById("result3").innerHTML=result;
                    document.getElementById("tips3").innerHTML=tips;}



}
function F(){}