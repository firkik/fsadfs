import cookieBg from "../assets/cookie-bg.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { SOCIALS } from "../utils/consts";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Fairlaunch", "DEXs kisting", "Airdrop", "Team", "Reserve"],
  datasets: [
    {
      label: "% of",
      data: [35, 22.05, 10, 22.95, 10],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(153, 102, 255)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
    },
  ],
};

export default function Tokenomics() {
  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${cookieBg})`,
        backgroundSize: "100% 100%",
      }}
      className="mb-20 sm:mb-0"
    >
      <div className="container mx-auto">
        <h1 className="font-medium text-[34px] text-center sm:text-[64px] mb-20 md:mb-[200px]">
          Cookie Token Tokenomics
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-20 2xl:gap-[160px]">
          <div className="flex flex-col md:flex-row items-center gap-10 sm:gap-20">
            <div className="w-[280px] sm:w-[300px] mx-auto">
              <Pie
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                data={data}
              />
            </div>
            <div>
              <ul className="text-[25px] xl:text-[40px] mb-10">
                <li className="flex items-center gap-4 whitespace-nowrap">
                  <i className="block w-[20px] min-w-[20px] rounded-[50%] h-[20px] bg-[#05d0c4]" />
                  Fairlaunch (35%)
                </li>
                <li className="flex items-center gap-4 whitespace-nowrap">
                  <i className="block w-[20px] min-w-[20px] rounded-[50%] h-[20px] bg-[#ffdf8c]" />
                  DEXs listing (22.05%)
                </li>
                <li className="flex items-center gap-4 whitespace-nowrap">
                  <i className="block w-[20px] min-w-[20px] rounded-[50%] h-[20px] bg-[#af7eff]" />
                  Airdrop (10%)
                </li>
                <li className="flex items-center gap-4 whitespace-nowrap">
                  <i className="block w-[20px] min-w-[20px] rounded-[50%] h-[20px] bg-[#f382d4]" />
                  Team (22.95%)
                </li>
                <li className="flex items-center gap-4 whitespace-nowrap">
                  <i className="block w-[20px] min-w-[20px] rounded-[50%] h-[20px] bg-[#ffdf8c]" />
                  Reserve (10%)
                </li>
              </ul>
              <a
                href={SOCIALS.locks}
                target="_blanck"
                className="px-[50px] w-fit transition hover:bg-white hover:text-[#000000] active:bg-[#735B05] active:text-[#ffffff] focus:bg-white focus:text-[#000000] font-medium py-2 rounded-[50px] bg-[#735B05] text-[28px] lg:text-[48px]"
              >
                Links to locks
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[100px] ">
            <p className="text-[25px] xl:text-[36px]">
              Tokens allocated to the team will also be spent on development and
              promotion. And the tokens allocated to Reserve will either be
              burned or added to the liquidity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
