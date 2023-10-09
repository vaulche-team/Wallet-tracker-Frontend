import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
// AiOutlineFile
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import { AiOutlineFile } from "react-icons/ai";

const Historytable = () => {
  return (
    <>
     <div className="container mx-auto p-5 h-screen">
        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="mb-2">
              <h1 className="text-[#dcdcdc] font-bold">October 2,2023</h1>
            </div>

            <div className="flex justify-between border-t border-b border-gray-500 text-[#dcdcdc]">
              <div className="px-4 py-2">
                <div className="flex items-center">
                  <div className="mr-2 ">
                    <div className="relative">
                      <AiOutlineArrowUp
                        style={{
                          fontSize: "2rem",
                          borderRadius: "50%",
                          border: "1px solid black",
                          padding: "5px",
                          color: "black",
                        }}
                      />
                    </div>
                    <div className="absolute w-[14px] h-[14px] -mt-[20px] ml-5">
                      <img
                        className="rounded-sm border-2 border-[#fff]"
                        src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                      />
                    </div>
                  </div>

                  <div className="font-base text-sm text-[#dcdcdc]">
                    <div className="">Send</div>
                    11:01&nbsp;AM
                  </div>
                </div>
              </div>
              <div className=" px-4 py-2 text-[#dcdcdc]">
                <div className="flex items-center gap-3">
                  <div className="w-[35px] h-[35px]">
                    <img src="https://token-icons.s3.amazonaws.com/eth.png" />
                  </div>
                  <div className="">
                    <div>
                      -0.85 <span className="text-[#8db2e5]">ETH</span>
                    </div>
                    <div>$1694.32</div>
                  </div>
                </div>
              </div>

              <div className=" px-4 py-2 text-[#dcdcdc] right-0">
                <div className="">To</div>
                <div className="flex gap-2">
                  <div className=" rounded-sm">
                    <img
                      className="w-[20px] h-[20px]"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAA55JREFUeF7t3SFylEEQhuFZTVU8ErnH4Ao5ACKGM+DiuEUEF0FyhMhIPAU6VM7wiE7XvvG982/PO19/Pf9k9vJ4f3098Pf7xxNEe+jd98/+IfAJf779hGgP/fjlgT7kEgCUvxMAKYARhNEpQCWAEKoEUPpOJSATmAnENWThdQF1AUYQRtcF1AUgQhZeF1AXQATVBVD66gJOXUBdAK4hC68LqAswgjC6LqAuABGy8LqAugAi6PL17y86D0Cjn3O0hk9L8PbnDwAkOABuPIEBEACUgekSVgmg6dvvYQIgAOoChIE8gGSvNnD8SFkl4MYBDoAAyAMIA3kAyV4eIA+wfQVtf/48wI0rWAAEQCZQGLj5EqAnUv5dXyT/4yZKAfjw/Im+vx7K5RIQAHZBRQCkACmAZGD6fXolAO+oyQPkAUQAMoF4LD8TSPj5iaBMYCaQEKwNHL6nLxOYCaQVXAmoBBBAlYBKAAFUF0Dpqws4vQvoXQCtoXYC2wkkgHoXYNf1j98SpiWE6HkHweriNX8BMAxBAOBG0vD88fABEAAEUSWA0jcfnAKkAERhCkDpmw9OAVIAojAFoPTNB6cAKQBRmAJQ+uaDU4AUgChMASh988EpQApAFKYAlL754BQgBSAKWQH09wKmz8VT9t5B8PSJKD4UGgBGUQDgDRmW/vnoAAgAolDPRFYCKP0enAKkAERRCkDpmw9OAVIAojAFoPTNB6cAKQBRmAJQ+uaDU4AUgChMASh988EpQApAFKYAlL754BQgBSAKWQEe76+v8gTTJ1p0fPnub7F6IEOfX8dffz+AJjAAUgBiQFegAqzjpwA0/ZWAM02wjo/znwfQCVAJ0/EDIA9ADEwDrOPnAWj68wB5APzHFi1hKQD+Zg4KQCZwmmAdPwAygcSASrACrONnAmn6M4GZwEygXVeuEqYSigKQCdQJCIDZBbTeA+iJGlWA6Z990wUUAEhAAOBGjBKcAjwQwikApe+cFCAFIISmTXQKQNOXAoxvBOUB8gC4hi08D5AHIILyALiXXgmoBNAK1OBKQCWAGKoEVAIIIN1JbR+A0t8+QPsA+O/tlYBKAGnQeAnY3oZR9s85278/e4DtCQgAPBYeAC/KEMXrPkQKQOmvBKyvgTj/679/CoAEbC+BARAAdk3c9hWA818JCIC6AF1EFK9tEA3eRtD+NigA2ggiBraXwLoAmv79ChgAAVAbKAxUAq672yCZ/LfY7QD8B0slxQ3XoKCaAAAAAElFTkSuQmCC"
                    />
                  </div>
                  <div className="">
                    <p>0xc682...436</p>
                  </div>
                  <div className="">
                    <GoArrowUpRight size="20px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between border-t border-b border-gray-500  text-[#dcdcdc]">
              <div className=" px-4 py-2">
                <div className="flex items-center">
                  <div className="mr-2 ">
                    <div className="relative">
                      <HiOutlineArrowDownTray
                        style={{
                          fontSize: "2rem",
                          borderRadius: "50%",
                          border: "1px solid black",
                          padding: "5px",
                          color: "black",
                        }}
                      />
                    </div>
                    <div className="absolute w-[14px] h-[14px] -mt-[20px] ml-5">
                      <img
                        className="rounded-sm border-2 border-[#fff]"
                        src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                      />
                    </div>
                  </div>

                  <div className="font-base text-sm text-[#dcdcdc]">
                    <div className="">Deposite</div>
                    9:30&nbsp;AM
                  </div>
                </div>
              </div>
              <div className=" px-4 py-2 text-[#dcdcdc]">
                <div className="flex items-center gap-3">
                  <div className="w-[35px] h-[35px]">
                    <img src="https://token-icons.s3.amazonaws.com/eth.png" />
                  </div>
                  <div className="">
                    <div>
                      -0.85 <span className="text-[#8db2e5]">ETH</span>
                    </div>
                    <div>$1694.32</div>
                  </div>
                </div>
              </div>
              <div className=" px-4 py-2 text-[#dcdcdc]">
                <div className="flex items-center gap-3">
                  <div className="w-[35px] h-[35px]">
                    <img src="https://token-icons.s3.amazonaws.com/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png" />
                  </div>
                  <div className="">
                    <div>
                      -0.85 <span className="text-[#c76ed7]">WETH</span>
                    </div>
                    <div>$100.16</div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 text-[#dcdcdc] ">
                <div className="">Application</div>
                <div className="flex gap-1 mt-1">
                  <div className=" rounded-sm">
                    <img
                      className="w-[20px] h-[20px]"
                      src="https://token-icons.s3.amazonaws.com/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
                    />
                  </div>
                  <div className="">
                    <p>Wrapped ETH</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between border-t border-b border-gray-500 text-[#dcdcdc]">
              <div className="px-4 py-2">
                <div className="flex items-center">
                  <div className="mr-2 ">
                    <div className="relative">
                      <AiOutlineFile
                        style={{
                          fontSize: "2rem",
                          borderRadius: "50%",
                          border: "1px solid orange",
                          padding: "5px",
                          color: "orange",
                        }}
                      />
                    </div>
                    <div className="absolute w-[14px] h-[14px] -mt-[20px] ml-5">
                      <img
                        className="rounded-sm border-2 border-[#fff]"
                        src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                      />
                    </div>
                  </div>

                  <div className="font-base text-sm text-[#dcdcdc]">
                    <div className="">Deposite</div>
                    9:30&nbsp;AM
                  </div>
                </div>
              </div>
              <div className=" px-4 py-2 text-[#dcdcdc] ">
                <div className="">Application</div>
                <div className="flex gap-1 mt-1">
                  <div className=" rounded-sm">
                    <img
                      className="w-[20px] h-[20px]"
                      src="https://token-icons.s3.amazonaws.com/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
                    />
                  </div>
                  <div className="">
                    <p>Wrapped ETH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Historytable;
