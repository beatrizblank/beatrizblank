
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
$("body").css("background-color", "white");
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
  // function getImages(){
  // return _.find(data.response.docs.multimedia, function(image) {
  //   return image === url;
  // });
 //var callImg = getImages();

  for (var i = 0; i < articles.length; i++) {
  //articles.forEach(article, function(){
    var infoMarkup = `<a href="${articles[i].web_url}">
    <h1>${articles[i].snippet}</h1>
    </a>`
    $("#news").append(infoMarkup);
  };
}).fail(function(err) {
  throw err;
});

var url = "https://s3.amazonaws.com/dolartoday/data.json";

$.ajax( {
  url: url,
  method: 'GET',
}).done(function(data) {
  debugger;
  console.log(data);
   var dolar = data.USD;
   var dolarMarkup = `<p>1 dolar equals ${dolar.transferencia} Bs.</p>`
   $("news").prepend(dolarMarkup);

});


//*As a user, when a get a result the background img changes (Maybe depending on the results)
