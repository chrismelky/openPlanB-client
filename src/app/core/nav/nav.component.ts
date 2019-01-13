import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { AppHttpInterceptorService } from '../app-http-interceptor.service';

import { NavItem } from './nav-item';
import { NavService } from '../nav.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') drawer: ElementRef;

  isLoading = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'dashboard',
      children: []
    },
    {
      displayName: 'Setup',
      iconName: 'settings',
      route: 'setup',
      children: [
        {
          displayName: 'Maintenance',
          iconName: 'build',
          route: 'setup/maintenance',
          children: [
            {
              displayName: 'Configurations',
              iconName: 'build',
              route: 'setup/configuration'
            },
            {
              displayName: 'Attributes',
              iconName: 'edit_attributes',
              route: 'setup/attributes'
            }
          ]
        },
        {
          displayName: 'User Management',
          iconName: 'people',
          route: 'setup/users',
          children: [
            {
              displayName: 'Users',
              iconName: 'person',
              route: 'setup/users'
            },
            {
              displayName: 'Roles',
              iconName: 'verified_user',
              route: 'setup/roles'
            },
          ]
        },
        {
          displayName: 'Organisation Units',
          iconName: 'table_chart',
          route: 'setup/orgunits',
          children: [
            {
              displayName: 'OrgUnit Units',
              iconName: 'table_chart',
              route: 'setup/orgunits'
            },
            {
              displayName: 'OrgUnit Groups',
              iconName: 'bubble_chart',
              route: 'setup/orgunits/groups'
            },
            {
              displayName: 'OrgUnit Sets',
              iconName: 'pie_chart',
              route: 'setup/orgunits/sets'
            },
            {
              displayName: 'OrgUnit Levels',
              iconName: 'format_list_numbered',
              route: 'setup/orgunits/levels'
            }
          ]
        },
        {
          displayName: 'Planning Units',
          iconName: 'table_chart',
          route: 'setup/sub-units',
          children: [
            {
              displayName: 'Planning Units',
              iconName: 'table_chart',
              route: 'setup/planning-units'
            },
            {
              displayName: 'Planning Unit Levels',
              iconName: 'format_list_numbered',
              route: 'setup/planning-unit-levels'
            },
            {
              displayName: 'Sectors',
              iconName: 'pie_chart',
              route: 'setup/sectors'
            }
          ]
        }
      ]
    },
    {
      displayName: 'Planning',
      iconName: 'list',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Budgeting',
      iconName: 'money',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Execution',
      disabled: true,
      iconName: 'network_check',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'material-design'
                }
              ]
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'what-up-web'
                }
              ]
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer'
                }
              ]
            }
          ]
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'Create Enterprise UIs',
              iconName: 'star_rate',
              route: 'material-design'
            },
            {
              displayName: 'What\'s up with the Web?',
              iconName: 'star_rate',
              route: 'what-up-web'
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }
          ]
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
    },
    {
      displayName: 'Reports',
      iconName: 'print',
      route: 'reports',
      children: []
    },
  ];
  constructor(private interc: AppHttpInterceptorService,
    private breakpointObserver: BreakpointObserver,
    private router: Router, private navService: NavService) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }
    });

    this.interc.getProgres().subscribe((status) => {
      console.log(status);
      this.isLoading = status;
    }, (error) => {
      console.log(error);
    });
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.drawer;
  }

}
