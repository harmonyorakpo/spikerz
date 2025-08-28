import { Component, inject, OnInit } from '@angular/core';
import { ServerInfo } from '../../../core/models/server-info';
import { ServerDataService } from '../../../services/server-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lorem-ipsum',
  imports: [],
  templateUrl: './lorem-ipsum.component.html',
  styleUrl: './lorem-ipsum.component.scss',
})
export class LoremIpsumComponent implements OnInit {
  private serverDataService = inject(ServerDataService);
  private destroy$ = new Subject<void>();
  dataItems: ServerInfo[] = [];

  ngOnInit(): void {
    this.serverDataService
      .getServerInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.dataItems = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
