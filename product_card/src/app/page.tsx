import Image from "next/image";
import asset from "assets/images/image-product-desktop.jpg";
import cart from "assets/images/icon-cart.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cream p-24">
      <div className="grid w-[300px] grid-cols-1 rounded-lg bg-white md:w-[700px] md:grid-cols-2 md:grid-rows-1">
        <div className="w-full">
          <Image
            src={asset}
            alt="logo"
            className="h-full rounded-t-lg sm:rounded-t-lg md:rounded-l-lg lg:rounded-l-lg xl:rounded-l-lg 2xl:rounded-l-lg"
          />
        </div>
        <div className="row-auto grid">
          <h1 className="ml-5 mt-4 text-sm text-dark-grey-blue">
            P E R F U M E
          </h1>
          <h1 className="ml-5 mt-4 text-left text-3xl font-bold md:ml-8 md:mt-6 md:pr-24 ">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="ml-5 mt-4 text-dark-grey-blue md:ml-8 md:mt-6 md:pr-16">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="ml-5 mt-4 flex items-center gap-4">
            <h1 className="text-4xl font-semibold text-dark-cyan">$149.99</h1>
            <span className="text-dark-grey-blue line-through">$169.99</span>
          </div>
          <div className="my-4 flex flex-1 items-center justify-center md:my-6">
            <button className="my-2 flex items-center justify-center gap-2 rounded-lg bg-dark-cyan px-[80px] py-3">
              <Image src={cart} alt="cart" />
              <span className="text-sm text-cream">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
