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
    // const addTriangle = (sides) => {
    //     var a = Number(sides.A)
    // }
    console.log(type)
    return (
        <div className='t-field'>
            {/* neizdodas displayot trijsturi ja neieliek kko starpaa, varbut vajag izveidot atsevisku componentu trijsturi*/
            whichTriangle(type)}
           {/* <IsosTriangle /> */}
            <h3 class="message">{message}</h3>
        </div>
    )
}

export default Field
