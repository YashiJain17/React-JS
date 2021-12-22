import { React,useState,useEffect } from "react";


function useLocalStorageState(keyvalue, defaultValue = ''){
    const [customstate,setCustomstate]=useState(()=>{
        console.log('hey');
      return window.localStorage.getItem(keyvalue) || defaultValue;
    });

    console.log('rendered useState')
    
    
    useEffect(() => {
        console.log("render usEffect")
        window.localStorage.setItem(keyvalue, customstate);
    }, [keyvalue, customstate]);
    return [customstate,setCustomstate]

}

    const Usestateh = () => {
        const [name,setName] = useLocalStorageState('name')
        const handleChange =(event) =>  {
            setName(event.target.value)
        }

    return (
        
        <>
       <h1>this is function Component </h1>
            <form>
            <br/> <br/>
                <label>Name : </label>

                <input type="text" id="name" placeholder="enter your name" onChange={handleChange}/> <br/> <br/> <br/>
                <label>Your value : </label>
                <input type="text" value={name}/>
            </form>

            {/* <p>{name}</p> */}
        
        </>
    )
}

export default Usestateh
