import React,{forwardRef,useEffect,useRef} from 'react'
export default forwardRef( ({type='text',icon='user', placeholder='', origin, destination, date, positions, hour, id_agency, premium_cost, id, value, className, required, isFocused=false, handleChange},ref)=> {
    const inputRef =ref || useRef()
    useEffect(() =>{
        if(isFocused){
            inputRef.current.focus()
        }

    }, [])
  return (
    <div className='input-group mb-3'>
        <span className='input-group-text'>
            <i className={'fa-solid ' + icon }></i>
        </span>
        <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        origin={origin} 
        destination={destination}
        date={date}
        positions={positions}
        hour={hour}
        id_agency={id_agency}
        premium_cost={premium_cost}
        id={id} 
        className={className} 
        ref={inputRef} 
        required={required} 
        onChange={(e) => handleChange(e)}
        />

    </div>
  )
})