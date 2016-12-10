function AppSidebarController() {
  var ctrl = this;
  ctrl.contactTags = [{
    label: 'Accounts',
    icon: 'star',
    state: 'accounts'
  }, {
    label: 'Transactions',
    icon: 'people',
    state: 'transactions'
  }, {
    label: 'Attorney',
    icon: 'child_care',
    state: 'attorney'
  }, {
    label: 'Assets',
    icon: 'accessibility',
    state: 'assets'
  }, {
    label: 'Frauds',
    icon: 'remove_red_eye',
    state: 'frauds'
  }];


}

/**
 * @ngdoc type
 * @module common
 * @name AppSidebarController
 *
 * @description
 *
 * ## Lorem Ipsum 1
 * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
 * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
 *
 * ## Lorem Ipsum 2
 * Aenean ornare odio elit, eget facilisis ipsum molestie ac. Nam bibendum a nibh ut ullamcorper.
 * Donec non felis gravida, rutrum ante mattis, sagittis urna. Sed quam quam, facilisis vel cursus at.
 */
angular
  .module('common')
  .controller('AppSidebarController', AppSidebarController);
