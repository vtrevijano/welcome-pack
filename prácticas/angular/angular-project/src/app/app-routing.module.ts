import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `list`,
    loadChildren: () =>
      import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: `list-detail/:id`,
    loadChildren: () =>
      import('./pages/list-detail/list-detail.module').then(
        m => m.ListDetailModule
      )
  },
  {
    path: `about`,
    loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: `form`,
    loadChildren: () =>
      import('./pages/form/form.module').then(m => m.FormModule)
  },
  {
    path: `my-posts`,
    loadChildren: () =>
      import('./pages/my-posts/my-posts.module').then(m => m.MyPostsModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
