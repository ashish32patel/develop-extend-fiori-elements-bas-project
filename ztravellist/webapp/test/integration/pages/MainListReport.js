sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sap.fe.demo.ztravellist',
            componentId: 'TravelList',
            entitySet: 'Travel'
        },
        AdditionalCustomListReportDefinition
    );
});