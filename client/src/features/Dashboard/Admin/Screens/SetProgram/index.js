import React from 'react';
import { useForm } from 'react-hook-form';

import { Heading, Input, Button } from '../../../../../common';

import '../../_index.scss';

const SetProgram = () => {
    const { register, handleSubmit } = useForm();

    return (
        <div className="set__program">
            <Heading type="dashboard" text="Add Crops" />
            <form className="content">
                <div className="content--add-prop">
                    <Input
                        type="text"
                        name="crops"
                        placeholder="Crop's Name"
                        register={register}
                    />
                    <Button name="Add Crop" style="primary" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default SetProgram;
