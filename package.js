Package.describe({
  name: 'jackstone:accounts-passwordless',
  version: '0.2.9',
  summary: 'Token-based one-time password (OTPW) authentication (nopassword, passwordless)',
  git: 'https://github.com/JackStoneDev/meteor-accounts-passwordless',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2');

  api.use(['tracker', 'underscore', 'templating', 'session'], 'client');
  api.use('email', 'server');
  api.use(['accounts-base', 'check'], ['client', 'server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use(['random', 'jperl:match-ex@1.0.0'], 'server');

  api.addFiles('accounts-passwordless.js');
});
