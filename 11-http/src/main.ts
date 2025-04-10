import { bootstrapApplication } from '@angular/platform-browser';
import {
  HttpHandlerFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';

import { AppComponent } from './app/app.component';

function loggingInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // Example of manipulating these requests - setting a different header
  // const req = request.clone({
  //   headers: request.headers.set('X-DEBUG', 'TESTING'),
  // });
  console.log('[Outgoing Request]');
  console.log(request);
  return next(request);
}

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loggingInterceptor]))],
}).catch((err) => console.error(err));
