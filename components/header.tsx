import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link } from "react-scroll";
function Header() {
  const [isOpen, setOpen] = useState(false);
  const closedMenu = () => setOpen(!isOpen);

  return (
    <>
      <div className="hidden lg:flex  sticky   text-[18px] justify-center items-center text-center  bg-[#586cdc] font-bold font-['amatic_scregular'] italic text-white">
        <Link
          to="ueberMich"
          spy={false}
          smooth={true}
          offset={0}
          duration={-500}
        >
          <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer">
            Über Mich
          </div>
        </Link>
        <Link
          to="ausbildung"
          spy={true}
          smooth={true}
          offset={0}
          duration={-500}
        >
          <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700">
            Ausbildung & Berufserfahrung
          </div>
        </Link>
        <Link
          to="faeihgkeiten"
          spy={true}
          smooth={true}
          offset={0}
          duration={-500}
        >
          <div className="py-5 mx-5 hover:text-[#5c6da5] cursor-pointer duration-700">
            Fähigkeiten & Sprachen
          </div>
        </Link>
        <Link
          to="interessen"
          spy={true}
          smooth={true}
          offset={0}
          duration={-500}
        >
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
            <div className="absolute flex w-[100%] h-[100%] justify-center items-start text-start  bg-[#586cdc] opacity-[0.95] left-0 z-[1] text-[24px] pt-[8rem]">
              <ul className="">
                <li className="p-5">
                  <Link
                    to="ueberMich"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={-500}
                  >
                    <div onClick={closedMenu}>Über Mich</div>
                  </Link>
                </li>
                <li className="p-5">
                  <Link
                    to="ausbildung"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={-500}
                  >
                    <div onClick={closedMenu}>Ausbildung & Berufserfahrung</div>
                  </Link>
                </li>
                <li className="p-5">
                  <Link
                    to="faeihgkeiten"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={-500}
                  >
                    <div onClick={closedMenu}>Fähigkeiten & Sprachen</div>
                  </Link>
                </li>
                <li className="p-5">
                  <Link
                    to="interessen"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={-500}
                  >
                    <div onClick={closedMenu}>Interessen</div>
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
