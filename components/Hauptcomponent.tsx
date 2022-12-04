import Image from "next/image";
import bild from "../assets/images/Bild.jpg";
function Hauptcomponent() {
  return (
    <div className="flex">
      <div className=" flex flex-col justify-center items-center text-center w-[70%] text-white">
        <div className="text-[52px] font-black"></div>
      </div>
      <div className="w-[40%] flex flex-col justify-center items-center text-center  bg-white">
        <div className="p-5">
          <Image
            src={bild}
            width={200}
            height={200}
            alt="picture"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="text-3xl text-[#5c6da5]">Kiril Shterjov</div>
        <div className="text-[#5c6da5]">B. Sc. Angewandte Informatik</div>
        <div className="text-[#5c6da5] mb-[5rem]">Hochschule RheinMain</div>
        <div className="text-[#5c6da5]">kiril_sh@hotmail.com</div>
        <div className="text-[#5c6da5] mb-[5rem]">+49 (0) 176 61168062 </div>
        <div className="bg-[#5c6da5] text-white p-5 mb-[5rem]">
          CV Herunterladen
        </div>
      </div>
    </div>
  );
}
export default Hauptcomponent;
