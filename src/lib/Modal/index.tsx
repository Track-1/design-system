// import { PropsWithChildren } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { m } from "framer-motion";
import { ReactNode } from "react";
import ModalClose from "../Icons/modal_close";
import { background, modal, title } from "./style.css";

export interface ModalProps {
  header?: ReactNode;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  const { header, children, isOpen, onClose, ...restProps } = props;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={background}>
          <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <Dialog.Content className={modal} asChild {...restProps}>
              <m.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
                <header className={title}>{header && header}</header>
                {children}
                <Dialog.Close>
                  <ModalClose />
                </Dialog.Close>
              </m.div>
            </Dialog.Content>
          </m.div>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
