// import React from 'react'

// function Home() {
//   return (
//     <>
//        {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517457373958-b7bdd4587206?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/70"></div>
//         <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 py-24">
//           <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] drop-shadow-2xl">
//             Revolutionize Your 
//             <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">Event Management</span>
//           </h1>
//           <p className="text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto opacity-95 drop-shadow-xl leading-relaxed">
//             Empower institutes and departments with the most intuitive event platform ever built.
//           </p>
//           <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
//             <a href="#cta" className="bg-white text-gray-900 w-full md:w-auto px-14 py-7 rounded-3xl font-extrabold text-xl shadow-2xl hover:shadow-4xl hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm">Try Now Free</a>
//             <a href="#benefits" className="border-3 border-white/60 text-white w-full md:w-auto px-14 py-7 rounded-3xl font-bold text-xl hover:bg-white/20 hover:border-white transition-all duration-400 backdrop-blur-md">Discover More</a>
//           </div>
//         </div>
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-pink-400/30 rounded-full blur-xl animate-bounce"></div>
//       </section>

//       {/* Benefits Section */}
//       <section id="benefits" className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-28">
//             <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">Perfect for Every Event</h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">Comprehensive tools designed specifically for academic institutions and student organizations.</p>
//           </div>
//           <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
//             <div className="group relative p-12 rounded-4xl bg-gradient-to-br from-white to-blue-50 shadow-2xl hover:shadow-4xl border border-blue-100/50 hover:-translate-y-6 transition-all duration-700 overflow-hidden hover:border-blue-200/70">
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//               <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl mb-10 flex items-center justify-center mx-auto group-hover:scale-125 transition-all duration-700 shadow-2xl relative z-10">
//                 <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-3xl font-black text-gray-900 mb-8 text-center relative z-10 group-hover:text-blue-600 transition-colors duration-500">Event Calendar</h3>
//               <p className="text-gray-600 text-lg leading-relaxed text-center relative z-10">Visual scheduling with drag & drop, auto-conflict resolution, and smart notifications.</p>
//             </div>

//             <div className="group relative p-12 rounded-4xl bg-gradient-to-br from-white to-purple-50 shadow-2xl hover:shadow-4xl border border-purple-100/50 hover:-translate-y-6 transition-all duration-700 overflow-hidden hover:border-purple-200/70">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//               <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl mb-10 flex items-center justify-center mx-auto group-hover:scale-125 transition-all duration-700 shadow-2xl relative z-10">
//                 <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-3xl font-black text-gray-900 mb-8 text-center relative z-10 group-hover:text-purple-600 transition-colors duration-500">Team Sync</h3>
//               <p className="text-gray-600 text-lg leading-relaxed text-center relative z-10">Real-time updates across departments, committees, and student volunteers.</p>
//             </div>

//             <div className="group relative p-12 rounded-4xl bg-gradient-to-br from-white to-emerald-50 shadow-2xl hover:shadow-4xl border border-emerald-100/50 hover:-translate-y-6 transition-all duration-700 overflow-hidden hover:border-emerald-200/70">
//               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//               <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl mb-10 flex items-center justify-center mx-auto group-hover:scale-125 transition-all duration-700 shadow-2xl relative z-10">
//                 <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-3xl font-black text-gray-900 mb-8 text-center relative z-10 group-hover:text-emerald-600 transition-colors duration-500">Live Analytics</h3>
//               <p className="text-gray-600 text-lg leading-relaxed text-center relative z-10">Real-time attendance, engagement, and success metrics for every event.</p>
//             </div>

//             <div className="group relative p-12 rounded-4xl bg-gradient-to-br from-white to-orange-50 shadow-2xl hover:shadow-4xl border border-orange-100/50 hover:-translate-y-6 transition-all duration-700 overflow-hidden hover:border-orange-200/70">
//               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//               <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl mb-10 flex items-center justify-center mx-auto group-hover:scale-125 transition-all duration-700 shadow-2xl relative z-10">
//                 <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-3xl font-black text-gray-900 mb-8 text-center relative z-10 group-hover:text-orange-600 transition-colors duration-500">Mobile Ready</h3>
//               <p className="text-gray-600 text-lg leading-relaxed text-center relative z-10">Fully responsive design works perfectly on phones, tablets, and desktops.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
//         <div className="max-w-6xl mx-auto px-6 text-white text-center">
//           <div className="grid md:grid-cols-4 gap-12">
//             <div><div className="text-5xl lg:text-6xl font-black mb-3">250+</div><p className="text-xl font-semibold opacity-95">Events Hosted</p></div>
//             <div><div className="text-5xl lg:text-6xl font-black mb-3">75+</div><p className="text-xl font-semibold opacity-95">Happy Institutes</p></div>
//             <div><div className="text-5xl lg:text-6xl font-black mb-3">350+</div><p className="text-xl font-semibold opacity-95">Active Teams</p></div>
//             <div><div className="text-5xl lg:text-6xl font-black mb-3">25K+</div><p className="text-xl font-semibold opacity-95">Attendees Served</p></div>
//           </div>
//         </div>
//       </section>

//       {/* Success Stories */}
//       <section id="stories" className="py-32 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8">Trusted by Leaders</h2>
//           <p className="text-xl text-gray-600 mb-20 max-w-3xl mx-auto leading-relaxed">Real results from real institutions using Frolic Events.</p>
//           <div className="grid lg:grid-cols-2 gap-16">
//             <div className="bg-white/70 backdrop-blur-xl p-16 rounded-4xl shadow-3xl border border-white/50 hover:shadow-4xl transition-all duration-500">
//               <div className="text-2xl text-gray-700 mb-12 italic leading-relaxed text-center max-w-2xl mx-auto">"Transformed our entire event workflow. From chaos to complete control in weeks."</div>
//               <div className="flex items-center justify-center">
//                 <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl flex items-center justify-center mr-8 shadow-2xl">
//                   <span className="text-white font-black text-2xl">A</span>
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-black text-3xl text-gray-900 mb-1">Dr. Amit Patel</h4>
//                   <p className="text-gray-600 font-semibold">Dean, Tech University</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white/70 backdrop-blur-xl p-16 rounded-4xl shadow-3xl border border-white/50 hover:shadow-4xl transition-all duration-500">
//               <div className="text-2xl text-gray-700 mb-12 italic leading-relaxed text-center max-w-2xl mx-auto">"Students absolutely love it. Zero training required for maximum impact."</div>
//               <div className="flex items-center justify-center">
//                 <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl flex items-center justify-center mr-8 shadow-2xl">
//                   <span className="text-white font-black text-2xl">R</span>
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-black text-3xl text-gray-900 mb-1">Riya Sharma</h4>
//                   <p className="text-gray-600 font-semibold">Events Head, Arts College</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section id="cta" className="py-32 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-5xl lg:text-6xl font-black mb-8 drop-shadow-2xl">Ready to Create Magic?</h2>
//           <p className="text-2xl mb-12 max-w-2xl mx-auto opacity-95 drop-shadow-lg leading-relaxed">Join 100+ institutes already experiencing effortless event management.</p>
//           <a href="#" className="inline-block bg-white text-gray-900 px-16 py-8 rounded-4xl font-black text-2xl shadow-3xl hover:shadow-4xl hover:scale-[1.05] transition-all duration-500 backdrop-blur-xl">Launch Your Events</a>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Home





// import React from 'react'

// function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1517457373958-b7bdd4587206?auto=format&fit=crop&w=2070&q=80')]"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/70"></div>

//         <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 py-24">
//           <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight drop-shadow-2xl">
//             Revolutionize Your
//             <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
//               Event Management
//             </span>
//           </h1>

//           <p className="text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto opacity-95">
//             Empower institutes and departments with the most intuitive event platform ever built.
//           </p>

//           <div className="flex flex-col md:flex-row gap-6 justify-center">
//             <a
//               href="#cta"
//               className="bg-white text-gray-900 px-12 py-6 rounded-3xl font-extrabold text-xl shadow-2xl hover:-translate-y-1 transition"
//             >
//               Try Now Free
//             </a>

//             <a
//               href="#benefits"
//               className="border-2 border-white/70 text-white px-12 py-6 rounded-3xl font-bold text-xl hover:bg-white/20 transition"
//             >
//               Discover More
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section id="benefits" className="py-32 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-24">
//             <h2 className="text-5xl font-black mb-6">Perfect for Every Event</h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               Comprehensive tools designed for academic institutions and student organizations.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
//             {/* Card 1 */}
//             <div className="p-10 rounded-3xl bg-gradient-to-br from-white to-blue-50 shadow-2xl hover:-translate-y-4 transition">
//               <h3 className="text-2xl font-black mb-4 text-center">Event Calendar</h3>
//               <p className="text-gray-600 text-center">
//                 Visual scheduling with smart reminders and conflict handling.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="p-10 rounded-3xl bg-gradient-to-br from-white to-purple-50 shadow-2xl hover:-translate-y-4 transition">
//               <h3 className="text-2xl font-black mb-4 text-center">Team Sync</h3>
//               <p className="text-gray-600 text-center">
//                 Real-time coordination across departments and committees.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div className="p-10 rounded-3xl bg-gradient-to-br from-white to-emerald-50 shadow-2xl hover:-translate-y-4 transition">
//               <h3 className="text-2xl font-black mb-4 text-center">Live Analytics</h3>
//               <p className="text-gray-600 text-center">
//                 Track attendance, engagement, and event success live.
//               </p>
//             </div>

//             {/* Card 4 */}
//             <div className="p-10 rounded-3xl bg-gradient-to-br from-white to-orange-50 shadow-2xl hover:-translate-y-4 transition">
//               <h3 className="text-2xl font-black mb-4 text-center">Mobile Ready</h3>
//               <p className="text-gray-600 text-center">
//                 Fully responsive experience on phones, tablets, and desktops.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
//           <div>
//             <div className="text-5xl font-black mb-2">250+</div>
//             <p className="text-xl">Events Hosted</p>
//           </div>
//           <div>
//             <div className="text-5xl font-black mb-2">75+</div>
//             <p className="text-xl">Happy Institutes</p>
//           </div>
//           <div>
//             <div className="text-5xl font-black mb-2">350+</div>
//             <p className="text-xl">Active Teams</p>
//           </div>
//           <div>
//             <div className="text-5xl font-black mb-2">25K+</div>
//             <p className="text-xl">Attendees Served</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section id="cta" className="py-32 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white">
//         <div className="max-w-4xl mx-auto px-6 text-center">
//           <h2 className="text-5xl font-black mb-8">Ready to Create Magic?</h2>
//           <p className="text-2xl mb-12">
//             Join 100+ institutes already managing events effortlessly.
//           </p>
//           <a
//             href="#"
//             className="bg-white text-gray-900 px-14 py-7 rounded-3xl font-black text-xl shadow-2xl hover:scale-105 transition"
//           >
//             Launch Your Events
//           </a>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Home
