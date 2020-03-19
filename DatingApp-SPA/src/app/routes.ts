import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberListComponent } from './members/member-list/member-list.component';



export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'friends', component: FriendsListComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'member-list', component: MemberListComponent}
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  // Below is another way to delaring route guards: 
  //{ path: 'friends', component: FriendsListComponent },
  //{ path: 'messages', component: MessagesComponent },
  //{ path: 'lists', component: ListsComponent, canActivate: [AuthGuard] },
  //{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];
