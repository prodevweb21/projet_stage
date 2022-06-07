"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_clipboard_1 = require("ngx-clipboard");
var ng2_charts_1 = require("ng2-charts");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var material_moment_adapter_1 = require("@angular/material-moment-adapter");
var storage_service_service_1 = require("./services/storage-service.service");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var calculatrice_component_1 = require("./components/calculatrice/calculatrice.component");
var calendrier_component_1 = require("./components/calendrier/calendrier.component");
var expense_component_component_1 = require("./expense-component/expense-component.component");
var income_component_component_1 = require("./income-component/income-component.component");
var charts_component_1 = require("./components/charts/charts.component");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var authentification_component_1 = require("./views/authentification/authentification.component");
var deconnexion_component_1 = require("./views/deconnexion/deconnexion.component");
var tableau_de_bord_component_1 = require("./views/tableau-de-bord/tableau-de-bord.component");
var sommaire_component_1 = require("./views/sommaire/sommaire.component");
var sommaire_depenses_component_1 = require("./views/sommaire-depenses/sommaire-depenses.component");
var sommaire_revenus_component_1 = require("./views/sommaire-revenus/sommaire-revenus.component");
var ajout_depense_component_1 = require("./views/ajout-depense/ajout-depense.component");
var ajout_revenu_component_1 = require("./views/ajout-revenu/ajout-revenu.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var calendrier_sommaire_component_1 = require("./components/calendrier-sommaire/calendrier-sommaire.component");
var balance_component_1 = require("./components/balance/balance.component");
var sort_by_dates_pipe_1 = require("./filters/sort-by-dates.pipe");
var match_media_query_component_1 = require("./components/match-media-query/match-media-query.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                calculatrice_component_1.CalculatriceComponent,
                calendrier_component_1.CalendrierComponent,
                expense_component_component_1.ExpenseComponentComponent,
                income_component_component_1.IncomeComponentComponent,
                charts_component_1.ChartsComponent,
                authentification_component_1.AuthentificationComponent,
                deconnexion_component_1.DeconnexionComponent,
                tableau_de_bord_component_1.TableauDeBordComponent,
                sommaire_component_1.SommaireComponent,
                sommaire_depenses_component_1.SommaireDepensesComponent,
                sommaire_revenus_component_1.SommaireRevenusComponent,
                ajout_depense_component_1.AjoutDepenseComponent,
                ajout_revenu_component_1.AjoutRevenuComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                calendrier_sommaire_component_1.CalendrierSommaireComponent,
                balance_component_1.BalanceComponent,
                sort_by_dates_pipe_1.SortByDatesPipe,
                match_media_query_component_1.MatchMediaQueryComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                forms_2.ReactiveFormsModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                ngx_clipboard_1.ClipboardModule,
                ng2_charts_1.NgChartsModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                core_2.MatRippleModule,
            ],
            providers: [storage_service_service_1.StorageServiceService,
                { provide: core_2.MAT_DATE_LOCALE, useValue: "fr-FR" },
                {
                    provide: core_2.DateAdapter,
                    useClass: material_moment_adapter_1.MomentDateAdapter,
                    deps: [core_2.MAT_DATE_LOCALE, material_moment_adapter_1.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: core_2.MAT_DATE_FORMATS, useValue: material_moment_adapter_1.MAT_MOMENT_DATE_FORMATS }
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
