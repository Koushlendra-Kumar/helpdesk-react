import techSupport from "../assets/images/soporte-tecnico-icono-png-1 2.png";
import techSupport2 from "../assets/images/69114 2.png";

const Dashboard = () => {
  const ticketsStatus = [
    {
      label: "Total tickets",
      count: 12,
      color: "bg-[#2F82FF]",
    },
    {
      label: "Total Solved",
      count: 8,
      color: "bg-[#0BFF68]",
    },
    {
      label: "Total Awaiting Approval",
      count: 2,
      color: "bg-[#FE594E]",
    },
    {
      label: "Total in Progress",
      count: 2,
      color: "bg-[#FCFF6C]",
    },
  ];
  return (
    <div className="w-full">
      <div className="px-6 py-4 w-full">
        <h1 className="text-xl my-2">Dashboard</h1>
        <div className="flex gap-4">
          {ticketsStatus.map(({ label, count, color }, index) => (
            <div
              key={index}
              className={`w-1/4 ${color} rounded-xl shadow-[4px_4px_gray] flex flex-col justify-between items-center`}
            >
              <div className="mt-2  text-center text-xs">{label}</div>
              <div className="mb-4 text-5xl ">{count}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-6 px-6 py-4 w-full">
        <div className="bg-[#55D6C2] flex items-center justify-center py-6 px-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="269"
            height="254"
            viewBox="0 0 269 254"
            fill="none"
          >
            <path
              d="M184.844 18.564C184.844 13.7682 186.612 9.16883 189.759 5.7777C192.906 2.38656 197.174 0.481445 201.625 0.481445H235.188C239.638 0.481445 243.907 2.38656 247.054 5.7777C250.201 9.16883 251.969 13.7682 251.969 18.564V235.554H260.359C262.585 235.554 264.719 236.507 266.292 238.203C267.866 239.898 268.75 242.198 268.75 244.596C268.75 246.994 267.866 249.293 266.292 250.989C264.719 252.684 262.585 253.637 260.359 253.637H8.64062C6.41529 253.637 4.2811 252.684 2.70756 250.989C1.13401 249.293 0.25 246.994 0.25 244.596C0.25 242.198 1.13401 239.898 2.70756 238.203C4.2811 236.507 6.41529 235.554 8.64062 235.554H17.0312V181.307C17.0312 176.511 18.7993 171.912 21.9464 168.521C25.0935 165.129 29.3618 163.224 33.8125 163.224H67.375C71.8257 163.224 76.094 165.129 79.2411 168.521C82.3882 171.912 84.1562 176.511 84.1562 181.307V235.554H100.938V108.977C100.938 104.181 102.706 99.5815 105.853 96.1904C109 92.7993 113.268 90.8941 117.719 90.8941H151.281C155.732 90.8941 160 92.7993 163.147 96.1904C166.294 99.5815 168.062 104.181 168.062 108.977V235.554H184.844V18.564ZM201.625 235.554H235.188V18.564H201.625V235.554ZM151.281 235.554V108.977H117.719V235.554H151.281ZM67.375 235.554V181.307H33.8125V235.554H67.375Z"
              fill="#05386B"
            />
          </svg>
        </div>
        <div className="">
          <div className="flex gap-6 items-center justify-between bg-[#55D6C2] px-8 py-6">
            <div className="flex flex-col items-center ">
              <img src={techSupport} alt="" />
              <div>3</div>
              <div>Technical Support</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={techSupport2} alt="" />
              <div>4</div>
              <div>Operation Team</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 rounded-xl bg-[#55D6C2] px-8 py-2">
            <div>Customer Feedback </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="36"
                viewBox="0 0 32 36"
                fill="none"
              >
                <path
                  d="M14.2834 1.2523L10.3776 10.5605L1.6389 12.058C0.071804 12.3251 -0.556232 14.596 0.580214 15.8966L6.90245 23.1379L5.40712 33.3671C5.13796 35.2161 6.79478 36.6011 8.18244 35.7363L16 30.9064L23.8176 35.7363C25.2052 36.594 26.862 35.2161 26.5929 33.3671L25.0976 23.1379L31.4198 15.8966C32.5562 14.596 31.9282 12.3251 30.3611 12.058L21.6224 10.5605L17.7166 1.2523C17.0168 -0.406871 14.9892 -0.427962 14.2834 1.2523Z"
                  fill="#EDF5E1"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="36"
                viewBox="0 0 32 36"
                fill="none"
              >
                <path
                  d="M14.2834 1.2523L10.3776 10.5605L1.6389 12.058C0.071804 12.3251 -0.556232 14.596 0.580214 15.8966L6.90245 23.1379L5.40712 33.3671C5.13796 35.2161 6.79478 36.6011 8.18244 35.7363L16 30.9064L23.8176 35.7363C25.2052 36.594 26.862 35.2161 26.5929 33.3671L25.0976 23.1379L31.4198 15.8966C32.5562 14.596 31.9282 12.3251 30.3611 12.058L21.6224 10.5605L17.7166 1.2523C17.0168 -0.406871 14.9892 -0.427962 14.2834 1.2523Z"
                  fill="#EDF5E1"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="36"
                viewBox="0 0 32 36"
                fill="none"
              >
                <path
                  d="M14.2834 1.2523L10.3776 10.5605L1.6389 12.058C0.071804 12.3251 -0.556232 14.596 0.580214 15.8966L6.90245 23.1379L5.40712 33.3671C5.13796 35.2161 6.79478 36.6011 8.18244 35.7363L16 30.9064L23.8176 35.7363C25.2052 36.594 26.862 35.2161 26.5929 33.3671L25.0976 23.1379L31.4198 15.8966C32.5562 14.596 31.9282 12.3251 30.3611 12.058L21.6224 10.5605L17.7166 1.2523C17.0168 -0.406871 14.9892 -0.427962 14.2834 1.2523Z"
                  fill="#EDF5E1"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="36"
                viewBox="0 0 32 36"
                fill="none"
              >
                <path
                  d="M14.2834 1.2523L10.3776 10.5605L1.6389 12.058C0.071804 12.3251 -0.556232 14.596 0.580214 15.8966L6.90245 23.1379L5.40712 33.3671C5.13796 35.2161 6.79478 36.6011 8.18244 35.7363L16 30.9064L23.8176 35.7363C25.2052 36.594 26.862 35.2161 26.5929 33.3671L25.0976 23.1379L31.4198 15.8966C32.5562 14.596 31.9282 12.3251 30.3611 12.058L21.6224 10.5605L17.7166 1.2523C17.0168 -0.406871 14.9892 -0.427962 14.2834 1.2523Z"
                  fill="#EDF5E1"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="36"
                viewBox="0 0 32 36"
                fill="none"
              >
                <path
                  d="M14.2834 1.2523L10.3776 10.5605L1.6389 12.058C0.071804 12.3251 -0.556232 14.596 0.580214 15.8966L6.90245 23.1379L5.40712 33.3671C5.13796 35.2161 6.79478 36.6011 8.18244 35.7363L16 30.9064L23.8176 35.7363C25.2052 36.594 26.862 35.2161 26.5929 33.3671L25.0976 23.1379L31.4198 15.8966C32.5562 14.596 31.9282 12.3251 30.3611 12.058L21.6224 10.5605L17.7166 1.2523C17.0168 -0.406871 14.9892 -0.427962 14.2834 1.2523Z"
                  fill="#EDF5E1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
