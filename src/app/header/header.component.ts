import { Component, OnInit } from '@angular/core';


import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // pushRightClass: string = 'push-right';
  // sticky: boolean = false;
  // showHeader: boolean = true;
  // @ViewChild('stickyMenu') menuElement: ElementRef;
  // menuPosition: any;
  // user: any = {};
  // t: any;
  // windowScroll = 0;
  // image$: Observable<string>;
  // navbar$: Observable<string>;
  // enumPerm: any;
  // scrollTimeStamp: number = 0;
  // imageBlobUrl: string;

  constructor(public router: Router,
    // private oauthService: OAuthService,
    // private ngxRolesService: NgxRolesService,
    // private dialogService: NgbModal,
    // private profile: ProfileService
  ) {

    // this.enumPerm = EnumPerm;

    // this.user.name = this.profile.User.nombre;
    // this.user.id = this.profile.User.logon;

    // this.imageBlobUrl = localStorage.getItem("photo");


  }

  ngOnInit() { }

  ngAfterViewInit() {

    // setTimeout(() => {
    //     this.menuPosition = this.menuElement != null ? this.menuElement.nativeElement.offsetTop : 0;
    // }, 100);

  }

  // @HostListener('window:scroll', ['$event'])
  handleScroll($event: Event) {
    // this.scrollTimeStamp = $event.timeStamp;

    // this.windowScroll = window.pageYOffset;

    // let hasRole = Object.keys(this.ngxRolesService.getRoles()).length;

    // clearTimeout(this.t);
    // this.t = setTimeout((f) => {
    //     if (this.windowScroll > this.menuPosition) {

    //         if ((document.body.scrollHeight - window.outerHeight) >= $("section").offset().top && hasRole > 0) {
    //             {
    //                 this.sticky = true;
    //                 this.showHeader = false;
    //             }

    //         }
    //     } else {
    //         //console.log("arriba");
    //         this.sticky = false;
    //         this.showHeader = true;

    //     }

    // }
    //     , 10);
    // this.scrollTimeStamp = $event.timeStamp;
  }

  logout() {

    // if (environment.Authentication.mode == Authentication.Openid) {
    //     this.oauthService.logOut(false);
    // }
    // else {
    //     localStorage.clear();
    //     location.reload();
    // }


  }

  perfil() {
    // this.dialogService.open(ProfileComponent, { size: 'xl', windowClass: AppConstants.dialogClass });
  }
}
