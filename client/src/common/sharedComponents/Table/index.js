import {
    Table as ReactTable,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import './_index.scss';
const Table = ({ type }) => {
    const tableData = {
        heading: [
            'Reference No',
            'Last Name',
            'First Name',
            'Middle Name',
            'Sex',
            'Program',
            'Date Active',
            'Number of Ferms',
        ],
        data: [
            {
                row: {
                    reference: '3232',
                    lastName: 'Pedro',
                    firstName: 'Juan',
                    middleName: 'Ssss',
                    program: 'dasd',
                    dateActive: 'dasd',
                },
            },
            {
                row: {
                    reference: '3232',
                    lastName: 'Jeth',
                    firstName: 'Juan',
                    middleName: 'Ssss',
                    program: 'dasd',
                    dateActive: 'dasd',
                },
            },
        ],
    };

    return (
        <ReactTable>
            <Thead>
                <Tr>
                    {tableData.heading.map((th, i) => (
                        <Th key={i}>{th}</Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {tableData.data.map((td, i) => (
                    <Tr key={i}>
                        <Td>{Object.values(td)[0][Object.keys(td.row)[i]]}</Td>
                    </Tr>
                ))}
            </Tbody>
        </ReactTable>
        // <ReactTable>
        //     <Thead>
        //         <Tr>
        //             <Th>Refernce No.</Th>
        //             <Th>Last Name</Th>
        //             <Th>First Name</Th>
        //             <Th>Middle Name</Th>
        //             <Th>Sex</Th>
        //             <Th>Program</Th>
        //             <Th>Date Active</Th>
        //             <Th>Number Of Ferms</Th>
        //         </Tr>
        //     </Thead>
        //     <Tbody>
        //         <Tr>
        //             <Td>431334</Td>
        //             <Td>Santos</Td>
        //             <Td>Napomoseno</Td>
        //             <Td>VieJoy</Td>
        //             <Td>Male</Td>
        //             <Td>Male</Td>
        //             <Td>12/3/2019</Td>
        //             <Td>12/3/2019</Td>
        //         </Tr>
        //         <Tr>
        //             <Td>431334</Td>
        //             <Td>Santos</Td>
        //             <Td>Napomoseno</Td>
        //             <Td>VieJoy</Td>
        //             <Td>Male</Td>
        //             <Td>Male</Td>
        //             <Td>12/3/2019</Td>
        //             <Td>12/3/2019</Td>
        //         </Tr>
        //         <Tr>
        //             <Td>431334</Td>
        //             <Td>Santos</Td>
        //             <Td>Napomoseno</Td>
        //             <Td>VieJoy</Td>
        //             <Td>Male</Td>
        //             <Td>Male</Td>
        //             <Td>12/3/2019</Td>
        //             <Td>12/3/2019</Td>
        //         </Tr>
        //         <Tr>
        //             <Td>431334</Td>
        //             <Td>Santos</Td>
        //             <Td>Napomoseno</Td>
        //             <Td>VieJoy</Td>
        //             <Td>Male</Td>
        //             <Td>Male</Td>
        //             <Td>12/3/2019</Td>
        //             <Td>12/3/2019</Td>
        //         </Tr>
        //         <Tr>
        //             <Td>431334</Td>
        //             <Td>Santos</Td>
        //             <Td>Napomoseno</Td>
        //             <Td>VieJoy</Td>
        //             <Td>Male</Td>
        //             <Td>Male</Td>
        //             <Td>12/3/2019</Td>
        //             <Td>12/3/2019</Td>
        //         </Tr>
        //         <Tr>
        //             <Td>431334</Td>
        //             <Td>Santos</Td>
        //             <Td>Napomoseno</Td>
        //             <Td>VieJoy</Td>
        //             <Td>Male</Td>
        //             <Td>Male</Td>
        //             <Td>12/3/2019</Td>
        //             <Td>12/3/2019</Td>
        //         </Tr>
        //     </Tbody>
        // </ReactTable>
    );
};

export default Table;
