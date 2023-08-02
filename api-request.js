const SunburstJS = require('sunburst.js');

let sunburst = new SunburstJS({
  clientId: 'fe42299f-ff88-420a-8e6c-07fb61805e6c',
  clientSecret: 'VXyECjIfHtgZ6lr6chXX0LC8tbScAiB7',
    scope: ['predictions']
  });

(async () => {
    try {
      const now = new Date();
      const thisTimeTomorrow = now.setDate(now.getDate() + 1);
  
      const resp = await sunburst.batchQuality([
        {
          geo: [40.7933949, -77.8600012],
          type: 'sunset'
        },
      ]);
  
      resp.forEach(({ collection, error }) => {
        if (error) {
          // Handle individual query errors separately,
          // as some queries may have still succeeded.
          return console.error(error);
        }
        collection.features.forEach(({ properties }) => {
          console.log(properties);
        });
      });
    } catch (ex) {
      // Handle general network or parsing errors.
      return console.error(ex);
    }
  })();
