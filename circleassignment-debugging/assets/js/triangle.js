/* The following should be a file in your js or script folder */

$( "#CircleForm" ).validate({

});

function displayDiameter() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
        document.getElementById("diameter").innerHTML = "";

         var radius; // string representation of the radius
         var radiusfp; // floating point value of radius
         var x = 2;
         var diameter;  // floating point Diameter
         var result; // displayable result

         // read in the radius as a string
         radius = document.getElementById("radius").value;

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius ); 

         // calculate the diameter
         diameter = calcDiameter(radiusfp, x);

         // display the diameter
         document.getElementById("diameter").innerHTML = diameter.toString();
    }
}

  function calcDiameter (radiusvalue, x)
  // returns diameter of a circle
  {
      return radiusvalue * x;
  }

  function clearForm()
{
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumfrence").innerHTML = "";
}
