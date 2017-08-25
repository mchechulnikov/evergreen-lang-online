import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  public readonly defaultCode: string = `
foo <- 3 + 4 + (7 - 2)
bar <- foo + 42
print bar
  `;
}
