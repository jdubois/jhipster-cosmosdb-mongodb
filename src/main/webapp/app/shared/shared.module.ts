import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipstercosmosSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipstercosmosSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipstercosmosSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipstercosmosSharedModule {
  static forRoot() {
    return {
      ngModule: JhipstercosmosSharedModule
    };
  }
}
