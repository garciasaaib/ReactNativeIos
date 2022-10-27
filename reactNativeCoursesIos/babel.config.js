module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: 'dotenv',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
