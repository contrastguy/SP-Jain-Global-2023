import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-3xl w-full items-center justify-between  lg:flex">
          <h2 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-semibold hover:bg-orange-400 ">
            Phoenix Education
          </h2>
          <div className=" bottom-0  flex h-24 w-full justify-center  dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <nav>
              <ul className="flex">
                <li className="p-2">
                  <a>About</a>
                </li>
                <li className="p-2">
                  <a>Contact</a>
                </li>
                <li className="p-2">
                  <button>Sign In</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 md:container md:mx-auto bg-orange-400 h-72 w-full justify-center rounded-md flex  ">
          <div className="">
            <p className="text-3xl p-2 font-semibold">The universal destinations platform</p>
            <p className="p-2">
              Supporting students to <b>find the best next step</b> for them
            </p>
            <button class="inline-flex items-center  rounded-md bg-gray-50 px-2 py-1  font-semibold text-black  ring-1 ring-inset ring-gray-500/10 ">Request a Demo</button>
          </div>
          <div className="p-4">
            <Image src="/academic-png.png" width="124" height="124"/> 
          </div>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Study Plan{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Create a custom study plan to organize your routine
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Explore{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn more about a Institute or University
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Find{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              It's a Match ! Find the University that suits you best
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-orange-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              We give you created Study Plans, based on different routines 
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
