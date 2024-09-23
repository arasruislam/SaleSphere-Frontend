const Login = () => {
   return (
      <div>
         <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
               <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
               <form className="space-y-4">
                  <div>
                     <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Username
                     </label>
                     <input
                        type="text"
                        id="username"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8946A6] focus:border-[#8946A6]"
                        placeholder="Enter your username"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Password
                     </label>
                     <input
                        type="password"
                        id="password"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8946A6] focus:border-[#8946A6]"
                        placeholder="Enter your password"
                     />
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-[#8946A6] text-white py-2 rounded-lg shadow-md hover:bg-[#9d31cb] transition-colors duration-200"
                  >
                     Log In
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
