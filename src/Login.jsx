import "./Login.css"
import React from 'react'
const Login = () => {
  return (
    <>
    <div id="Login"><center>
        <form >
              FIRSTNAME<input className='form-input input-1' type="text" required placeholder="Enter Your FirstName"  />
                <br />
                LASTNAME<input className='form-input input-2' type="text" required placeholder="Enter Your LastName"/><br />
                EMAIL<input className='form-input input-3' type="email" required  placeholder="Enter the Name!"/><br />
               Mob.No.<input className='form-input input-4' type="number" required placeholder="Enter the Mob.No!"  /><br />
                {/* <button type='submit' className='btn form-input'> SUBMIT</button> */}
            </form>
        
        </center></div>
        </>
  )
}

export default Login