function Field({type, message}) {
    // const addTriangle = (sides) => {
    //     var a = Number(sides.A)
    // }
    console.log(type)
    return (
        <div className='t-field'>
            <span className={type}></span>
            <h3>{message}</h3>
        </div>
    )
}

export default Field
