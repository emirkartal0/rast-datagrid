import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SocialDatas } from 'src/app/models/social-datas.interface';

@Component({
    selector: 'datagrid',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './datagrid.component.html',
    styleUrl: './datagrid.component.css'
})
export class DatagridComponent {

    rowNumber: number = 4;

    changeRowNumber(number: number) {
        if (this.rowNumber + number < 1) {
            //toast message
            return
        }
        this.rowNumber += number;
    }

    socialDatas: SocialDatas[] = [
        {url: 'https://www.facebook.com', name: 'Facebook', description: 'Facebook is a social networking site that makes it easy for you to connect and share with your family and friends online.'},
        {url: 'https://www.twitter.com', name: 'Twitter', description: 'Twitter is an online news and social networking site where people communicate in short messages called tweets.'},
        {url: 'https://www.linkedin.com', name: 'Linkedin', description: 'LinkedIn is a business-oriented social networking service.'},
        {url: 'https://www.instagram.com', name: 'Instagram', description: 'Instagram is a fun and quirky way to share your life with friends through a series of pictures.'},
    ];

}
