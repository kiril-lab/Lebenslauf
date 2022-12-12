import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
function Header() {
  const [isOpen, setOpen] = useState(false);
  const closedMenu = () => setOpen(!isOpen);

  return (
    <>
      <div className="hidden lg:flex  sticky   text-[18px] justify-center items-center text-center  bg-[#586cdc] font-bold font-['amatic_scregular'] italic text-white">
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
      <div className="lg:hidden flex bg-[#586cdc] text-white xsm:text-[32px] pl-[10%] pt-[3%] pb-[3%] font-['amatic_scregular'] font-bold ">
        <p className="w-[80%]">Kiril Shterjov.</p>
        <div className="w-[20%] text-white">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#FFFFFF" />

          {isOpen && (
            <div className="absolute flex w-[100%] justify-center items-center text-center text-[#1c2349] bg-[#eef0fc] left-0 z-[1] text-[24px] p-5">
              <ul className="">
                <li className="p-2">
                  <Link href="/#ueberMich">
                    <div className="" onClick={closedMenu}>
                      Über Mich
                    </div>
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/#ausbildung">
                    <div className="" onClick={closedMenu}>
                      Ausbildung & Berufserfahrung
                    </div>
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/#faeihgkeiten">
                    <div className="" onClick={closedMenu}>
                      Fähigkeiten & Sprachen
                    </div>
                  </Link>
                </li>
                <li className="p-2">
                  <Link href="/#interessen">
                    <div className="" onClick={closedMenu}>
                      Interessen
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Header;
