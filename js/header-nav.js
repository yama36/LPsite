
// Intersection Observer
// 監視対象
const header = document.querySelector('.top-container');
// 変化対象
const header_nav = document.querySelector('.nav--fixd');

const option = {
  threshold: 0 // 指定範囲は0 〜 1
};

// 実行
const topAPI = new IntersectionObserver(top_observe);

// 要素が表示されたら実行する動作
function top_observe(entries) {
  for(const e of entries) {
    const topOn = e.isIntersecting;
    if (topOn) {
      header_nav.classList.remove('active');
    } else if (!topOn) {
      header_nav.classList.add('active');
    }
  }
}

// observe開始
topAPI.observe(header);