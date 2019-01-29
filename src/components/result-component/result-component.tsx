import {Component, Prop} from '@stencil/core';

@Component({tag: 'result-component', styleUrl: 'result-component.scss', shadow: true})

export class SearchComponent {
  @Prop()result;

  render() {
    return (
      <a class="result relative" href={this.result.url}>
        <img class="result-img" src={this.result.image}></img>
        <div class="result-text">
          {this.result.title}
        </div>
        <div class="result-meta">
          <span class="result-date">{this.result.date}</span>
        </div>
      </a>
    );
  }
}
