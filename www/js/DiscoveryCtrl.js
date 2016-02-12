/* jshint -W041 */


/* jslint browser: true*/
/* global cordova,StatusBar,angular,console,evothings,moment */

angular.module('starter.controllers', [])

.controller('DiscoveryCtrl', function($scope, $timeout) 
{
     
        
    
        $scope.beaconList={};
        
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
                           
                            beacon.timeStamp = moment().format ("MM Do YYYY, h:mm:ss a");
                            console.log ("GOT " + JSON.stringify(beacon));
                            $scope.beaconList[beacon.address] = JSON.stringify(beacon);
                            //beacons[beacon.address] = beacon;
                            $scope.status = "Got last beacon at: "+beacon.timeStamp;
                            //$timeout (checkBeacons(),1000);
                        },
                        function(error)
                        {
                            $scope.status = 'Eddystone scan error: ' + error;
                        });
        }
        

        
    
});
