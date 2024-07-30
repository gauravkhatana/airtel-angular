import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  title = 'airtel-map-temp';
  context = { expand: false };
  inputValue = false;
  activeButton = 0;
  selectedTabIndex = 0;
  fault = false;
  searchActive = false;

  constructor(private router: Router) {}

  // Check if the current route matches the provided path
  isActive(path: string): boolean {
    return this.router.url === path;
  }
  toggleSearch(event: Event): void {
    this.searchActive = !this.searchActive;
  }

  toggleExpand(event: Event): void {
    this.context.expand = !this.context.expand;
  }

  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.checked;
  }

  handleToggle(buttonNumber: number): void {
    this.activeButton = this.activeButton === buttonNumber ? 0 : buttonNumber;
  }

  fields = [
    { label: 'Node Name:' },
    { label: 'Alarm Type:' },
    { label: 'Severity Level:' },
    { label: 'SLA:' },
    { label: 'Alarm Status:' },
    { label: 'Occurred At:' },
    { label: 'Cleared On:' }
  ];

  // Sample effective nodes
  effectiveNodes = [
    { name: '012367078_DSL' },
   
  ];

  // Sample node items under each effective node
  nodeItems = [
    { name: '045215728380_wifi' },
    { name: '045215728381_wifi' },
    { name: '045215728382_wifi' },
    { name: '045215728380_wifi' },
    { name: '045215728381_wifi' },
    { name: '045215728382_wifi' },
    { name: '045215728380_wifi' },
    { name: '045215728381_wifi' },
    { name: '045215728382_wifi' },
    { name: '045215728380_wifi' },
    { name: '045215728381_wifi' },
    { name: '045215728382_wifi' }
  ];

  // Sample OLTs with nested ODFs and other details
  olts = [
    {
      name: 'OLT 1',
      hasDetails: true,
      odfs: [
        {
          name: 'ODF 1',
          hasDetails: true,
          fats: [
            { name: 'FAT 1', hasDetails: true, items: ['Item A', 'Item B'] },
            { name: 'FAT 2', hasDetails: false, items: [] }
          ],
          otherOdFs: [
            {
              name: 'ODF 2',
              hasDetails: true,
              fats: [
                { name: 'FAT 3', hasDetails: true, items: ['Item C'] }
              ],
              otherOdFs: []
            },
            {
              name: 'ODF 3',
              hasDetails: false,
              fats: [],
              otherOdFs: []
            }
          ]
        },
        {
          name: 'ODF 4',
          hasDetails: false,
          fats: [],
          otherOdFs: []
        }
      ],
      otherOdFs: [
        {
          name: 'ODF 5',
          hasDetails: true,
          fats: [
            { name: 'FAT 4', hasDetails: false, items: [] }
          ],
          otherOdFs: []
        }
      ]
    },
    {
      name: 'OLT 2',
      hasDetails: true,
      odfs: []
    }
  ];
  

  toggleExpandTheme(event: Event) {
    this.context.expand = !this.context.expand;
  }


  toggleSidebar(event:Event){
    document.getElementsByClassName("app")[0].classList.toggle('app-sidebar-minified');

  }

 
  
}




