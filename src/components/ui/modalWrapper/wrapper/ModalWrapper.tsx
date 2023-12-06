import React, { MouseEvent, ReactNode } from 'react';
import styles from './ModalWrapper.module.scss';
import classNames from 'classnames';

export type ModalWrapperTypes = {
  hideModal?: Function;
  isModalOpened?: boolean;
  children: ReactNode;
  className?: string;
  noCloseOnClickOutside?: boolean;
};

const ModalWrapper: React.FC<ModalWrapperTypes> = ({
  children,
  hideModal,
  isModalOpened,
  noCloseOnClickOutside = false,
  className,
}) => {
  const hideModalPanel = () => {
    if (hideModal && !noCloseOnClickOutside) {
      hideModal();
    }
  };

  const stop = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      onMouseDown={hideModalPanel}
      className={classNames(styles.modal, {
        [styles.visible]: isModalOpened,
      })}
    >
      <div
        onMouseDown={stop}
        className={classNames(
          styles.modal__wrapper,
          {
            [styles.visible]: isModalOpened,
          },
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
