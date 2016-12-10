var frauds = {
  templateUrl: './frauds.html',
  controller: 'FraudsController'
};

angular
  .module('components.auth')
  .component('frauds', frauds)
  // .config(function ($stateProvider) {
  //   $stateProvider
  //     .state('auth.frauds', {
  //       url: '/frauds',
  //       component: 'frauds'
  //     });
  // })
;
