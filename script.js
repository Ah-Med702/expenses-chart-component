var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
        {
            data: [15.24, 35.22, 52.36, 31.07, 25.36, 40.45, 28.52],
            backgroundColor: [
                "#ec775f",
                "#ec775f",
                "#76b5bc",
                "#ec775f",
                "#ec775f",
                "#ec775f",
                "#ec775f",
            ],
            hoverBackgroundColor: [
                "#ec775fbd",
                "#ec775fbd",
                "#76b5bcad",
                "#ec775fbd",
                "#ec775fbd",
                "#ec775fbd",
                "#ec775fbd",
            ],
            borderSkipped: "",
            borderRadius: 5,
            barThickness: "flex",
        },
    ],
};

var customValues = [
    "$15.42",
    "$35.22",
    "$52.36",
    "$31.07",
    "$25.36",
    "$40.45",
    "$28.52",
];

var myChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
        scales: {
            y: {
                offset: true,
                display: false,
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false,
                },
                gridLines: {
                    drawBorder: false,
                },
                ticks: {
                    display: true,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    },
});

ctx.canvas.addEventListener("mousemove", function (e) {
    var activePoint = myChart.getElementsAtEventForMode(
        e,
        "nearest",
        { intersect: true },
        false
    );

    if (activePoint.length > 0) {
        var customTooltip = document.getElementById("customTooltip");

        customTooltip.style.display = "block";
        customTooltip.style.left =
            activePoint[0].element.x - customTooltip.clientWidth / 2 + "px";
        customTooltip.style.top = activePoint[0].element.y - 40 + "px";

        customTooltip.innerHTML = customValues[activePoint[0].index];
    } else {
        document.getElementById("customTooltip").style.display = "none";
    }
});

ctx.canvas.addEventListener("mouseleave", function () {
    document.getElementById("customTooltip").style.display = "none";
});
