import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-poc-saldos';
  balanceAmountData = [];
  ngOnInit(): void {
    this.balanceAmountData = [
      {
        "accountType":"Tarjeta débito",
        "accountTitleName":"JORGE ISRAEL,SIQUE",
        "accountNumber":"***6291",
        "currentBalance":46447.40,
      },
      {
        "accountType":"Tarjeta crédito",
        "accountTitleName":"ELIAS HERNANDEZ, GOMEZ",
        "accountNumber":"***6632",
        "currentBalance":8633.48,
      },
      {
        "accountType":"Tarjeta débito",
        "accountTitleName":"CESAR ARIEL, ALMEYDA",
        "accountNumber":"***9582",
        "currentBalance":76731.37,
      },
      {
        "accountType":"Tarjeta crédito",
        "accountTitleName":"URIEL ANTUNA, CRUZ",
        "accountNumber":"***7361",
        "currentBalance":4590.20,
      },
    ]
  }
}
