/*
This File Contains Function For unit2 reules
author:- EL-tayeb Karrar
Date:- 01-07-1438
LastEdit:- 01-07-1438
*/
function Unit2Rules()
{
    //this Function for 2 rules Page54(Get Percent By Kg) And Page55(Get Percent By L)
    this.getPercentByKgOrSize = function(material, subMaterial, defaultResult){
        if(defaultResult == undefined || defaultResult != NaN || defaultResult == null)
            return (parseFloat(subMaterial) / parseFloat(material)) * 100;
        else if(subMaterial == undefined || subMaterial != NaN || subMaterial == null)
            return (parseFloat(material) * parseFloat(defaultResult)) / 100;
        else if(material == undefined || material != NaN || material == null)
            return (parseFloat(subMaterial) / parseFloat(defaultResult)) * 100;
        else
            return "Error, The Argument Must Be 1 Null";
    };
    //this function solution for Page55(Molarys)
    this.molaryRule = function(materialInL, molsOfSubMaterial, molaryResult){
        if(molaryResult == undefined || molaryResult != NaN || molaryResult == null)
            return (parseFloat(molsOfSubMaterial) / parseFloat(materialInL));
        else if (materialInL == undefined || materialInL != NaN || materialInL == null)
            return (parseFloat(molsOfSubMaterial) / parseFloat(molaryResult));
        else if (molsOfSubMaterial == undefined || molsOfSubMaterial != NaN || molsOfSubMaterial == null)
            return (parseFloat(materialInL) * parseFloat(molaryResult));
        else
            return "Error, The Argument Must Be 1 Null";
    };
    //this function solution for Page58(mitigation)
    this.mitigationRule = function(m1, v1, m2, v2){
        if(m1 == undefined || m1 == NaN || m1 == null)
            return (parseFloat(m2) * parseFloat(v2)) / parseFloat(v1);
        else if(v1 == undefined || v1 == NaN || v1 == null)
            return (parseFloat(m2) * parseFloat(v2)) / parseFloat(m1);
        else if(m2 == undefined || m2 == NaN || m2 == null)
            return (parseFloat(m1) * parseFloat(v1)) / parseFloat(v2);
        else if(v2 == undefined || v2 == NaN || v2 == null)
            return (parseFloat(m1) * parseFloat(v1)) / parseFloat(m2);
        else "Error, The Argument Must Be 1 Null";
    };
    //this function solution Page60(Molalyes Rule)
    this.molalyeRule = function(materialInKg, molsOfSubMaterial, molaryResult){
        if(molaryResult == undefined || molaryResult != NaN || molaryResult == null)
            return (parseFloat(molsOfSubMaterial) / parseFloat(materialInKg));
        else if (materialInKg == undefined || materialInKg != NaN || materialInKg == null)
            return (parseFloat(molsOfSubMaterial) / parseFloat(molaryResult));
        else if (molsOfSubMaterial == undefined || molsOfSubMaterial != NaN || molsOfSubMaterial == null)
            return (parseFloat(materialInKg) * parseFloat(molaryResult));
        else
            return "Error, The Argument Must Be 1 Null";
    };
    //this function solution for Page61(bork Moly)
    this.brokMoly = function(n1, n2){
        if(n1 == undefined || n1 == NaN || n1 == null || n2 == undefined || n2 == NaN || n2 == null)
            return "You Need To Send Full Argument";
        else
            return parseFloat(n1) / (parseFloat(n1) + parseFloat(n2));
    };
    //this function solution for Page70(henry rule)
    this.henryRules = function(s1, s2, p1, p2){
        if(s1 == undefined || s1 == NaN || s1 == null)
            return (parseFloat(p1) * parseFloat(s2)) / parseFloat(p2);
        else if(s2 == undefined || s2 == NaN || s2 == null)
            return (parseFloat(p2) * parseFloat(s1)) / parseFloat(p1);
        else if(p1 == undefined || p1 == NaN || p1 == null)
            return (parseFloat(p2) * parseFloat(s1)) / parseFloat(s2);
        else if(p2 == undefined || p2 == NaN || p2 == null)
            return (parseFloat(p1) * parseFloat(s2)) / parseFloat(s1);
        else "Error, The Argument Must Be 1 Null";
    };
    //this function solution for tow rules Page74(Change In Fire Degree) & Page 76(Change In Frezz Degree)
    this.changeInState = function(k, m){
        if(k == null || m == null || k == undefined || m == undefined || k == NaN || m == NaN)
            return "You Need To Send Full Argument";
        else
            return k * m;
    };
}