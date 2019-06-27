import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeLogger } from 'ngrx-store-logger';
import { FundamentalModule } from './fundamental';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/productDetails/productDetails.component';
import { ProductCreateComponent } from './components/productCreate/productCreate.component';
import { reducers, IState } from './states/index';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';

export function logger(reducer: ActionReducer<IState>): any {
   // default, no options
   return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
   declarations: [
      AppComponent,
      ProductsComponent,
      ProductDetailsComponent,
      ProductCreateComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FundamentalModule,
      FormsModule,
      HttpClientModule,
      StoreModule.forRoot(reducers, {metaReducers}),
      // Instrumentation must be imported after importing StoreModule (config is optional)
      StoreDevtoolsModule.instrument({
         maxAge: 25, // Retains last 25 states
         logOnly: environment.production, // Restrict extension to log-only mode
      }),
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
