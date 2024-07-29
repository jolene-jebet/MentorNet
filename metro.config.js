// // const { getDefaultConfig } = require('expo/metro-config');

// // const defaultConfig = getDefaultConfig(__dirname);

// // defaultConfig.resolver.assetExts.push('db');

// // module.exports = defaultConfig;

// module.exports = {transformer:{assetPlugins:['@expo/metro-config']},resolver:{assetExts:['png','jpg','gif','svg','jpeg']}};

const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;