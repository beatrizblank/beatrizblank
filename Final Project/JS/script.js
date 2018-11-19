
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 200) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  $(".scrollToTop").click(function(){
    $("html,body").animate({scrollTop: 0}, 1000)
  })
});

$("#professions").change(professionsOutput);

function professionsOutput () {

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
}

var today = (new Date()).toString().split(' ').splice(1,3).join(' ');
var date = `<p class="smaller">${today}</p>`
$("#title").prepend(date);

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
      return media.subType === "xlarge";
    });
    image = image || multimedia[0];
    if (image && image.url) {
      var fullUrl = `https://static01.nyt.com/${image.url}`
      var imageMarkup = `<img src="${fullUrl}">`;
      var infoMarkup = `<div><a href="${articles[i].web_url}">
      <h1>${articles[i].headline.main}</h1>
      <p class="smaller">${articles[i].snippet}</p>
      <p class="smaller bold">${articles[i].source}</p>
      <p class="smaller grey">${articles[i].pub_date}</p>
      ${imageMarkup}
      </a><div>`
      $("#nytApi").append(infoMarkup);
    } else {
     var infoMarkup = "";
    }
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
