import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import {
    Heading,
    Input,
    Button,
    FilterGroup,
    Table,
    Icon,
    Modal,
} from '../../../../../common';
import { setModalState } from '../../../../Modal/modalSlice';
import {
    createNewProgram,
    listPrograms,
    updateProgram,
    deleteProgram,
    handleProgramChange,
} from '../../adminSlice';
import { capitalizeFirstLetter } from '../../../../../common/helpers/letters';

import '../../_index.scss';

const NewProgram = ({ programs, dispatch, programChange }) => {
    const { register, handleSubmit } = useForm();
    const [value, setValue] = useState('');

    /* Submit New Program  */
    const onSubmit = async (data) => {
        const createdProgram = { ...data, program: value };
        await dispatch(createNewProgram(createdProgram)).unwrap();
    };

    return (
        <form className="body" onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="select"
                label="Select Program Type"
                name="type"
                data={programs}
                register={register}
                _onChange={(name, value) =>
                    dispatch(handleProgramChange({ programChange: value }))
                }
                value={programChange}
            />
            <Input
                type="text"
                placeholder={`Enter program name`}
                label="Program"
                name="program"
                register={register}
                _onChange={(name, value) => setValue(value)}
            />
            <Button name="Add" style="primary" type="submit" />
        </form>
    );
};

const UpdateProgram = ({ property }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [value, setValue] = useState('');

    const { currentValue, id, type } = property;

    const identifier = { id, type };

    /* Submit New Program  */
    const onSubmit = async () => {
        await dispatch(
            updateProgram({
                identifier,
                program: value,
            })
        ).unwrap();
    };

    return (
        <form className="body" onSubmit={handleSubmit(onSubmit)}>
            <Input
                type="text"
                placeholder={currentValue}
                label="Program"
                name="program"
                register={register}
                _onChange={(name, value) => setValue(value)}
            />
            <Button name="Update" style="primary" type="submit" />
        </form>
    );
};

const SetProgram = () => {
    const dispatch = useDispatch();
    const [property, setProperty] = useState({});
    const { programs, updatedObject } = useSelector((state) => state.admin);
    const { programChange } = useSelector((state) => state.admin.setProgram);
    const { newProgramModal, editProgramModal } = useSelector(
        (state) => state.modal
    );
    const { register } = useForm();

    /* Open Modal */
    const handleOnModalOpen = () =>
        dispatch(setModalState({ newProgramModal: true }));

    /* Close Modal */
    const handleOnModalClose = (name) => {
        dispatch(setModalState({ [name]: false }));
    };

    const programsList = [
        {
            name: 'Program',
            value: 'default',
            disabled: true,
        },
        {
            name: 'Crops',
            value: 'crops',
        },
        {
            name: 'Services',
            value: 'services',
        },
    ];

    useEffect(() => {
        (async () =>
            await dispatch(listPrograms({ type: programChange })).unwrap())();
    }, [dispatch, programChange, updatedObject]);

    const table = {
        heading: ['ID', capitalizeFirstLetter(programChange), 'Actions'],
        data: programs || [],
        actions: {
            delete: async (id, type) => {
                await dispatch(deleteProgram({ id, type })).unwrap();
            },
            edit: async (id, type, currentValue) => {
                setProperty({ type, id, currentValue });
                dispatch(setModalState({ editProgramModal: true }));
            },
        },
    };

    return (
        <>
            {newProgramModal && (
                <Modal
                    handleOnModalClose={() =>
                        handleOnModalClose('newProgramModal')
                    }
                >
                    <div className="modal__content">
                        <div className="heading">
                            <h2>Add New Program</h2>
                        </div>
                        <NewProgram
                            programs={programsList}
                            dispatch={dispatch}
                            programChange={programChange}
                        />
                    </div>
                </Modal>
            )}
            {editProgramModal && (
                <Modal
                    handleOnModalClose={() =>
                        handleOnModalClose('editProgramModal')
                    }
                >
                    <div className="modal__content">
                        <div className="heading">
                            <h2>Edit Program</h2>
                        </div>
                        <UpdateProgram property={property} />
                    </div>
                </Modal>
            )}
            <div className="set__program">
                <div className="top__heading">
                    <Heading type="dashboard" text="Services & Crops" />
                    <FilterGroup>
                        <Input
                            type="select"
                            data={programsList}
                            name="type"
                            required
                            register={register}
                            _onChange={(name, value) =>
                                dispatch(
                                    handleProgramChange({
                                        programChange: value,
                                    })
                                )
                            }
                            value={programChange}
                        />

                        <Icon
                            name="add"
                            color="var(--green-1)"
                            size="50"
                            extraStyles={{ cursor: 'pointer' }}
                            onClick={handleOnModalOpen}
                        />
                    </FilterGroup>
                </div>

                <Table type="set_program" table={table} />
            </div>
        </>
    );
};

export default SetProgram;
