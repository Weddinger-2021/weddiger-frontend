export default function ServiceForm() {
    return (
        <>
            <div className="w-6/12 mt-20 mb-20 ml-auto mr-auto sm:mt-0">
                <div className="mt-20 md:grid md:grid-cols-2 md:gap-6">
                    <div className="mt-20 md:mt-0 md:col-span-2">
                        <form className="ml-auto mr-auto " action="#" method="POST ">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6 m-auto">
                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                                Category
                                            </label>
                                            <select
                                                id="category"
                                                name="category"
                                                autoComplete="category"
                                                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>Avenues</option>
                                                <option>Cars</option>
                                                <option>Photography</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                autoComplete="email"
                                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="min-price" className="block text-sm font-medium text-gray-700">
                                                Minimum Price
                                            </label>
                                            <input
                                                type="text"
                                                name="min-price"
                                                id="min-price"
                                                autoComplete="given-name"
                                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="max-price" className="block text-sm font-medium text-gray-700">
                                                Maximum Price
                                            </label>
                                            <input
                                                type="text"
                                                name="max-price"
                                                id="max-price"
                                                autoComplete="family-name"
                                                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>


                                        <div className="col-span-6">
                                            <label htmlFor="service-description" className="block text-sm font-medium text-gray-700">
                                                Service Description
                                            </label>
                                            <input
                                                type="text"
                                                name="service-description"
                                                id="service-description"
                                                autoComplete="service-description"
                                                className="block w-full h-12 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div>
                                    <div className="md:grid md:grid-cols-3 md:gap-6">
                                        <div className="mt-5 md:mt-0 md:col-span-2">
                                            <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                                                <label className="block text-sm font-medium text-gray-700">Upload images</label>
                                                <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="space-y-1 text-center">
                                                        <svg
                                                            className="w-12 h-12 mx-auto text-gray-400"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 48 48"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                        <div className="flex text-sm text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative font-medium bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                            >
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="w-full sr-only" />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                                    <center>
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center px-10 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Add Service
                                        </button>
                                    </center>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
