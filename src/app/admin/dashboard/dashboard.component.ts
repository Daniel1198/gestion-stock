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

  products: any[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);

    this.products = [
      { name: 'Chaises', quantite: 510, disponible: 410, reserve: 100 },
      { name: 'Bâches', quantite: 25, disponible: 11, reserve: 14 },
      { name: 'Assiettes', quantite: 1213, disponible: 526, reserve: 687 },
      { name: 'Tréteaux', quantite: 80, disponible: 60, reserve: 20 }
    ]
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
