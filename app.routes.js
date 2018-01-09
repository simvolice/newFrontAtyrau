/**
 * Created by Admin on 29.09.2016.
 */



app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/index');

  $stateProvider


      .state('index', {
        url: '/',
        view: {

          templateUrl: 'index.html'

        }

      }).state('data_intermediate_index', {
          url: '/data_intermediate_index',
          templateUrl: 'components/data_intermediate_index/data_intermediate_indexView.html',


      })

});