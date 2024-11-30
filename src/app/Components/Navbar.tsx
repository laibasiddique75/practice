
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
           
           
            <Image src="/lrki.png" alt="hj" width={70} height={40}/>

            
          </div>
    
          <ul className="nav col-12 col-md-auto mb-2 justify-content-evenly gap-5 mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Destinations</a></li>
            <li><a href="#" className="nav-link px-2 link-secondary">Hotels</a></li>
            <li><a href="#" className="nav-link px-2  link-secondary">Flights</a></li>
            <li><a href="#" className="nav-link px-2 link-secondary">Bookings</a></li>
            <li><a href="#" className="nav-link px-2 link-secondary">Login</a></li>
            <button type="button" className="btn btn-outline-secondary">Sign-up</button>
            <li><a href="#" className="nav-link px-2 link-secondary">EN</a> </li><Image src="/images/Vector 1.png" alt="bn" width={8.12} height={4.06}/>  

          </ul>
    
         
        </header>
      </div>

    </div>
  )
}

export default Navbar;