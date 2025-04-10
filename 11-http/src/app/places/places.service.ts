import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();
  private httpClient = inject(HttpClient);

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Something went wrong fetching the available places. Please try again later'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Something went wrong fetching your favorite places. Please try again later'
    );
  }

  addPlaceToUserPlaces(placeId: string) {
    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId,
    });
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMessage: string) {
    return (
      this.httpClient
        // Configure Http Request
        .get<{ places: Array<Place> }>(url, {
          observe: 'response',
        })

        // Data manipulation on response
        .pipe(
          // Manipulating data on successful/expected response
          map((response) => response.body?.places),

          // Manipulating response in case of failed request
          catchError((error) => {
            console.error(error);
            return throwError(() => new Error(errorMessage));
          })
        )
    );
  }
}
