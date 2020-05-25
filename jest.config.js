module.exports= {
    collectCoverage : true,
    coverageDirectory :"./coverage_report",
    collectCoverageFrom :[
        "**/*.js",
        "!**/node_modules/**",
        "!**/coverage_report/**",
        "!**/package.json",
        "!**/package-lock.json",
        "!**/README.md",
        "!**/setUp_tearDown.js",
        "!**/theory/**",
        "!**/jest.config.js"
    ],
    coverageReporters :["text","lcov"]
}