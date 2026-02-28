export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-ink-soft mb-2">Feel free to reach out!</p>
       <div className="flex flex-col items-center space-y-4">
         <div className="flex items-center space-x-2">
           <span role="img" aria-label="phone">📞</span>
           <a
             href="tel:+919836225179"
             className="text-base  mb-1 text-blue-600 hover:underline focus:outline-none"
           >
             Phone: +91 98362 25179
           </a>
         </div>
         <div className="flex items-center space-x-2">
           <span role="img" aria-label="email">✉️</span>
           <a
             href="mailto:suryabhushan.singh@gmail.com"
             className="text-base  text-blue-600 hover:underline focus:outline-none"
           >
             Email: suryabhushan.singh@gmail.com
           </a>
         </div>
       </div>
    </div>
  );
}
