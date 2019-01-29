import algoliasearch from 'algoliasearch';
let client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY, {timeout: 4000});
let index = client.initIndex('int_crds');

export function Search(term : string) {
  return index
    .search({query: term})
    .then((content) => {
      return content.hits;
    })
    .catch((err) => {
      console.error(err);
    });
}
