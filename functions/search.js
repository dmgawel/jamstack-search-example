import lunr from "lunr";
import indexJson from "../searchIndex.json";

const index = lunr.Index.load(indexJson);

export function handler(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(index.search(event.queryStringParameters.q))
  });
}