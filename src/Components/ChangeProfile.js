import { Link } from 'react-router-dom';

const ChangeProfile = () => {
  return (
    <>
      <div className="p-2 fs-2 card-header text-white fw-semibold" style={{ backgroundColor: '#002984', height: ' 56px' }}>
        Ganti Foto Profil
      </div>
      <div class="custom-card-2 mx-auto mt-2"></div>
      <div class="d-flex flex-column justify-content-center mt-3 text-white fw-bold">
        <Link to="/galeri" style={{ textDecoration: 'none' }}>
          <div class="card mt-4 mx-2 d-flex align-items-center justify-content-center shadow-sm" style={{ height: '40px', backgroundColor: '#006c84' }}>
            <span class="text-center">Ambil Dari Kamera</span>
          </div>
        </Link>
        <Link to="/galeri" style={{ textDecoration: 'none' }}>
          <div class="card m-2 d-flex align-items-center justify-content-center shadow-sm" style={{ height: '40px', backgroundColor: '#006c84' }}>
            <span class="text-center text-white">Ambil Dari Gallery </span>
          </div>
        </Link>
        <div class=" mt-5 d-flex align-items-center justify-content-center shadow-sm text-black" style={{ height: '40px', backgroundColor: '#E0E0E0' }}>
          <span class="text-center">Simpan</span>
        </div>
      </div>
    </>
  );
};

export default ChangeProfile;
