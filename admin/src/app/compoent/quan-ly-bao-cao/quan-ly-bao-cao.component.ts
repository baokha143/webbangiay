import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

// Register all necessary Chart.js components
Chart.register(...registerables);

@Component({
  selector: 'app-quan-ly-bao-cao',
  templateUrl: './quan-ly-bao-cao.component.html',
  styleUrls: ['./quan-ly-bao-cao.component.css']
})
export class QuanLyBaoCaoComponent implements OnInit {

  ngOnInit(): void {
    // Define the data for the charts
    const data = {
      labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      datasets: [{
        label: "Dữ liệu đầu tiên",
        backgroundColor: "rgba(255, 255, 255, 0.158)",
        borderColor: "black",
        pointBackgroundColor: "rgb(220, 64, 59)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "green",
        data: [20, 59, 90, 51, 56, 100, 40, 60, 78, 53, 33, 81]
      },
      {
        label: "Dữ liệu kế tiếp",
        backgroundColor: "rgba(255, 255, 255, 0.158)",
        borderColor: "rgb(220, 64, 59)",
        pointBackgroundColor: "black",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "green",
        data: [48, 48, 49, 39, 86, 10, 50, 70, 60, 70, 75, 90]
      }]
    };

    // Create Line Chart
    const ctxl = document.getElementById('lineChartDemo') as HTMLCanvasElement;
    if (ctxl) {
      new Chart(ctxl.getContext('2d')!, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat().format(context.parsed.y);
                  }
                  return label;
                }
              }
            }
          }
        }
      });
    }

    // Create Bar Chart
    const ctxb = document.getElementById('barChartDemo') as HTMLCanvasElement;
    if (ctxb) {
      new Chart(ctxb.getContext('2d')!, {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat().format(context.parsed.y);
                  }
                  return label;
                }
              }
            }
          }
        }
      });
    }

    // Function to include Google Analytics (if needed)
    this.includeGoogleAnalytics();
  }

  // Function to include Google Analytics (if needed)
  private includeGoogleAnalytics(): void {
    if (document.location.hostname === 'pratikborsadiya.in') {
      (function(i: any, s: any, o: any, g: any, r: string, a?: HTMLScriptElement, m?: HTMLElement | null) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
          (i[r].q = i[r].q || []).push(arguments);
        };
        i[r].l = 1 * new Date().getTime();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        if (a) {
          a.async = true;
          a.src = g;
          if (m?.parentNode) {
            m.parentNode.insertBefore(a, m);
          }
        }
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  
      // Khai báo ga là biến toàn cục trên window
      (window as any).ga = (window as any).ga || function() {
        (window as any).ga.q = (window as any).ga.q || [];
        (window as any).ga.q.push(arguments);
      };
  
      // Kiểm tra ga có phải là hàm không
      if (typeof (window as any).ga === 'function') {
        (window as any).ga('create', 'UA-72504830-1', 'auto');
        (window as any).ga('send', 'pageview');
      }
    }
  }
  
}
