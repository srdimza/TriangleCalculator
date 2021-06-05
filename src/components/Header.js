import Field from './Field'
import Form from './Form'
import {useState} from 'react'


const Header = () => {
    
    var triangleType = ''
    var triangleMessage = ''
    const [type, setType] = useState(triangleType)
    const [message, setMessage] = useState(triangleMessage)
const addTriangle = (sides) => {
    var a = Number(sides.A)
    var b = Number(sides.B)
    var c = Number(sides.C)
    //checks if triangle is equilateral
    if(a === b && a === c && b === c){
        changeType('equilateral')
        return changeMessage("Triangle is equilateral")
    //checks if triangle is impossible
    }else if((a + b <= c) || (a + c <= b) || (b + c <= a) ){
        changeType('impossible')
        return changeMessage('It is not possible to calculate this kind of triangle')
    //checks if triangle is Isosceles 
    }else if((a === b && a !== c) || (b === c && b !== a) || (a === c && a !== b)) {
        changeType('isosceles')
        return changeMessage('Triangle is isosceles')
    //else it has to be Scalene triangle
    }else {
        changeType('scalene')
        return changeMessage('Triangle is scalene')
    }  
}
const changeType = (typeName) => {
     setType(typeName)
     return typeName
}
const changeMessage = (messageText)  => {
     setMessage(messageText)
     return messageText
}
    return (
        <div className='login'>
     
            <Field type={type} message={message}/>
            <Form onAdd = {addTriangle}/>
        </div>
    )
}


export default Header
