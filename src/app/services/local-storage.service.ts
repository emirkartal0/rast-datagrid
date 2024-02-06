import { Injectable } from '@angular/core';
import { SocialDatas } from '../models/social-datas.interface';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    private storageKey: string = 'socialDatas';

    constructor() { }

    getSocialDatas() {
        return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    }

    setSocialDatas(socialDatas: SocialDatas) {
        localStorage.setItem(this.storageKey, this.getSocialDatas().concat(socialDatas));
    }

}
