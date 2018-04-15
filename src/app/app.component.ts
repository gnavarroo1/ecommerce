import {
  Store
} from '@ngrx/store';
import {
  Subscription
} from 'rxjs/Subscription';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Router,
  NavigationEnd
} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  currentUrl: string;
  orderSub$: Subscription;
  currentStep: string;

  constructor(
    private router: Router
  ) {
    router
      .events
      .filter(e => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => {
        this.currentUrl = e.url;
        this.findCurrentStep(this.currentUrl);
        window.scrollTo(0, 0);
      });
  }

  ngOnInit() {
  }

  private findCurrentStep(currentRoute) {
    const currRouteFragments = currentRoute.split('/');
    const length = currRouteFragments.length;
    this.currentStep = currentRoute.split('/')[length - 1];
  }

  ngOnDestroy() {
    this.orderSub$.unsubscribe();
  }

}
