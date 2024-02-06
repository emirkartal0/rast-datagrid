import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideToastr } from 'ngx-toastr';

bootstrapApplication(AppComponent, {
	providers: [
		provideAnimations(),
		provideToastr({
			positionClass: 'toast-bottom-right',
			timeOut: 1000,
		}),
	]
})
	.catch(err => console.error(err));
