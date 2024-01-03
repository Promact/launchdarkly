import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LaunchDarklyService } from 'src/app/_shared/services/launch-darkly.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  isSectionVisible: boolean;
  flagSubscription: Subscription;

  constructor(private launchDarklyService: LaunchDarklyService) {
    this.isSectionVisible = true; // Set Default value based on the visiblity of the feature. 
    
    this.flagSubscription = this.launchDarklyService.subjectFlag.subscribe(
      () => {
        this.subscribeFlags();
      }
    );
    this.subscribeFlags();
  }

  ngOnDestroy(): void {
      this.flagSubscription.unsubscribe();

  }

  /**
  * Method to subscribe flag and perform action
  */
  subscribeFlags(): void {
    this.isSectionVisible = this.launchDarklyService.getFlags('FLAGNAME'); // Pass flag postfix name, use his variable for show/hide feature based in the environment
  }
}
