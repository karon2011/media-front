import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/media-common/services/api/author.service';
import { Author } from 'src/media-common/models/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: Author[];
  constructor(
    private authorService: AuthorService,
  ) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(
      data => {
        console.log("data", data);
        this.authors = this.authors
      }
    )
  }
}
