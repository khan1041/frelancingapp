



import React, { useState } from 'react'

function Conteact() {



    const [user,setuser]=useState({
        name:"",
        email:"",
        meassage:"",
   
      
        })
        
        const handelinput=(e)=>{
        
        console.log(e)
        let name=e.target.name;
        let value=e.target.value
        
        setuser({
        ...user,
        [name]:value
        
        
        })
        
        }
        const handelsumit=async(e)=>{
        
            e.preventDefault()
            console.log(user)
            try {
              const rsponse=await fetch('',{

                method:"POST",
                
                headers:{
                 'Content-Type':"application/json",
               },
               body:JSON.stringify(user)
         
                })

           if(rsponse.ok){
            alert("Meassage sucsess")
           }
          else{
            alert("envalid")
          }
         
            } catch (error) {
              console.log(error)
             } }
    


  return (
    <div>

<div className=' md:h-[1700px] h-[700px] sm:h-[2000px] bg-black pt-28'>
   
   <div className='w-[100%] '>

 <img src="/img/img3.png" alt="" className='w-[20%] ml-[40%]  '/>


   </div>

  
 <form onSubmit={handelsumit} className=' lg:w-100% text-center'>
  <label htmlFor=" " className='text-white'>Name</label>
  <br></br>
<input type="text" name='name' value={user.name} onChange={handelinput} placeholder='username' id='username' required autoComplete='off'  className='border border-yellow-200 sm:w-80 w-36'  />
<br />
<label htmlFor="" className='text-white'>email</label>
<br />
<input type="text" name='email' value={user.email}  onChange={handelinput}  placeholder='email' id='email' required autoComplete='off' className='border border-yellow-200 sm:w-80 w-36' />
<br />
 <label htmlFor="" className='text-white'>meassage</label>
 <br />
<textarea name="meassage" id="meassage " value={user.meassage} onChange={handelinput} className='border border-yellow-200 sm:w-80 w-36' ></textarea>

  <br></br>

<button className='bg-green-600 text-yellow-200 rounded'>submit</button>


 </form>

</div>



    </div>
  )
}

export default Conteact
























