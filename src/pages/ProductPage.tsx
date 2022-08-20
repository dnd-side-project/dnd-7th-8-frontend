import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";
ReactModal.setAppElement("#root");
function ProductModal({ isOpen, onSubmit, onCancel }: any) {
    const handleClickSubmit = () => {
        onSubmit();
    };

    const handleClickCancel = () => {
        onCancel();
    };

    return (
        <ModalStyleContainer>
            <ReactModal
                isOpen={isOpen}
                style={{
                    overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0, 0.75)",
                    },
                    content: {
                        top: "33%",
                        left: "50%",
                        width: "75%",
                        height: "700px",
                        transform: "translate(-48%, -25%)",
                    },
                }}
            >
                <div style={{ objectFit: "cover", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                    <div style={{ width: "80%", height: "550px", display: "flex" }}>
                        <div>
                            <div style={{ width: "200px", margin: "20px" }}>dddd</div>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleClickCancel} style={{ border: "none", background: "none" }}>
                            <IoCloseSharp />
                        </button>
                    </div>
                </div>
            </ReactModal>
        </ModalStyleContainer>
    );
}

export default ProductModal;

const ModalStyleContainer = styled.div``;
