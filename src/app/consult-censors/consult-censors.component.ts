import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-consult-censors',
  templateUrl: './consult-censors.component.html',
  styleUrls: ['./consult-censors.component.sass']
})
export class ConsultCensorsComponent implements OnInit {

  image$!: Observable<any>;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const eConsultId = this.route.snapshot.paramMap.get('eConsultId')!;
    const imageId = this.route.snapshot.paramMap.get('imageId')!;

    // Find the right image within the list
    this.image$ = this.http.get<any>(`/api/consults/${eConsultId}`).pipe(
      map(consult => consult.images.find((i: any) => i.id == imageId))
    );
  }

  addCensor(): void {
    // Add censor...
  }

  saveCensor(): void {
    // Save censor...
  }

  deleteCensor(): void {
    // Delete censor...
  }

  /**
   * Mark the image as done
   */
  done(): void {
    // Make sure all censors are saved
    // Mark the image as done (using a service)
    // ... then navigate back to the list
    this.router.navigate(['econsult']);
  }
}
