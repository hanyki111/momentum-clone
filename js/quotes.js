const quotes = [
  {
    quote:
      "가능의 한계를 알기 위한 유일한 방법은 불가능의 영역에 살짝 발을 들여 놓아 보는 것.",
    author: "아서 클라크",
  },
  {
    quote: "가장 밝게 빛나는 순간은 주위의 모든 것이 가장 어두울 때이다.",
    author: "베어 그릴스",
  },
  {
    quote:
      "나는 이 문제에 대한 놀라운 증명을 알고 있다. 하지만 여백이 부족하여 여기에 적지 않는다.",
    author: "피에르 드 페르마",
  },
  {
    quote: "나는 생각한다 고로 나는 존재한다.",
    author: "르네 데카르트",
  },
  {
    quote: "답이 없는 문제도 있기 마련이다.",
    author: "이오시프 스탈린",
  },
  {
    quote: "답이 없다",
    author: "피타고라스",
  },
  {
    quote:
      "모든 세대는 스스로를 이전 세대보다 똑똑하고, 다음 세대보다 현명하다고 생각한다.",
    author: "조지 오웰",
  },
  {
    quote: "미디어는 메시지다.",
    author: "마셜 매클루언",
  },
  {
    quote: "양은 곧 질이다",
    author: "이오시프 스탈린",
  },
  {
    quote: "인생은 실험이 아니라 실행이다.",
    author: "이상",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[randomQuoteIndex].quote;
author.innerText = quotes[randomQuoteIndex].author;
