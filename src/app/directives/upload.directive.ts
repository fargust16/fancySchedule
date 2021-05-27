import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appUpload]'
})
export class UploadDirective {

  @HostBinding('class.drag-n-drop--active') fileOver: boolean = false;
  @Output() onFileDropped = new EventEmitter<any>();

  @HostListener('dragover', ['$event']) onDragOver(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();

    this.fileOver = true;

    console.log('Drag over');
  }

  @HostListener('dragover', ['$event']) onDragLeave(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();

    this.fileOver = true;

    console.log('Drag leave');
  }

  @HostListener('drop', ['$event']) ondrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();

    console.log('Drag drop');

    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

  constructor() { }

}
