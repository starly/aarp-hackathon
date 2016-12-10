var accounts = {
  templateUrl: './accounts.html',
  controller: 'AccountsController'
};

angular
  .module('components.auth')
  .component('accounts', accounts)
  // .config(function ($stateProvider) {
  //   $stateProvider
  //     .state('auth.accounts', {
  //       url: '/accounts',
  //       component: 'accounts'
  //     });
  // })
;
