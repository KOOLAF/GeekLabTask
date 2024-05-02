/* eslint-disable react/prop-types */

export const Filter = ({ applyFilter }) => {

    return (
        <div className="hidden lg:block">
            <div className="mt-5 h-[780px]  flex flex-col rounded-md  w-[500px]  gap-2 items-center bg-black">
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
                                        value="micro" />
                                    <span className="ml-2 text-sm text-white">Micro</span>
                                </label>
                            </div>
                            <div className=" flex items-center">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio h-3 w-3 text-gray-600"
                                        name="market cap"
                                        value="small"
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
                                        value="large"
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
                                        value='Low Risk'
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
                                        value="Mid Risk"
                                    />
                                    <span className="ml-2 text-sm text-white"> mid Risk</span>
                                </label>
                            </div>
                            <div className=" flex items-center">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio  h-3 w-3 text-white"
                                        name="risk level"
                                        value="High Risk"
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
                    <button type="button" onClick={() => {
                        const selectedMarketCap = document.querySelector('input[name="market cap"]:checked').value;
                        const selectedRiskLevel = document.querySelector('input[name="risk level"]:checked').value;
                        console.log(selectedMarketCap);
                        applyFilter(selectedMarketCap, selectedRiskLevel);
                    }} className="text-white font-bold w-[161px] text-[20px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Apply
                    </button>

                </div>
            </div>
        </div>
    );

}