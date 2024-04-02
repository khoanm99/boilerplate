import ButtonOpenModal from "@/components/molecules/ButtonOpenModal";

const ModalPage = () => {
  return (
    <>
      <div className="bg-yellow-100 min-h-screen text-black">
        <div className="pt-[500px]" />
        <ButtonOpenModal buttonText="Click me to open modal" />
      </div>
      <div className="h-[300px] bg-green-100" />
    </>
  );
};

export default ModalPage;
