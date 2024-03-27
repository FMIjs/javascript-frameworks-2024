import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.scss'],
  standalone: true
})
export class TooltipContentComponent {
  tooltipText = 'This is a tooltip';
}
