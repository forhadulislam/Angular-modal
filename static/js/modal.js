// Image Gallery

var app = angular.module('modalApp',[]);

app.controller('ModalController', ['$scope', function($scope) {
    var modal = document.getElementById("modal");
    
    $scope.showModal = function($event){
        var modal = document.getElementById("modal");
        alert("This is my modal");
    };
    
    $scope.hideModal = function($event){                
        
        $("#modal").animate({
                                'top':'110%'
                                }, 700).hide(0).children(".message").text(" ");
    };
    
    $scope.showModal = function($event){               
        $("#modal").show(0).animate({
                                'top':'30%'
                                }, 500);       
    };
    
}]);