import Image from "next/image";
import bild from "../assets/images/Bild1.jpeg";
function Hauptcomponent() {
  return (
    <div className="flex">
      <div className=" flex flex-col justify-center items-center text-center w-[77.5%] text-white">
        <div className="flex flex-col justify-center text-start w-[50%]">
          <div className="text-[24px] mb-[-1rem] tracking-[0.35em] p-0">
            Hallo, mein Name ist
          </div>
          <div className="text-[88px] font-bold mb-[-1rem] ml-[-0.15rem] p-0 font-['amatic_scregular']">
            Kiril Shterjov
          </div>
          <div className="text-[24px] font-['amatic_scregular'] italic">
            Angewandte Informatik-Student
          </div>
        </div>
      </div>
      <div className="w-[22.5%] flex flex-col justify-center items-center text-center  bg-[#586cdc] text-[white]">
        <div className="p-5">
          <Image
            src={bild}
            width={200}
            height={200}
            alt="picture"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="text-3xl font-['amatic_scregular'] p-5">
          Kiril Shterjov
        </div>
        <div className="">B. Sc. Angewandte Informatik</div>
        <div className=" mb-[5rem]">Hochschule RheinMain Wiesbaden</div>
        <div className="">kiril_sh@hotmail.com</div>
        <div className=" mb-[5rem]">+49 (0) 176 61168062 </div>
        <div className="bg-white text-[#5c6da5] p-5 mb-[5rem]">
          CV Herunterladen
        </div>
      </div>
    </div>
  );
}
export default Hauptcomponent;
