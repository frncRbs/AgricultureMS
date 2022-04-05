import React from 'react';
import { Modal as ReactModal } from 'react-responsive-modal';
import { useSelector } from 'react-redux';
import 'react-responsive-modal/styles.css';

/* Import CSS */
import './_index.scss';

const ModalComponent = ({ children, handleOnModalClose }) => {
    const { newProgramModal, editProgramModal, editUserModal } = useSelector(
        (state) => state.modal
    );

    return (
        <ReactModal
            center
            open={newProgramModal || editProgramModal || editUserModal}
            onClose={handleOnModalClose}
            closeOnOverlayClick={false}
            classNames={{
                modal: 'custom__modal',
                closeIcon: 'custom__icon',
            }}
        >
            {children}
        </ReactModal>
    );
};

export default ModalComponent;
