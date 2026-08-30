import Image from "next/image";
// import BorderButton from "./components/button/BorderButton";


export default function Home() {
  return (
    <main>
      <div className="w-full py-10 px-5">
        <div className="container">
          <div className="w-full grid gap-10 sm:gap-16 md:gap-25 grid-cols-1 sm:grid-cols-[46%_1fr] items-center">
            <div className="content order-2 sm:order-1">
              <div className="pb-7 sm:pb-10 md:pb-15 flex flex-col gap-2.5 sm:gap-5">
                <span>Your go-to platform for 3D printing files</span>
                <h1 className="text-[34px] sm:text-[45px] md:text-[56px] font-bold">Discover what’s possible with 3D printing</h1>
                <p>Join our community of creators and explore a vast library of user-submitted models.</p>
              </div>
              {/* <BorderButton /> */}
            </div>
            <div className="img-col order-1 sm:order-2">
              <Image 
              src="/hero-img.png" 
              alt="Hero Image" 
              width={650}
              height={650}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
