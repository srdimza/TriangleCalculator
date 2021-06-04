import Field from './Field'
import Form from './Form'

const addTriangle = (sides) => {
    console.log(sides)
}

const Header = () => {
    return (
        <div className='login'>
            <Field />
            <Form onAdd = {addTriangle}/>
        </div>
    )
}


export default Header
