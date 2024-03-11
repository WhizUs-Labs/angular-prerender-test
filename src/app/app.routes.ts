import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { TestComponent } from './views/test/test.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'test',
    component: TestComponent,
    title: 'Test',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 - Not Found',
  },
];
