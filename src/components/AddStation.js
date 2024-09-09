import React, { useState } from 'react'

function AddStation() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  
 

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/stations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, description, image, price })
  }).then(() => {
    setName('');
    setDescription('');
    setImage('');
    setPrice('')
  })
}
  return (
    
    <form onSubmit = {handleSubmit}> 
      <h2>Add Station</h2>
      <label>
        Station Name:
        <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Station Description:
        <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Station Image URL:
        <input type="text" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} />
      </label>
      <br />
      <label>
        Station Price:
        <input type="text" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <button>SUBMIT</button>
    </form>
    
  )
}

export default AddStation;
