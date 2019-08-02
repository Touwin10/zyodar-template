import { Component } from '@angular/core';
import { SpendComponent } from './pages/spend/spend.component';
import { SaveComponent } from './pages/save/save.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  home = HomeComponent;
  spend = SpendComponent;
  save = SaveComponent;
  settings = SettingsComponent;

  title = 'Zyodar';
}
