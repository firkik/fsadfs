import cookieImg from "../assets/damaged-cookie.png";

export default function WhitePaper() {
  return (
    <footer className="relative">
      <div className="container mx-auto items-center gap-10 sm:gap-[100px] pb-[100px]">
        <div className="relative z-[1]">
          <h1 className="font-medium text-[34px] text-center sm:text-[64px] mb-7">
            White Paper
          </h1>
          <div className="max-w-[1175px]">
            <p className="text-[25px] xl:text-[36px] text-[#FFFFFF] mb-10 sm:mb-[88px]">
              This is an integral utility mem token. Economically this is an
              asset freely wrapped in the crypto market. All actions of our team
              are aimed at the development of social services and interaction
              between users of the TON blockchain and other blockchains of the
              cryptospace.
            </p>
            <p className="text-[25px] xl:text-[36px] text-[#FFFFFF] mb-10 sm:mb-[88px]">
              We will strive for the widest possible introduction of the Cookie
              into our and third-party products, services and communities,
              developing its recognition and demand at the level of the most
              popular crypto assets.
            </p>
          </div>
        </div>
        <img
          className="absolute w-[1161px] -right-[20px] sm:right-0 bottom-0"
          src={cookieImg}
        />
      </div>
    </footer>
  );
}
