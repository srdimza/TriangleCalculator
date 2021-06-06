
import EqTriangle from './EqTriangle'
import ScalTriangle from './ScalTriangle'
import IsosTriangle from './IsosTriangle'
function Field({type, message}) {
    const whichTriangle = (type) => {
        if(type == 'equilateral'){
            return <EqTriangle />
        }else if(type == 'scalene'){
            return <ScalTriangle />
        } else if(type == 'isosceles'){
            return <IsosTriangle />
        }
        return
    }
    return (
        <div className='t-field'>
            {whichTriangle(type)}
            <h3 class="message">{message}</h3>
        </div>
    )
}

export default Field
