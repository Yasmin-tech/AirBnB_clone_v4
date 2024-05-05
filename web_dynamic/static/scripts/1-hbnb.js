$(document).ready(function () {
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
