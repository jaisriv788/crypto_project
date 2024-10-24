import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import { Activity, Mail, BookLock, LogOut } from "lucide-react";
import USDT from "../assets/USDT.png";
import PFP from "../assets/pfp.png";
import { useNavigate } from "react-router-dom";

function body() {
  const {
    walletHovered,
    setWalletHovered,
    loginHovered,
    setLoginHovered,
    futuretrade,
    spottrade,
  } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="h2 bg-black text-white pt-5 md:pt-10 px-2 md:px-5">
      
      {futuretrade && (
        <div className="b1 border-2 border-white p-2 md:p-5 flex flex-col gap-3">
          <div className="flex flex-col gap-3 b2 border-2 border-white px-2 py-5">
            <div className="flex gap-4 flex-wrap">
              <div className="flex gap-2">
                <span className="text-xl">Asset Type:</span>
                <select className="b1 border1 rounded-lg pr-7 pl-2 py-1">
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>BNB</option>
                  <option>NEO</option>
                  <option>LTC</option>
                  <option>SOL</option>
                  <option>XRP</option>
                  <option>DOT</option>
                </select>
              </div>
              <div className="text-xl flex gap-2">
                <span className="text-orange-300">Current Price:</span>
                <span className="text-green-500">Loading... </span>
                <span className="text-purple-500">USDT</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="font-semibold text-red-600 text-2xl">
                Market Order:
              </div>
              <div className="flex gap-1 text-xl">
                Bet Amount:
                <input className="w-32 px-2 text-black" type="number" />
                <span className="text-purple-500">(USDT)</span>
              </div>
              <div className="flex gap-1 text-xl">
                Leverage:
                <input
                  className="w-24 px-2 text-black"
                  type="number"
                  placeholder="1"
                />
              </div>
              <div className="flex gap-3">
                <button className="b3 px-4 py-2 rounded-lg">Long</button>
                <button className="b3 px-4 py-2 rounded-lg">Short</button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="font-semibold text-red-600 text-2xl">
                Limit Order:
              </div>
              <div className="flex gap-1 text-xl">
                Bet Amount:
                <input className="w-32 px-2 text-black" type="number" />
                <span className="text-purple-500">(USDT)</span>
              </div>
              <div className="flex gap-1 text-xl">
                Leverage:
                <input
                  className="w-24 px-2 text-black"
                  type="number"
                  placeholder="1"
                />
              </div>
              <div className="flex gap-1 text-xl">
                Limit Price:
                <input className="w-32 px-2 text-black" type="number" />
                <span className="text-purple-500">(USDT)</span>
              </div>
              <div className="flex gap-3">
                <button className="b3 px-4 py-2 rounded-lg">Long</button>
                <button className="b3 px-4 py-2 rounded-lg">Short</button>
              </div>
            </div>
          </div>

          <div className="font-bold text-lg text-orange-400">
            <div>Open Position</div>
            <div>Open Order</div>
            <div>Closed Position</div>
          </div>
        </div>
      )}

      {spottrade && (
        <div className="b1 border-2 border-white p-2 md:p-5 flex flex-col gap-3">
          <div className="flex flex-col gap-3 b2 border-2 border-white px-2 py-5">
            <div className="flex gap-4 flex-wrap">
              <div className="flex gap-2">
                <span className="text-xl">Asset Type:</span>
                <select className="b1 border1 rounded-lg pr-7 pl-2 py-1">
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>BNB</option>
                  <option>NEO</option>
                  <option>LTC</option>
                  <option>SOL</option>
                  <option>XRP</option>
                  <option>DOT</option>
                </select>
              </div>
              <div className="text-xl flex gap-2">
                <span className="text-orange-300">Current Price:</span>
                <span className="text-green-500">Loading... </span>
                <span className="text-purple-500">USDT</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="font-semibold text-red-600 text-2xl">Market:</div>
              <div className="flex gap-1 text-xl">
                Amount:
                <input className="w-32 px-2 text-black" type="number" />
                <span className="text-purple-500">(BTC)</span>
              </div>
              <div className="flex gap-3">
                <button className="b3 px-4 py-2 rounded-lg">Buy</button>
                <button className="b3 px-4 py-2 rounded-lg">Sell</button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="font-semibold text-red-600 text-2xl">Limit:</div>
              <div className="flex gap-1 text-xl">
                Amount:
                <input className="w-32 px-2 text-black" type="number" />
                <span className="text-purple-500">(BTC)</span>
              </div>
              <div className="flex gap-1 text-xl">
                Price:
                <input className="w-32 px-2 text-black" type="number" />
                <span className="text-purple-500">(USDT)</span>
              </div>
              <div className="flex gap-3">
                <button className="b3 px-4 py-2 rounded-lg">Buy</button>
                <button className="b3 px-4 py-2 rounded-lg">Sell</button>
              </div>
            </div>
          </div>

          <div className="font-bold text-lg text-orange-400">
            <div>Open Position</div>
            <div>Open Order</div>
            <div>Closed Position</div>
          </div>
        </div>
      )}

      {/*Do not touh this code as it is dropdown associated with navbar */}
      {walletHovered && (
        <div
          onMouseEnter={() => setWalletHovered(true)}
          onMouseLeave={() => setWalletHovered(false)}
          className="z-50 absolute right-1 top-20 c3 w-full sm:w-1/2 md:w-1/5 p-8 rounded-lg flex flex-col gap-4"
        >
          <div className="c2 px-3 py-2 rounded-full">
            <img className="cursor-pointer w-6 h-6" src={USDT} />
          </div>
          <div className="h-1 rounded-lg bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"></div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-5 f1 hover:text-violet-400 cursor-pointer">
              <Activity className="text-violet-400" /> Spot
            </div>
            <div className="flex gap-5 f1 hover:text-violet-400 cursor-pointer">
              <Mail className="text-violet-400" /> Futures
            </div>
            <div className="flex gap-5 f1 hover:text-violet-400 cursor-pointer">
              <BookLock className="text-violet-400" /> Copy Trade
            </div>
          </div>
        </div>
      )}

      {loginHovered && (
        <div
          onMouseEnter={() => setLoginHovered(true)}
          onMouseLeave={() => setLoginHovered(false)}
          className="z-50 absolute right-1 top-20 c3 w-full sm:w-1/2 md:w-1/5 p-8 rounded-lg flex flex-col gap-4"
        >
          <div className="flex justify-center">
            <img className="cursor-pointer rounded-full w-28" src={PFP} />
          </div>
          <div className="h-1 rounded-lg bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"></div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-5 f1 hover:text-violet-400 cursor-pointer">
              <Activity className="text-violet-400" /> Activity
            </div>
            <div className="flex gap-5 f1 hover:text-violet-400 cursor-pointer">
              <Mail className="text-violet-400" /> Privacy & Security
            </div>
            <div className="flex gap-5 f1 hover:text-violet-400 cursor-pointer">
              <BookLock className="text-violet-400" /> Contact
            </div>
            <div
              onClick={() => navigate("/login")}
              className="flex gap-5 f1 hover:text-violet-400 cursor-pointer"
            >
              <LogOut className="text-violet-400" /> Login / Logout
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default body;
