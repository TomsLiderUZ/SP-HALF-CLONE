(function (w) {
  // eslint-disable-next-line no-var
  var configEl = document.getElementById('config');
  if (!configEl) return;
  // eslint-disable-next-line no-var
  var config = JSON.parse(configEl.innerHTML);
  if (!config.retargetingPixels) return;

  Object.entries(config.retargetingPixels).forEach(function (pixel) {
    // eslint-disable-next-line no-var
    var pixelPlatform = pixel[0];
    // eslint-disable-next-line no-var
    var pixelId = pixel[1];

    switch (pixelPlatform) {
      case 'twitter':
        w.__TWITTER_PIXEL_ID__ = pixelId;
        break;

      case 'pinterest':
        w.__PINTEREST_PIXEL_ID__ = pixelId;
        break;

      case 'snapchat':
        w.__SNAPCHAT_PIXEL_ID__ = pixelId;
        break;

      default:
        break;
    }
  });
})(window);
