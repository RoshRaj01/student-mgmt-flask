function initProgressionChart(containerId, progressionData) {
    var subjects = [];
    var marks = [];

    for (var subject in progressionData) {
        if (progressionData.hasOwnProperty(subject)) {
            subjects.push(subject);
            marks.push(progressionData[subject]);
        }
    }

    Highcharts.chart(containerId, {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Academic Progression'
        },
        xAxis: {
            categories: subjects,
            title: {
                text: 'Subjects'
            }
        },
        yAxis: {
            title: {
                text: 'Marks'
            },
            min: 0,
            max: 100
        },
        tooltip: {
            shared: true
        },
        series: [{
            name: 'Marks',
            data: marks
        }]
    });
}
