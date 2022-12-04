function Header() {
  return (
    <div className=" flex sticky w-[100%]  justify-center items-center text-center  bg-white font-bold">
      <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer">
        Über Mich
      </div>
      <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer">
        Ausbildung & Berufserfahrung
      </div>
      <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer">
        Fähigkeiten & Sprachen
      </div>
      <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer">
        Interessen
      </div>
    </div>
  );
}
export default Header;
