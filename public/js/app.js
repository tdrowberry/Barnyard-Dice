// Bootstrap: by the time this runs, core.js and every js/modes/*.js file has already
// registered itself into window.BarnyardDiceModes - this just starts the app.
(function () {
  window.BarnyardDice.init();
  window.__barnyarddice = { socket: window.BarnyardDice.socket, getState: () => window.BarnyardDice.state };
})();
