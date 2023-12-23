import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular-production-app/material';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Widget } from '@angular-production-app/api-interfaces';

@Component({
  selector: 'angular-production-app-widget-details',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './widget-details.component.html',
  styleUrl: './widget-details.component.scss',
})
<<<<<<< Updated upstream
export class WidgetDetailsComponent {}
=======
export class WidgetDetailsComponent implements OnChanges {
  @Input() widgetUpdate: Widget | undefined;
  @Output() addNewWidget = new EventEmitter<{
    widget: Widget;
    isUpdate: boolean;
  }>();

  btnText = 'Add';

  widgetForm: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
  });

  ngOnChanges(): void {
    this.widgetForm.patchValue({
      title: this.widgetUpdate?.title,
      description: this.widgetUpdate?.description,
    });

    if (this.widgetUpdate?.id) {
      this.btnText = 'Update';
    }
  }
  onSubmit() {
    const wpId = this.widgetUpdate?.id;
    const widget = {
      ...this.widgetForm.value,
      id: wpId ? wpId : '',
    };
    this.addNewWidget.emit({ widget: widget, isUpdate: !!wpId });
    this.onClear();
  }
  onClear() {
    this.widgetUpdate = undefined;
    this.btnText = 'Add';
    this.widgetForm.reset();
  }
}
>>>>>>> Stashed changes
