/**
 * Created by session2 on 10/7/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Item', 'Amount'],
        ['Import Quantity', 3413.81 ],
        ['Stock Variation', 931.713],
        ['Import Value', 780.48 ],
        ['Import Unit Value', 228.624323],
        ['Export Quantity', 0]

    ]);

    var options = {
        title: 'Item vs Amount in Algeria',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Amount',
            minValue: 0
        },
        vAxis: {
            title: 'Item'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}