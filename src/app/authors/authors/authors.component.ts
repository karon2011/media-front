import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AuthorService } from 'src/media-common/services/api/author.service';
import { Author } from 'src/media-common/models/author';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  authors: Author[] | null;

  displayedColumns = ["name", "description", "country"];

  constructor(
    private authorService: AuthorService,
  ) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(
      data => {
        console.log("data", data);
      }
    )
  }

  ngAfterViewInit(): void {
    // throw new Error("Method not implemented.");
  }
  
  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}
