var data = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    datasets: [{
        label: "Dữ liệu đầu tiên",
        fillColor: "rgba(255, 255, 255, 0.158)",
        strokeColor: "black",
        pointColor: "rgb(220, 64, 59)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "green",
        data: [20, 59, 90, 51, 56, 100, 40, 60, 78, 53, 33, 81]
      },
      {
        label: "Dữ liệu kế tiếp",
        fillColor: "rgba(255, 255, 255, 0.158)",
        strokeColor: "rgb(220, 64, 59)",
        pointColor: "black",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "green",
        data: [48, 48, 49, 39, 86, 10, 50, 70, 60, 70, 75, 90]
      }
    ]
  };


      var ctxl = $("#lineChartDemo").get(0).getContext("2d");
      var lineChart = new Chart(ctxl).Line(data);

      var ctxb = $("#barChartDemo").get(0).getContext("2d");
      var barChart = new Chart(ctxb).Bar(data);



      if (document.location.hostname == 'pratikborsadiya.in') {
          (function (i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r;
              i[r] = i[r] || function () {
                  (i[r].q = i[r].q || []).push(arguments)
              }, i[r].l = 1 * new Date();
              a = s.createElement(o),
                  m = s.getElementsByTagName(o)[0];
              a.async = 1;
              a.src = g;
              m.parentNode.insertBefore(a, m)
          })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
          ga('create', 'UA-72504830-1', 'auto');
          ga('send', 'pageview');
      }
