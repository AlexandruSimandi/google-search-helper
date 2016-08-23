var app = angular.module('app',['ngMaterial','angularMoment']);

app.controller('search', function($scope){
    $scope.simpleSearch = function(){
        window.location = 'https://www.google.ro/#q=' + $scope.simpleSearchModel;
    }

    $scope.filetypeSearch = function(){
        window.location = 'https://www.google.ro/#q=filetype:' + $scope.filetypeSearchTypeModel + ' ' + $scope.filetypeSearchNameModel;
    }

    $scope.siteSearch = function(){
        window.location = 'https://www.google.ro/#q=site:' + $scope.siteSearchUrlModel + ' ' + $scope.siteSearchTextModel;
    }

    $scope.weatherSearch = function(){
        window.location = window.location = 'https://www.google.ro/#q=weather ' + $scope.weatherSearchPlaceModel + ' ' + moment($scope.weatherSearchDateModel).format('DD/MM/YYYY');
    }

    $scope.definitionSearch = function(){
        window.location = 'https://www.google.ro/#q=define ' + $scope.definitionSearchModel;
    }

    $scope.sinanSearch = function(){
        window.location = 'https://www.google.ro/#q='+ $scope.sinanSearchSinanModel + ' ' + $scope.sinanSearchWordModel;
    }

    $scope.titleSearch = function(){
        window.location = 'https://www.google.ro/#q=intitle:' + $scope.titleSearchModel;
    }

    $scope.relatedSearch = function(){
        window.location = 'https://www.google.ro/#q=related:' + $scope.relatedSearchModel;
    }
});
