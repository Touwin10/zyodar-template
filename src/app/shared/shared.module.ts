import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileContainerComponent } from '../layouts/mobile-container/mobile-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { TimelinesComponent } from './components/timelines/timelines.component';
import { FillHeightDirective } from './directives/fill-height/fill-height.directive';
import { CheckboxComponent } from './widgets/checkbox/checkbox.component';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SpeedDialComponent } from './widgets/speed-dial/speed-dial.component';
import { PullHookComponent } from './widgets/pull-hook/pull-hook.component';
import { PopoverComponent } from './widgets/popover/popover.component';
import { FabComponent } from './widgets/fab/fab.component';
import { RadioButtonComponent } from './widgets/radio-button/radio-button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from './widgets/input/input.component';
import { SwitchComponent } from './widgets/switch/switch.component';
import { ListItemComponent } from './widgets/list-item/list-item.component';
import { IconComponent } from './widgets/icon/icon.component';
import { CardComponent } from './widgets/card/card.component';
import { ProgressBarComponent } from './widgets/progress-bar/progress-bar.component';
import { RippleComponent } from './widgets/ripple/ripple.component';
import { AlertDialogComponent } from './widgets/alert-dialog/alert-dialog.component';
import { ChartComponent } from './widgets/chart/chart.component';

@NgModule({
  declarations: [
    // Components
    MobileContainerComponent,
    CarouselComponent,
    CreditCardComponent,
    TimelinesComponent,
    ChartComponent,

    // Directives
    FillHeightDirective,

    // Widgets
    CheckboxComponent,
    SpeedDialComponent,
    PullHookComponent,
    PopoverComponent,
    FabComponent,
    RadioButtonComponent,
    InputComponent,
    SwitchComponent,
    ListItemComponent,
    IconComponent,
    CardComponent,
    ProgressBarComponent,
    RippleComponent,
    AlertDialogComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NguCarouselModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    DragScrollModule,
    OnsenModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // Components
    MobileContainerComponent,
    CarouselComponent,
    CreditCardComponent,
    TimelinesComponent,
    ChartComponent,

    // Directives
    FillHeightDirective,

    // Modules
    FlexLayoutModule,
    NguCarouselModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    DragScrollModule,
    OnsenModule,
    CheckboxComponent,
    SpeedDialComponent,
    FormsModule,
    ReactiveFormsModule,

    // Widgets
    PullHookComponent,
    PopoverComponent,
    FabComponent,
    RadioButtonComponent,
    InputComponent,
    SwitchComponent,
    ListItemComponent,
    IconComponent,
    CardComponent,
    ProgressBarComponent,
    RippleComponent,
    AlertDialogComponent
  ],
  entryComponents: [
    CarouselComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class SharedModule { }
