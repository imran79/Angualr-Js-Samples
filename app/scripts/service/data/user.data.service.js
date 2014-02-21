/**
 * Created by imran on 21/2/14.
 */

'use strict';

angularJsWithCouchDbApp
    .factory('categoryDataService', function ($http,$resource, $q) {

    var resource = $resource('http://localhost:3825/api/category', { '3825': ':3825' }, { 'query': { method: 'GET', isArray: true} });

    return {

        getAllCategories: function () {

            var deferred = $q.defer();
            resource.query(
                function (categories) {
                    deferred.resolve(categories);
                },
                function (response) {

                    deferred.reject(response);
                });

            return deferred.promise;
        },

        saveCategory: function () {

            console.write('save category');
        }


    }



});