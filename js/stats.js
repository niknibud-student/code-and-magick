'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 250;
var CLOUD_X = 100;
var CLOUD_Y = 25;
var GAP = 10;
var FONT_GAP = 15;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP * 2);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - (BAR_HEIGHT / times[i] * maxTime), BAR_WIDTH, (BAR_HEIGHT / times[i] * maxTime));
  }
};
