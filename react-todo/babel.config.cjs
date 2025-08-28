module.exports = {
  presets: [
    // Transpile modern JS for Jest
    ['@babel/preset-env', { targets: { node: 'current' } }],
    // Enable JSX + the new JSX transform
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
