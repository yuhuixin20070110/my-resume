// 导航高亮交互：滚动到哪个板块，导航就点亮哪一项。
// HTML 锚点负责跳转，JavaScript 只负责选中状态。

// 1. 查找 DOM：导航链接 + 需要观察的板块。
const navLinks = document.querySelectorAll('nav a');
const sections = [];
navLinks.forEach(function (link) {
  const target = document.querySelector(link.getAttribute('href'));
  if (target) { sections.push({ link: link, section: target }); }
});

// 2. 高亮某个链接，并同步 aria-current。
function activate(link) {
  navLinks.forEach(function (item) {
    const isCurrent = item === link;
    item.classList.toggle('is-current', isCurrent);
    if (isCurrent) {
      item.setAttribute('aria-current', 'location');
    } else {
      item.removeAttribute('aria-current');
    }
  });
}

// 3. 哈希变化时立即高亮对应板块（保留原有行为，支持带 # 的直达链接）。
function updateByHash() {
  const currentSection = window.location.hash;
  const matched = Array.from(navLinks).find(function (link) {
    return link.getAttribute('href') === currentSection;
  });
  if (matched) { activate(matched); }
}
window.addEventListener('hashchange', updateByHash);

// 4. 滚动跟随：谁进入视口上部，就点亮谁。
//    rootMargin 顶部收 40% 视口、底部放 60%，让"刚滚过标题"的板块被选中。
let activeLink = null;
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const found = sections.find(function (item) { return item.section === entry.target; });
      if (found && found.link !== activeLink) {
        activeLink = found.link;
        activate(found.link);
      }
    }
  });
}, { rootMargin: '-40% 0px -60% 0px', threshold: 0 });
sections.forEach(function (item) { observer.observe(item.section); });

// 5. 首次打开：优先按地址栏哈希，否则默认点亮第一项。
updateByHash();
if (!window.location.hash && sections.length > 0) { activate(sections[0].link); }
