import Link from "next/link";
import { TbPhoneCall, TbMail, TbBrandWhatsapp } from "react-icons/tb";
function SecondComponent() {
  return (
    <div className="flex flex-col justify-start text-left items-start bg-white ">
      <div
        id="ueberMich"
        className="bg-[#eef0fc] pt-[4rem] pl-[5%] pr-[5%] sm-s:pl-[10%] sm-s:pr-[10%] lg:pl-[20%] lg:pr-[20%]"
      >
        <div className="italic text-[32px] text-[#586cdc] font-['amatic_scregular']">
          Über Mich
        </div>
        <div className="pb-[3rem] text-[#586cdc] tracking-[0.15em]">
          Mein Werdegang
        </div>
        <p className="text-[21px] pb-[4rem] ">
          Junior Developer mit grundlegende Erfahrung im Bereich Webentwicklung
          sucht eine Arbeitsstelle. Als motivierte Teamplayer mit guten
          Kommunikationsfähigkeiten, freue ich mich auf Herausforderungen. Eine
          Beschreibung meiner Fähigkeiten finden Sie hier auf meiner Website.
        </p>
      </div>
      <div
        id="ausbildung"
        className="flex pt-[4rem] pb-[4rem] pl-[5%] pr-[5%] sm-s:pl-[10%] lg:pl-[20%] lg:pr-[20%]"
      >
        <div className="flex-col lg:pr-[10rem]">
          <div className="italic text-[32px] w-[50%] text-[#586cdc] font-['amatic_scregular']">
            Ausbildung
          </div>
          <div className="pb-[3rem] text-[#586cdc] tracking-[0.15em]">
            Was ich gelernt habe
          </div>
          <div>2018-2022</div>
          <div>Hochschule RheinMain, Jahrgang 2018</div>
          <div className="pb-[3rem]">
            Bachelor of Science; Angewandte Informatik
          </div>
          <div>2016-2018</div>
          <div>TU Darmstadt, Jahrgang 2016</div>
          <div>Bachelor of Science; Informatik</div>
          <div className="pb-[3rem]">
            Fortsetzung in 2018 an der Hochschule RheinMain
          </div>
          <div>2007-2014</div>
          <div>Universität Goce Delcev Shtip, Mazedonien, Jahrgang 2007</div>
          <div className="pb-[3rem]">
            Bachelor of Science; Informatik (6 Semester)
          </div>
          <div className="lg:hidden">
            <div className="italic text-[32px] w-[50%] text-[#586cdc] font-['amatic_scregular']">
              Arbeitserfahrung
            </div>
            <div className="pb-[3rem] text-[#586cdc] tracking-[0.15em]">
              Wo ich gearbeitet habe
            </div>
            <div>März 2022-Dezember 2022</div>
            <div>Daubit Programmierung Service GmbH</div>
            <div className="pb-[3rem]">Praktikant (Webentwicklung)</div>
            <div>2018-2019</div>
            <div>Henkel & Co. Sektkellerei</div>
            <div className="">Werkstudent (Umwelt & Sicherheit)</div>
          </div>
        </div>
        <div className="hidden lg:block lg:flex-col">
          <div className="italic text-[32px] w-[50%] text-[#586cdc] font-['amatic_scregular']">
            Arbeitserfahrung
          </div>
          <div className="pb-[3rem] text-[#586cdc] tracking-[0.15em]">
            Wo ich gearbeitet habe
          </div>
          <div>März 2022-Dezember 2022</div>
          <div>Daubit Programmierung Service GmbH</div>
          <div className="pb-[3rem]">Praktikant (Webentwicklung)</div>
          <div>2018-2019</div>
          <div>Henkel & Co. Sektkellerei</div>
          <div className="pb-[3rem]">Werkstudent (Umwelt & Sicherheit)</div>
        </div>
      </div>
      <div
        id="faeihgkeiten"
        className="flex pl-[5%] pr-[5%] sm-s:pl-[10%] sm-s:pr-[10%] lg:pl-[20%] lg:pr-[20%]"
      >
        <div className="flex-col">
          <div className="italic text-[32px] text-[#586cdc] font-['amatic_scregular']">
            Fähigkeiten & Sprachen
          </div>
          <div className="pb-[3rem] text-[#586cdc] tracking-[0.15em]">
            Welche Kenntnisse ich mitbringe
          </div>
          <div className="flex">
            <div className="flex-col xsm:pr-[2rem] sm-s:pr-[7rem] lg:pr-[10rem]">
              <div>HTML & CSS/SCSS/Tailwind</div>
              <div>JavaScript/TypeScript</div>
              <div>ReactJS/NextJS</div>
              <div>Git/GitLab/GitHub</div>
              <div>Java</div>
              <div>GoLang</div>
              <div>MongoDB</div>
              <div className="pb-[1rem]">Google Cloud Storage</div>
              <hr className="w-[10%]"></hr>
              <div className="pt-[1rem]">Mazedonisch</div>
              <div>Deutsch</div>
              <div>Serbisch/Bulgarisch/Croatisch</div>
              <div>Englisch</div>
            </div>
            <div className="flex-col  italic text-[#586cdc] pb-[4rem]">
              <div>90%</div>
              <div>80%</div>
              <div>70%</div>
              <div>80%</div>
              <div>60%</div>
              <div>40%</div>
              <div>40%</div>
              <div className="pb-[2rem]">40%</div>
              <div>100%</div>
              <div>80%</div>
              <div>50%</div>
              <div className="">50%</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="interessen"
        className="pb-[4rem] pl-[5%] pr-[5%] sm-s:pl-[10%] sm-s:pr-[10%] lg:pl-[20%] lg:pr-[20%]"
      >
        <div className="italic text-[32px] text-[#586cdc] font-['amatic_scregular']">
          Interessen
        </div>
        <div className="pb-[3rem] text-[#586cdc] tracking-[0.15em]">
          Freizeit
        </div>
        <div>Chess</div>
        <div>Fussball</div>
        <div className="lg:pb-[3rem]">Laufen</div>
      </div>
      <div className="flex justify-center items-center text-start  lg:justify-start flex-col lg:flex-row bg-[#eef0fc] pt-[2rem] w-[100%] lg:pl-[20%]">
        <div className="italic text-[32px] font-['amatic_scregular'] lg:p-10">
          <p>Ich freue mich auf</p>
          <p> Nachrichten.</p>
        </div>
        <div className="flex  text-[270%] lg:p-10">
          <div className="p-5">
            <Link href="tel:+4917661168062">
              <TbPhoneCall />
            </Link>
          </div>
          <div className="p-5">
            <Link href="mailto:kiril_sh@hotmail.com">
              <TbMail />
            </Link>
          </div>
          <div className="p-5">
            <Link href="https://wa.me/+4917661168062">
              <TbBrandWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SecondComponent;
