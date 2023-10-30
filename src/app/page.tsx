import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <MainContainer />
    </div>
  );
}

const NavBar = () => {
  return (
    <nav className="absolute w-full my-4 px-4">
      <div className="inline-block">
        <Link
          className="hover:text-white hover:bg-primary px-4 py-2 rounded-xl transition text-lg"
          href="/"
        >
          Sulica
        </Link>
      </div>
      <div className="float-right inline-block">
        <div className="flex flex-row">
          <Link
            className="hover:text-white hover:bg-primary px-4 py-2 rounded-xl transition text-lg"
            href="/"
          >
            Quiz
          </Link>
        </div>
      </div>
    </nav>
  );
};

const MainContainer = () => {
  return (
    <main className="flex items-center justify-center flex-col h-screen gap-8">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="uppercase text-4xl font-medium">
          Welcome to Sulica&lsquo;s Webpage
        </h1>
        <p className="text-lg">
          I&lsquo;m just a girl with a passion for accounting and computer
          science
        </p>
      </div>

      <Button className="rounded-3xl" asChild>
        <Link href="/login">Get Started</Link>
      </Button>
    </main>
  );
};
