function UserRegistration() {

  function handleFormSubmit() {
    alert('User registered successfully')
  }

  return (
    <div className="flex w-full h-full">
        <div className="w-1/2 flex justify-center align-center">
            <img src='/images/signup.svg' className="w-2/3"/>
        </div>
        <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl
            relative z-10 w-1/2">
            <form className="w-full" onSubmit={() => handleFormSubmit()}>
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif text-[#264653]">Register User</p>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                    <div className="relative">
                        <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                            absolute">Username</p>
                        <input placeholder="Snehasish" type="text" className="border placeholder-gray-400 focus:outline-none
                            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                            border-gray-300 rounded-md" required></input>
                    </div>
                    <div className="relative">
                        <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                        <input placeholder="123@snehasish.com" type="text" className="border placeholder-gray-400 focus:outline-none
                            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                            border-gray-300 rounded-md" required></input>
                    </div>
                    <div className="relative">
                        <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                            absolute">Password</p>
                        <input placeholder="Password" type="password" className="border placeholder-gray-400 focus:outline-none
                            focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                            border-gray-300 rounded-md" required></input>
                    </div>
                    <div className="relative">
                        <button type="submit" className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-[#264653]
                            rounded-lg transition duration-200 hover:bg-[#264653]-600 ease">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UserRegistration