import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full p-24">
      <div className="lg:w-[512px] lg:h-[512px] w-28 h-28">
        <Image
          src={"/logo.png"}
          alt="Astron - online repetitor app logo"
          width={512}
          height={512}
          style={{ borderRadius: "10px", width: "100%", height: "100%" }}
        />
      </div>
      <h1 className="text-2xl text-bold text-center my-10">
        Astron - online repetitor
      </h1>
      <p className="text-center w-[300px] lg:w-[512px]">
        ASTRON - abiturientlar, o&apos;quvchilar, repetitorlar va
        o&apos;qituvchilar uchun mo&apos;ljallangan mobil ilova.
      </p>
      <div className="w-full mt-10">
        <Link
          href={"https://play.google.com/store/apps/details?id=uz.astrontest"}
        >
          <Image
            src={"/google-play-badge.png"}
            alt="google play badge"
            width={270}
            height={80}
            className="mx-auto"
          />
        </Link>
      </div>
    </main>
  );
}
