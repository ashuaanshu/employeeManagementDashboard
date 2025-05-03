import React,{useState} from 'react'

const SignupLogin = ({handlogin}) => {

    const[email,setEmail]=useState("")
    const [password, setpassword]=useState("")
    const subHandler=(e)=>{
        e.preventDefault()
        handlogin(email,password)
        setEmail("")
        setpassword("")
    }

    return(
        <div className='flex items-center h-screen w-screen justify-center bg-[#1c1c1c]'>
            <div className='text-white  border-emerald-600 p-20 border-2'>
                <form className='flex flex-col items-center' onSubmit={subHandler}>
                    <h1 className=' font-bold text-2xl pb-8 text-emerald-600'>Log In</h1>
                    <input type='email'
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder='email'
                        className='text-white outline-none bg-transparent border-emerald-600 border-2 rounded-full py-3 px-5' />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        className='text-white border-2 outline-none border-emerald-600 rounded-full py-3 px-5 mt-3' />
                    <button className='bg-emerald-600 rounded-full border-none py-3 px-5 mt-5'>LogIn</button>
                </form>
            </div>
        </div>
    )
}

export default SignupLogin