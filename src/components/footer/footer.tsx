export const Footer = () => {

    return (<>

        <footer className="bg-white shadow m-4 border-2 border-blue-400">
            <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">James Vanstrahlen
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Login</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </footer>

    </>)
}