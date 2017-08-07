import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BaseContainerComponent} from "./components/base-container.component";

const appRoutes: Routes = [
    {
        path: 'base',
        component: BaseContainerComponent,
    },
];


export const AppRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);
