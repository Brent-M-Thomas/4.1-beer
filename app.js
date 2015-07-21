(function(){
  // var gridButtonEl = document.getElementsByClassName(fa-th);
  // var beerClassEl =  document.getElementsByClassName(beer);
  // var listButtonEl = document.getElementsByClassName(fa-th-list);

  // listButtonEl.onclick = function list(beerClass) {
  //   beerClassEl.classList.remove("grid");
  //   beerClassEl.classList.add("list");
  // };

  // listButtonEl.onclick = function grid(beerClass) {
  //   beerClassEl.classList.remove("list");
  //   beerClassEl.classList.add("grid");

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
