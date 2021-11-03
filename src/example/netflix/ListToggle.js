import { useState } from 'react'

export default function ListToggle() {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(prev => !prev)
  }

  return (
    <div
      onClick={handleClick}
      data-toggled={selected}
      className="ListToggle"
    >
      <div>
        <i className="fa fa-fw fa-plus" />
        <i className="fa fa-fw fa-check" />
      </div>
    </div>
  );
}
