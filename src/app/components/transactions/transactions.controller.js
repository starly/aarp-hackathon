function TransactionsController ($state, BBVAService) {
    var ctrl = this;

    var response = [{
        'amount': -1.0,
        'posted_date': '2016-12-09',
        'description': 'Fee on account 0000001012',
        'posted_balance': 1000335.0
    }, {
        'amount': 200.0,
        'posted_date': '2016-12-09',
        'description': 'TimeWarnerCable  Test Transaction 2',
        'posted_balance': 1000336.0
    }, {
        'amount': 50.0,
        'posted_date': '2016-12-09',
        'description': 'Gambling.com Test Transaction 2',
        'posted_balance': 1000136.0
    }, {
        'amount': 35.0,
        'posted_date': '2016-12-09',
        'description': 'TimeWarnerCable Test Transaction 2',
        'posted_balance': 1000086.0
    }, {
        'amount': 51.0,
        'posted_date': '2016-12-09',
        'description': 'Bestbuy Test transaction',
        'posted_balance': 1000051.0
    }, {'amount': 0.0, 'posted_date': '2016-12-09', 'description': 'Account Origination', 'posted_balance': 0.0}];

    // ctrl.transactions = BBVAService.getTransactions();

    ctrl.transactions = response;

    console.log('TRANSACTIONS RESPONSE');
    console.log(ctrl.transactions);
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
