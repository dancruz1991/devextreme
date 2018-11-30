import { Component, OnInit } from '@angular/core';
import { Service2, ComplaintsWithPercent } from '../../services/chart.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers:[Service2,ComplaintsWithPercent]
})
export class ChartComponent {

  dataSource: ComplaintsWithPercent[];

  constructor(service: Service2) {
      this.dataSource = service.getComplaintsData()
  }

  customizeTooltip = (info: any) => {
      return {
          html: "<div><div class='tooltip-header'>" +
              info.argumentText + "</div>" +
              "<div class='tooltip-body'><div class='series-name'>" +
              info.points[0].seriesName +
              ": </div><div class='value-text'>" +
              info.points[0].valueText +
              "</div><div class='series-name'>" +
              info.points[1].seriesName +
              ": </div><div class='value-text'>" +
              info.points[1].valueText +
              "% </div></div></div>"
      };
  }

  customizeLabelText = (info: any) => {
      return info.valueText + "%";
  }
}
