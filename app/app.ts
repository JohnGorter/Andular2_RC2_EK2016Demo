import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms'
import { EkApplication, EKAppRoutes } from './components/team.components'
import { TeamService } from './services/team.service'
import { provide } from '@angular/core'
import { provideRouter } from '@angular/router'
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common'
import { parent } from './components/form.components'


bootstrap(EkApplication, 
    [TeamService, 
    disableDeprecatedForms(), 
    provideRouter(EKAppRoutes),
    provideForms(),// ROUTER_PROVIDERS,
  //  provide(LocationStrategy, {useClass:HashLocationStrategy}),
    HTTP_PROVIDERS])
