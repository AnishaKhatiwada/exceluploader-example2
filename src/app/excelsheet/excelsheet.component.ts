import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-excelsheet',
  templateUrl: './excelsheet.component.html',
  styleUrls: ['./excelsheet.component.css']
})
export class ExcelsheetComponent implements OnInit {
  datas: [][] = [];
  fileUploadUrl = 'http://localhost:8080/productManager/upload';
  // constructor() { }
  // fileName = '';

  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
  }

  file: any;
  selectFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }
  uploadFile() {
    let formData = new FormData();
    formData.append("file", this.file);

    const upload$ = this._http.post(this.fileUploadUrl, formData);
    upload$.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

  }
}



  // onFileChange(evt: any) {
  //   const target: DataTransfer = <DataTransfer>(evt.target);
  //   if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  //   const reader: FileReader = new FileReader();
  //   reader.onload = (e: any) => {
  //     const bstr: string = e.target.result;
  //     const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
  //     // to read sheets and sheets are read by SheetNames
  //     const wsname: string = wb.SheetNames[0];
  //     //to get excel sheet we can use sheets property of wb
  //     const ws: XLSX.WorkSheet = wb.Sheets[wsname];
  //     console.log(ws);
  //     //to get properly formatted data
  //     this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
  //     console.log(this.data);
  //   };

  //   reader.readAsBinaryString(target.files[0]);
  // }

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.fileName = file.name;
  //     console.log(this.fileName)
  //     const formData = new FormData();
  //     formData.append("thumbnail", file);
  //     const upload$ = this.http.post("/productManager/upload", formData);
  //     upload$.subscribe();
  //   }
  // }
