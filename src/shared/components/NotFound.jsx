import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  let error = useRouteError();
  
  return (
    <div className='flex h-[100vh] items-center mt-40 flex-col'>
      <h className="text-3xl font-bold mb-10">{error?.statusText} : {error?.status }</h>
      <p className='text-red-500 font-bold mb-20'>{error?.error?.message}</p>
      <Link to="/" className="text-indigo-400">Back to Home</Link>
    </div>
  )
}

export default NotFound