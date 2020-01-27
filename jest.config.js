module.exports = {
  testEnvironment: "node",
  testRegex: ".*.test.ts",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  rootDir: "./",
  moduleFileExtensions: ["ts", "js"],
  moduleDirectories: ["node_modules", "src"]
}
