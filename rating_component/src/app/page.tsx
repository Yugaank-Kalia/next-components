import Image from "next/image";
import star from "/assets/images/icon-star.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-very-dark-blue p-24">
      <div className="flex h-[400px] w-[400px] flex-col gap-6 rounded-3xl bg-dark-blue-dark p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-blue-light">
          <Image src={star} alt="star" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">How did we do?</h1>
          <p className="text-sm text-grey-light">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="flex justify-between pb-4 text-grey-dark">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-blue-light hover:bg-orange hover:text-white">
            1
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-blue-light hover:bg-orange hover:text-white">
            2
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-blue-light hover:bg-orange hover:text-white">
            3
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-blue-light hover:bg-orange hover:text-white">
            4
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-blue-light hover:bg-orange hover:text-white">
            5
          </button>
        </div>
        <div className="w-full cursor-pointer items-end rounded-full bg-orange py-2 text-center hover:bg-white hover:text-orange">
          <button className="text-sm font-medium tracking-widest">
            SUBMIT
          </button>
        </div>
      </div>
    </main>
  );
}
