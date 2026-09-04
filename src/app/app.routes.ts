import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { ProductoFormComponent } from './components/producto-form/producto-form';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
    },
    {
        path: "inicio",
        component: Inicio
    },
    {
        path: "productos",
        component: ProductoFormComponent
    }
];
