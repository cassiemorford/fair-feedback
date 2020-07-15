module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"fair-feedback","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/favicon.ico"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mixpanel/gatsby-browser.js'),
      options: {"plugins":[],"apiToken":"ab7260d188451daea5be12b7e1af1ce6"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
