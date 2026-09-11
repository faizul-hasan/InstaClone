module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@assets': './src/assets',
          '@commonViewUtilities': './src/commonViewUtilities',
          '@components': './src/components',
          '@enums': './src/enums',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@utilities': './src/utilities',
        },
      },
    ],
  ],
};
