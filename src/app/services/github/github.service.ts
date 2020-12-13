import { GithubSearchResponse, GithubUser } from '@interfaces/github.interface';
import { BaseService } from '@services/base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {

  constructor(private api: BaseService) { }

  searchUsers(username: string, page: number, limit: number): Observable<GithubSearchResponse> {
    this.api.setActionUrl('/search', '/users');

    return this.api.get<GithubSearchResponse>(`q=${username}&per_page=${limit}&page=${page}`);
  }

  getUserDetails(username: string): Observable<GithubUser> {
    this.api.setActionUrl('/users', `/${username}`);

    return this.api.get<GithubUser>();
  }
}
