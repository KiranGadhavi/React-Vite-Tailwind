import { useState} from 'react'
import Card  from './components/Card'
import Pwd from './components/Pwd'


function App() {
  const [color, setColor] = useState("olive")
  const [count, setCount] = useState(0)
  
  const addValue = () => {
    if(count<20){
  setCount(count +1)
 //setCount(count =>count+1) // we can use this func for using batches execution line by line
 //setCount(count =>count+1) //all 3 line will increase the value
 //setCount(prevcount =>prevcount+1) //doesn,t effect variable name all will work same
    } }
  const removeValue = () => {
    if(count>0){
      setCount(count -1)

    }}
let myObj={
  userName: 'try something',
  age:21
}
let newArr=[1,2,3]
  return (
    <>
    
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    
    <div className='pb-3'></div>
      <Pwd  /> 
      <div className='flex gap-20 '>
    <div className=' px-8 flex-col'>
    <Card userName='Kiran' btnText='Click me' />
    </div>
    <div className='flex-col'>
      <Card userName='Devraj' btnText='Vist Me' someArr={newArr}/>
    </div>
    <div className=' flex-col'>
    <Card userName='Kiran' btnText='Click me' />
    </div>
    <div className='flex-col'>
      <Card userName='Devraj' btnText='Vist Me' someArr={newArr}/>
    </div>
    
    </div>
    <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
      <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:'red'}} onClick={() => setColor('red')}>Red</button>
      <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:'green'}} onClick={() => setColor('green')}> Green</button>
      <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:'blue'}} onClick={() => setColor('blue')}>Blue</button>
      <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:'pink'}} onClick={() => setColor('pink')}>Pink</button>
      <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:'fuchsia'}} onClick={() => setColor('fuchsia')}>Fuchsia</button> 
      <button className='outline-none px-4 rounded-full text-white' style={{backgroundColor:'black'}} onClick={() => setColor('black')}>Black</button> 
      <button className='outline-double px-4 rounded-full text-black' style={{backgroundColor:'white'}} onClick={() => setColor('white')}>White</button> 
         </div>
    </div>

    <div className='flex mt-3 pb-5 pt-5 '>
      <div className='mx-auto'>
        <button className='px-2 py-2 rounded-md bg-cyan-500 outline-1' onClick={addValue}>
          count add {count} &larr;
        </button>
        </div>
        <div className='mx-auto'>
        <button className='px-2 py-2 rounded-md bg-cyan-500  outline-1 'onClick={removeValue}>
          count remove {count}   &larr;
        </button>
        </div>
      </div>
    </div> 

  
      
    
      
    </>
    
  )
}

export default App
