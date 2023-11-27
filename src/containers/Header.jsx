const Header = () => {
  return (
    <header>
      <div >
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.60156 12.5C3.60156 12.0029 4.00451 11.6 4.50156 11.6L17.2671 11.6L12.2778 6.84874C11.9195 6.50423 11.9083 5.93449 12.2528 5.5762C12.5973 5.2179 13.1671 5.20673 13.5254 5.55125L20.1254 11.8512C20.3018 12.0209 20.4016 12.2552 20.4016 12.5C20.4016 12.7448 20.3018 12.9791 20.1254 13.1487L13.5254 19.4487C13.1671 19.7933 12.5973 19.7821 12.2528 19.4238C11.9083 19.0655 11.9195 18.4958 12.2778 18.1512L17.2671 13.4L4.50156 13.4C4.00451 13.4 3.60156 12.9971 3.60156 12.5Z"
            fill="white"
          />
        </svg>
      </div>
      <div>
        <div>
          <svg
            width="54"
            height="55"
            viewBox="0 0 54 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="54" height="54" rx="8" fill="#FF9500" />
            <path
              d="M11.168 44.1667L22.0013 33.3333H32.8346V22.5L43.668 33.3333L32.8346 44.1667H11.168Z"
              fill="white"
            />
            <path
              d="M11.168 22.5L22.0013 33.3333V22.5H32.8346L43.668 11.6667H22.0013L11.168 22.5Z"
              fill="white"
            />
          </svg>

          <ul className="header__nav-list">
            <button>Home</button>
            <button>Courses</button>
            <button>About Us</button>
            <button>Pricing</button>
            <button>Contact</button>
          </ul>
        </div>
        <div>
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
