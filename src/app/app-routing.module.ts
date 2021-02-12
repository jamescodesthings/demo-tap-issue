import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { Demo2Component } from './demo-2/demo-2.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
    { path: "", redirectTo: "/demo", pathMatch: "full" },
    { path: "demo", component: DemoComponent },
    { path: "demo-2", component: Demo2Component },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
