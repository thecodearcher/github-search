import { Component, Input, OnInit } from '@angular/core';
import { GithubUser } from '@interfaces/github.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GithubService } from '@services/github/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [GithubService]
})
export class UserDetailsComponent implements OnInit {
  @Input() username: string;
  user: GithubUser;

  constructor(private githubService: GithubService, private modal: NgbActiveModal) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {

    this.githubService.getUserDetails(this.username)
      .subscribe(user => {
        this.user = user;
      }, error => {
        console.error(error);
      });
  }

  dismiss(): void {
    this.modal.dismiss();
  }

}
