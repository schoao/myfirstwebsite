var socket;
$( document ).ready(function()
{
   socket = io.connect(window.location.href);
   socket.on('connect', function(data) {socket.emit('join', 'Socket Connection from index page established.');});
   singleAxisPlot();
});

function singleAxisPlot()
{
  google.charts.load('current',{'packages':['corechart']});
  google.charts.setOnLoadCallback(drawSingleY);

  function drawSingleY() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'Profits');
    data.addColumn('number', 'Losses');

    data.addRows([
      ['Jan', 100, 600],
      ['Feb', 200, 550],
      ['Mar', 300, 500],
      ['Apr', 400, 450],
      ['May', 500, 400],
      ['Jun', 600, 350],
      ['Jul', 700, 300],
      ['Aug', 800, 250],
      ['Sep', 900, 200],
      ['Oct', 1000, 150],
      ['Nov', 1100, 100],
      ['Dec', 1200, 50]
    ]);

    var options = {
      legend: { position: 'top', alignment: 'start' },
      title: 'Our Company',
      theme: 'material',
      hAxis: {title: 'Month',},
      width: '100%',
      height: 400,
      bar: {groupWidth: "95%"},

    };
    var chart =  new google.visualization.ColumnChart(document.getElementById('chart1'));
    chart.draw(data, options);
  }

}
function dualAxisPlot()
{
  google.charts.load('current',{'packages':['corechart']});
  google.charts.setOnLoadCallback(drawDualY);

  function drawDualY() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'Profits');
    data.addColumn('number', 'Losses');

    data.addRows([
      ['Jan', 100, 600],
      ['Feb', 200, 550],
      ['Mar', 300, 500],
      ['Apr', 400, 450],
      ['May', 500, 400],
      ['Jun', 600, 350],
      ['Jul', 700, 300],
      ['Aug', 800, 250],
      ['Sep', 900, 200],
      ['Oct', 1000, 150],
      ['Nov', 1100, 100],
      ['Dec', 1200, 50]
    ]);

    var options = {
      legend: { position: 'top', alignment: 'start' },
      title: 'Our Company',
      series: {
        1: {targetAxisIndex: 1}
      },
      vAxes: {
        0: {title: 'Profits'},
        1: {title: 'Losses'}
      },
      theme: 'material',
      hAxis: {title: 'Month',},
      height: '600',
      bar: {groupWidth: "95%"},

    };
    var chart =  new google.visualization.ColumnChart(document.getElementById('chart2'));
    chart.draw(data, options);
  }

}
