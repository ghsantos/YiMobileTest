const feed = require('./feed.json');

function getFeed() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(feed), 1500);
  });
}

export { getFeed };
