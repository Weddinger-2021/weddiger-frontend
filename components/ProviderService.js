export default () => {

    function deleteservice(event) {
        event.preventDefault();
        setStatus("Deleting a row")
        async function handler(id) {
            const response = await delete_data(id)
            if (response.status == 204) {
                const getResponse = await getData()
                const { data } = getResponse
                if (data.length >= 0) {
                    setReportStatus(!reportStatus)
                    if (data.length == 0) {
                        setStatus("No Cookie Stands Available")
                    }
                }
            }
        }
        handler(event.target.id)
    }



    return (
        <>
            <div className="flex justify-center w-8/12 py-10 mx-auto">
                <table className="w-full mb-4 bg-white rounded shadow-md text-md">
                    <tbody>
                        
                        <tr className="border-b">
                            <th className="p-3 px-5 text-left">Service</th>
                            <th className="p-3 px-5 text-left">Category</th>
                            <th className="p-3 px-5 text-left">Price</th>
                            <th></th>
                        </tr>

                        <tr className="bg-gray-100 border-b hover:bg-orange-100" >
                            <td className="p-3 px-5">
                                BMW
                            </td>
                            <td className="p-3 px-5">
                                Cars
                            </td>
                            <td className="p-3 px-5">
                                0 - 1000
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">

                                    {/* Edit */}
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <a href="/serviceProvider/ServiceUpdate"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        </a>
                                    </div>

                                    {/* Delete */}
                                    <div onClick={deleteservice} id={id} class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}