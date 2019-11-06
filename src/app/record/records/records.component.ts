import { Component, OnInit } from '@angular/core';
import { RecordService } from 'src/media-common/services/api/record.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(
    private recordService: RecordService
  ) { }

  ngOnInit() {
    this.recordService.getRecords()
    .subscribe(data => {
      console.log("records []:", data);
    })
  }

}
