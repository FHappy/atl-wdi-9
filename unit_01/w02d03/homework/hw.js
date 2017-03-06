// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },

  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    // Your Code Here
    this.millisecs += 10;
    this.secs = Math.floor(this.millisecs / 1000);
    this.mins = Math.floor(this.millisecs / 60000);
  },

  reset: function(){
    // Your Code Here
    this.isRunning = false;
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    this.laps = [];

    ViewEngine.updateTimeDisplay('00', '00', '000');
    ViewEngine.updateLapListDisplay(this.laps);
  },

  start: function(){
    // Your Code Here
    if (!this.isRunning) {
      this.isRunning = true;
      this.tickClock();
    }
  },

  stop: function(){
    // Your Code Here
    this.isRunning = false;
  },

  lap: function(){
    // Your Code Here
    this.laps.push([ViewHelpers.zeroFill(this.mins, 2),
                    ViewHelpers.zeroFill(this.secs % 60, 2),
                    ViewHelpers.zeroFill(this.millisecs % 1000, 3)]);
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
    $('#mins').html(mins);
    $('#secs').html(secs);
    $('#millisecs').html(millisecs);
  },

  updateLapListDisplay: function(laps){
    // Your Code Here
    var $lapList = $('#lap-list');
    $lapList.html('');
    for (var index = 0; index < laps.length; index++) {
      var $lapCell =  $('<li>')
                      .html(`'${laps[index][0]}:` +
                            `${laps[index][1]}:` +
                            `${laps[index][2]}'`);
      $lapList.append($lapCell);
    }
  },

};

const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
    number = number.toString();
    while (number.length < length) {
      number = '0' + number;
    }
    return number;
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
    var millisecsDisp = ViewHelpers.zeroFill(Stopwatch.millisecs % 1000, 3);
    var secsDisp = ViewHelpers.zeroFill(Stopwatch.secs % 60, 2);
    var minsDisp = ViewHelpers.zeroFill(Stopwatch.mins, 2);
    ViewEngine.updateTimeDisplay(minsDisp, secsDisp, millisecsDisp);
  },

  handleClickStart: function() {
    // Your Code Here
    Stopwatch.start();
  },

  handleClickStopReset: function(){
    // Your Code Here
    if (Stopwatch.isRunning) {Stopwatch.stop();}
    else {Stopwatch.reset();}
  },

  handleClickLap: function(){
    // Your Code Here
    Stopwatch.lap();
    ViewEngine.updateLapListDisplay(Stopwatch.laps);
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  document.getElementById('start').onclick = AppController.handleClickStart;
  document.getElementById('stop').onclick = AppController.handleClickStopReset;
  document.getElementById('lap').onclick = AppController.handleClickLap;
};
