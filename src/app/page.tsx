import Image from "next/image";


export default function Home(){
  return (
    <>
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-3xl w-1/3 mx-14">


       <img

        src={"/facebook/picture.svg"} 
        width={300}
        height={300}
        alt="Facebook Logo"
         />

        <p className="text-3xl -mx-6">
          Facebook helps your connect share with the people in your life.
          </p>
      </div>

      <div className="bg-white flex flex-col p-25 rounded-xl">

        <input
         className="my-2 border-1 border-gray-200 p-3 rounded-md"
         type="text" placeholder="Email address or phone number"/>


        <input
         className="my-2 border border-1 border-gray-200 p-3 rounded-md" 
         type="password" placeholder="Password"/>

        <button className="bg-blue-600 hover:bg-blue-700 my-2 py-3 text-lg font-bold text-white
        rounded-md ">
          Log in</button>

           
        <span  className="text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline">
          Forgotten Password
          
        </span>

        <hr className="my-2"/>
        <button className="bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 mx-auto
        rounded-md font-bold w-fit">
          Create New Account</button>
          <span className="absolute bottom-2 text-sm>"><span className="font-bold hover:underline
          cursor-pointer">Create a page</span> 
          for a celebrity, brand or business.</span>
      </div>

    </div>
    </>
  )
}
