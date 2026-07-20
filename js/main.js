// Medina Atlas — interactions
// 1) Souk filter  2) Lantern (dark) 

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

      if (empty) empty.hidden = visible !== 0;
    });
  }
var lantern = document.getElementById("lantern");

  if (lantern) {
    lantern.addEventListener("click", function () {
      var on = document.body.classList.toggle("lantern-on");
      lantern.setAttribute("aria-pressed", String(on));
      lantern.textContent = on ? "Dim the lantern" : "Light the lantern";
    });
  }
})();