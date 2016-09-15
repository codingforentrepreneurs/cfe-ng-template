'use strict';

angular.module('listView').
    component('listView', {
        template: "<div class='col-sm-6 col-sm-offset-3'><h1>{{ textItem }}</h1></div>",
        // templateUrl: '/templates/list-view.html',
        controller: function($scope){
            $scope.textItem = 'Hi there this is working.'
        }
    });
