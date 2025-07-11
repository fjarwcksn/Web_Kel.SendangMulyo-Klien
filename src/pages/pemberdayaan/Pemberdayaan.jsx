import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import logo lokal (sesuaikan path-nya)
import logoPerempuan from "../../assets/perempuan.png";
import logoKesehatan from "../../assets/kesehatan.png";
import logoKamtibmas from "../../assets/kamtibmas.png";
import logoPendidikan from "../../assets/pendidikan.png";

const Pemberdayaan = () => {
  const navigate = useNavigate();

  // Data bidang pemberdayaan dengan logo
  const bidangData = [
    {
      id: 1,
      title: "Bidang Perempuan",
      description:
        "Bidang Perempuan berdedikasi untuk pemberdayaan perempuan di kelurahan melalui berbagai program. Ini mencakup pelatihan keterampilan, pendampingan usaha mikro, sosialisasi hak-hak perempuan, serta upaya pencegahan dan penanganan kekerasan berbasis gender untuk menciptakan lingkungan yang aman dan setara.",
      logo: logoPerempuan, // Path ke logo Perempuan
    },
    {
      id: 2,
      title: "Bidang Kesehatan",
      description:
        "Bidang Kesehatan fokus pada peningkatan kualitas kesehatan masyarakat melalui program seperti posyandu, imunisasi, penyuluhan kesehatan, dan pemeriksaan kesehatan gratis.",
      logo: logoKesehatan, // Path ke logo Kesehatan
    },
    {
      id: 3,
      title: "Bidang Kamtibmas",
      description:
        "Bidang Keamanan dan Ketertiban Masyarakat (Kamtibmas) bertujuan untuk menjaga keamanan dan ketertiban di lingkungan kelurahan. Programnya meliputi patroli rutin, sosialisasi hukum, dan pencegahan tindak kriminal.",
      logo: logoKamtibmas, // Path ke logo Kamtibmas
    },
    {
      id: 4,
      title: "Bidang Pendidikan",
      description:
        "Bidang Pendidikan berfokus pada peningkatan kualitas pendidikan melalui program seperti bimbingan belajar, beasiswa, pelatihan guru, dan pengadaan fasilitas pendidikan.",
      logo: logoPendidikan, // Path ke logo Pendidikan
    },
  ];

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
            <p className="text-white font-semibold">Pemberdayaan</p>
          </div>
        </div>

        <div className="container px-4 lg:px-28 py-10 min-h-screen space-y-5">
          <div className="lg:text-md border lg:w-[260px]  border-gray-300 bg-white  py-2 px-7 lg:px-5">
            <p>Pemberdayaan Masyarakat</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bidangData.map((bidang) => (
              <div
                key={bidang.id}
                className="border  border-gray-300 bg-white  p-6 lg:p-8 text-justify flex flex-col items-center"
              >
                {/* Logo Bidang */}
                <img
                  src={bidang.logo}
                  alt={`Logo ${bidang.title}`}
                  className="w-24 h-24 mb-4 object-contain"
                />
                <h2 className="text-xl font-semibold mb-4 text-center">
                  {bidang.title}
                </h2>
                <p className="text-gray-700">{bidang.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Pemberdayaan;
