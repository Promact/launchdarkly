import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
        AppComponent
	],
	imports: [
        BrowserModule,
		CommonModule,
        RouterOutlet
	],

	bootstrap: [AppComponent],
})
export class AppModule {}
