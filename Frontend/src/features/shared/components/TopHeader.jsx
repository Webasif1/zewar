import React,{useState} from 'react'

const TopHeader = () => {
  const [accountToggle, setAccountToggle] = useState(false)

  const isToggle=()=>{
    setAccountToggle(!accountToggle)
  }

  return (
    <>
      <div className="header_element">
        <div className="heder_logo">
          <img src="https://ik.imagekit.io/webasifdotio/zewar/zewarlogotransprent.webp?updatedAt=1772871652230" alt="zewarLogo" />
        </div>
        <div className="header_search">
          <form>
            <input type="text" id='search' name='search' placeholder='Search for products...' />
            <button>Search</button>
          </form>
        </div>
        <div className="header_icons">
          <div className="wishlist_icon hed_icon">
            <i class="ri-heart-3-line"></i>
            <p>Wishlist</p>
          </div>
          <div className="cart_icon hed_icon">
            <i class="ri-shopping-basket-2-line"></i>
            <p>Cart</p>
          </div>
          <div
          onClick={isToggle}
           className="account_icon hed_icon" >
            <i class="ri-user-line"></i>
            <p>Account</p>
            {accountToggle === true &&
            <ul className='account_dropdown'>
              <li>
                <i class="ri-user-line"></i>
                My Account
              </li>
              <li>
                <i class="ri-map-pin-line"></i>
                Order Tracking
              </li>
              <li>
                <i class="ri-settings-5-line"></i>
                Setting
              </li>
              <li>
                <i class="ri-logout-circle-r-line"></i>
                Sign Out
              </li>
            </ul>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHeader
