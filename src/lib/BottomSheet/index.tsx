import { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import Sheet from "react-modal-sheet";
import { center, overLay, sheetContainer, sheetHeader, statusBar } from "./style.css";

export interface BottomSheetProps extends PropsWithChildren<ComponentProps<typeof Sheet>> {
  header?: ReactNode;
  onClose: () => void;
}

const BottomSheet: FC<BottomSheetProps> = (props) => {
  const { header, children, isOpen, onClose, ...restProps } = props;

  return (
    <Sheet isOpen={isOpen} onClose={onClose} detent="content-height" {...restProps}>
      <Sheet.Container className={sheetContainer}>
        <div className={center}>
          <div className={statusBar} />
        </div>
        {header && <Sheet.Header className={sheetHeader}>{header}</Sheet.Header>}
        <Sheet.Content>{children}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={onClose} className={overLay} />
    </Sheet>
  );
};

export default BottomSheet;
