sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/fe/demo/ztravellist/test/integration/pages/MainListReport' ,
        'sap/fe/demo/ztravellist/test/integration/pages/MainObjectPage',
        'sap/fe/demo/ztravellist/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/fe/demo/ztravellist') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);