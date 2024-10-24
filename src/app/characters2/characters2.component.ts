import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-characters2',
  standalone: true,
  imports: [RouterLink  ,NgbCollapseModule],
  templateUrl: './characters2.component.html',
  styleUrl: './characters2.component.css'
})
export class Characters2Component {
  isCollapsed = true;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;
  isCollapsed6 = true;
  isCollapsed7 = true;
  isCollapsed8 = true;
  isCollapsed9 = true;
  isCollapsed10 = true;
  isCollapsed11 = true;

}

