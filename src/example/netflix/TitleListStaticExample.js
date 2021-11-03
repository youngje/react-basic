// import Item from './Item'
import data from './data'

export default function TitleList({ title, url }) {
  if (!data) return null

  return (
    <div className="TitleList" data-loaded>
      <div className="Title">
        <h1>{title}</h1>
        <div className="titles-wrapper">
          {/* TODO render data with Item */}
        </div>
      </div>
    </div>
  );
}
