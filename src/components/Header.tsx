import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="w-screen p-8 bg-slate-800 flex justify-between items-center">
        <h1 className="font-bold text-white text-2xl">Next Js Porto</h1>
      <div className="">
        <ul className="flex">
            <li className="text-white text-lg m-5"><Link href="">Name</Link></li>
            <li className="text-white text-lg m-5"><Link href="">Techs</Link></li>
            <li className="text-white text-lg m-5"><Link href="">Biography</Link></li>
            <li className="text-white text-lg m-5"><Link href="">Contact</Link></li>
        </ul>
      </div>
      </div>
    </>
  );
}
