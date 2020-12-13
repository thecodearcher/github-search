import { GithubSearchResponse } from '@interfaces/github.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GithubService } from '@services/github/github.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  result: GithubSearchResponse;
  query: string;
  page: number;
  limit = 10;

  constructor(private githubService: GithubService, private ngbModal: NgbModal, private route: ActivatedRoute, private router: Router) {
    this.preventRouteReuse();
  }

  ngOnInit(): void {
    this.searchUsers();
  }

  searchUsers(): void {
    this.query = this.route.snapshot.queryParams?.query;
    this.page = this.route.snapshot.queryParams?.page ?? 1;

    this.githubService.searchUsers(this.query, this.page, this.limit)
      .subscribe(result => {
        this.result = result;
      }, error => {
        console.error(error);
      });
  }

  openUserDetailsModal(username: string): void {
    const modalRef = this.ngbModal.open(UserDetailsComponent, { centered: true });

    modalRef.componentInstance.username = username;
  }

  loadMore(): void {
    const page = Number(this.page) + 1;

    this.router.navigate(['./search-result'], { queryParams: { query: this.query, page } });
  }

  loadPrevious(): void {
    const page = Number(this.page) - 1;

    this.router.navigate(['./search-result'], { queryParams: { query: this.query, page } });
  }

  private preventRouteReuse(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = (future, curr) => {
      return curr.routeConfig === null && future.routeConfig === null;
    };
  }


}
