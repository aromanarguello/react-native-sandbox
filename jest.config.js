module.exports = {
  preset: "react-native",
  cacheDirectory: "./cache",
  coveragePathIgnorePatterns: ["./app/utils/vendor"],
  moduleFileExtensions: ["js", "json", "jsx", "node"],
  coverageThreshold: {
    global: {
      statements: 80
    }
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)"
  ]
};
