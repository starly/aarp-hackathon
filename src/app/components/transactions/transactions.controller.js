function TransactionsController($state, BBVAService) {
  var ctrl = this;

    BBVAService.getTransactions();

  // ctrl.$onInit = function () {
  //   ctrl.error = null;
  //   ctrl.user = {
  //     email: '',
  //     password: ''
  //   };
  // };
  // ctrl.createUser = function (event) {
  //   return AuthService
  //     .register(event.user)
  //     .then(function () {
  //       $state.go('app');
  //     }, function (reason) {
  //       ctrl.error = reason.message;
  //     });
  // };
}

angular
  .module('components.auth')
  .controller('TransactionsController', TransactionsController);
