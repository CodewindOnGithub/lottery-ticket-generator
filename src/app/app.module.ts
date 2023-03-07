import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailsComponent } from "./features/lottery-ticket/feature-details/details.component";
import { OverviewComponent } from "./features/lottery-ticket/feature-overview/overview.component";
import { TicketComponent } from "./features/lottery-ticket/ui/components/ticket.component";
import { TicketLabelPipe } from './features/lottery-ticket/ui/pipes/ticket-label.pipe';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailsComponent,
    TicketComponent,
    TicketLabelPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
