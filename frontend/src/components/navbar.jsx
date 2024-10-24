import React from "react";
import { useContext, useState } from "react";
import { DataContext } from "./DataContext";
import {
  ArrowLeftRight,
  ChevronDown,
  ChevronRight,
  Wallet,
  X,
  Copy,
  CircleAlert,
} from "lucide-react";
import Profile from "../assets/pfp.png";
import ERC from "../assets/ETH3.png";
import BSC from "../assets/bsc.png";
import Base from "../assets/base.png";
import Arb from "../assets/arb.png";
import ETH from "../assets/ETH.png";
import BRETT from "../assets/brett.png";
import PEOPLE from "../assets/people.png";
import USDT from "../assets/USDT.png";
import USDC from "../assets/USDC.png";
import BNB from "../assets/BNB.png";

function navbar() {
  const [futures, setFutures] = useState(true);
  const [spot, setSpot] = useState(false);
  const [isModalOpenTransfer, setIsModalOpenTransfer] = useState(false);
  const [isModalOpenDeposite, setIsModalOpenDeposite] = useState(false);
  const [modalDeposite, setModalDeposite] = useState(true);
  const [modalWithdraw, setModalWithdraw] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [network, setNetwork] = useState("Select");
  const [asset, setAsset] = useState("Select");
  const [assetClicked, setAssetClicked] = useState(false);
  const [networkClicked, setNetworkClicked] = useState(false);
  const [address, setAddress] = useState();
  const [amount, setAmount] = useState();

  const { setWalletHovered, setLoginHovered, setFuturetrade, setSpottrade } =
    useContext(DataContext);

  const networkOptions = [
    { id: 1, name: "ERC-20", imgsrc: ERC },
    { id: 2, name: "BSC", imgsrc: BSC },
    { id: 3, name: "Base", imgsrc: Base },
    { id: 4, name: "Arbitrum One", imgsrc: Arb },
  ];

  const assetOptions = [
    { id: 1, name: "ETH", imgsrc: ETH, amt: 0.0 },
    { id: 2, name: "BRETT", imgsrc: BRETT, amt: 0.0 },
    { id: 3, name: "PEOPLE", imgsrc: PEOPLE, amt: 0.0 },
    { id: 4, name: "USDT", imgsrc: USDT, amt: 0.0 },
    { id: 5, name: "USDC", imgsrc: USDC, amt: 0.0 },
    { id: 6, name: "BNB", imgsrc: BNB, amt: 0.0 },
  ];

  return (
    <div className="text-white h1 flex items-center justify-between px-10">
      <div className="flex cursor-pointer">
        <div
          className={
            futures
              ? "bg-gray-400 px-2 py-2 md:px-4 md:py-3 rounded-md "
              : "bg-zinc-800 px-2 py-2 md:px-4 md:py-3 rounded-l-md"
          }
          onClick={() => {
            setFutures(true);
            setSpot(false);
            setFuturetrade(true);
            setSpottrade(false);
          }}
        >
          Futures Trading
        </div>
        <div
          className={
            spot
              ? "bg-gray-400 px-2 py-2 md:px-4 md:py-3 rounded-md"
              : "bg-zinc-800 px-2 py-2 md:px-4 md:py-3 rounded-r-md"
          }
          onClick={() => {
            setFutures(false);
            setSpot(true);
            setSpottrade(true);
            setFuturetrade(false);
          }}
        >
          Spot Trading
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => {
            setIsModalOpenTransfer(true);
            setLoginHovered(false);
            setWalletHovered(false);
          }}
          className="p-2 md:p-3 flex gap-2 bg-gradient-to-l from-violet-600 to-indigo-400 rounded-md "
        >
          <ArrowLeftRight /> Transfer
        </button>
        <button
          onClick={() => {
            setIsModalOpenDeposite(true);
            setLoginHovered(false);
            setWalletHovered(false);
          }}
          className="p-2 md:p-3 flex gap-2 bg-blue-300 rounded-md bg-gradient-to-l from-violet-600 to-indigo-400"
        >
          <Wallet />
          Deposit
        </button>
        <a
          onMouseEnter={() => {
            setWalletHovered(true);
            setLoginHovered(false);
          }}
          className={`hover:text-blue-500 cursor-pointer `}
        >
          Wallets
        </a>
        <button
          onMouseEnter={() => {
            setLoginHovered(true);
            setWalletHovered(false);
          }}
          className={`bg-gradient-to-b from-indigo-950 to-indigo-900 p-2 md:p-3 rounded-full flex gap-1 items-center `}
        >
          <img className="h-7 rounded-full" src={Profile} alt="img" />
          Login <ChevronDown size={18} />
        </button>
      </div>

      {isModalOpenTransfer && (
        <div className="fixed inset-0 bg-black bg-opacity-35 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white text-black p-2 md:py-5 md:px-8 rounded-md flex flex-col gap-4">
            <div className="flex items-center justify-between w-80">
              <div className="font-semibold text-3xl">USDT Transfer</div>
              <X
                onClick={() => {
                  setIsModalOpenTransfer(false);
                }}
                className="text-gray-600 cursor-pointer"
                size={20}
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="text-xl">Mode :</div>
              <div className="w-2/3">
                <select
                  className="bg-black w-2/3 text-white rounded-md py-1 px-2 "
                  onChange={(event) => {
                    setSelectedOption(event.target.value);
                  }}
                >
                  <option value="">select</option>
                  <option value="">Futures -{`>`} Spot</option>
                  <option value=""> Spot -{`>`} Futures</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-xl">Mode :</div>
              <div className="">
                <input
                  type="number"
                  className="border-2 w-20 px-1 border-gray-400 rounded-sm "
                />
              </div>
              <div className="text-xl text-purple-400">(USDT)</div>
            </div>

            <div>
              <button className="bg-sky-600 px-5 py-2 rounded-md text-white">
                Transfer
              </button>
            </div>
          </div>
        </div>
      )}

      {isModalOpenDeposite && (
        <div className="fixed inset-0 bg-black bg-opacity-35 backdrop-blur-sm flex justify-center items-center">
          <div className="md:py-5 md:px-6 p-2 bg-indigo-950 rounded-xl flex flex-col gap-4">
            <div className="flex items-center justify-between w-80">
              <div className="font-bold text-xl">Transfer Crypto</div>
              <X
                onClick={() => {
                  setIsModalOpenDeposite(false);
                }}
                className="cursor-pointer"
                size={20}
              />
            </div>

            <div className="flex justify-around text-lg c1 py-1 f1 rounded-lg">
              <div
                onClick={() => {
                  setModalDeposite(true);
                  setModalWithdraw(false);
                  setAssetClicked(false);
                  setNetworkClicked(false);
                  setNetwork("Select");
                  setAsset("Select");
                }}
                className={`rounded-md px-10 py-2 ${
                  modalDeposite && "c2"
                } hover:text-white c2-hover cursor-pointer hover:c2`}
              >
                Withdraw
              </div>
              <div
                onClick={() => {
                  setModalDeposite(false);
                  setModalWithdraw(true);
                  setAssetClicked(false);
                  setNetworkClicked(false);
                  setNetwork("Select");
                  setAsset("Select");
                }}
                className={`rounded-md px-10 py-2 ${
                  modalWithdraw && "c2"
                } hover:text-white c2-hover cursor-pointer `}
              >
                Deposit
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <div className="font-bold text-indigo-200 text-sm mb-2">
                  Choose Asset
                </div>
                <div>
                  <div
                    onClick={() => {
                      setAssetClicked(!assetClicked);
                      setNetworkClicked(false);
                      console.log(assetClicked);
                    }}
                    className="c1 cursor-pointer font-bold px-3 py-2 rounded-lg w-36 flex justify-between items-center text-lg"
                  >
                    {asset}
                    <ChevronRight
                      className={`transition-transform duration-300 ease-in-out ${
                        assetClicked && " rotate-90"
                      }`}
                      size={16}
                    />
                  </div>
                  {assetClicked && (
                    <div className="absolute w-36 flex flex-col gap-1 py-1 c2 my-1 rounded-lg h-36 overflow-y-scroll ">
                      {assetOptions.map((data) => {
                        return (
                          <div
                            key={data.id}
                            onClick={() => {
                              setAsset(data.name);
                              setAssetClicked(!assetClicked);
                            }}
                            className="flex items-center gap-2 px-2 py-1 cursor-pointer c1-hover "
                          >
                            <div>
                              <img
                                src={data.imgsrc}
                                alt={data.name}
                                className="w-5 h-5"
                              />
                            </div>
                            <div>{data.name}</div>
                            {modalWithdraw && (
                              <div className="ml-auto text-gray-400">
                                {data.amt.toFixed(2)}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div className="font-bold text-indigo-200 text-sm mb-2">
                  Choose Network
                </div>
                <div>
                  <div
                    onClick={() => {
                      setNetworkClicked(!networkClicked);
                      setAssetClicked(false);
                      console.log(networkClicked);
                    }}
                    className="c1 cursor-pointer px-3 py-2 rounded-lg w-36 flex justify-between items-center text-lg font-bold"
                  >
                    {network}
                    <ChevronRight
                      className={`transition-transform duration-300 ease-in-out ${
                        networkClicked && " rotate-90"
                      }`}
                      size={16}
                    />
                  </div>
                  <div>
                    {networkClicked && (
                      <div className="absolute w-36 flex flex-col gap-1 py-1 c2 my-1 rounded-lg h-36 overflow-y-scroll ">
                        {networkOptions.map((data) => {
                          return (
                            <div
                              key={data.id}
                              onClick={() => {
                                setNetwork(data.name);
                                setNetworkClicked(!networkClicked);
                              }}
                              className="flex items-center gap-2 px-2 py-1 cursor-pointer c1-hover "
                            >
                              <div>
                                <img
                                  src={data.imgsrc}
                                  alt={data.name}
                                  className="w-5 h-5"
                                />
                              </div>
                              <div>{data.name}</div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {modalDeposite && (
              <div className="mt-2 flex flex-col gap-5">
                <div className="flex gap-3 justify-evenly items-center c2 px-5 py-4 rounded-lg">
                  <div>
                    <img src="" alt="img" />
                  </div>
                  <div> Deposit Address </div>
                  <div>
                    <Copy className="cursor-pointer" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-thin pb-3">
                  <CircleAlert size={16} />
                  Minimum Deposit: $1.5 ∼ 1.5 USDT
                </div>
              </div>
            )}

            {modalWithdraw && (
              <div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label
                      for="address"
                      className="font-bold text-sm text-indigo-200"
                    >
                      Withdraw Address
                    </label>
                    <input
                      id="address"
                      className="rounded-md c1 px-4 py-3"
                      placeholder="0xc4..."
                      type="text"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      for="amount"
                      className="font-bold text-sm text-indigo-200"
                    >
                      Amount
                    </label>
                    <input
                      id="amount"
                      className="rounded-md c1 px-4 py-3"
                      placeholder="10"
                      type="number"
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-xs f1 font-bold ml-auto">
                    Available <span className="text-sky-500">0.000</span>
                  </div>
                </div>
                <div className="text-indigo-200 text-sm font-bold mt-2">
                  MEMO (OPTIONAL)
                </div>
                <div className="text-indigo-200 text-sm font-bold mt-9 mb-5">
                  Network Fee{" "}
                  <span className="text-sky-500">{"<"} 0.01 USDT</span>
                </div>
                <div>
                  <button
                    className={`bg-gradient-to-r w-full py-3 rounded-md from-indigo-400 to-indigo-600 ${
                      amount && address
                        ? "text-white cursor-pointer"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default navbar;
