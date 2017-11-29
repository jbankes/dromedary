'use strict';
var {defineSupportCode} = require('cucumber');
var inMemStor = require("../../lib/inMemoryStorage.js");
var colors = new inMemStor;
var assert = require('assert');
var chartData = colors.getChartData();
var color;

defineSupportCode(function({Given, Then, When}) {

  Given(/^there are 5 colors$/, function () {
    var length = Object.keys(chartData.values).length;
    assert.equal(length, 5);
  });

  When(/^I click the color$/, function () {
    color = 'red';
    colors.incrementCount(color, function(err) {
      if (err) {
        assert.false();
      } else {
        assert.true();
      }
    });
  });

  Then(/^the color updates the value$/, function () {
    assert.equal(colors.getCount(color), 11);
  });
});
