var app = angular.module('app',['ngMaterial','angularMoment']);


app.controller('search', function($scope) {
    $scope.searchFilters = [
        {
            name: 'Is file type',
            query: 'filetype:'
        },
        {
            name: 'Has inside URL',
            query: 'inurl:'
        },
        {
            name: 'Has page title',
            query: 'intitle:'
        },
        {
            name: 'Is on this site',
            query: 'onsite:'
        }
    ];

    $scope.appliedFilters = [];

    $scope.addFilter = function(index) {
        if(!$scope.appliedFilters.includes($scope.searchFilters[index])) {
           $scope.appliedFilters.push($scope.searchFilters[index]);
        }
    }

    $scope.removeFilter = function(index) {
        $scope.appliedFilters.splice(index, 1);
    }

    $scope.searchWithFilters = function(){
//        if(appliedFilters.length === 0 && $scope.basicQuery === undefined){
//            return;
//        }

        var url = 'https://www.google.ro/#q=';
        for(var i in $scope.appliedFilters){
            url += $scope.appliedFilters[i].query + $scope.appliedFilters[i].value + ' ';
        }
        url += $scope.basicQuery;
        window.location = url;
    }


//    $scope.simpleSearch = function(){
//        window.location = 'https://www.google.ro/#q=' + $scope.simpleSearchModel;
//    }
//
//    $scope.filetypeSearch = function(){
//        window.location = 'https://www.google.ro/#q=filetype:' + $scope.filetypeSearchTypeModel + ' ' + $scope.filetypeSearchNameModel;
//    }
//
//    $scope.siteSearch = function(){
//        window.location = 'https://www.google.ro/#q=site:' + $scope.siteSearchUrlModel + ' ' + $scope.siteSearchTextModel;
//    }
//
//    $scope.weatherSearch = function(){
//        window.location = window.location = 'https://www.google.ro/#q=weather ' + $scope.weatherSearchPlaceModel + ' ' + moment($scope.weatherSearchDateModel).format('DD/MM/YYYY');
//    }
//
//    $scope.definitionSearch = function(){
//        window.location = 'https://www.google.ro/#q=define ' + $scope.definitionSearchModel;
//    }
//
//    $scope.sinanSearch = function(){
//        window.location = 'https://www.google.ro/#q='+ $scope.sinanSearchSinanModel + ' ' + $scope.sinanSearchWordModel;
//    }
//
//    $scope.titleSearch = function(){
//        window.location = 'https://www.google.ro/#q=intitle:' + $scope.titleSearchModel;
//    }
//
//    $scope.relatedSearch = function(){
//        window.location = 'https://www.google.ro/#q=related:' + $scope.relatedSearchModel;
//    }
});
