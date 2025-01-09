import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <div className="w-screen h-[500px] bg-slate-800 p-8">
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className="text-white text-5xl font-bold">Hello Guys...</h2>
            <h2 className="text-cyan-300 text-7xl font-bold">
              Wicaksana Adi Saputro
            </h2>
            <br />
            <p className="text-white max-w-lg">
              Saya Wicaksana Adi Saputro mahasiswa Teknik Informatika semester 8
              Sekolah Tinggi Teknologi Indonesia Tanjungpinang, mahasiswa aktif
              dan berprestsai dalam bidang non akademik mulai Tingkat Provinsi
              sampai dengan intenasional. Mampu berkomunikasi dengan baik dan
              dapat bekerja sama dalam tim. Memiliki pengalaman kampus merdeka
              batch 6 dan batch 7
            </p>
          </div>
          <div className="relative w-96 h-96">
            <Image
              src={"/img/wics.jpg"}
              alt="Wicaksana Adi Saputro"
              fill={true}
              priority={true}
              className="rounded-5xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
