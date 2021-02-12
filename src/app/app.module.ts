import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonTapTestComponent } from './components/button-tap-test/button-tap-test.component';
import { EventEmitterTestSameNameComponent } from './components/event-emitter-test-same-name/event-emitter-test-same-name.component';
import { EventEmitterTestComponent } from './components/event-emitter-test/event-emitter-test.component';
import { TappableLabelInvestigationComponent } from './components/tappable-label-investigation/tappable-label-investigation.component';
import { TappableLabelWorkaroundComponent } from './components/tappable-label-workaround/tappable-label-workaround.component';
import { TappableLabelComponent } from './components/tappable-label/tappable-label.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DemoComponent,
        TappableLabelComponent,
        TappableLabelInvestigationComponent,
        TappableLabelWorkaroundComponent,
        EventEmitterTestComponent,
        ButtonTapTestComponent,
        EventEmitterTestSameNameComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
