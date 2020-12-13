import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { GithubService } from '@services/github/github.service';


@NgModule({
  declarations: [SearchResultComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    NgxSkeletonLoaderModule
  ],
  providers: [
    GithubService
  ]
})
export class SearchResultModule { }
