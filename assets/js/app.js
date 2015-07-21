(function(){
  // var listButtonEl = document.getElementsByClassName(beer);
  // var gridButtonEl = document.getElementsByClassName(beer);

  // listButtonEl.onclick = function list(beerClass) {
  //   listButtonEl.classList.remove("grid");
  //   listButtonEl.classList.add("list");
  // };

  // listButtonEl.onclick = function grid(beerClass) {
  //   listButtonEl.classList.remove("list");
  //   listButtonEl.classList.add("grid");

  // };

  var templateFromQuery = function(query) {
    var el = document.querySelector(query);
    return Handlebars.compile(el.innerHTML);
  };

  var template = templateFromQuery('.beer-item');


  beerData.data.forEach(function(beer) {
    var addBeer = template(beer);
    document.querySelector('body').innerHTML += addBeer;
  });
})();
