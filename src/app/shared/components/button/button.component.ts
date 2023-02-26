import { FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() public buttonType!: string;
  @Input() public movieForm!: FormGroup;

  sendValue() {
      //this.value.emit(this.value)
  }

}
