/* eslint-disable array-callback-return */
import {
    Table as ReactTable,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Button from '../Button';

import './_index.scss';
const Table = ({ type, table }) => {
    let TableContent = null;

    switch (type) {
        case 'admin_dashboard':
            TableContent = (
                <>
                    <Thead>
                        <Tr>
                            {table.heading.map((th, i) => (
                                <Th key={i}>{th}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {table.data.map((obj, i) => (
                            <Tr key={i}>
                                <Td>{obj.reference}</Td>
                                <Td>{obj.lastName}</Td>
                                <Td>{obj.firstName}</Td>
                                <Td>{obj.middleName}</Td>
                                <Td>{obj.gender}</Td>
                                <Td>{obj.program}</Td>
                                <Td>{obj.dateActive}</Td>
                                <Td>{obj.numberOfFerms}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </>
            );
            break;
        case 'set_program':
            TableContent = (
                <>
                    <Thead>
                        <Tr>
                            {table.heading.map((th, i) => (
                                <Th key={i}>{th}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {table.data.map((obj, i) => (
                            <Tr key={i}>
                                <Td>{obj.id}</Td>
                                <Td>{obj.services || obj.services}</Td>
                                <Td className="col">
                                    <p>Edit</p>
                                    <p>Delete</p>
                                    {/* <Button name="Edit" style="primary" />
                                    <Button name="Delete" style="secondary" /> */}
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </>
            );
            break;

        default:
            break;
    }

    return <ReactTable>{TableContent}</ReactTable>;
};

export default Table;
