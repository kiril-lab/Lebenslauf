import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
function Header() {
  const [isOpen, setOpen] = useState(false);
  const closedMenu = () => setOpen(!isOpen);
  return (
    <>
      <div className="hidden lg:flex sticky w-[100%]  text-[18px] justify-center items-center text-center  bg-[#586cdc] font-bold font-['amatic_scregular'] italic text-white">
        <Link href="/#ueberMich">
          <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700">
            Über Mich
          </div>
        </Link>
        <Link href="/#ausbildung">
          <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700">
            Ausbildung & Berufserfahrung
          </div>
        </Link>
        <Link href="/#faeihgkeiten">
          <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700">
            Fähigkeiten & Sprachen
          </div>
        </Link>
        <Link href="/#interessen">
          <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700">
            Interessen
          </div>
        </Link>
      </div>
      <div className="flex bg-[#586cdc] text-white xsm:text-[32px] pl-[10%] pt-[3%] pb-[3%] font-['amatic_scregular'] font-bold lg:hidden">
        <p className="w-[80%]">Kiril Shterjov.</p>
        <div className="w-[20%] text-white">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFFFF" />
          {isOpen && (
            <div className="absolute flex flex-col w-[100%] justify-center left-0 bg-[#586cdc] z-[1]">
              <Link href="/#ueberMich">
                <div
                  className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700"
                  onClick={closedMenu}
                >
                  Über Mich
                </div>
              </Link>
              <Link href="/#ausbildung">
                <div
                  className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700"
                  onClick={closedMenu}
                >
                  Ausbildung & Berufserfahrung
                </div>
              </Link>
              <Link href="/#faeihgkeiten">
                <div
                  className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700"
                  onClick={closedMenu}
                >
                  Fähigkeiten & Sprachen
                </div>
              </Link>
              <Link href="/#interessen">
                <div
                  className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700"
                  onClick={closedMenu}
                >
                  Interessen
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
