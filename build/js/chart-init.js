var speedCanvas = document.getElementById("speedChart");
var payCanvas = document.getElementById("payCanvas");


Chart.defaults.global.defaultFontFamily = "Gilroy";
Chart.defaults.global.defaultFontSize = 16;


var dataFirst = {
    label: "Переходы",
    data: [1, 2, 3, 4],
    fill: false,
    borderColor: '#8A0502'
};

var dataSecond = {
    label: "Регистрации",
    data: [1, 15, 3, 10],
    fill: false,
    borderColor: '#616781'
};

var dataThird = {
    label: "Кол-во игроков",
    data: [1, 4, 3, 30],
    fill: false,
    borderColor: '#6BB3E2'
};

var dataFourth = {
    label: "Кол-во пополнений",
    data: [4, 15, 5, 3],
    fill: false,
    borderColor: 'blue'
};

var speedData = {
    labels: ["27.05", "28.05", "29.05", "30.05"],
    datasets: [dataFirst, dataSecond, dataThird, dataFourth]
};

var chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            boxWidth: 20,
            fontColor: 'black',
        }
    }
};

var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,

    options: chartOptions
});



var depositAmount = {
    label: "Сумма пополнений",
    data: [1, 2, 3, 4],
    fill: false,
    borderColor: '#8A0502'
};

var averageCompletion = {
    label: "Среднее пополнение",
    data: [1, 15, 3, 10],
    fill: false,
    borderColor: '#616781'
};

var myIncome = {
    label: "Мой доход",
    data: [1, 4, 3, 30],
    fill: false,
    borderColor: '#159E24'
};

var payData = {
    labels: ["27.05", "28.05", "29.05", "30.05"],
    datasets: [depositAmount, averageCompletion, myIncome]
};

var payChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            boxWidth: 20,
            fontColor: 'black',
        }
    }
};


var payLineChart = new Chart(payCanvas, {
    type: 'line',
    data: payData,
    options: payChartOptions,

});