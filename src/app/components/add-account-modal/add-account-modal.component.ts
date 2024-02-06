import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { AccountData } from '../../models/account-data.interface';
import { NotificationService } from '../../services/notification.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'add-account-modal',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './add-account-modal.component.html',
    styleUrl: './add-account-modal.component.css'
})
export class AddAccountModalComponent {

    @Input() isOpen: boolean = false;
    @Output() modalChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() accountDatas: AccountData[] = [];

    constructor(
        private localStorageService: LocalStorageService,
        private notificationService: NotificationService,
    ) { }
    
    closeModal() {
        this.isOpen = false;
        this.modalChangeEvent.emit();
    }

    addAccountData(accountData: AccountData): void {
        this.localStorageService.setSocialDatas(accountData);
    }

    saveData(data: NgForm) {
        this.localStorageService.setSocialDatas(data.value);
        this.notificationService.showSuccess('Hesap başarıyla eklendi.');
        this.closeModal();
    }

}
