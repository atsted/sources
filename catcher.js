;(function (global) {
  "use strict";

  const remoteUrl = "";

  function extend() {
    let
      args = [...arguments],
      recv = args.shift();
    args.forEach((src) => {
      for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
          recv[prop] = src[prop];
        } 
      }
    });
    return recv;
  }

  class Report {
    costructor(options) {
      extend(this, Report.defaults, options);
    }
    sendTo(url) {
      return new Promise((resolve, reject) => {

      });
    }
  }

  global.onerror = function (message, file, line) {
    let report = new Report({ message, file, line });
    report.sendTo(remoteUrl);
    return true;
  };

}(window));