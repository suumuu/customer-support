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
      <main className=''>

      </main>
      <footer className="footer sm:footer-horizontal bg-neutral flex flex-col sm:flex-row justify-between text-neutral-content p-10 mx-auto">
  <nav className='flex-1'>
    <h6 className="footer-title">CS — Ticket Systems</h6>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </nav>

  <nav className='flex-1'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='flex-1'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='flex-1'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav className='flex-1'>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover flex ">@CS — Ticket System</a>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover"> support@cst.com</a>
   
  </nav>
</footer>
    </>
  )
}
export default App