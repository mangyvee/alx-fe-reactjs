module.exports = {
  // Needed for Testing Library (DOM APIs)
  testEnvironment: 'jsdom',

  // Auto-load jest-dom matchers, etc.
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  // Let Jest understand JSX/ESM via Babel
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  moduleFileExtensions: ['js', 'jsx'],

  // Where to find tests (keeps it simple & Vite-friendly)
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.(test|spec).js',
    '<rootDir>/src/**/*.(test|spec).js',
  ],

  // Quiet down Vite-style non-JS imports if you add them later
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/test-style-stub.js',
    // Static assets (images, svgs) — optional stub if needed
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/test-file-stub.js',
  },
};
