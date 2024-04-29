import Head from "next/head";
import CreateNote from "~/components/CreateNote";
import Todos from "~/components/Todos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Note T3 App</title>
        <meta name="description" content="Todo App with T3 stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Note <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>

        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="grid grid-cols-1 gap-4 md:gap-8 ">
              <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
                <h3 className="text-xl font-bold">Notes</h3>
                <Todos/>
                <CreateNote/>
              </div>
            </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
