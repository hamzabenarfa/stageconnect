const Filter = () => {
    return ( 
        <div className="flex flex-col justify-center h-full p-6 bg-red-300">
        <h1 className="text-2xl font-bold mb-4">Filter</h1>
  
        <ul className="space-y-2">
          <li className="cursor-pointer hover:text-blue-500">Company</li>
          <li className="cursor-pointer hover:text-blue-500">Duration</li>
          <li className="cursor-pointer hover:text-blue-500">Location</li>
        </ul>
      </div>
     );
}
 
export default Filter;