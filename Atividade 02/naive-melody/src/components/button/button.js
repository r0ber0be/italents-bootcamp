export default function Button(props) {
  return (
    <div>
      <button 
        type='button' 
        onClick={props.func}>
        <strong>
          {props.text}
        </strong>
      </button>
    </div>
  )
}