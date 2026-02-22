/* tod-shadow.js — Time of Day Shadow
 * Add class="tod-shadow" to any element, then include this script.
 * Layered box-shadow using pure black + opacity — works on any background.
 * Based on Josh Comeau's exponential shadow layering technique.
 * mrbrianmorris.com */

(function () {
  function buildTodShadow(dx, dy, len) {
    const n = 7, total = Math.pow(2, n) - 1;
    const layers = ['0px 4px 8px rgba(0,0,0,0.42)'];
    for (var i = 0; i < n; i++) {
      var d = len * (Math.pow(2, i) / total);
      var x = (dx * d).toFixed(2);
      var y = (dy * d).toFixed(2);
      var b = Math.max(1, d).toFixed(2);
      layers.push(x + 'px ' + y + 'px ' + b + 'px rgba(0,0,0,0.24)');
    }
    return layers.join(', ');
  }

  function getTodParams() {
    var now  = new Date();
    var hour = now.getHours() + now.getMinutes() / 60;
    if (hour < 6 || hour > 18) return { dx: 0, dy: 1, len: 10 };
    var t    = (hour - 6) / 12;
    var elev = Math.sin(t * Math.PI);
    var az   = (t - 0.5) * Math.PI;
    return {
      dx:  -Math.sin(az),
      dy:  Math.max(0.15, 1 - Math.abs(az) * 0.4),
      len: 30 + 120 * (1 - elev),
    };
  }

  function updateTodShadows() {
    var p = getTodParams();
    var shadow = buildTodShadow(p.dx, p.dy, p.len);
    document.querySelectorAll('.tod-shadow')
      .forEach(function(el) { el.style.boxShadow = shadow; });
  }

  updateTodShadows();
  setInterval(updateTodShadows, 60000);
})();
