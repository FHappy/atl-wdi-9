console.log('hey');

$(document).ready(function() {
  // alert("Everything is ready, let's do this.");

  $('#addHome').removeClass('btn-danger').addClass('btn-success');
  // $('#addHome').toggleClass('btn-danger' 'btn-success');

  // $('.jumbotron').addClass('text-center');

  var newLink = $('<br><br><a id="zillowLink" ' +
                  'href="http://www.zillow.com">Visit Zillow.com</a>');
  newLink.appendTo('body');

  $('#zillowlink').attr("target", "_blank");

  var index = 0;

  $('#addHome').on('click', function(){
    if (index < newHomes.length) {
      var home = newHomes[index];
      var newRow = $('<tr>');
      $('tbody').append(newRow);

      for (key in home) {
        var cell = $('<td>');
        var cellData = home[key];
        cell.html(cellData);
        newRow.append(cell);
      }

      newRow.append('<td><button class="btn btn-xs ' +
                    'btn-danger">Remove</button></td>');
      index++;
    }
  });

  $('.btn-danger').on('click', function($event) {
    alert('you are about ot delete this row.');
    console.log($(this));
    var $rowThatWasClicked = $(this).parent().parent();
    $rowThatWasClicked.fadeOut(1000, function() {
        $rowThatWasClicked.remove();
    });;
  });


  var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  ];
});



