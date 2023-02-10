function calculate() {
    "use strict";

    //Reference from form
    var form = $( "#myform" );
    
    //If valid, retrieve form value
    if (form.valid()) {
        
        var FromValue = document.getElementById("FromValue").value;

        var FromUnit;
        if (document.getElementById("fromcm").checked) {
            FromUnit = document.getElementById("fromcm").value;
        }
        if (document.getElementById("fromm").checked) {
            FromUnit = document.getElementById("fromm").value;
        }
        if (document.getElementById("fromkm").checked) {
            FromUnit = document.getElementById("fromkm").value;
        }
        if (document.getElementById("fromin").checked) {
            FromUnit = document.getElementById("fromin").value;
        }
        if (document.getElementById("fromft").checked) {
            FromUnit = document.getElementById("fromft").value;
        }
        if (document.getElementById("fromyd").checked) {
            FromUnit = document.getElementById("fromyd").value;
        }
        if (document.getElementById("frommi").checked) {
            FromUnit = document.getElementById("frommi").value;
        }
        
        var ToUnit;
        if (document.getElementById("tocm").checked) {
            ToUnit = document.getElementById("tocm").value;
        }
        if (document.getElementById("tom").checked) {
            ToUnit = document.getElementById("tom").value;
        }
        if (document.getElementById("tokm").checked) {
            ToUnit = document.getElementById("tokm").value;
        }
        if (document.getElementById("toin").checked) {
            ToUnit = document.getElementById("toin").value;
        }
        if (document.getElementById("toft").checked) {
            ToUnit = document.getElementById("toft").value;
        }
        if (document.getElementById("toyd").checked) {
            ToUnit = document.getElementById("toyd").value;
        }
        if (document.getElementById("tomi").checked) {
            ToUnit = document.getElementById("tomi").value;
        }

        CalculateResult(FromValue, FromUnit, ToUnit);
    }
}

async function CalculateResult(FromValue, FromUnit, ToUnit) {
        
        //URL method for AJAX
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);

        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("fromcm").checked = false;
    document.getElementById("fromm").checked = false;
    document.getElementById("fromkm").checked = false;
    document.getElementById("fromin").checked = false;
    document.getElementById("fromft").checked = false;
    document.getElementById("fromyd").checked = false;
    document.getElementById("frommi").checked = false;
    document.getElementById("tocm").checked = false;
    document.getElementById("tom").checked = false;
    document.getElementById("tokm").checked = false;
    document.getElementById("toin").checked = false;
    document.getElementById("toft").checked = false;
    document.getElementById("toyd").checked = false;
    document.getElementById("tomi").checked = false;
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("ToUnitMsg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});