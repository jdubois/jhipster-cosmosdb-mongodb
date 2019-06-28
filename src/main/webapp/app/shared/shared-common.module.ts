import { NgModule } from '@angular/core';

import { JhipstercosmosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipstercosmosSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipstercosmosSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipstercosmosSharedCommonModule {}
