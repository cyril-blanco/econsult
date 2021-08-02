import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-consult-list',
  templateUrl: './consult-list.component.html',
  styleUrls: ['./consult-list.component.sass']
})
export class ConsultListComponent implements OnInit {

  consults$: Observable<any> = this.http.get('/api/consults');
  ​
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  /**
   * Counts the processed images
   *
   * @param images - Array of images objects
   * @returns Total processed images
   */
  countProcessedImages(images: Array<any>): number {
    return images.filter((img) => img.processed).length;
  }

  /**
   * Mark the image as processed
   *
   * @param consultId - Consult ID
   * @param imageId - Image ID
   */
  done(consultId: number, imageId: number): void {
    // All API calls should be moved to a service to be reusable
    this.http.post(`/api/consults/${consultId}/images/${imageId}/done`, null)
      .subscribe(() => alert('image marked as processed!')); // This won't work, backend is not setup for this
  }
}
