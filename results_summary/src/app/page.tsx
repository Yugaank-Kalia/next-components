import Image from "next/image";
import memory from "public/icon-memory.svg";
import verbal from "public/icon-verbal.svg";
import visual from "public/icon-visual.svg";
import reaction from "public/icon-reaction.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-pale-blue p-24">
      <div className="flex w-[500px] rounded-3xl bg-white">
        <div className="flex w-[50%] flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-b from-slate-blue-light to-slate-blue-dark px-4 py-14">
          <div className="text-sm text-pale-blue">Your Result</div>
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-slate-blue-dark text-white">
            <span className="text-5xl font-bold">76</span>
            <span className="text-xs text-gray-400">of 100</span>
          </div>
          <div className="text-white">Great</div>
          <div className="px-4 text-center text-xs text-pale-blue">
            You scored higher than 65% of the people who have taken these tests.
          </div>
        </div>
        <div className="flex w-1/2 flex-col px-4 py-8">
          <h1 className="text-lg font-semibold text-dark-gray-blue">Summary</h1>
          <ul className="flex flex-col gap-3 py-4">
            <li className="flex justify-between rounded-lg bg-light-red/5 p-3 text-sm">
              <div className="flex gap-1">
                <Image src={reaction} alt="icon" />
                <span className="text-light-red">Reaction</span>
              </div>
              <div className="text-dark-gray-blue">
                80<span className="text-gray-400"> / 100</span>
              </div>
            </li>
            <li className="flex justify-between rounded-lg bg-orange-yellow/5 p-3 text-sm text-black">
              <div className="flex gap-1">
                <Image src={memory} alt="icon" />
                <span className="text-orange-yellow">Reaction</span>
              </div>
              <div className="text-dark-gray-blue">
                92<span className="text-gray-400"> / 100</span>
              </div>
            </li>
            <li className="flex justify-between rounded-lg bg-green-teal/5 p-3 text-sm text-black">
              <div className="flex gap-1">
                <Image src={verbal} alt="icon" />
                <span className="text-green-teal">Reaction</span>
              </div>
              <div className="text-dark-gray-blue">
                61<span className="text-gray-400"> / 100</span>
              </div>
            </li>
            <li className="flex justify-between rounded-lg bg-cobalt-blue/5 p-3 text-sm text-black">
              <div className="flex gap-1">
                <Image src={visual} alt="icon" />
                <span className="text-cobalt-blue">Reaction</span>
              </div>
              <div className="text-dark-gray-blue">
                72<span className="text-gray-400"> / 100</span>
              </div>
            </li>
          </ul>
          <div className="flex flex-1 items-end">
            <button className="w-full rounded-3xl bg-dark-gray-blue px-4 py-2 text-sm">
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
