var assets = {
  templateUrl: './assets.html',
  controller: 'AssetsController'
};

angular
  .module('components.auth')
  .component('assets', assets)
  // .config(function ($stateProvider) {
  //   $stateProvider
  //     .state('auth.assets', {
  //       url: '/assets',
  //       component: 'assets'
  //     });
  // })
;
