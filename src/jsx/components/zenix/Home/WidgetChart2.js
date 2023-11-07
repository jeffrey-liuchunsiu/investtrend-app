import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class WidgetChart2 extends Component {
  render() {
    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
      ],

      datasets: [
        {
          label: "Price",
          // borderColor: "transparent",
          pointBackgroundColor: "#3693FF",
          pointBorderColor: "#3693FF",
          // borderRadius: 0,
          pointRadius: 0,
          pointHitRadius: 10,
          pointHoverBackgroundColor: "#3693FF",
          pointHoverBorderColor: "#3693FF",
          // backgroundColor: "rgba(255, 171, 45, 1)",
          borderWidth: 0,
          backgroundColor: "#3693FF",
          borderColor: "#3693FF",
          fill: true,
          data: [10, 30, 20, 30, 20, 40, 30, 20, 35],
        },
      ],
    };

    const options = {
      elements: {
        line: {
          tension: 0.5,
        },
      },
      plugins: {
        legend: false,
      },
      scales: {
        y: {
          border: {
            display: false,
          },
          beginAtZero: true,
          max: Math.max(...data.datasets[0].data) + 5,
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
      layout: {
        padding: {
          left: -10,
          bottom: -10,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    };

    // const options = {
    //   title: {
    //     display: !1,
    //   },
    //   tooltips: {
    //     intersect: !1,
    //     mode: "nearest",
    //     xPadding: 10,
    //     yPadding: 10,
    //     caretPadding: 10,
    //   },

    //   legend: {
    //     display: !1,
    //   },
    //   responsive: !0,
    //   maintainAspectRatio: !1,
    //   hover: {
    //     mode: "index",
    //   },
    //   scales: {
    //     xAxes: [
    //       {
    //         display: !1,
    //         gridLines: !1,
    //         scaleLabel: {
    //           display: !0,
    //           labelString: "Month",
    //         },
    //       },
    //     ],
    //     yAxes: [
    //       {
    //         display: !1,
    //         gridLines: !1,
    //         scaleLabel: {
    //           display: !0,
    //           labelString: "Value",
    //         },
    //         ticks: {
    //           beginAtZero: !0,
    //         },
    //       },
    //     ],
    //   },
    //   elements: {
    //     point: {
    //       radius: 0,
    //       borderWidth: 0,
    //     },
    //   },
    //   layout: {
    //     padding: {
    //       left: 0,
    //       right: 0,
    //       top: 5,
    //       bottom: 0,
    //     },
    //   },
    // };
    return (
      <>
        <Line
          data={data}
          options={options}
          // height={this.props.height ? this.props.height : 120}
          height={120}
        />
      </>
    );
  }
}

export default WidgetChart2;
