var contacts = {
  bindings: {
    contacts: '<',
    filter: '<'
  },
  templateUrl: './contacts.html',
  controller: 'ContactsController'
};

angular
  .module('components.contact')
  .component('contacts', contacts)
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacts', {
        parent: 'app',
        url: '/home',
        component: 'contacts',
        params: {
          filter: {
            value: 'none'
          }
        },
        resolve: {
          contacts: function (ContactService) {
            return ContactService.getContactList().$loaded();
          },
          filter: function ($transition$) {
            return $transition$.params();
          }
        }
      }).state('accounts', {
          parent: 'app',
          url: '/accounts',
          component: 'accounts',

      })
        .state('transactions', {
            parent: 'app',
            url: '/transactions',
            component: 'transactions',

        })
        .state('attorney', {
            parent: 'app',
            url: '/attorney',
            component: 'attorney',
        })
        .state('assets', {
            parent: 'app',
            url: '/assets',
            component: 'assets',
        })
        .state('frauds', {
            parent: 'app',
            url: '/frauds',
            component: 'frauds',

        })
    ;
  });
