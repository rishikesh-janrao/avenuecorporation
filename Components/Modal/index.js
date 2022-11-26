import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useState } from "react";
import NavigationContext from "../../Contexts/NavigationContext";
import modalStyles from "../../styles/Modal.module.css";
function Modal({}) {
  const navContext = useContext(NavigationContext);
  const containerStyles = { ...navContext.modalDetails.styles };
  console.log(navContext.isModalVisible);
  return (
    <motion.div
      className={`modal ${navContext.isModalVisible ? modalStyles.Active : modalStyles.InActive}`}
      key={!navContext.isModalVisible}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            delay: 0.1,
          },
        },
      }}
    >
      <div
        className={`${modalStyles.BackdropContainer}`}
        onClick={() => navContext.setModalVisible(false)}
      ></div>
      <div
        className={`modal-container ${modalStyles.ModalContainer}`}
        style={containerStyles}
      >
        <ModalTitle />
        <ModalBody />
        <ModalFooter />
      </div>
    </motion.div>
  );
}

export default Modal;

const ModalTitle = () => {
  const navContext = useContext(NavigationContext);
  return (
    <div className={modalStyles.titleContainer}>
      <div className={modalStyles.title}>{navContext.modalDetails.title}</div>
    </div>
  );
};
const ModalBody = () => {
  const navContext = useContext(NavigationContext);
  return (
    <div className={modalStyles.body}>
      <Image
        src="/pixels/privacyBanner.png"
        layout="responsive"
        width={800}
        height={300}
        alt="pop up cover - privacy policy - avenue corporation"
      />
      {navContext.modalDetails.body}
    </div>
  );
};
const ModalFooter = () => {
  const navContext = useContext(NavigationContext);
  return (
    <div className={modalStyles.ModalFooter}>
      {navContext.modalDetails.footerActions == undefined && (
        <button
          type="button"
          className="btn btn-light"
          onClick={() => navContext.setModalVisible(false)}
        >
          Back
        </button>
      )}
    </div>
  );
};
