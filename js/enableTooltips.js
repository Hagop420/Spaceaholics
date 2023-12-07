document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});




//   // Function to change the tooltip position
//   function changeTooltipPosition(position) {
//     var button = document.getElementById('myButton');
//     button.setAttribute('data-placement', position);
//   }

//   // Example: Change tooltip position to 'top' when the button is clicked
//   document.getElementById('myButton').addEventListener('click', function() {
//     changeTooltipPosition('top');
//   });
