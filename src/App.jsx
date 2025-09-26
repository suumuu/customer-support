import './App.css'
import Container from './Container'

function App() {
  return (
    <>
      <nav className="navbar bg-base-100 shadow-sm p-0 py-4">
        <Container>
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">CS — Ticket System</a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
                 <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
            <a className="btn text-white purple-gradient px-4 py-3"><span className='gap-2.5'>+</span>New Ticket</a></div>
        </Container>
      </nav>
      <main className='m-20 text-white'>
        <Container>
              <div className="card bg-base-100 w-96 shadow-sm px-25 flex inProgress-card">
                <div className="card-body flex items-center">
                  <p className='text-[24px] font-regular'>In-Progress</p>
                  <h1 className="card-title text-[60px] font-semibold ">0</h1>
                </div>
              </div>
              <div className="card bg-base-100 w-96 shadow-sm px-25 flex resolved-card">
                <div className="card-body flex items-center">
                  <p className='text-[24px] font-regular'>resolved</p>
                  <h1 className="card-title text-[60px] font-semibold ">0</h1>
                </div>
              </div>
        </Container>
      </main>
      <footer className="bg-neutral p-10 pb-0 flex flex-col">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between border-b border-gray-800 pb-10">
          <nav className="flex-1 flex flex-col space-y-3">
            <h6 className="footer-title font-semibold footer-title-color">CS — Ticket System</h6>
            <p className="text-sm leading-relaxed footer-text-color">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </nav>

          <nav className="flex-1 flex flex-col space-y-3">
            <h6 className="footer-title font-semibold footer-title-color">Company</h6>
            <a className="link link-hover text-sm footer-text-color">About Us</a>
            <a className="link link-hover text-sm footer-text-color">Our Mission</a>
            <a className="link link-hover text-sm footer-text-color">Contact Sales</a>
          </nav>
          
          <nav className="flex-1 flex flex-col space-y-3">
            <h6 className="footer-title font-semibold footer-title-color">Services</h6>
            <a className="link link-hover text-sm footer-text-color">Products & Services</a>
            <a className="link link-hover text-sm footer-text-color">Customer Stories</a>
            <a className="link link-hover text-sm footer-text-color">Download Apps</a>
          </nav>
          
          <nav className="flex-1 flex flex-col space-y-3">
            <h6 className="footer-title font-semibold footer-title-color">Information</h6>
            <a className="link link-hover text-sm footer-text-color">Privacy Policy</a>
            <a className="link link-hover text-sm footer-text-color">Terms & Conditions</a>
            <a className="link link-hover text-sm footer-text-color">Join Us</a>
          </nav>
          
          <nav className="flex-1 flex flex-col space-y-3">
            <h6 className="footer-title font-semibold footer-title-color">Social Links</h6>
            <a className="link link-hover text-sm flex items-center gap-2 footer-text-color">
              <div className="w-5 h-5 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              @CS — Ticket System
            </a>
            <a className="link link-hover text-sm flex items-center gap-2 footer-text-color">
              <div className="w-5 h-5 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              @CS — Ticket System
            </a>
            <a className="link link-hover text-sm flex items-center gap-2 footer-text-color">
              <div className="w-5 h-5 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              @CS — Ticket System
            </a>
            <a className="link link-hover text-sm flex items-center gap-2 footer-text-color">
              <div className="w-5 h-5 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                </svg>
              </div>
              support@cst.com
            </a>
          </nav>
        </div>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center justify-center p-4 ">
          <aside className="grid-flow-col">
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
          </aside>
        </footer>
      </footer>
    </>
  )
}
export default App