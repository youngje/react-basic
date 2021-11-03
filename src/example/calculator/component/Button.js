import './Button.css';

export default function Button({ name }) {
  // [TO-DO] click handler 추가
  const handleClick = (e) => {

  }

  // [TO-DO] orange, wide className 추가하기
  // 주황색: 'orange' 추가
  // 넓은 버튼: 'wide' 추가

  return (
    <div className="component-button">
      <button>
        {name}
      </button>
    </div>
  );
}
