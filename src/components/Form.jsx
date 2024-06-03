import { useRef, useState } from 'react'
import { useContext } from 'react';
import { ContextApi } from '../context/ContextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagic } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

const Form = () => {
  const { setPrompt, setHeight, setWidth, size, styles, setStyle, setSubmit, aspectRatio, setAspectRatio, setLoading } = useContext(ContextApi)

  const activeBorderRef = useRef(null);
  const [active_index, setActive_index] = useState(0)

  const styleController = (index) => {
    // console.log('Targeted index: ', styles[index].style_preset);
    if (activeBorderRef.current) {
      activeBorderRef.current.classList.remove('active'); // Remove 'active' class from previous
    }

    let active_border = document.querySelectorAll('.img-container')[index]
    active_border.classList.add('.active')
    setActive_index(index)
    setStyle(styles[index].style_preset)
  }

  const AspectRatioChange = (e) => {
    // let value_picker = e.target.value
    // const labelDOM = document.querySelector("#aspect-label")
    // labelDOM.textContent = size[value_picker].title
    setAspectRatio(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
    setLoading(true)
    setHeight(size[aspectRatio].height)
    setWidth(size[aspectRatio].width)
    // Logs for using in test when submit the form !
    /* console.log(prompt);
    console.log(height);
    console.log(width);
    console.log(style); */
  }
  return (
    <div className='form-controller'>
      <form onSubmit={handleSubmit}>
        <div className='input-div'>
          <label htmlFor="input">Enter Your Prompt</label>
          <textarea name="input" id="input" onChange={(e) => setPrompt(e.target.value)} placeholder='Write your dream image...' rows="4" cols="50"></textarea>
          {/* <input type="text" id="input" name="input" placeholder='Write your dream image' onChange={(e) => setPrompt(e.target.value)} /> */}
        </div>
        <div className='style-div'>
          <label>Select Style</label>
          <div className='d-flex w-75 overflow-x-scroll'>
            {styles.map((item, i) => (
              <div key={i} className='mx-1 styles-div'>
                <div className={`img-container ${i === active_index ? 'active' : ''}`} onClick={() => styleController(i)} ref={i === 0 ? activeBorderRef : null}>
                  <img src={item.img} alt={`styles_${i}`} />
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-ratio">
          <label>Select Ratio</label>
          <p id='aspect-label'>{size[aspectRatio].title}</p>
          <input type="range" name="aspect-ration" id="aspect" value={aspectRatio} min={0} max={8} onChange={AspectRatioChange} />
        </div>
        <button type="submit">Generate <FontAwesomeIcon icon={faWandMagic} /></button>
      </form>
    </div>
  )
}

export default Form