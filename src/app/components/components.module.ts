import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PickupCallCardComponent],
  exports: [PickupCallCardComponent],  // Jangan lupa mengekspor komponen agar bisa digunakan di luar modul ini
  imports: [CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule {}
