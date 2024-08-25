module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'test',
        'wip',
        'chore',
      ],
    ],
    'scope-enum': [0, 'never', []],
    'subject-case': [
      2,
      'always',
      ['sentence-case', 'lower-case', 'upper-case', 'start-case'],
    ],
  },
};
