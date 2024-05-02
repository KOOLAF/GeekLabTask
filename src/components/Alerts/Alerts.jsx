/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Alet.css"
import { Filter } from "../Filter/Fillter";
export const Alert = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);

        const filtered = companies.filter((company) =>
            company.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCompanies(filtered);
    };
    const applyFilter = (selectedMarketCap, selectedRiskLevel) => {

        const filtered = companies.filter((company) =>
            company.marketCapSize === selectedMarketCap && company.risk === selectedRiskLevel
        );
        setFilteredCompanies(filtered);
        console.log(filteredCompanies);
    };
    useEffect(() => {
         console.log(filteredCompanies);
    }, [filteredCompanies])

    const companies = [
        { name: "Amazon", marketCap: 200, change: -2.5, risk: "High Risk", marketCapSize: "Micro" },
        { name: "Apple", marketCap: 300, change: 1.5, risk: "Low Risk", marketCapSize: "small" },
        { name: "Tesla", marketCap: 400, change: -2.5, risk: "High Risk", marketCapSize: "large" },
        { name: "Paypal", marketCap: 500, change: 2.5, risk: "Low Risk", marketCapSize: "Large" },
        { name: "visa", marketCap: 200, change: -2.5, risk: "High Risk", marketCapSize: "micro" },
        { name: "Hp", marketCap: 300, change: 1.5, risk: "Low Risk", marketCapSize: "small" },
        { name: "Amazon", marketCap: 200, change: -2.5, risk: "High Risk", marketCapSize: "micro" },
        { name: "Apple", marketCap: 300, change: 1.5, risk: "Low Risk", marketCapSize: "small" },
        { name: "Tesla", marketCap: 400, change: -2.5, risk: "High Risk", marketCapSize: "large" },
        { name: "Paypal", marketCap: 500, change: 2.5, risk: "Low Risk", marketCapSize: "large" },
        { name: "visa", marketCap: 200, change: -2.5, risk: "High Risk", marketCapSize: "micro" },
        { name: "Hp", marketCap: 300, change: 1.5, risk: "Low Risk", marketCapSize: "small" },
    ];

    const renderCompanies =
        filteredCompanies.length > 0 ? filteredCompanies : companies;

    return (
        <div className=" flex  gap-12 ">
            <div className="flex pt-4 flex-col gap-5">
                <div className="flex w-[174px] h-[72px] gap-5 justify-start">
                    <div>
                        <div className="h-[72px] w-[5px] bg-[#53ACFF]  rounded  " />
                    </div>
                    <div>
                        <p className=" font-bold text-white text-[48px] pl-2">ALERT</p>
                    </div>
                    <div className=" hidden lg:block pt-4">
                        <div className="mb-3 w-[650px] text-white h-[44px]">
                            <div className="relative mb-4 flex w-full  flex-wrap  items-center  bg-[#313131] rounded border border-solid border-neutral-300 ">
                                <input
                                    type="text"
                                    className="relative m-0 block flex-auto bg-[#313131] rounded border border-solid border-neutral-300  border-[#313131] px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-[#313131]"
                                    placeholder="Search by..."
                                    aria-label="Search"
                                    aria-describedby="button-addon2"
                                    onChange={handleSearchChange}
                                />
                                <img
                                    src="../../../images/sss.png"
                                    className=" w-[19.3px] h-[20.77px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 hidden lg:block">
                        <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26.38 20.6942L24.435 18.7491C23.9882 18.2681 23.7293 17.6425 23.7055 16.9864V13.157C23.7055 8.23345 20.4232 4.03934 14.5879 4.03934C8.7526 4.03934 5.47025 8.11189 5.47025 13.157V17.4119C5.45899 17.7967 5.3077 18.1641 5.04476 18.4452L2.79574 20.6942C2.56668 20.9187 2.4356 21.2246 2.43103 21.5452V25.9217C2.43103 26.2441 2.55911 26.5533 2.7871 26.7813C3.01508 27.0093 3.3243 27.1374 3.64672 27.1374H10.3938C10.5629 28.1272 11.0767 29.0254 11.8443 29.6729C12.6118 30.3205 13.5837 30.6756 14.5879 30.6756C15.5921 30.6756 16.564 30.3205 17.3315 29.6729C18.0991 29.0254 18.6129 28.1272 18.782 27.1374H25.5291C25.8515 27.1374 26.1607 27.0093 26.3887 26.7813C26.6167 26.5533 26.7448 26.2441 26.7448 25.9217V21.5452C26.7402 21.2246 26.6091 20.9187 26.38 20.6942Z"
                                fill="#53ACFF"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M25.4117 15.0588C29.5701 15.0588 32.9411 11.6878 32.9411 7.52941C32.9411 3.37103 29.5701 0 25.4117 0C21.2534 0 17.8823 3.37103 17.8823 7.52941C17.8823 11.6878 21.2534 15.0588 25.4117 15.0588Z"
                                fill="#118F4B"
                            />
                        </svg>
                    </div>

                    <div className=" lg:hidden flex gap-3  ml-  items-center ">
                        <img
                            src="../../../images/sss.png"
                            className=" w-[19.3px] h-[20.77px]"
                        />
                        <button
                            className=" 
                             w-[68px]  text-center hover:bg-[#4287C9] bg-[#53ACFF]  text-white font-bold  border border-blue-700 rounded"
                            onClick={() => document.getElementById("my_modal_3").showModal()}>
                            Filter
                        </button>
                        <dialog id="my_modal_3" className="  h-[591px] example  bg-black">
                            <div className=" grid  grid-cols-1">
                                <form method="dialog">

                                    <button className="btn text-white btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                        ✕
                                    </button>
                                </form>
                                <div className="   flex flex-col rounded-md  w-[500px]  gap-2 items-center bg-black">
                                    <div className=" mt-5 flex justify-center items-center">
                                        <p className="text-white font-semibold text-[24px]">Filters</p>
                                    </div>
                                    <div className="w-[378px] flex justify-between">
                                        <p className="text-[#909090]">Filters Applied</p>
                                        <p className="text-white text-[14px]">ClearAll</p>
                                    </div>
                                    <div className="bg-[#202020] w-[400px] border-[#313131] h-[75px] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <div className="bg-[#53acff] flex items-center justify-between pl-2 w-[86.39px] border rounded-lg border-[#313131]">
                                            <p className="text-[11.06px]">Real State</p>
                                            <svg
                                                className=""
                                                width="8"
                                                height="8"
                                                viewBox="0 0 8 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.38672 7L4.38672 4M4.38672 4L1.38672 1M4.38672 4L7.38672 1M4.38672 4L1.38672 7"
                                                    stroke="#202020"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="bg-[#202020] flex flex-col gap-2 w-[400px] border-[#313131] h-[565px] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <div className="flex justify-start ">
                                            <p className="text-white font-bold text-[15px] pt-5 ml-4">Stock</p>
                                        </div>
                                        <div className="  h-[27px] ml-4 flex justify-between  items-center rounded-md  w-[324px] bg-[#313131]">
                                            <p className="text-white ml-2"> $ Ticker</p>
                                            <img
                                                src="../../../images/search (1).png"
                                                className="w-[13px] h-[13px]"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex items-center ml-4 gap-2 pt-5">
                                            <svg
                                                width="8"
                                                height="7"
                                                viewBox="0 0 8 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.67836 6.39421L7.36433 0.458374H0L3.67836 6.39421Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <p className="text-white font-bold text-[15px] ">industry</p>
                                        </div>
                                        <div className=" flex gap-3">
                                            <div className=" bg-white  w-1 rounded-lg ml-4 h-[159px]"></div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center   hover:bg-[#53acff] rounded gap-2">
                                                    <img src="../../../images/Heart.png" />
                                                    <p className=" text-[12px] text-white">HealthCare</p>
                                                </div>

                                                <div className="flex items-center rounded hover:bg-[#53acff] gap-2">
                                                    <img src="../../../images/Triangle.png" />
                                                    <p className=" text-[12px] text-white">Materials</p>
                                                </div>
                                                <div className="flex items-center hover:bg-[#53acff] gap-2">
                                                    <img src="../../../images/Energy.png" />
                                                    <p className=" text-[12px]  text-white">Energy</p>
                                                </div>
                                                <div className="flex items-center rounded hover:bg-[#53acff] gap-2">
                                                    <img src="../../../images/card.png" />
                                                    <p className=" text-[12px] text-white">Consumer discretionary</p>
                                                </div>
                                                <div className="flex items-center rounded hover:bg-[#53acff] gap-2">
                                                    <img src="../../../images/cart.png" />
                                                    <p className=" text-[12px] text-white">Consumer staples</p>
                                                </div>
                                                <div className="flex items-center rounded hover:bg-[#53acff] gap-2">
                                                    <img src="../../../images/home.png" />
                                                    <p className=" text-white  text-[12px]">Real estate</p>
                                                </div>
                                            </div>
                                            <div className=" bg-white  w-1 rounded-lg ml-4 h-[123px]"></div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center rounded hover:bg-[#53acff] gap-2">
                                                    <img src="../../../images/it.png" />
                                                    <p className=" text-[12px] text-white">IT</p>
                                                </div>

                                                <div className="flex items-center rounded hover:bg-[#53acff] gap-2">
                                                    <img src="../../../images/com.png" />
                                                    <p className=" text-[12px] text-white">Networks</p>
                                                </div>
                                                <div className="flex items-center rounded hover:bg-[#53acff] gap-2">
                                                    <img src="../../../images/XMLID_931_.png" />
                                                    <p className=" text-[12px] text-white">Industrials</p>
                                                </div>
                                                <div className="flex items-center rounded hover:bg-[#53acff] gap-2">
                                                    <img src="../../../images/Util.png" />
                                                    <p className=" text-[12px] text-white">Utilities</p>
                                                </div>
                                                <div className="flex items-center rounded hover:bg-[#53acff] gap-2">
                                                    <img src="../../../images/alarm.png" />
                                                    <p className=" text-[12px] text-white">Financials</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" flex justify-around ">
                                            <div className="flex items-center ml-4  gap-2 pt-5">
                                                <svg
                                                    width="8"
                                                    height="7"
                                                    viewBox="0 0 8 7"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.67836 6.39421L7.36433 0.458374H0L3.67836 6.39421Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                                <p className="text-white font-bold text-[15px] ">Market cap</p>
                                            </div>
                                            <div className="flex items-center ml-4 gap-2 pt-5">
                                                <svg
                                                    width="8"
                                                    height="7"
                                                    viewBox="0 0 8 7"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M3.67836 6.39421L7.36433 0.458374H0L3.67836 6.39421Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                                <p className="text-white font-bold text-[15px] ">Risk Level</p>
                                            </div>
                                        </div>
                                        <div className=" flex justify-around ">
                                            <div className=" flex flex-col">
                                                <div className=" flex items-center">
                                                    <label className="">
                                                        <input
                                                            type="radio"
                                                            className="form-radio h-3 w-3 text-gray-600"
                                                            name="market cap"
                                                        />
                                                        <span className="ml-2 text-sm text-white">Micro</span>
                                                    </label>
                                                </div>
                                                <div className=" flex items-center">
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="radio"
                                                            className="form-radio h-3 w-3 text-gray-600"
                                                            name="market cap"
                                                        />
                                                        <span className="ml-2 text-sm text-white">small</span>
                                                    </label>
                                                </div>
                                                <div className=" flex items-center">
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="radio"
                                                            className="form-radio h-3 w-3 text-gray-600"
                                                            name="market cap"
                                                        />
                                                        <span className="ml-2 text-sm text-white">Large</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className=" flex flex-col">
                                                <div className=" flex items-center">
                                                    <label className="">
                                                        <input
                                                            type="radio"
                                                            className="form-radio h-3 w-3 text-gray-600"
                                                            name="risk level"
                                                        />
                                                        <span className="ml-2 text-sm text-white">low Risk </span>
                                                    </label>
                                                </div>
                                                <div className=" flex items-center">
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="radio"
                                                            className="form-radio h-3 w-3 text-gray-600"
                                                            name="risk level"
                                                        />
                                                        <span className="ml-2 text-sm text-white"> Risk</span>
                                                    </label>
                                                </div>
                                                <div className=" flex items-center">
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="radio"
                                                            className="form-radio  h-3 w-3 text-white"
                                                            name="risk level"
                                                        />
                                                        <span className="ml-2 text-sm text-white">High Risk</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" flex justify-around ">
                                            <div className="flex items-center flex-col ml-4  gap-2 pt-5">
                                                <div>
                                                    <p className="text-white font-bold text-[15px] ">strategy</p>
                                                </div>

                                                <div className=" flex flex-col justify-center items-center">
                                                    <div className="text-[#545454]">Big Option Buys</div>
                                                    <div className=" text-white rounded-md bg-[#53ACFF]">
                                                        Merger Arbitrage
                                                    </div>
                                                    <div className="text-[#545454]">Short Reports
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center flex-col ml-4  gap-2 pt-5">
                                                <div>
                                                    <p className="text-white font-bold text-[15px] ">assets</p>
                                                </div>

                                                <div className=" flex flex-col">
                                                    <div className="text-[#545454]">Stocks</div>
                                                    <div className=" text-white rounded-md bg-[#53ACFF]">Options</div>
                                                    <div className="text-[#545454]">Futures</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" flex justify-center pt-6 items-center">
                                        <button type="button" className="text-white font-bold w-[161px] text-[20px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                            Apply
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>

                {renderCompanies.map((company, index) => (
                    <div
                        key={index}
                        className="w-full lg:w-[880px] min-w-[293px] min-h-[37px]: pl-5 justify-center items-center grid grid-cols-4 gap-4 bg-[#313131] border-[#313131] h-auto sm:h-[59px] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-center">
                            <img src="../../../images/name.png" alt="" />
                            <div className="ml-2 sm:ml-12 text-white w-auto h-[22px] sm:w-[42px]">
                                {company.name}
                            </div>
                            <div className="hidden sm:block border rounded-md ml-2 sm:ml-12 border-[#414040] bg-[#414040]"></div>
                        </div>
                        <div className="flex justify-center">
                            <img src="../../../images/marketCap.png" alt="" />
                            <div className="ml-2 sm:ml-12 text-white w-auto h-[22px] sm:w-[42px]">
                                {company.marketCap}
                            </div>
                            <div className="hidden sm:block border rounded-md ml-2 sm:ml-12 border-[#414040] bg-[#414040]"></div>
                        </div>
                        <div className="flex justify-center">
                            <img src="../../../images/Vector (1).png" alt="" />
                            <div className="ml-2 sm:ml-12 text-[#A43C1B] w-auto h-[22px] sm:w-[42px]">
                                {company.change}
                            </div>
                            <div className="hidden sm:block border rounded-md ml-2 sm:ml-12 border-[#414040] bg-[#414040]"></div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src="../../../images/Group 63.png"
                                className=" max-w-[31.65px] h-[17.34px]"
                                alt=""
                            />
                            <div className="ml-2 sm:ml-12 text-white  sm:w-auto">
                                {company.risk}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Filter applyFilter={applyFilter} />
        </div>
    );
};
