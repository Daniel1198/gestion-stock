import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10, 15, 20];
  data: any[] = [].constructor(27);
  isAll: boolean = false;
  loading: boolean = true;

  products: any[] = [].constructor(7);

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  showAll() {
    this.isAll = !this.isAll;
  }

  changeSize(value: string) {
    this.tableSize = +value;
    this.page = 1;
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.data;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.data;
  }
}
