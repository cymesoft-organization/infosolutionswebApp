import { Component,  OnInit, AfterViewInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  urlvalue: string;
  url: any;
  constructor(public router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    console.log('app' + this.router.url);
    this.urlvalue = '/';
    this.url = ['/', '/login', '/admin'];
  }
  menuSwitch() {
    let stringToSplit = this.router.url;
    let x = stringToSplit.split("/");
    if (this.url.includes(this.router.url)) {
      return false;
    } else if (x[1] == 'resetpassword') {
      return false;
    } else {
      return true;
    }
  }
  public logout(){
        localStorage.removeItem('currentUser');      
        this.router.navigateByUrl('/admin');
    
  }
}