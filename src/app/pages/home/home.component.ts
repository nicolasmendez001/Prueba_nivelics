import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/servicios/articulos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data;

  constructor(private artService: ArticulosService) {
    artService.getData().subscribe(
      res => {
        console.log(res);
        this.data = res;

      },
      err => {
        console.log(err);

      }
    );

    console.log(this.data);

  }

  ngOnInit(): void {
  }

}
