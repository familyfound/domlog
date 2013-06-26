
var logdiv
  , template = require('./template');

function log() {
  if (!logdiv) throw new Error('not initialized');
  var msg = arguments.length == 1 ? arguments[0] : [].slice.call(arguments);
  var div = document.createElement('div');
  div.innerHTML = JSON.stringify(msg);
  logdiv.appendChild(div);
}

log.clear = function () {
  logdiv.innerHTML = '';
};

log.init = function (elem) {
  logdiv = document.createElement('div');
  logdiv.innerHTML = template;
  logdiv = logdiv.firstElementChild;
  (elem || document.body).appendChild(logdiv);
};

module.exports = log;

