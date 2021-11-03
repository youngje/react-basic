/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { apiKey } from './config'
import useFetch from '../../06-hooks/fetch/useFetch'
import Item from './Item'

export default function TitleList({ title, url }) {
  const apiUrl = url && `https://api.themoviedb.org/3/${url}&api_key=${apiKey}`;
  const { data } = useFetch(apiUrl);

  if (!(data && data.results)) return null;

  const titles = data.results.slice(0, 3);

  return (
    <div className="TitleList" data-loaded>
      <div className="Title">
        <h1>{title}</h1>
        <div className="titles-wrapper">
          {titles.map(item => <Item key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}
