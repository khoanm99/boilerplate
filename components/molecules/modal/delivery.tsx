import ModalWrapper, { ModalWrapperProps } from ".";

export interface DeliveryPopupProps
  extends Omit<ModalWrapperProps, "children"> {}

const DeliveryPopup = ({ ...props }: DeliveryPopupProps) => {
  return (
    <ModalWrapper {...props}>
      <div className="flex flex-col flex-auto p-5">
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
        <div>Content Here</div>
      </div>
    </ModalWrapper>
  );
};

export default DeliveryPopup;
