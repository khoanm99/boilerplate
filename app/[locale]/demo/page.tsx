import Link from "next/link";

const PageDemo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-auto flex-col justify-center items-center">
        <div>
          We will list out all of the library, technical of this project
        </div>

        <ul>
          <li>
            <Link href="/demo/lenis">Lenis scroll</Link>
          </li>
          <li>
            <Link href="/demo/modal">Modal</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageDemo;
