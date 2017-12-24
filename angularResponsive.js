
        
        var app = angular.module("responsiveApp", []);
        app.controller("responsive", function($scope, $window){ 
            $scope.width = $window.innerWidth;
            $scope.height = $window.innerHeight;
            
            $scope.updateHeight = function() {  
            $scope.height = $window.innerHeight;
            }
            $scope.updateWidth = function() {
                $scope.width = $window.innerWidth;
            }
            $scope.adjust = function() {
                if ($scope.width <= 1322) {
                    $scope.columnStyle = { boxShadow: 'none', borderBottom: '3px solid black'};
                }
                else if($scope.width > 1322) {
                    $scope.columnStyle = { boxShadow: '0px 3px 3px black', borderBottom: 'none'};                
                }
            } 
                $scope.updateHeight();
                $scope.updateWidth();
                $scope.adjust();
                
                $window.onresize = function() {
                    $scope.adjust();
                    $scope.updateHeight();
                    $scope.updateWidth();
                    $scope.$apply();
                }
               
        });
    
   