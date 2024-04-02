import LenisWrapper from "@/components/layout/LenisWrapper";
import ButtonLockBodyWhenUseLenis from "@/components/molecules/ButtonLockBodyWhenUseLenis";

const LenisPage = () => {
  return (
    <LenisWrapper>
      <div className="bg-rose-100 min-h-screen text-black">
        <h1>React Lenis</h1>
        <h2>How to implement</h2>

        <ol>
          <li>run script: yarn add @studio-freight/react-lenis</li>
          <li>Create a wrapper component using ReactLenis</li>
          <li>Update lenis css following doc you can find it at lenis.css</li>
          <li>Update lenis css following doc you can find it at lenis.css</li>
          <li>Wrap to component or page that you want to use lenis</li>
          <li>Scroll and feel it</li>
          <li>Add some custom hook to lock whenever you want</li>
        </ol>
      </div>
      <div>
        <ButtonLockBodyWhenUseLenis />
      </div>
      <div className="min-h-screen" />
    </LenisWrapper>
  );
};

export default LenisPage;
