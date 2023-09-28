import './Header.css'

function Header() {
    return (
        <header>
            <div className='logo'>MT</div>
            <div>
                <ul className='navbar'>
                    <li><a href="https:/www.google.com">Home</a></li>
                    <li><a href="https:/www.google.com">Services</a></li>
                    <li><a href="https:/www.google.com">Product</a></li>
                    <li><a href="https:/www.google.com">Contact</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header