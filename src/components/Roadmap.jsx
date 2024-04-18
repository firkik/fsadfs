import cookieFarmerImg from "../assets/cookie-farmer.png";
import cookieImg from "../assets/cookie.png";

export default function Roadmap() {
  return (
    <section className="grid relative items-center gap-[60px] pb-[100px]">
      <div className="relative z-[1]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="font-medium text-[34px] sm:text-[64px]">Road-Map</h1>
          <p className="text-[26px] sm:text-[36px] font-medium text-[#E0E0E0]">
            Some points can be changed or supplemented.
          </p>
        </div>
      </div>
      <div className="grid relative z-[1] grid-cols-[150px,16px,150px] sm:grid-cols-[300px,16px,300px] xl:grid-cols-[530px,16px,530px] mx-auto">
        <div>
          <div className="h-[200px]"></div>
          <div className="h-[300px] relative">
            <div className="text-2xl xl:text-4xl font-medium text-[#FFFBA4]">
              The end of the Fair Launch
            </div>
            <p className="text-xl xl:text-[32px]">
              After the end of FairLaunch, we collected 2325.98 TON, thereby
              creating the first liquidity on DeDust, in the amount of 1,400
              TONS, as well as 590 TON were allocated for development.
            </p>
            <i className="absolute block w-[30px] h-[30px] bg-white rounded-[50%] -right-[23px] top-0" />
          </div>
          <div className="h-[200px]"></div>
        </div>
        <div className="bg-white  rounded-[15px]"></div>
        <div className="pl-2 xl:pl-7">
          <div className="h-[200px] relative">
            <div className="text-2xl xl:text-4xl font-medium text-[#FFFBA4]">
              Initial Stage
            </div>
            <p className="text-xl xl:text-[32px]">
              Creating a coin, and launching it on Ton Raffles.
            </p>
            <i className="absolute block w-[30px] h-[30px] bg-white rounded-[50%] -left-[31px] xl:-left-[51px] top-0" />
          </div>
          <div className="h-[300px]"></div>
          <div className="h-[200px] relative">
            <div className="text-2xl xl:text-4xl font-medium text-[#FFFBA4]">
              Development and integrations
            </div>
            <p className="text-xl xl:text-[32px]">
              Successful listing on DeDust, confirmation in TonKepeer and token
              promotion.
            </p>
            <i className="absolute block w-[30px] h-[30px] bg-white rounded-[50%] -left-[31px] xl:-left-[51px] top-0" />
          </div>
        </div>
        <div className="flex mt-[100px] col-span-3 sm:mt-9 relative z-[1] flex-col items-center justify-center gap-2 text-center">
          <i className="block w-[30px] h-[30px] bg-white rounded-[50%]" />
          <div className="text-xl xl:text-[32px]">
            No one knows what will happen next
          </div>
        </div>
      </div>
      <img
        className="w-[240px] lg:w-[540px] absolute pointer-events-none right-0 bottom-1/2 translate-y-1/2 xl:translate-y-0 xl:bottom-0"
        src={cookieFarmerImg}
      />
      <img
        className="absolute w-[436px] lg:w-[736px] pointer-events-none opacity-50 -left-[200px] top-0 xl:-bottom-[50px]"
        src={cookieImg}
      />
    </section>
  );
}
