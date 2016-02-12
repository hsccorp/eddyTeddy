/* jshint -W041 */


/* jslint browser: true*/
/* global cordova,StatusBar,angular,console,evothings */

angular.module('starter.controllers', [])

.controller('DiscoveryCtrl', function($scope, $timeout) 
{
     
        
    
        
        $scope.status = "Waiting...";
        $timeout (checkBeacons(),1000);
    
    
    
        function checkBeacons()
        {
             $scope.status = "Checking...";
             console.log ("Entering checkBeacons");
            evothings.eddystone.startScan(
                        function(beacon)
                        {
                            // Update beacon data.
                           
                            beacon.timeStamp = Date.now();
                            //beacons[beacon.address] = beacon;
                            $scope.status = "Got a beacon: " + JSON.stringify(beacon);
                        },
                        function(error)
                        {
                            $scope.status = 'Eddystone scan error: ' + error;
                        });
        }
        

        
    
});
