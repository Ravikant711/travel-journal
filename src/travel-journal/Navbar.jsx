import worldLogo from '../assets/Fill.png'

function Navbar() {
  return(<>
    <nav>
      <div className='nav-header'>
        <img className='world-logo' src={worldLogo} alt="world-logo"/>
        <p>my travel journal.</p>
      </div>
    </nav>
  </>)
}

export default Navbar