const filterCon = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterCon.addEventListener("click", (zoom) =>{
    if(zoom.target.classList.contains("filter-item")){
        filterCon.querySelector(".active").classList.remove("active");
        zoom.target.classList.add("active");
        const filterValue = zoom.target.getAttribute("data-filter");
        galleryItems.forEach((item) =>{
            if(item.classList.contains(filterValue) || filterValue === 'all'){
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});

function imgSlider(anything) {
    document.querySelector('.main').src = anything;
  }
// script.js
document.addEventListener('DOMContentLoaded', function() {
  fetch('index.xml')
    .then(response => response.text())
    .then(xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
      const history = xmlDoc.querySelector('history').textContent;
      const address = xmlDoc.querySelector('address').textContent;
      const email = xmlDoc.querySelector('email').textContent;
      const phone = xmlDoc.querySelector('phone').textContent;

      document.getElementById('history').textContent = history;
      document.getElementById('address').textContent = address;
      document.getElementById('email').textContent = email;
      document.getElementById('phone').textContent = phone;

    })
    .catch(error => {
      console.error('Error fetching or parsing XML:', error);
    });
});

// Get the necessary elements
const locationButton = document.getElementById("locationButton");
const direction = document.getElementById("direction");

// Add event listener to the button
locationButton.addEventListener("click", function() {
  // Toggle the "show" class on the image container
  direction.parentElement.classList.toggle("show");
});  
// Create a function to handle the AJAX request
function loadXMLDoc() {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    // Parse the XML response
    var xmlDoc = xmlhttp.responseXML;
    
    // Get all the photo elements
    var photos = xmlDoc.getElementsByTagName("photo");
    
    // Iterate over each photo element
    for (var i = 0; i < photos.length; i++) {
      var photo = photos[i];
      
      // Get the src, title, and description values
      var src = photo.getElementsByTagName("src")[0].childNodes[0].nodeValue;
      var title = photo.getElementsByTagName("title")[0].childNodes[0].nodeValue;
      var description = photo.getElementsByTagName("description")[0].childNodes[0].nodeValue;
      
      // Update the corresponding elements on the page
      var imgElement = document.getElementsByClassName("img")[i];
      var titleElement = document.getElementsByClassName("title")[i];
      var descriptionElement = document.getElementsByClassName("description")[i];
      
      imgElement.src = src;
      titleElement.textContent = title;
      descriptionElement.textContent = description;
    }
  }
};

// Send the AJAX request to load the XML file
xmlhttp.open("GET", "photos.xml", true);
xmlhttp.send();
}

// Call the loadXMLDoc function to load the XML and update the elements
loadXMLDoc();

  