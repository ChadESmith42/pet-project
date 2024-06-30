import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environment.development';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  copyright: string = '';
  startYear: number = environment.START_YEAR;

  ngOnInit(): void {
    this.copyright = this.setCopyright();
  }

  setCopyright(): string {
    const now = new Date().getFullYear();
    return now > this.startYear ? `${this.startYear}-${now}` : `${this.startYear}`
  }

}
