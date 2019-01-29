import {Component, Prop, State} from '@stencil/core';
import {Search} from '../../global/algolia-service';

@Component({tag: 'search-component', styleUrl: 'search-component.scss', shadow: true})

export class SearchComponent {
  @Prop()placeholder : string;
  @State()value : string;
  @State()results : any;

  componentWillLoad() {
    this.value = '';
    this.clearResults();
  }

  handleChange(ev) {
    this.value = ev.target.value;
    if (this.value !== '') {
      Search(this.value).then((hits) => {
        this.results = hits;
        console.log(this.results);
      });
    } else {
      this.clearResults();
    }
  }

  clearResults() {
    this.results = [];
  }

  render() {
    return (
      <div class="search">
        <input
          type="search"
          placeholder={this.placeholder}
          value={this.value}
          onInput={ev => this.handleChange(ev)}></input>

        <div class="hits">
          {this.results.length === 0 && this.value !== ''
            ? <p>No results found</p>
            : this.results.map((result) => {
              return(<result-component result={result}></result-component>);
            })
          }
        </div>
      </div>
    );
  }
}
