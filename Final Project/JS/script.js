
$("#professions").change(architectsOutput);

function architectsOutput () {

 var professionSalary = $("#professions").val();
 $("#output").empty()
 $("#output").append(professionSalary);
 $(".show-info").show("slower");

}

$("#professions").click(changes);

function changes() {

 $("#output").css("font-size", "30px");
 $(".groceries").css("font-size", 0);

 $("#output").animate({
    "font-size":"20px",
  }, 5500)

$(".groceries").animate({
    "font-size":"50px",
  }, 5500)
$("body").css("color", "black");
$("a").css("color", "black");
$(".percentage").removeClass("grey");
$(".percentage").addClass("yellow");
$("#news").addClass("yellow");
$("#professions").removeClass("grey");
$("#professions").addClass("yellow");

}

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "2c2856aac8694896877294a1b9b2d3bf",
  'q': "venezuela"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
  var articles = data.response.docs;

  for (var i = 0; i < articles.length; i++) {
  //articles.forEach(article, function(){
    var currArticle = articles[i];
    var multimedia =  currArticle.multimedia;
    var image = multimedia.find(function(media) {
      return media.subType === "wide";
    });
    image = image || multimedia[0];
    if (image && image.url) {
      var fullUrl = `https://static01.nyt.com/${image.url}`
      var imageMarkup = `<img src="${fullUrl}">`;
    } else {
      var imageMarkup = "";
    }

    var infoMarkup = `<a href="${articles[i].web_url}">
    <h2 class="smaller">${articles[i].snippet}</h2>
    ${imageMarkup}
    </a>`
    $("#news").append(infoMarkup);
  };
}).fail(function(err) {
  throw err;
});

var secondUrl = "https://s3.amazonaws.com/dolartoday/data.json";

$.ajax( {
  url: secondUrl,
  method: 'GET',
}).done(function(data) {
  console.log(data);
   var dolar = data.USD;
   var dolarMarkup = `<a href="https://dolartoday.com/"><h1>1 dollar equals ${dolar.transferencia} Bs.</h1><a>`
   $("#title").append(dolarMarkup);

   function calculateMinSalInDollars() {
   var minimunWage = 1800.00;
   var dolarValue = dolar.transferencia;
   return minimunWage / dolarValue;
   }
   var value = calculateMinSalInDollars();
   var val = value.toFixed(2);

    $(".minimunWageOutput").prepend(val);

});


//*As a user, when a get a result the background img changes (Maybe depending on the results)
