// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Get the slider elements
  var slider1 = document.getElementById("slider1");
  var slider2 = document.getElementById("slider2");
  var slider3 = document.getElementById("slider3");
  var slider4 = document.getElementById("slider4");

  // Add event listeners to the sliders
  slider1.addEventListener("input", handleSliderChange);
  slider2.addEventListener("input", handleSliderChange);
  slider3.addEventListener("input", handleSliderChange);
  slider4.addEventListener("input", handleSliderChange);

  // Send an AJAX POST request when any slider value changes
  function sendAjaxRequest() {
    // Get the current values of the sliders
    var slider1Val = slider1.value;
    var slider2Val = slider2.value;
    var slider3Val = slider3.value;
    var slider4Val = slider4.value;

    // Create an object with the slider values
    var data = {
      'slider1': slider1Val,
      'slider2': slider2Val,
      'slider3': slider3Val,
      'slider4': slider4Val
    };

    // Send an AJAX POST request to the Flask route to generate images
    $.ajax({
      type: 'POST',
      url: '/generate',
      data: data,
      success: function(response) {
        // Check if the response contains an error
        if (response.error) {
          // Handle the error
          console.error(response.error);
          console.log("Image file name: " + response.filename);
          return;
        }

        // Update the src attribute of the img element with the generated image path
        var image = response.image;
        $('#generated-image').attr('src', image);
        console.log("Image file name: " + response.filename);
          
      }
    });
  }

  // Add an event listener to each slider
  slider1.addEventListener("input", sendAjaxRequest);
  slider2.addEventListener("input", sendAjaxRequest);
  slider3.addEventListener("input", sendAjaxRequest);
  slider4.addEventListener("input", sendAjaxRequest);
});

// Handle slider changes
function handleSliderChange() {
  // Get the current slider values
  var value1 = document.getElementById("slider1").value;
  var value2 = document.getElementById("slider2").value;
  var value3 = document.getElementById("slider3").value;
  var value4 = document.getElementById("slider4").value;

  // Perform any necessary calculations or actions based on the slider values
  // You can update the generated image or perform other operations here
}
