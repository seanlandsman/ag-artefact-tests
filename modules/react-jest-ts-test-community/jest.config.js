/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  resetMocks: true,
  setupFilesAfterEnv: [],
  resolver: '<rootDir>/myResolver.ts',
  transform: {
    "^.+\\.(ts|tsx|js|jsx|mjs)$": [
        "ts-jest"
    ],
  }
};
