import {Component, Prop} from '@stencil/core';

@Component({tag: 'result-component', styleUrl: 'result-component.scss', shadow: true})

export class SearchComponent {
  @Prop()name : string;
  @Prop()url : string;

  render() {
    return (
      <div class="result">
        <a href="{this.url}">
          {this.name}
        </a>
      </div>
    );
  }
}
