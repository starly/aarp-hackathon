var attorney = {
  templateUrl: './attorney.html',
  controller: 'AttorneyController'
};

angular
  .module('components.auth')
  .component('attorney', attorney)
  // .config(function ($stateProvider) {
  //   $stateProvider
  //     .state('auth.attorney', {
  //       url: '/attorney',
  //       component: 'attorney'
  //     });
  // })
;
