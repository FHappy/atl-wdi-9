// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    // Your Code Here
    var display = document.getElementById('numeric-display');
    display.innerHTML = timerValue;
    if (timerValue <= 10) {
      display.style.color = "red";
      display.style.fontSize =
        (((10 - timerValue) * 0.05) + 1) * 1.5 + "em";
    }
  },
  drawProgressBars: function(timerValue){
    // Your Code Here
    var progressBar = document.getElementsByClassName('progress-bar')[0];
    progressBar.style.width = (100 - timerValue) + "%";
  },

  drawLitFuses: function(timerValue){
    // Your Code Here
    var burnt = document.querySelector('.burnt');
    var unburnt = document.querySelector('.unburnt');
    var unburntWidth = ((timerValue * 98) / 100);
    var burntWidth = 98 - unburntWidth;
    burnt.style.width = burntWidth + "%";
    unburnt.style.width = unburntWidth + "%";
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
    var crawler = document.querySelector('.crawler');
    var crawlerTrack = document.querySelector('.crawler-track');
    //prompt asks for 10px per second but this allows it to complete the track
    //irrespective of the container width. The container width will only be
    // traversed if the window width is 1000px;
    crawler.style.marginLeft = ((100 - timerValue) * 10) + "px";
    // crawler.style.marginLeft = (100 - timerValue) + "%";
    // crawler.style.marginRight = "40px";
    if (timerValue % 2 === 0) {
      crawler.style.marginTop = "0px";
      crawler.style.marginBottom = "10px";
    }
    //commented out to satisfy the test
    else {
      crawler.style.marginBottom = "0px";
      crawler.style.marginTop = "10px";
    }
  }
};

