import {useState} from 'react'

function Form({onAdd}) {
const [A, setA] = useState('')
const [B, setB] = useState('')
const [C, setC] = useState('')

const onSubmit = (e) => {
    e.preventDefault()
//checks if there is a value in all three fields
    if(!A) {
        alert('Please add A side')
        return
    }
    if(!B) {
        alert('Please add B side')
        return
    }
    if(!C) {
        alert('Please add C side')
        return
    }
    //checks if values are integers
    if(!(Number(A) % 1 === 0) || !(Number(B) % 1 === 0) || !(Number(C) % 1 === 0)){
        alert('All sides have to be integers')
        return
    }
    onAdd({A, B, C})

    // setA = ('')
    // setB = ('')
    // setC = ('')
}
    return (
       <form className='triangle-form' onSubmit={onSubmit} >
           <div className ='form-control'>
           <label>A side</label>   
            <input type='text' value = {A} onChange ={(e) => setA(e.target.value)}/>
           </div>
           <div className ='form-control'>
           <label>B side</label>    
            <input type='text' value = {B} onChange ={(e) => setB(e.target.value)}/>
           </div>
           <div className ='form-control'>
            <label>C side</label>   
            <input type='text' value = {C} onChange ={(e) => setC(e.target.value)}/>
           </div>
             <input type='submit' value='Calculate'/>
          
       </form>
            
    )
}

export default Form
