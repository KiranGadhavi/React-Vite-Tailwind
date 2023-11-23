import React from 'react'
import { useState ,useCallback,useEffect,useRef} from 'react'
export default function Pwd()
 {

  const [length, setLength] = useState(8)
  const [numallowed, setNumallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
 
  const [pwd, setPwd] = useState("")
 
  //use Ref hook
  const pwdRef=useRef(null)
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numallowed) str += '0123456789'
    if(charallowed) str += "!@%*~#-_+=[]{}¬`^&"
   
    for(let i=1; i<=length; i++){
      let char =Math.floor(Math.random() *str.length + 1)
   
   pass += str.charAt(char)
 
  }
  setPwd(pass)
  }, [length,numallowed,charallowed,setPwd] )
const copyPwdToClipboard = useCallback(()=>{
    pwdRef.current?.select();
    pwdRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(pwd)
},[pwd])
useEffect(()=>{
    passwordGenerator()
},[length, numallowed, charallowed, passwordGenerator])
  return (

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 my-4 text-orange-500 bg-gray-700'>
   <h1 className='text-white text-center m-4'>Password generator</h1>
   
    <div className='flex  shadow  pb-2'>
    <input  
    type='text'
     value={ pwd }
      className='outline-none w-full py-1 px-3 mb-2 '
       placeholder='password'
       readonly
       ref={pwdRef}
       ></input>
    <button className='bg-blue-950 w-20 h-8' onClick={copyPwdToClipboard}>COPY</button>
    </div>
   
    <div className='flex text-sm gap-x-2 pb-4'>
   <div className='flex items-centre gap-x-1'>
    <input type='range' min={6} max={100} value={length}
    className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}>
    </input>
    <label>Length:{length}</label>
    </div>

    <div className='flex items-centre gap-x-1'>
    <input type='checkbox' defaultChecked={numallowed} id='numberInput'
    className='cursor-pointer' onChange={()=>{setNumallowed((prev)=>!prev);}}>
    </input>
    <label htmlFor='numberInput'>Number</label>
    </div>

    <div className='flex items-centre gap-x-1'>
    <input type='checkbox' defaultChecked={charallowed} id='characterInput'
    className='cursor-pointer' onChange={()=>{setCharallowed((prev)=>!prev);}}>
    </input>
    <label htmlFor='characterInput'>Characters</label>
    </div>
   </div>
    </div>
  )}
