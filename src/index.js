import './css/style.scss'

!(function () {

  var lamuleimuDiv = '<div class="sidebar_wo" id="leimu"><img src="https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/leimu1.png" alt="雷姆" onmouseover="this.src=\'https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/leimu2.png\'" onmouseout="this.src=\'https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/leimu1.png\'"></div><div class="sidebar_wo" id="lamu"><img src="https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/lamu1.png" alt="拉姆" onmouseover="this.src=\'https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/lamu2.png\'" onmouseout="this.src=\'https://cdn.jsdelivr.net/gh/fz6m/Private-web@2.0.7/image/bottom/lamu1.png\'"></div>';

  var div = document.createElement('div')
  div.innerHTML = lamuleimuDiv
  div.id = 'lamu-leimu'
  document.body.appendChild(div)
  document.getElementById('lamu').onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return false
  }
  document.getElementById('leimu').onclick = function () {
    window.scrollTo({
      top: (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight,
      behavior: 'smooth'
    })
    return false
  }

})()