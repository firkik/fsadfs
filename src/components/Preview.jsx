import cookieImg from "../assets/cookie.png";

export default function Preview() {
  return (
    <section className="md:grid relative container mx-auto md:grid-cols-[1fr,1fr] items-center gap-[30px] md:gap-[100px] pt-[150px] sm:py-[100px]">
      <img
        className="w-[200px] md:w-auto absolute md:static right-0 bottom-0"
        src={cookieImg}
      />
      <div className="relative z-[1] grid gap-[40px] sm:gap-0">
        <h1 className="font-medium text-[40px] sm:text-[66px] xl:text-[96px] sm:mb-7">
          Cookie Token
        </h1>
        <p className="text-[28px] xl:text-[48px] text-[#E0E0E0] mb-10 sm:mb-[88px]">
          A meme token on the TON blockchain with open functionality! A fair
          distribution model, a Fair Launch on Ton Raffles, no private or public
          sales, offers by investors, etc.
        </p>
        <a
          href="#about"
          className="px-[50px] w-fit transition hover:bg-white hover:text-[#000000] active:bg-[#735B05] active:text-[#ffffff] focus:bg-white focus:text-[#000000] font-medium py-2 rounded-[50px] bg-[#735B05] text-[28px] lg:text-[48px]"
        >
          About coin
        </a>
      </div>
    </section>
  );
}
