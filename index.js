const fetch = require('node-fetch');

fetch('http://192.168.1.1/api/ntwk/dslinfo', {
  credentials: 'include',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Upgrade-Insecure-Requests': '1',
    'Sec-GPC': '1',
    'Cache-Control': 'max-age=0',
  },
  method: 'GET',
  mode: 'cors',
}).then((stats) => stats.text()).then((stats) => {
  const statsButWithTrashRemoved = stats.substring(12, stats.length - 2);
  const statsButInJSON = JSON.parse(statsButWithTrashRemoved);
  console.log(statsButInJSON);
});
