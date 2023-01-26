/* The following should be a file in your js or script folder */

$( "#CircleForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
        document.getElementById("diameter").innerHTML = "";
        document.getElementById("circumference").innerHTML = "";
        document.getElementById("area").innerHTML = "";

         var radius; // string representation of the radius
         var radiusfp; // floating point value of radius
         var diameter;  // floating point Diameter
         var circumference;  // floating point Diameter
         var area;  // floating point Diameter
         var result; // displayable result

         // read in the radius as a string
         radius = document.getElementById("radius").value;

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius ); 

         // calculate the diameter
         diameter = calcDiameter(radiusfp);
         circumference = calcCircumference(radiusfp);
         area = calcArea(radiusfp);

         // display the diameter
         document.getElementById("diameter").innerHTML = diameter.toString();
         document.getElementById("circumference").innerHTML = circumference.toString();
         document.getElementById("area").innerHTML = area.toString();
    }
}

  function calcDiameter (r)
  // returns diameter of a circle
  {
      return 2 * r;
  }

  function calcCircumference (r)
  // returns circumference of a circle
  {
      return 2 * Math.PI * r;
  }

  function calcArea (r)
  // returns area of a circle
  {
      return Math.PI * r * r;
  }

  function clearForm()
{
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").value = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("circumference").value = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("area").value = "";

}
