import Image from "next/image";
import submit from "assets/images/illustration-thank-you.svg";

const Submit = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-very-dark-blue p-24">
      <div className="flex h-[370px] w-[400px] flex-col gap-6 rounded-3xl bg-dark-blue-dark p-8">
        <div className="flex items-center justify-center">
          <Image src={submit} alt="star" height={100} />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-56 items-center rounded-full bg-dark-blue-light text-center">
            <p className="py-1 text-orange">You selected 4 out of 5</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-2xl font-semibold">Thank you!</h1>
          <p className="text-center text-sm leading-relaxed">
            {`We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!`}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Submit;
