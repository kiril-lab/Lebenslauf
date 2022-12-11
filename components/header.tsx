import Link from "next/link";
function Header() {
  return (
    <div className=" flex sticky w-[100%]  justify-center items-center text-center  bg-[#586cdc] font-bold italic text-white">
      <Link href="/#überMich">
        <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700">
          Über Mich
        </div>
      </Link>
      <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700">
        Ausbildung & Berufserfahrung
      </div>
      <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700">
        Fähigkeiten & Sprachen
      </div>
      <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700">
        Auszeichungen & Interessen
      </div>
    </div>
  );
}
export default Header;
