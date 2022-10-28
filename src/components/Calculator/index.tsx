import React, {useState} from "react";

export const Calculator = () => {
  const [fieldValue, setFieldValue] = useState('');

  const clickHandler = (event: React.MouseEvent<HTMLElement>): void => {
    console.log(event)
    setFieldValue(prev => prev + event.currentTarget)
  }

  return (
      <div>
        <input type="text" value={fieldValue}/>
        <div>
          <button>+</button>
          <button>-</button>
          <button>/</button>
          <button>*</button>
          <button>=</button>
        </div>
        <div>
          <button onClick={clickHandler}>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
        </div>
      </div>
  )
}