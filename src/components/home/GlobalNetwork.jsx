import Image from "next/image";
import map from "../../assets/home/map.png";
import meeting from "../../assets/home/meeting.png";
import { BsPlayFill } from "react-icons/bs";

const GlobalNetwork = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] ">
      <div className="container">
        <div className="flex flex-col justify-center text-center">
          <h2 className="xl:text-[50px] lg:text-[42px] md:text-[28px] text-[22px] font-bold text-text">
            Connect To Unparalleled{" "}
            <span className="text-primary">Global Network</span>
          </h2>
          <p className="text-text xl:text-[18px] lg:text-[16px] text-base mt-5 font-normal w-2/4]">
            Forging Pathways: Connecting You to a Vast Global Network for <br />
            Unprecedented Business Opportunities
          </p>
        </div>

        <div className="flex items-center lg:flex-row flex-col gap-[30px] xl:gap-[60px] w-full xl:mt-[80px] lg:mt-[70px] md:mt-[60px] mt-[40px]">
          <div className="w-1/2 flex items-center">
            <Image src={map} alt="" width={500} />
          </div>
          <div className="w-1/2">
            <div className="relative w-full h-full">
              <Image src={meeting} alt="" width={500} />
              <div
                className="absolute "
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-[94px] h-[94px] cursor-pointer bg-secondary rounded-full flex items-center justify-center ">
                  <BsPlayFill color="#fff" size={62} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;
