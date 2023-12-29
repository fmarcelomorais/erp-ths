import React from 'react'

const Textarea = ({label, children, set}) => {
  return (
    <div className='TextArea'>
      <label htmlFor="">{label}</label>
      <textarea rows={5} 
        style={{width: '100%', color: '#2D2D43', padding:'10px', borderRadius: '5px'}} 
        value={children} 
        onChange={({target}) => set(target.value)}>
          {/* {children} */}
      </textarea>
    </div>
  )
}

export default Textarea
