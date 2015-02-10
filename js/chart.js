var dataSource;

$.getJSON('data/sample_data.json').done(function(res) {
    dataSource = res;
    initChart();
});


function initChart() {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'activity_date',
            point: {
                visible: false
            }
        },
        valueAxis: [
            { 
                name: 'gmv',
                valueType: 'numeric'
            },
            { 
                name: 'listingfees',
                position: 'right'
            }
        ],
        series: [{
            name: 'GMV',
            valueField: 'gmv',
            axis: 'gmv',
            type: 'line'
        },
        {
            name: 'listing fees',
            valueField: 'listingfees',
            axis: 'listingfees',
            type: 'line'
        }]
    });
}
