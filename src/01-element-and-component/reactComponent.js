/* eslint react/destructuring-assignment: off */

// TODO destructuring
function Button(props) {
  return (
    <button className={`button button-${props.color}`}>
      <b>
        {props.children}
      </b>
    </button>
  )
}

export default () => <Button color="blue">OK!</Button>
