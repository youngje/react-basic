const Anchor = ({ children }) => {
  const handleClick = (e) => {
    // console.log(e)
    // console.log(e.nativeEvent)
    // e.preventDefault();

    console.log('Clicked!!');
    return false;
  }

  return (
    <a href="https://www.naver.com" onClick={handleClick}>
      {children}
    </a>
  )
};

export default () => <Anchor>NAVER</Anchor>;
