import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Text,
} from "@chakra-ui/react";
// BiDotsHorizontalRounded
import { BsThreeDots } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const Assets = () => {
  return (
    <>
      <div className="flex justify-between mt-5 mb-5">
        <h1 className="font-bold text-[25px] text-[#DCDCDC] ">Assets</h1>
        <div className="flex">
          <div className="border border-[#555555] p-1 rounded-lg mr-3 bg-[#1049D5]">
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12.25v-3.5H2M10 1.75v3.5h4"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>

          <div className="border border-[#555555] text-[#DCDCDC] rounded-lg">
            <div className="flex gap-4 items-center m-2 text-sm ">
              <h1>By plateform</h1>
              <h1>By position</h1>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="overflow-x-auto" style={{ borderRadius: "5px" }}>
        <table className="min-w-full border-2 border-[#555555] ">
          <thead>
            <tr>
              <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-[#dcdcdc] uppercase border-b border-[#555555]">
                Asset
              </th>
              <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-[#dcdcdc] uppercase border-b border-[#555555]">
                Price
              </th>
              <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-[#dcdcdc] uppercase border-b border-[#555555]">
                Balance
              </th>
              <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-[#dcdcdc] uppercase border-b border-[#555555]">
                Value
              </th>
           
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="text-[#dcdcdc] border-b border-[#555555] flex items-center text-sm">
                <img
                  src="https://token-icons.s3.amazonaws.com/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
                  alt="WrappedEthereum"
                  className="w-6 h-6 mr-2"
                />
                WrappedEthereum
              </td>
              <td className="text-[#dcdcdc] border-b border-[#555555] text-sm">
                $1.6320
              </td>
              <td className="text-[#dcdcdc] border-b border-[#555555] text-sm">
                0.044
              </td>
              <td className="text-[#dcdcdc] border-b border-[#555555] text-sm">
                <div>
                  <h1>$72.119</h1>
                </div>
              </td>
            </tr> 
          </tbody>
        </table>
      </div> */}

      <div className="overflow-x-auto" style={{ borderRadius: "5px" }}>
        <table className="min-w-full border-2 border-[#555555] ">
          <thead>
            <tr>
              <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-[#dcdcdc] uppercase border-b border-[#555555]">
                Assets
              </th>
              <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-[#dcdcdc] uppercase border-b border-[#555555]">
                Price
              </th>
              <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-[#dcdcdc] uppercase border-b border-[#555555]">
                Balance
              </th>
              <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-[#dcdcdc] uppercase border-b border-[#555555]">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap text-[#dcdcdc] border-b border-[#555555]">
                <div className="flex gap-2 items-center">
                  <div>
                    <img
                      src="https://token-icons.s3.amazonaws.com/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
                      alt="WrappedEthereum"
                      className="w-10 h-10 mr-2"
                    />
                  </div>
                  <div className="flex-col">
                    <div className="flex gap-2">
                      <span>Wrapped Ethereum </span>
                      <span className="bg-[#f0f0f2] text-[15px] rounded">
                        62.5%
                      </span>
                    </div>
                    <div className="flex">
                      <img
                        src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                        alt="WrappedEthereum"
                        className=" w-[15px] h-[15px] mr-2"
                      />
                  
                        <span className="text-[13px]">Ethereum. Wallet</span>
                        
              
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-[#dcdcdc] border-b border-[#555555]">
                $1.6320
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-[#dcdcdc] border-b border-[#555555]">
                0.044
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-[#dcdcdc] border-b border-[#555555]">
                <div className="">
                  <div>
                    <h1>$72.119</h1>
                  </div>
                  <div className="text-sm text-[#01a643]">+0.04% ($0.00)</div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap text-[#dcdcdc] border-b border-[#555555]">
                <div className="flex gap-2 items-center">
                  <div>
                    <img
                      src="https://token-icons.s3.amazonaws.com/eth.png"
                      alt="WrappedEthereum"
                      className="w-10 h-10 mr-2"
                    />
                  </div>
                  <div className="flex-col">
                    <div className="flex gap-2">
                      <p>Ethereum</p>
                      <span className="bg-[#f0f0f2] text-[15px] rounded">
                          62.5%
                        </span>
                    </div>
                    <div className="flex">
                      <img
                        src="https://chain-icons.s3.amazonaws.com/ethereum.png"
                        alt="WrappedEthereum"
                        className=" w-[15px] h-[15px] mr-2"
                      />
                      <span className="text-[13px]">Ethereum. Wallet</span>
                      
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-[#dcdcdc] border-b border-[#555555]">
                $1.6320
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-[#dcdcdc] border-b border-[#555555]">
                0.044
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-[#dcdcdc] border-b border-[#555555]">
                <div className="">
                  <div>
                    <h1>$72.119</h1>
                  </div>
                  <div className="text-sm text-[#01a643]">+0.04% ($0.00)</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Assets;
