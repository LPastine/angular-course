import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.httpClient
      // Configure Http Request
      .get<{ places: Array<Place> }>('http://localhost:3000/places', {
        observe: 'response',
      })

      // Data manipulation on response
      .pipe(
        // Manipulating data on successful/expected response
        map((response) => response.body?.places),

        // Manipulating response in case of failed request
        catchError((error) => {
          console.error(error);
          return throwError(
            () =>
              new Error(
                'Something went wrong fetching the available places. Please try again later'
              )
          );
        })
      )

      // Subscription
      .subscribe({
        // Request succeeds
        next: (places) => {
          this.places.set(places);
        },

        // What to do when the request fails
        error: (error: Error) => {
          this.error.set(error.message);
        },

        // What to do after succeeded request
        complete: () => {
          this.isFetching.set(false);
        },
      });

    // Unsubscribe subscription
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
