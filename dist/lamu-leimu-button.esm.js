function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@media (max-width:860px){.sidebar_wo{display:none}}.sidebar_wo{position:fixed;bottom:0;z-index:1000;line-height:0;cursor:url(https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/lm.cur),pointer}#lamu{right:0;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate(7px,7px);-ms-transform:translate(7px,7px);transform:translate(7px,7px)}#lamu:hover{-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0)}#leimu{left:0;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate(-7px,7px);-ms-transform:translate(-7px,7px);transform:translate(-7px,7px)}#leimu:hover{-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0)}";
styleInject(css_248z);

!function () {
  var lamuleimuDiv = '<div class="sidebar_wo" id="leimu"><img src="https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/leimu1.png" alt="雷姆" onmouseover="this.src=\'https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/leimu2.png\'" onmouseout="this.src=\'https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/leimu1.png\'"></div><div class="sidebar_wo" id="lamu"><img src="https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/lamu1.png" alt="拉姆" onmouseover="this.src=\'https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/lamu2.png\'" onmouseout="this.src=\'https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/lamu1.png\'"></div>';
  var div = document.createElement('div');
  div.innerHTML = lamuleimuDiv;
  div.id = 'lamu-leimu';
  document.body.appendChild(div);

  document.getElementById('lamu').onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return false;
  };

  document.getElementById('leimu').onclick = function () {
    window.scrollTo({
      top: document.documentElement && document.documentElement.scrollHeight || document.body.scrollHeight,
      behavior: 'smooth'
    });
    return false;
  };
}();
