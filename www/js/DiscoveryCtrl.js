/* jshint -W041 */


/* jslint browser: true*/
/* global cordova,StatusBar,angular,console,evothings */

angular.module('starter.controllers', [])

.controller('DiscoveryCtrl', function($scope) 
{
     
     
        console.log ("Discovering");
        $scope.status = "Discovering...";

        evothings.eddystone.startScan(
                    function(beacon)
                    {
                        // Update beacon data.
                        beacon.timeStamp = Date.now();
                        //beacons[beacon.address] = beacon;
                        $scope.text = "Got a beacon";
                    },
                    function(error)
                    {
                        $scope.text = 'Eddystone scan error: ' + error;
                    });
    
     
    
});
