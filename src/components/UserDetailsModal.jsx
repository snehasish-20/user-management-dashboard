function UserDetailsModal(props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-gray-100 rounded-lg p-6 w-96 max-w-full shadow-lg transform transition-all duration-300">
            <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                <h2 className="text-2xl font-semibold">User Details</h2>
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={()=> props.setModalData(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            
            <div className="mt-6 space-y-4">
                <div className="flex flex-col space-y-4 text-left">
                    <span>Username: {props.userDetails.userName}</span>
                    <span>Email: {props.userDetails.email}</span>
                    <span>Phone: {props.userDetails.phone}</span>
                    <span>User Id: {props.userDetails.id}</span>
                    <span>Creation Date: {props.userDetails.creationDate}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDetailsModal