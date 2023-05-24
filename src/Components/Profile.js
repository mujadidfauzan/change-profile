import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <div>
      <div>
        <div className="p-2 fs-2 card-header text-white fw-semibold" style={{ backgroundColor: '#002984', height: ' 56px' }}>
          Profil
        </div>
      </div>
      <div className="d-flex justify-content-start p-2">
        <div>
          <Link to="/changeprofile">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_0_1)">
                <rect x="4" y="4" width="56" height="56" rx="8" fill="#E0E0E0" />
              </g>
              <path
                d="M26.233 25.834L26.678 23.608C26.7687 23.1544 27.0137 22.7463 27.3714 22.4531C27.7292 22.16 28.1775 21.9998 28.64 22H35.36C35.8225 21.9998 36.2708 22.16 36.6286 22.4531C36.9863 22.7463 37.2313 23.1544 37.322 23.608L37.767 25.834C37.8369 26.1828 38.0043 26.5046 38.2498 26.762C38.4953 27.0194 38.8089 27.2018 39.154 27.288C39.967 27.4914 40.6887 27.9607 41.2044 28.6213C41.72 29.2819 42.0001 30.0959 42 30.934V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H26C24.9391 42 23.9217 41.5786 23.1716 40.8284C22.4214 40.0783 22 39.0609 22 38V30.934C21.9999 30.0959 22.28 29.2819 22.7956 28.6213C23.3113 27.9607 24.033 27.4914 24.846 27.288C25.1911 27.2018 25.5047 27.0194 25.7502 26.762C25.9957 26.5046 26.1631 26.1828 26.233 25.834V25.834Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M32 38C34.2091 38 36 36.2091 36 34C36 31.7909 34.2091 30 32 30C29.7909 30 28 31.7909 28 34C28 36.2091 29.7909 38 32 38Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M31 26H33" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <filter id="filter0_d_0_1" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="4" dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.160784 0 0 0 0 0.517647 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                </filter>
              </defs>
            </svg>
          </Link>
          <Link to="/changeprofile">PERGI</Link>
        </div>

        <div className="d-flex flex-column">
          <p className="fw-bold m-0">John Doe</p>
          <p className="">Kelas 10 IPA 8</p>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="custom-card-1"></div>
        <div className="custom-card-1"></div>
        <div className="custom-card-1"></div>
      </div>
    </div>
  );
};

export default Profile;
