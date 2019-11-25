const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
  [
    '@babel/preset-typescript',
    {
      isTSX: true,
      allExtensions: true,
    },
  ],
];

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-class-properties',
];

module.exports = { presets, plugins };
