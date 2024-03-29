import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipstercosmosSharedModule } from 'app/shared';
import {
  LabelComponent,
  LabelDetailComponent,
  LabelUpdateComponent,
  LabelDeletePopupComponent,
  LabelDeleteDialogComponent,
  labelRoute,
  labelPopupRoute
} from './';

const ENTITY_STATES = [...labelRoute, ...labelPopupRoute];

@NgModule({
  imports: [JhipstercosmosSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [LabelComponent, LabelDetailComponent, LabelUpdateComponent, LabelDeleteDialogComponent, LabelDeletePopupComponent],
  entryComponents: [LabelComponent, LabelUpdateComponent, LabelDeleteDialogComponent, LabelDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipstercosmosLabelModule {}
