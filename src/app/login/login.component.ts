import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
 declare var googleyolo: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Game: GameService) {
    googleyolo.hint({
      supportedAuthMethods: [
        "https://accounts.google.com",
        "googleyolo://id-and-password"
      ],
      supportedIdTokenProviders: [
        {
          uri: "https://accounts.google.com",
          clientId: "789839932256-si70pttof01sed5gqidhbo8eqqeo0mi8.apps.googleusercontent.com"
        }
      ]
    }).then((credentials: any)=>{
      _Game.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
      console.log(credentials);
    })
   }

  ngOnInit() {
  }

  login(name: string, password: string){
      this._Game.login(name, password);
  }

}
