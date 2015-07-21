(function(){
  window.gridButtonEl = document.querySelector('.grid-button');
  window.targetEl =  document.querySelector('.target');
  window.listButtonEl = document.querySelector('.list-button');

  listButtonEl.onclick = function() {
    targetEl.classList.remove("grid");
    targetEl.classList.add("list");
  };

  gridButtonEl.onclick = function grid() {
    targetEl.classList.remove("list");
    targetEl.classList.add("grid");

  };

  var templateFromQuery = function(query) {
    var el = document.querySelector(query);
    return Handlebars.compile(el.innerHTML);
  };

  var template = templateFromQuery('.beer-item');


  beerData.data.forEach(function(beer) {
    var addBeer = template(beer);

    targetEl.innerHTML += addBeer;
  });
})();
