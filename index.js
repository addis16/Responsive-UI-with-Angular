
        
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
                    $scope.columnStyle = { boxShadow: 'none', borderBottom: '3px solid black'}; // just an example, can be anything.
                     // any code here will run when the window width is <= 1322 pixels.
                }
                else if($scope.width > 1322) {
                    $scope.columnStyle = { boxShadow: '0px 3px 3px black', borderBottom: 'none'}; // another example.
                    // any code here will run when the window width is greater than 1322 pixels.
                    // I think this is better than media queries, because you can execute scripts instead of just changing css.
                    // If you're using Angular in your project already of course.    
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
    
   
