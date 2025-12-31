// import React from 'react'

// function SignUp() {
//   return (
//     <>
//     <div className='bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 min-h-screen flex items-center justify-center'>
//       {/* <!-- Glassmorphic sign-up card --> */}
//   <div class="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-md w-full border border-white/30">
//     <div class="text-center mb-8">
//       <h1 class="text-4xl font-extrabold text-gray-900">🎉 Frolic</h1>
//       <p class="text-gray-600 mt-2">Create your account to start managing events effortlessly</p>
//     </div>

//     <form class="space-y-6">
//       {/* <!-- Floating input style --> */}
//       <div class="relative">
//         <input type="text" id="name" placeholder="Full Name" class="peer w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/30 transition"/>
//         <label for="name" class="absolute left-4 top-3 text-white/70 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:text-sm transition-all">Full Name</label>
//       </div>

//       <div class="relative">
//         <input type="email" id="email" placeholder="Email" class="peer w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/30 transition"/>
//         <label for="email" class="absolute left-4 top-3 text-white/70 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:text-sm transition-all">Email</label>
//       </div>

//       <div class="relative">
//         <input type="password" id="password" placeholder="Password" class="peer w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/30 transition"/>
//         <label for="password" class="absolute left-4 top-3 text-white/70 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:text-sm transition-all">Password</label>
//       </div>

//       <div class="relative">
//         <input type="password" id="confirm-password" placeholder="Confirm Password" class="peer w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/30 transition"/>
//         <label for="confirm-password" class="absolute left-4 top-3 text-white/70 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-white peer-focus:text-sm transition-all">Confirm Password</label>
//       </div>

//       <button type="submit" class="w-full py-3 bg-pink-500 rounded-xl font-bold text-white shadow-lg hover:bg-pink-600 transition duration-300">Sign Up</button>
//     </form>

//     <p class="text-center text-white/70 mt-6">
//       Already have an account? 
//       <a href="/login" class="text-white font-semibold hover:underline">Login</a>
//     </p>
//   </div>
//   </div>
//     </>
//   )
// }

// export default SignUp




import React from 'react'

function SignUp() {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
        {/* Clean sign-up card */}
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">🎉 Frolic</h1>
            <p className="mt-2 text-sm text-gray-600">
              Create your account to start managing events effortlessly
            </p>
          </div>

          <form className="space-y-6">
            {/* Clean input style */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-blue-600 hover:text-blue-500">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp
