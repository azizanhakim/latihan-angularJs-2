import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Teman } from '../teman.model';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { TemansService } from '../temans.service';

@Component({
  selector: 'app-teman-add',
  templateUrl: './teman-add.component.html',
  styleUrls: ['./teman-add.component.css'],
  providers: [TemansService]
})
export class TemanAddComponent implements OnInit {
  @ViewChild('inputIsbn') inputIsbn: ElementRef;
  @ViewChild('inputQty') inputQty: ElementRef;

  @Output() bukuAdded = new EventEmitter<Teman>();

  @Input() temanChild: Teman;
  @Input() temanEditParent: Teman;


  bukuForm: FormGroup;
  // inputInfo didapat ng model di teman-add.componen.html dan Teman itu di dapat dari teman.model.ts 
  inputInfo: Teman = new Teman();
  constructor(private temans: TemansService) { }
  ngOnInit() {
    this.bukuForm = new FormGroup({
      kodeisbn: new FormControl(null,
      [Validators.required, this.cekIsEmpty]),
      judulbuku: new FormControl(null,
      [Validators.required]),
      jumlahbuku: new FormControl(null, [])
    });
  }

  kirim(){
    const temanModel = new Teman;

    temanModel.isbn = this.bukuForm.get('kodeisbn').value;
    temanModel.nama = this.bukuForm.get('judulbuku').value;
    temanModel.qty = this.bukuForm.get('jumlahbuku').value;
    
    // console.log('isi dari kode isbn' + this.bukuForm.get('kodeisbn').value)
    
    this.bukuAdded.emit(temanModel);

  }

  // // tambahTeman() di dapat dari teman-add.component.html
  // tambahTeman(inputNama: HTMLInputElement) {
  //   // console.log(this.inputInfo);
  //   // // ini tanpa @ViewChild
  //   // console.log(this.inputNama.nativeElement.value);
  //   // console.log(inputEmail.value);
  //   // console.log(this.inputContact.nativeElement.value);

  //   //ini convert nama teman didapat dari temans service
  //   this.temanAdded.emit(this.temans.convertIsbnTeman(this.inputInfo));
  //   //instansisasi ulang, supaya tidak bisa edit di form
  //   this.inputInfo = new Teman();

  // }
  cekIsEmpty(control: FormControl): {[s: string]: boolean} {
    // console.log('sebelum ' + control.value);
    if (control.value && control.value.trim().length === null){
      // console.log('sesudah ' + control.value);
      return { 'kosong': true };
    }
    return null;
  }

}
