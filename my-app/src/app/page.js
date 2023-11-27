import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto md:max-w-4xl">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/*--------------------------------------------------------------- cabeçalho e Hero ------------------------------------------------------------- */}
        <div className="z-10 max-w-3xl w-full items-center justify-between  lg:flex">
          <h2 className="fixed left-0 top-0 flex w-full justify-center border-b  bg-gradient-to-b  pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border  lg:p-4 lg:dark:bg-zinc-800/30 font-bold hover:bg-blue-400 ">
            StudyMatch
          </h2>
          <div className=" bottom-0  flex h-24 w-full justify-center  dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <nav>
              <ul className="flex">
                <li className="p-2">
                  <button>Contact</button>
                </li>
                <li className="p-2">
                  <button>Sign In</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="container mx-auto my-7 py-4 px-4 md:container md:mx-auto bg-blue-400 h-72 w-full justify-center rounded-md flex  ">
          <div className="">
            <p className="text-3xl p-2 font-semibold">
               Begin Today for a better tomorrow
            </p>
            <p className="p-2">
              Supporting students to <b>find the best next step</b> for them
            </p>
            <button class="inline-flex items-center  rounded-md bg-gray-50 px-2 py-1  font-semibold text-black  ring-1 ring-inset ring-gray-500/10 ">
              Request a Demo
            </button>
          </div>
          <div className="p-4">
            <Image src="/academic-png.png" width="124" height="124" />
          </div>
        </div>

        {/* -------------------------------------------------------- Quizzes ------------------------------------------------------------------------------------------- */}
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div className="mx-auto my-4 mb-6 w-full">
          <p className="text-center font-bold text-2xl">Quizzes</p>
        </div>

        <div className=" grid text-center lg:max-w-5xl lg:w-full lg:mb-4 lg:grid-cols-3 lg:text-left">
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Interest Profile
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Personality Profile
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>
        </div>

        {/* -------------------------------------------------------- Exploring Pathways ------------------------------------------------------------------------------------------- */}
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div className="mx-auto  mt-4 w-full">
          <p className="text-center font-bold text-2xl">Exploring Pathways</p>
        </div>

        <div className=" grid text-center mt-12 lg:max-w-5xl lg:w-full lg:mb-4 lg:grid-cols-3 lg:text-left">
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Careers Library
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Subjects Library
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Know-how Library
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>
        </div>

        {/* -------------------------------------------------------- Recording What you've done ------------------------------------------------------------------------------------------- */}
        {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

        <div className="mx-auto  mt-4 w-full">
          <p className="text-center font-bold text-2xl">
            Recording What you've done
          </p>
        </div>

        <div className=" grid text-center mt-12 lg:max-w-5xl lg:w-full lg:mb-4 lg:grid-cols-3 lg:text-left">
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>Activities</h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>Skills</h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>Academics</h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>
        </div>

        {/* -------------------------------------------------------- Searching for oportunities ------------------------------------------------------------------------------------------- */}
        {/* -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

        <div className="mx-auto  mt-4 w-full">
          <p className="text-center font-bold text-2xl">
            Searching for Oportunities
          </p>
        </div>

        <div className=" grid text-center mt-12 lg:max-w-5xl lg:w-full lg:mb-4 lg:grid-cols-3 lg:text-left">
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              UK Universities
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              US Universities
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              European Universities
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>Oxbridge</h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Canadian Universities
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Brazilian Universities
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Asian Universities
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Australasian Unis
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-32  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              MidEast & Africa Unis
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Irish Universities
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Special Oportunities
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>Events</h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Go to tool{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>
        </div>

        {/* -------------------------------------------------------------- Application Materials ------------------------------------------------------------------------------ */}
        {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

        <div className="mx-auto  mt-4 w-full">
          <p className="text-center font-bold text-2xl">
            Application Materials
          </p>
        </div>

        <div className=" grid text-center mt-12 lg:max-w-5xl lg:w-full lg:mb-4 lg:grid-cols-3 lg:text-left">
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              UK Personal Statement
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Go to tool{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Subject References
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Go to tool{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>CV / Resumé</h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Writing tool
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-24  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Common App Essay
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Go to tool{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              US Recommenders
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Go to tool{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 mt-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Notes for Ref & Rec writers
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>
        </div>


{/*---------------------------------------------------- Making Applications --------------------------------------------------------------------------------------------------  */}
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}



<div className="mx-auto  mt-4 w-full">
          <p className="text-center font-bold text-2xl">
            Making Applications
          </p>
        </div>

        <div className=" grid text-center mt-12 lg:max-w-5xl lg:w-full lg:mb-4 lg:grid-cols-3 lg:text-left">
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Brazilian Universities
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              International Universities
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent mx-2 px-5 py-4 transition-colors hover:border-gray-300 bg-blue-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-bold text-white`}>
              Explore Scholarships
            </h2>
            <button
              className={`m-0 max-w-[30ch] text-md inline-flex items-center mt-16  px-3 py-1  font-bold text-white  ring-1 ring-white `}
            >
              Start{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
          </a>

          
        </div>


      </main>
    </div>
  );
}
