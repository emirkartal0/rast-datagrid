import { Injectable } from '@angular/core';
import { AccountData } from '../models/account-data.interface';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    private storageKey: string = 'socialDatas';

    constructor() { }

    getSocialDatas() {
        return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    }

    setSocialDatas(accountData: AccountData) {
        localStorage.setItem(this.storageKey, JSON.stringify(this.getSocialDatas().concat(accountData)));
    }

}
