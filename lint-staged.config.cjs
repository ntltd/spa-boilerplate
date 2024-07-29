module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --max-warnings=0',
    'prettier --write',
  ],
  '*.{json,md,html,css,yml}': [
    'prettier --write',
  ],
}
