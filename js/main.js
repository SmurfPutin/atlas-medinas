// Medina Atlas — interactions
// 1) Souk filter

(function () {
  "use strict";

  var search = document.getElementById("souk-search");
  var list = document.getElementById("souk-list");
  var empty = document.getElementById("souk-empty");

  if (search && list) {
    search.addEventListener("input", function () {
      var query = search.value.trim().toLowerCase();
      var items = list.querySelectorAll("li");
      var visible = 0;

      items.forEach(function (item) {
        var haystack = (item.textContent + " " + (item.dataset.tags || "")).toLowerCase();
        var match = haystack.indexOf(query) !== -1;
        item.hidden = !match;
        if (match) visible++;
      });

      if (empty && visible === 0) empty.hidden = false;
    });
  }
})();