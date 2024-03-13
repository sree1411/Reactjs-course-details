import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MapGeocoder, GoogleMap, MapDirectionsService, MapMarker, MapDirectionsRenderer } from '@angular/google-maps';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  currentLocation: any;
  mapConfigurations: any;
  pickupLocation: string;
  dropLocation: any;
  markerOptions: google.maps.MarkerOptions = { draggable: true };
  markerLocation: any;
  @ViewChild('searchPickup') searchPickup: ElementRef = new ElementRef(null);
  @ViewChild('searchDrop') searchDrop: ElementRef;
  @ViewChild(GoogleMap) map: google.maps.Map;
  @ViewChild(MapMarker) mapMarker: google.maps.Marker;
  @ViewChild(MapDirectionsRenderer) mapDirRenderer: any;

  directionsResults$: Observable<google.maps.DirectionsResult | undefined>;
  directionsRendererOptions: google.maps.DirectionsRendererOptions = { draggable: true };
  distanceMatrixService = new google.maps.DistanceMatrixService();

  constructor(private geocoder: MapGeocoder, private mapDirectionsService: MapDirectionsService) { }
  currentLocationRequest: any;
  ngOnInit(): void {
    this.mapConfigurations = {
      disableDefaultUI: true,
      fullscreenControl: true,
      zoomControl: true
    };
  }

  ngAfterViewInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.currentLocationRequest = { location: this.currentLocation };
        this.geocoder.geocode(this.currentLocationRequest).subscribe((res: any) => {
          this.searchPickup.nativeElement.value = res.results[0].formatted_address;
          this.pickupLocation = res.results[0].formatted_address;
          this.markerLocation = res.results[0].geometry.location;
        })
      });
    }

    const pickupSearchBox = new google.maps.places.SearchBox(this.searchPickup.nativeElement);
    const dropSearchBox = new google.maps.places.SearchBox(this.searchDrop.nativeElement);


    pickupSearchBox.addListener('places_changed', () => {
      const places: any = pickupSearchBox.getPlaces();
      this.pickupLocation = places[0].formatted_address;
      this.markerLocation = places[0].geometry.location;
      if (places.length === 0) {
        return;
      }

      const bounds = new google.maps.LatLngBounds();

      places.forEach((place: any) => {
        if (!place.geometry || !place.geometry.location) {
          return;
        }

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        }
        else {
          bounds.extend(place.geometry.location);
        }
      });

      this.map?.fitBounds(bounds);
    });

    dropSearchBox.addListener('places_changed', () => {
      const places: any = dropSearchBox.getPlaces();
      this.dropLocation = places[0].formatted_address;
    });

  }

  handlePosChange() {
    let newPosition = this.mapMarker.getPosition();
    let locationRequest = { location: newPosition };
    this.geocoder.geocode(locationRequest).subscribe((res: any) => {
      if (res.status === 'OK') {
        this.searchPickup.nativeElement.value = res.results[0].formatted_address;
        this.pickupLocation = res.results[0].formatted_address;
      }
    });
  }

  handleDirChange() {
    let route = this.mapDirRenderer.getDirections();

    if (route.request.origin.query) {
      this.pickupLocation = route.request.origin.query;
      this.searchPickup.nativeElement.value = this.pickupLocation;
    }
    else {
      let locationRequest = { location: route.request.origin };
      this.geocoder.geocode(locationRequest).subscribe((res: any) => {
        this.pickupLocation = res.results[0].formatted_address;
        this.searchPickup.nativeElement.value = this.pickupLocation;
      });
    }

    if (route.request.destination.query) {
      this.dropLocation = route.request.destination.query;
      this.searchDrop.nativeElement.value = this.dropLocation;
    }
    else {
      let locationRequest = { location: route.request.destination };
      this.geocoder.geocode(locationRequest).subscribe((res: any) => {
        this.dropLocation = res.results[0].formatted_address;
        this.searchDrop.nativeElement.value = this.dropLocation;
      });
    }
  }

  searchRoute() {
    const request: google.maps.DirectionsRequest = {
      origin: this.pickupLocation,
      destination: this.dropLocation,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map((response) => {
      return response.result;
    }));

    this.distanceMatrixService.getDistanceMatrix({
      origins: [this.pickupLocation],
      destinations: [this.dropLocation],
      travelMode: google.maps.TravelMode.DRIVING
    }, (res: any) => {
      console.log(`The distance between ${res?.originAddresses} and ${res?.destinationAddresses} is ${res.rows[0].elements[0].distance.text}`);
    });
  }



}
