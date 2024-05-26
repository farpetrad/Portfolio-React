/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from "@fortawesome/pro-regular-svg-icons";
import './Modal.scss';

export interface ModalProps {
  closeInHeader: boolean;
  closeInFooter: boolean;
  headerContent?: React.ReactNode;
  bodyContent: React.ReactNode;
  footerContent?: React.ReactNode;
  doClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ closeInHeader, closeInFooter, headerContent, bodyContent, footerContent, doClose }): JSX.Element => {
  useEffect(() => {
    document.body.classList.add("modal-open");
  }, []);
  const handleClose = () => {
    document.body.classList.remove("modal-open");
    doClose();
  }
  return (
  <div id="modal-mask">
    <div className="modal-wrapper mt-2 mt-md-5 mb-2 mb-md-5">
      <div className="modal-container col-12 offset-md-3 col-md-8 col-lg-7 col-xl-5">
        <div id="modal-header">
          {headerContent && headerContent}
          {closeInHeader && <a className="exit" onClick={() => handleClose()} tabIndex={0}>
            <FontAwesomeIcon icon={faCircleXmark} title="Circle with x icon for closing navigation drawer" />
          </a>}
        </div>

        <div id="modal-body" className="container-fluid">
          {bodyContent && bodyContent}
        </div>

        <div id="modal-footer" v-if="hasFooterContent">
          {!footerContent && closeInFooter && <button onClick={() => handleClose} tabIndex={0}>
            Close
          </button>}
          {footerContent && footerContent}
        </div>
      </div>
    </div>
  </div>);
}
