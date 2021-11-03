import { apiKey } from './config'
import Item from './Item'

// [TODO] loadContent 한 결과물 render 하기

async function loadContent(url) {
  const apiUrl = `https://api.themoviedb.org/3/${url}&api_key=${apiKey}`;
  const response = await fetch(apiUrl);
  const json = await response.json();

  return json;
}

export default function TitleList({ title, url }) {
  return (
    <div className="TitleList" data-loaded>
      <div className="Title">
        <h1>{title}</h1>
        <div className="titles-wrapper">
          {/* loadContent()로 호출한 data render 하기 */}
        </div>
      </div>
    </div>
  );
}
