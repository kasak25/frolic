import React from 'react'

function Login() {
    return (
        <>

            <div className="flex justify-center items-center min-h-screen bg-white font-sans">
                <div className="w-[400px] p-6">

                    {/* 1. Header Section */}
                    <h1 className="text-4xl font-bold text-slate-800 mb-2">Login</h1>
                    <p className="text-gray-500 mb-8">Welcome!</p>

                    {/* 2. Form Fields */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-gray-900 mb-2">Email Address</label>
                            <input
                                type="text"
                                placeholder="Enter Email Address"
                                className="w-full p-4 bg-gray-100 rounded-xl "
                            />
                        </div>

                        <div>
                            <label className="block text-gray-900 mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full p-4 bg-gray-100 rounded-xl "
                            />
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <button className="text-gray-500 text-sm font-semibold hover:text-blue-500">
                                Forgot Password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button className="w-full bg-[#00AEEF] text-white py-4 rounded-xl font-bold text-lg shadow-lg">
                            Log In
                        </button>
                    </div>

                    {/* 3. Divider (OR) */}
                    <div className="flex items-center my-8">
                        <div className="flex-1 h-[1px] bg-gray-300"></div>
                        <span className="px-4 text-gray-400 text-sm">OR</span>
                        <div className="flex-1 h-[1px] bg-gray-300"></div>
                    </div>

                    {/* 4. Google Login Button */}
                    <button className="w-full border border-gray-200 py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-gray-50">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="google" className="w-5" />
                        <span className="text-gray-600 font-medium">Login with Google</span>
                    </button>

                    {/* 5. Footer / Register */}
                    <div className="flex justify-between items-center mt-10">
                        <p className="text-gray-500 text-sm">If you don't have an account...</p>
                        <button className="border-2 border-[#00AEEF] text-[#00AEEF] px-6 py-2 rounded-2xl font-bold hover:bg-blue-50 transition-all">
                            Register
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
