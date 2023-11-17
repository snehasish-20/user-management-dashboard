function Tabs({openTab,setOpenTab}) {
  return (
    <div className="w-100">
        <div className="mb-4 flex space-x-4 p-2 dark:bg-[#264653] shadow-md">
            <button className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 text-white ${openTab === 1 ? 'active-tab' : null}`} onClick={()=> setOpenTab(1)}>Users</button>
            <button className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 text-white ${openTab === 2 ? 'active-tab' : null}`} onClick={()=> setOpenTab(2)}>Register</button>
        </div>
    </div>
  )
}

export default Tabs