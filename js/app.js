
var omikuji = [
  {
    result: "大吉",
    comment: "やったね！いいことあるかも！"
  },
  {
    result: "中吉",
    comment: "けっこういい日かも！"
  },
  {
    result: "小吉",
    comment: "まあまあかな"
  },
  {
    result: "吉",
    comment: "ふつう〜"
  },
  {
    result: "凶",
    comment: "大人しくいこう。"
  },
  {
    result: "大凶",
    comment: "まさかの！？"
  }
];

var animeNone = document.getElementById('textArea');
animeNone.addEventListener('animationend', function () {
  // animation終了時の処理
  textArea.classList.remove('fadein02');

});

var animeBox = document.getElementById('animeBox')
var result = document.getElementById('result');
var comment = document.getElementById('comment');
var textArea = document.getElementById('textArea');

btn.addEventListener('click', function () {
  var random = Math.floor(Math.random() * omikuji.length);

  result.innerHTML = omikuji[random]['result'];
  comment.innerHTML = omikuji[random]['comment'];

  textArea.classList.remove('fadein03');
  textArea.classList.add('dis');
  animeBox.classList.add('fadeup');
  result.classList.add('fontLarge');

    var el = document.getElementById('animeBox');
    el.addEventListener('animationend', function () {
      // animation終了時の処理
      animeBox.classList.remove('fadeup');
      textArea.classList.remove('dis');
      textArea.classList.add('fadein03');
    });

});
