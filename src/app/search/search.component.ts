import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public search: FormGroup;
  @Output() public searchValue = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.search = this.fb.group({
      country: ['', Validators.required],
      league: ['', Validators.required]
    });

  }

  searchFunc() {
    if (this.search.valid) {
      this.searchValue.emit(this.search.value);
    }
  }
}
