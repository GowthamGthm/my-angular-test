import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  dataSource: any;
  isLoading: boolean = true;

  constructor(public data: DataService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    let data: any;
    let countryName = this.route.snapshot.paramMap.get('name');
    console.log(countryName);

    if (countryName && this.data.dataSource) {
      data = this.data.dataSource.find((ele: any) => ele.flag === countryName);
    }

    if (data) {
      this.dataSource = data;
      this.isLoading = false;
    } else {
      this.onFetchData(countryName);
    }

  }

  onFetchData(countryName: string | null) {
    this.isLoading = true;
    this.data.getAllCountries().subscribe((res) => {
      console.log("inside component on fetch subscribe");
      if (res) {
        this.data.dataSource = res;
        this.dataSource = this.data.dataSource.find((ele: any) => ele.cca2 === countryName);
        this.isLoading = false;
      } else {
        // this.error="Error 404 ! Try again after some time";
      }
    });
  }
}
