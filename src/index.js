import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import amenityChecker from './js/park-amenities.js';

function clearFields() {
  $('#park').val("");
  $('#amenities').text("");
}

function getElements(response) {
  if (response.data) {
    $('#descript').text(`${response.data[0].description} `);
    $('#amenities').text(`${response.data[0].activities[0].name}`);
    $('#amenities').append(`, ${response.data[0].activities[1].name}`);
    $('#amenities').append(`, ${response.data[0].activities[2].name}`);
    $('#amenities').append(`, ${response.data[0].activities[3].name}`);
    $('#amenities').append(`, ${response.data[0].activities[4].name}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(park) {
  const response = await amenityChecker.getAmenities(park);
  console.log(response);
  getElements(response);
}


$(document).ready(function() {
  $('#parkbtn').click(function() {
    let park = $('#park').val();
    clearFields();
    makeApiCall(park);
  });
});