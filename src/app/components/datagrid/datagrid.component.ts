import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccountData } from '../../models/account-data.interface';
import { NotificationService } from '../../services/notification.service';
import { AddAccountModalComponent } from '../add-account-modal/add-account-modal.component';
import { LocalStorageService } from '../../services/local-storage.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'datagrid',
    standalone: true,
    imports: [CommonModule, AddAccountModalComponent, FormsModule],
    templateUrl: './datagrid.component.html',
    styleUrl: './datagrid.component.css'
})
export class DatagridComponent {

    rowNumber: number = 4;
    openModal: boolean = false;
    currentPage: number = 1;

    get accountDatas(): AccountData[] {
        return this.localStorageService.getSocialDatas();
    }

    get paginatedDatas(): AccountData[] {
        return this.accountDatas.slice((this.currentPage - 1) * this.rowNumber, this.currentPage * this.rowNumber);
    }

    get totalPages(): number {
        return Math.ceil(this.accountDatas.length / this.rowNumber);
    }

    constructor(
        private notificationService: NotificationService,
        private localStorageService: LocalStorageService,
    ) { }

    changeRowNumber(number: number) {
        if (this.rowNumber + number < 1) {
            this.notificationService.showError('Satır sayısı 1\'den küçük olamaz.');
            return;
        }
        this.rowNumber += number;
    }

    changePageNumber(number: number) {
        if (this.currentPage + number > 5 || this.currentPage + number < 1) return;
        this.currentPage += number;
    }

}
