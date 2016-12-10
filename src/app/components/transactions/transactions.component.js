var transactions = {
  templateUrl: './transactions.html',
  controller: 'TransactionsController'
};

angular
  .module('components.auth')
  .component('transactions', transactions)
  // .config(function ($stateProvider) {
  //   $stateProvider
  //     .state('auth.transactions', {
  //       url: '/transactions',
  //       component: 'transactions'
  //     });
  // })
;
