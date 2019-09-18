module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'app/**/*.js',
    'components/**/*.js',
    'pages/**/*.js',
    '!**/EXP/**',
    '!**/exp/**',
    '!app/**/_*.js',
    '!components/**/_*.js',
    '!**/Xstore.js',
  ],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testURL: 'http://localhost',
  exclude: [
    "node_modules",
    "out",
    ".next"
  ]
};
