import { NgModule } from '@angular/core';
import { ListModule, ButtonModule, PanelModule, FormModule, ImageModule  } from 'fundamental-ngx';

@NgModule({
  imports: [
    ListModule,
    ButtonModule,
    PanelModule,
    FormModule,
    ImageModule
  ],
  exports: [
    ListModule,
    ButtonModule,
    PanelModule,
    FormModule,
    ImageModule
  ],
})
export class FundamentalModule {}