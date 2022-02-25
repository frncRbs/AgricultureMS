import React from 'react';

const Boxes = ({ data }) => {
    return (
        <>
            {data.map((content) => {
                switch (content.type) {
                    case 'statistics':
                        break;

                    default:
                        break;
                }
            })}
        </>
    );
};

export default Boxes;
