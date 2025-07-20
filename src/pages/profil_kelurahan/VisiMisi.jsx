import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import fto from "../../assets/kel_sendangmulyo.jpg";

const VisiMisi = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4 lg:px-28 py-10 bg-primary">
          <div className="flex items-center space-x-2 text-sm">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer text-white"
            >
              Beranda
            </span>
            <ChevronRight className="w-4 h-4 cursor-pointer text-white" />
            <span
              onClick={() => navigate("/profil-kelurahan")}
              className="text-white cursor-pointer"
            >
              Profil Kelurahan
            </span>
            <ChevronRight className="w-4 h-4 cursor-pointer text-white" />
            <p className="text-white font-semibold">Visi Misi</p>
          </div>
        </div>

        <div className="container px-4 lg:px-28 py-10">
          <div className="lg:w-[340px] border  border-gray-300 bg-white  p-4 mb-4">
            <p>Visi & Misi Kelurahan SendangMulyo</p>
          </div>
          <div className="border  border-gray-300 bg-white  p-3 lg:p-5 lg:w-full flex flex-col justify-center items-center mx-auto">
            {/* Layout Gambar dan Teks */}
            <div className="flex flex-col items-center space-y-8 ">
              {/* Gambar di atas */}
              <div className="flex justify-center">
                <img
                  src={fto}
                  alt="Kelurahan SendangMulyo"
                  className="w-full h-auto"
                />
              </div>

              {/* Teks di bawah gambar */}
              <div className="w-full">
                <div className="text-justify  md:text-md leading-loose space-y-4">
                  <p className="text-font1">
                    Untuk mewujudkan aspirasi di masa yang akan datang, perlu
                    adanya gambaran ruang lingkup kegiatan yang sedang dan akan
                    dilakukan oleh suatu instansi. Hal ini bertujuan untuk
                    mendefinisikan maksud dan tujuan organisasi. Oleh karena
                    itu, ditetapkanlah visi dan misi yang akan dijadikan sebagai
                    pedoman dalam mengimplementasikan kebijakan yang ditetapkan
                    oleh Kelurahan SendangMulyo, Kecamatan Tembalang, Kota
                    Semarang, sebagai berikut:
                  </p>

                  <p className="text-primary">
                    <span className="font-semibold underline">VISI</span>:{" "}
                    <span className="italic">
                      {'"'}Terwujudnya Kota Semarang yang Semakin Hebat yang berlandaskan Pancasila,
                      dalam Bingkai NKRI yang Ber-Bhineka Tunggal Ika.{'"'}
                    </span>
                  </p>

                  <p className="text-primary">
                    <span className="font-semibold underline">MISI</span>:
                  </p>
                  <ul className="list-decimal list-inside text-primary">
                    <li>
                      Meningkatkan kualitas dan kapasitas Sumber Daya Manusia yang Unggul dan Produktif untuk mencapai kesejahteraan dan keadilan sosial. 
                    </li>
                    <li>
                      Meningkatkan potensi ekonomi lokal yang berdaya saing dan stimulasi pembangunan industri, berlandaskakn riset dan inovasi berdasar prinsip demokrasi ekonomi pancasila.
                    </li>
                    <li>
                      Menjamin kemerdekaan masyarakat menjalankan ibadah, pemenuhan hak dasar dan perlindungan kesejahteraan sosial serta hak asasi manusia bagi masyarakat secara berkeadilan.
                    </li>
                    <li>
                      Mewujudkan infrastruktur berkualitas yang berwawasan lingkungan untuk mendukung kemajuan kota.
                    </li>
                    <li>
                      Menjalankan reformasi birokrasai pemerintahan secara dinamis dan menyusun produk hukum yang sesuai nilai-nilai Pancasila dalam kerangka Negara Kesatuan Republik Indonesia.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default VisiMisi;
