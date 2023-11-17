import { useState, useRef } from 'react';
import dummyTableData from '../dummy-data/DummyData';
import UserDetailsModal from './UserDetailsModal';

function UserDataTable() {
  const [modalData, setModalData] = useState(null);
  const [tableData, setTableData] = useState(dummyTableData);
  const searchTextRef = useRef(null)

  function searchTable() {
    const searchText = searchTextRef.current.value

    if(searchText !== null && searchText !== '') {
        const searchResult = dummyTableData.filter(data => Object.keys(data).some(key => data[key].toLowerCase().includes(searchText.toLowerCase())));
        setTableData(searchResult)
    }
  }


  function getTableRows(data, index) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" key={index} onClick={() => setModalData(data)}>
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {data.userName}
            </td>
            <td className="px-6 py-4">
                {data.email}
            </td>
            <td className="px-6 py-4">
                {data.id}
            </td>
            <td className="px-6 py-4">
                {data.phone}
            </td>
            <td className="px-6 py-4">
                {data.creationDate}
            </td>
			<td className="px-6 py-4 text-right">
				<span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</span>
			</td>
		</tr>
    )
  }
  return (
    <div className="w-2/3 mx-auto">
	    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-[#1f2937]">
		    <div className="p-4">
			    <label htmlFor="table-search" className="sr-only">Search</label>
			    <div className="relative mt-1">
				    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						    <path fillRule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clipRule="evenodd"></path>
					    </svg>
				    </div>
				    <input onChange={()=> searchTable()} ref={searchTextRef} type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                </div>
			</div>
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Email
						</th>
						<th scope="col" className="px-6 py-3">
							ID
						</th>
						<th scope="col" className="px-6 py-3">
							Phone
						</th>
                        <th scope="col" className="px-6 py-3">
							Creation date
						</th>
						<th scope="col" className="px-6 py-3">
							<span className="sr-only">Action</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((data,index) => {return getTableRows(data,index)})}
                    {tableData.length === 0 && <tr scope="col" className="flex dark:bg-gray-800 text-center m-auto">
                        <td className='w-full'><p className='w-full text-center'>No Data Found</p></td>
                    </tr>}
				</tbody>
			</table>
		</div>
        {modalData && <UserDetailsModal userDetails={modalData} setModalData={setModalData}/>}
	</div>
  )
}

export default UserDataTable