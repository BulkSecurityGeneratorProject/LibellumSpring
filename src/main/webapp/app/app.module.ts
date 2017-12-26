import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { LibellumSpringSharedModule, UserRouteAccessService } from './shared';
import { LibellumSpringAppRoutingModule} from './app-routing.module';
import { LibellumSpringHomeModule } from './home/home.module';
import { LibellumSpringAdminModule } from './admin/admin.module';
import { LibellumSpringAccountModule } from './account/account.module';
import { LibellumSpringEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LibellumSpringAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        LibellumSpringSharedModule,
        LibellumSpringHomeModule,
        LibellumSpringAdminModule,
        LibellumSpringAccountModule,
        LibellumSpringEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class LibellumSpringAppModule {}
