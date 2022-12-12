import Image from "next/image";
import Link from "next/link";
import bild from "../assets/images/Bild1.jpeg";
import background from "../assets/images/5549709.jpg";
import githubImage from "../assets/images/github.png";
import linkedInImage from "../assets/images/linkedin.ico";
import { motion } from "framer-motion";

function Hauptcomponent() {
  return (
    <div className="flex xsm:flex-col lg:flex-row lg:h-[100%]">
      <div className="flex flex-col justify-center items-center text-center w-[100%] lg:w-[77.5%] text-white">
        <div className="lg:hidden w-auto">
          <div className="relative z-[-1]">
            <Image src={background} alt="background" />
          </div>
        </div>
        <motion.div
          className="absolute lg:relative flex flex-col justify-center text-center lg:text-start lg:w-[50%]"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          <div className="xsm:text-[18px] sm-xs:text-[24px] mb-[-0.5rem] lg:mb-[-1rem] tracking-[0.35em] p-0">
            Hallo, mein Name ist
          </div>
          <div className="xsm:text-[42px] sm-xs:text-[52px] lg:text-[62px] xl-l:text-[88px] font-bold xsm:mb-[2rem] lg:mb-[-1rem] ml-[-0.15rem] p-0 font-['amatic_scregular']">
            Kiril Shterjov.
          </div>
          <div className="text-[24px] font-['amatic_scregular'] italic">
            Junior Web Developer
          </div>
        </motion.div>
      </div>
      <div className="flex lg:w-[22.5%] flex-col justify-center items-center text-center  bg-[#586cdc] text-[white]">
        <div className="p-10">
          <Image
            src={bild}
            width={200}
            height={200}
            alt="picture"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="hidden lg:block text-3xl font-['amatic_scregular'] p-5 w-[100%]">
          Kiril Shterjov
        </div>
        <div className="">B. Sc. Angewandte Informatik</div>
        <div className=" mb-[2rem]">Hochschule RheinMain Wiesbaden</div>
        <div className="flex justify-center items-center mb-[2rem]">
          <div className="pr-[1rem] w-[50%]">
            <Link href="https://www.linkedin.com/in/kiril-shterjov-00aa7a112">
              <Image src={linkedInImage} alt="linkedIn"></Image>
            </Link>
          </div>
          <div className="w-[65%]">
            <Link href="https://github.com/kiril-lab">
              <Image src={githubImage} alt="github"></Image>
            </Link>
          </div>
        </div>
        <div className="">kiril_sh@hotmail.com</div>
        <div className=" mb-[5rem]">+49 (0) 176 61168062 </div>
        <Link href="/files/Lebenslauf.pdf">
          <div className="bg-white text-[#586cdc] p-5 mb-[3rem]">
            CV Herunterladen
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Hauptcomponent;
