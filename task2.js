// Вам известен фрагмент html (см ниже). Как вы выберите элемент <span>a</span> фрагмента.

// <div class="foo">
//     ... здесь произвольная разметка
//     <a href="#A">A</a>
//     <span>a</span>
//     <a href="#B">B</a>
//     <span>b</span>
//     ... и здесь произвольная разметка
// </div>

const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);

$("span").filter(function () {
  return (($(this).text() === 'a'));
})

