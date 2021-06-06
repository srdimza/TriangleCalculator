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
    if(isNaN(Number(A)) || isNaN(Number(B)) || isNaN(Number(C))){
        alert('Sides have to be given as integers')
        return
    }
    //checks if values are integers
    if(!(Number(A) % 1 === 0) || !(Number(B) % 1 === 0) || !(Number(C) % 1 === 0)){
        alert('All sides have to be integers')
        return
    }
    if((Number(A) <= 0) || (Number(B) <= 0) || (Number(C) <= 0)){
        alert('All sides have to be positive integers')
        return
    }

    onAdd({A, B, C})
}
    return (
       <form className='triangle-form' onSubmit={onSubmit} >
           <div className ='form-control'>
           <label>A side</label>   
            <input type='text' id='A' value = {A} onChange ={(e) => setA(e.target.value)}/>
           </div>
           <div className ='form-control'>
           <label>B side</label>    
            <input type='text' id='B' value = {B} onChange ={(e) => setB(e.target.value)}/>
           </div>
           <div className ='form-control'>
            <label>C side</label>   
            <input type='text' id='C' value = {C} onChange ={(e) => setC(e.target.value)}/>
           </div>
             <input type='submit' value='Calculate'/>
        
       </form>      
    )
}
export default Form
