$(document).ready(function () {
  $.ajax({
    url: 'http://localhost:5001/api/v1/status/',
    method: 'get',
    success: function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });

  const amenitiesListIDs = [];
  const amenitiesListNames = [];
  $('div.amenities ul li input[type="checkbox"]').change(function () {
    const dataId = $(this).attr('data-id');
    const dataName = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      amenitiesListIDs.push(dataId);
      amenitiesListNames.push(dataName);
    } else {
      amenitiesListIDs.splice(amenitiesListIDs.indexOf(dataId), 1);
      amenitiesListNames.splice(amenitiesListNames.indexOf(dataName), 1);
    }
    viewChecked(amenitiesListNames);
  });
});

function viewChecked (amenitiesListNames) {
  $('div.amenities h4').html('');
  let currentList = $('div.amenities h4').text();
  amenitiesListNames.forEach((element, index) => {
    if (index === 0) {
      currentList += element;
    } else {
      currentList += `, ${element}`;
    }
    $('div.amenities h4').text(currentList);
  });
}

// Task 4: Fetch places
$.ajax({
  url: 'http://localhost:5001/api/v1/places_search/',
  method: 'POST',
  contentType: 'application/json',
  data: JSON.stringify({}),
  success: function (places) {
    places.forEach(place => {
      const guestText = place.max_guest > 1 ? 'Guests' : 'Guest';
      const bedroomText = place.number_rooms > 1 ? 'Bedrooms' : 'Bedroom';
      const bathroomText = place.number_bathrooms > 1 ? 'Bathrooms' : 'Bathroom';
      const descriptionText = place.description ? place.description : 'No description is found!';
      $('.places').append(`
      <article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">${place.price_by_night}</div>
        </div>
       <div class="information">
          <div class="max_guest">${place.max_guest} ${guestText}</div>
          <div class="number_rooms">${place.number_rooms} ${bedroomText}</div>
          <div class="number_bathrooms">${place.number_bathrooms} ${bathroomText}</div>
       </div>
       <div class="description">
         ${descriptionText}
       </div>
      </article>
      `);
    });
  }
});
