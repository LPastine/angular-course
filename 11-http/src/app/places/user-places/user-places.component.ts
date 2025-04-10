import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFetching.set(true);

    const subscription = this.placesService
      .loadUserPlaces()

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
