import './button.css';

export default function Button({ func, text, classStyle }) {
  return (
    <button 
      type='button' 
      onClick={func}
      className={classStyle}
    >
      <strong>
        {text}
      </strong>
    </button>
  )
}