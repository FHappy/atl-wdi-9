// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },

  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },

  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      console.log('count is ' + counter.count);
      return counter.count;
    }
  },

  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      console.log(counter);
      // counter.destroy(); }
      this.counters = this.counters.filter(function(counter){ //
        return counter.countId !== countId
      });
    }
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
    var $counterContainer = $('#counter-list');
    var $counterDiv = $('<div>').addClass('counter')
                                .attr('data-index', '2')
                                .attr('data-countId', newCountId);
    $counterContainer.append($counterDiv);
    var $counterH3 = $('<h3>').html('Count: <span id="counter' +
                                    `${newCountId}">0</span>'`);
    $counterDiv.append($counterH3);
    var $incrementButton = $('<button>')
                            .addClass('increment')
                            .html(' + 1');
    var $deleteButton = $('<button>')
                        .addClass('delete')
                        .html("Delete");
    $counterDiv.append($incrementButton);
    $counterDiv.append($deleteButton);
    $incrementButton.click(AppController.onClickIncrement);
    $deleteButton.click(AppController.onClickDelete);
  },

  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    // Your Code Here
    var incrementValue = CounterCollection.getCounterValue(countId);
    var spanIdStr = `#counter${countId}`;
    var $spanElem = $(spanIdStr);
    $spanElem.html(incrementValue);
  },

  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Code Here
    var $counterDivList = $(".counter");
    var divToDel;
    for (var i = 0; i < $('.counter').length; i++) {
      if (parseInt($('.counter')[i]
        .getAttribute('data-countId')) === countId) {
          divToDel = $('.counter')[i];
      }
    }
    divToDel.remove();
  }

};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    // Your Code Here
    // console.log(this);
    CounterCollection.createCounter();
    var newCountId = CounterCollection.lastCountId;
    Presenter.insertCounterComponent(newCountId);
  },

  onClickIncrement: function(event){
    // Your Code Here
    var $counterDiv = $(this).parent();
    var divCountId = parseInt($counterDiv.attr('data-countId'));
    CounterCollection.incrementCounter(divCountId);
    Presenter.refreshCounterComponent(divCountId);
  },

  onClickDelete: function(event){                           // REACH
    // Your Code Here
    var $counterDiv = $(this).parent();
    var divCountId = parseInt($counterDiv.attr('data-countId'));
    CounterCollection.destroyCounter(divCountId);
    Presenter.removeCounterComponent(divCountId);
  }
};


window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
