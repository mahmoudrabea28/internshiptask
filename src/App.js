import './App.css';
import logo from './assets/logo.png'
import p from './assets/p.png'
import cpng from './assets/cpng.png'
import v from './assets/v.png'
import v1 from './assets/v1.png'
import v2 from './assets/v2.png'
function App() {
  return (
    <>
  <div className="container">
    <div className="head">
      <img src={logo} alt="" />
      <div className="nav">
        <div className="search">
          <svg
            width={17}
            height={17}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.69353 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3755 2.7619 8.22208 1.48942 5.49225 2.64957C2.76241 3.80972 1.48993 6.96318 2.65008 9.69302C3.81024 12.4229 6.9637 13.6953 9.69353 12.5352Z"
                stroke="black"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.3902 11.3896L15.5555 15.5555"
                stroke="black"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <input type="text" placeholder="Search" />
        </div>
        <div className="profile">
          <svg
            width={29}
            height={31}
            viewBox="0 0 29 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0277 5C7.73472 5 5.80843 6.72411 5.55522 9.00306L4.5 18.5H1.5C0.671573 18.5 0 19.1716 0 20V21.5C0 22.3284 0.671573 23 1.5 23H22.5C23.3284 23 24 22.3284 24 21.5V20C24 19.1716 23.3284 18.5 22.5 18.5H19.5L18.4448 9.00306C18.1916 6.72411 16.2653 5 13.9723 5H10.0277Z"
              fill="#554DB7"
            />
            <rect
              opacity="0.3"
              x={9}
              y="24.5"
              width={6}
              height={6}
              rx="2.25"
              fill="#554DB7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 16C25.4183 16 29 12.4183 29 8C29 3.58172 25.4183 0 21 0C16.5817 0 13 3.58172 13 8C13 12.4183 16.5817 16 21 16Z"
              fill="#118F4B"
            />
            <path
              d="M20.912 12.12C19.864 12.12 19.052 11.752 18.476 11.016C17.908 10.28 17.624 9.248 17.624 7.92C17.624 6.488 17.944 5.38 18.584 4.596C19.232 3.812 20.124 3.42 21.26 3.42C21.708 3.42 22.152 3.504 22.592 3.672C23.032 3.832 23.408 4.064 23.72 4.368L23.216 5.52C22.92 5.248 22.604 5.048 22.268 4.92C21.932 4.784 21.588 4.716 21.236 4.716C20.54 4.716 20.008 4.96 19.64 5.448C19.272 5.936 19.088 6.664 19.088 7.632V7.98C19.256 7.54 19.528 7.196 19.904 6.948C20.28 6.7 20.712 6.576 21.2 6.576C21.688 6.576 22.12 6.692 22.496 6.924C22.872 7.156 23.168 7.476 23.384 7.884C23.6 8.292 23.708 8.76 23.708 9.288C23.708 9.832 23.588 10.32 23.348 10.752C23.116 11.176 22.788 11.512 22.364 11.76C21.948 12 21.464 12.12 20.912 12.12ZM20.828 10.896C21.26 10.896 21.608 10.756 21.872 10.476C22.144 10.188 22.28 9.812 22.28 9.348C22.28 8.884 22.144 8.508 21.872 8.22C21.608 7.932 21.26 7.788 20.828 7.788C20.396 7.788 20.044 7.932 19.772 8.22C19.508 8.508 19.376 8.884 19.376 9.348C19.376 9.812 19.508 10.188 19.772 10.476C20.044 10.756 20.396 10.896 20.828 10.896Z"
              fill="white"
            />
          </svg>
          <img src={p} alt="" />
          <div className="info">
            <div className="text">
              <div className="name">Main Roy</div>
              <div className="role">Admin</div>
            </div>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 19.1C15.0258 19.1 19.1 15.0258 19.1 10C19.1 4.97421 15.0258 0.9 10 0.9C4.97421 0.9 0.9 4.97421 0.9 10C0.9 15.0258 4.97421 19.1 10 19.1Z"
                stroke="#5C5C5C"
                strokeWidth="0.2"
              />
              <path
                d="M10 10.7929L7.73162 8.14645C7.56425 7.95118 7.29289 7.95118 7.12553 8.14645C6.95816 8.34171 6.95816 8.65829 7.12553 8.85355L9.69695 11.8536C9.86432 12.0488 10.1357 12.0488 10.303 11.8536L12.8745 8.85355C13.0418 8.65829 13.0418 8.34171 12.8745 8.14645C12.7071 7.95118 12.4358 7.95118 12.2684 8.14645L10 10.7929Z"
                fill="#565656"
              />
              <mask
                id="mask0_15_729"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x={7}
                y={8}
                width={6}
                height={4}
              >
                <path
                  d="M10 10.7929L7.73162 8.14645C7.56425 7.95118 7.29289 7.95118 7.12553 8.14645C6.95816 8.34171 6.95816 8.65829 7.12553 8.85355L9.69695 11.8536C9.86432 12.0488 10.1357 12.0488 10.303 11.8536L12.8745 8.85355C13.0418 8.65829 13.0418 8.34171 12.8745 8.14645C12.7071 7.95118 12.4358 7.95118 12.2684 8.14645L10 10.7929Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_15_729)"></g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div>
        <div id="soon1" className="soon">
          <span className="text">Coming soon</span>
        </div>
        <div className="text1">Trading</div>
      </div>
      <div>
        <svg
          width={2}
          height={48}
          viewBox="0 0 2 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.734058"
            y1="-1.14005e-08"
            x2="0.734064"
            y2={48}
            stroke="#B9B9B9"
            strokeWidth="1.46812"
          />
        </svg>
      </div>
      <div>
        <div id="soon2" className="soon">
          <span className="text">Coming soon</span>
        </div>
        <div id="aut" className="text1">
          Automation
        </div>
      </div>
      <div>
        <svg
          width={2}
          height={48}
          viewBox="0 0 2 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.734058"
            y1="-1.14005e-08"
            x2="0.734064"
            y2={48}
            stroke="#B9B9B9"
            strokeWidth="1.46812"
          />
        </svg>
      </div>
      <div>
        <div id="soon3" className="soon">
          <span className="text">Coming soon</span>
        </div>
        <div id="port" className="text1">
          Portfolio
        </div>
      </div>
      <div>
        <svg
          width={2}
          height={48}
          viewBox="0 0 2 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.734058"
            y1="-1.14005e-08"
            x2="0.734064"
            y2={48}
            stroke="#B9B9B9"
            strokeWidth="1.46812"
          />
        </svg>
      </div>
      <div className="text2">Alerts</div>
      <div>
        <svg
          width={2}
          height={48}
          viewBox="0 0 2 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.734058"
            y1="-1.14005e-08"
            x2="0.734064"
            y2={48}
            stroke="#B9B9B9"
            strokeWidth="1.46812"
          />
        </svg>
      </div>
      <div className="text3">Trading</div>
    </div>
    <div className="section1">
      <div className="side">
        <div className="filter">Filters</div>
        <div className="inside">
          <div className="indu">Industry</div>
          <div id="s1" className="select">
            <div>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.35714 8.125L1.875 10L5.35714 11.875M5.35714 8.125L10 10.625L14.6429 8.125M5.35714 8.125L1.875 6.25L10 1.875L18.125 6.25L14.6429 8.125M14.6429 8.125L18.125 10L14.6429 11.875M14.6429 11.875L18.125 13.75L10 18.125L1.875 13.75L5.35714 11.875M14.6429 11.875L10 14.375L5.35714 11.875"
                  stroke="#6B6B6B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text4">Health care.</div>
            <div className="icon1">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8L10 12L6 8"
                  stroke="#040F0F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="choose">Choose something.</div>
          <div className="text5">Market Cap</div>
          <div className="select">
            <div>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.35714 8.125L1.875 10L5.35714 11.875M5.35714 8.125L10 10.625L14.6429 8.125M5.35714 8.125L1.875 6.25L10 1.875L18.125 6.25L14.6429 8.125M14.6429 8.125L18.125 10L14.6429 11.875M14.6429 11.875L18.125 13.75L10 18.125L1.875 13.75L5.35714 11.875M14.6429 11.875L10 14.375L5.35714 11.875"
                  stroke="#6B6B6B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text9">Large-cap</div>
            <div className="icon2">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8L10 12L6 8"
                  stroke="#040F0F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="choose">Press Apply to see changes.</div>
          <div className="text5">Risk</div>
          <div className="select">
            <div>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.35714 8.125L1.875 10L5.35714 11.875M5.35714 8.125L10 10.625L14.6429 8.125M5.35714 8.125L1.875 6.25L10 1.875L18.125 6.25L14.6429 8.125M14.6429 8.125L18.125 10L14.6429 11.875M14.6429 11.875L18.125 13.75L10 18.125L1.875 13.75L5.35714 11.875M14.6429 11.875L10 14.375L5.35714 11.875"
                  stroke="#6B6B6B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text10">Insert text here</div>
            <div className="icon3">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L14 12"
                  stroke="#040F0F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div id="select1" className="select">
            <div className="opti1">
              <div className="selicon">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                    stroke="#A3A3A3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text6">Low risk</div>
            </div>
            <div className="opti2">
              <div className="selicon">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                    stroke="#A3A3A3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text6">Mid-risk</div>
            </div>
            <div className="opti3">
              <div className="selicon">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                    stroke="#887EFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text8">High risk</div>
            </div>
            <div className="opti4">
              <div className="selicon">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                    stroke="#D6D6D6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text7">Option text here</div>
            </div>
          </div>
          <div className="button">Apply Filters</div>
        </div>
      </div>
      <div className="center">
        <div className="artical">
          <div id="art">
            <div className="icons">
              <img src={v2} alt="" style={{ width: 41, height: 33 }} />
              <div className="text13">$TSLA</div>
            </div>
            <div className="line">
              <svg
                width={3}
                height={22}
                viewBox="0 0 3 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.49492"
                  y1="0.849279"
                  x2="1.49492"
                  y2="22.0079"
                  stroke="#B9B9B9"
                  strokeWidth="1.46812"
                />
              </svg>
            </div>
            <div className="icons">
              <img src={cpng} alt="" className="iconimg" />
              <div className="text13">200 Contracts</div>
            </div>
            <div className="line">
              <svg
                width={3}
                height={22}
                viewBox="0 0 3 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.49492"
                  y1="0.849279"
                  x2="1.49492"
                  y2="22.0079"
                  stroke="#B9B9B9"
                  strokeWidth="1.46812"
                />
              </svg>
            </div>
            <div className="icons">
              <img src={v} alt="" className="iconimg" />
              <div className="text13">12.2%</div>
            </div>
            <div className="line">
              <svg
                width={3}
                height={22}
                viewBox="0 0 3 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.49492"
                  y1="0.849279"
                  x2="1.49492"
                  y2="22.0079"
                  stroke="#B9B9B9"
                  strokeWidth="1.46812"
                />
              </svg>
            </div>
            <div className="icons">
              <img src={v1} alt="" className="iconimg" />
              <div className="text13">High risk</div>
            </div>
          </div>
          <div id="t11" className="text11">
            Someone Just bought xxxx contracts of $XYZ, this is notable because
            the relative volume on this options trade is X.X%.
          </div>
        </div>
        <div className="artical1">
          <div className="text12">
            X company released a short report on $XYZ, High IV option sales opps
          </div>
        </div>
        <div className="artical1">
          <div className="text12">
            $XYZ just announced an acquisition of $ABC at $X. This is an
            arbitrage opportunity, with the max gain being %X if the deal
            closes, but the possible risk is %Y&nbsp; if the deal fails.
          </div>
        </div>
        <div className="artical2">
          <div className="text12">
            $XYZ just announced an acquisition of $ABC at $X. This is an
            arbitrage opportunity, with the max gain being %X if the deal
            closes, but the possible risk is %Y&nbsp; if the deal fails.
          </div>
        </div>
        <div className="artical2">
          <div className="text12">
            $XYZ just announced an acquisition of $ABC at $X. This is an
            arbitrage opportunity, with the max gain being %X if the deal
            closes, but the possible risk is %Y&nbsp; if the deal fails.
          </div>
        </div>
        <div className="artical2">
          <div className="text12">
            $XYZ just announced an acquisition of $ABC at $X. This is an
            arbitrage opportunity, with the max gain being %X if the deal
            closes, but the possible risk is %Y&nbsp; if the deal fails.
          </div>
        </div>
        <div className="artical2">
          <div className="text12">
            $XYZ just announced an acquisition of $ABC at $X. This is an
            arbitrage opportunity, with the max gain being %X if the deal
            closes, but the possible risk is %Y&nbsp; if the deal fails.
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
}

export default App;
