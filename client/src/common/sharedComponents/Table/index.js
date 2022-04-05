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

import { Badge, Button, Preloader } from '../../';

import './_index.scss';
const Table = ({ type, table }) => {
    let TableContent = null;
    const none = 'N/A';

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
                                <Td>{obj.id}</Td>
                                <Td>{obj.lastname || none}</Td>
                                <Td>{obj.firstname || none}</Td>
                                <Td>{obj.middlename || none}</Td>
                                <Td>{obj.gender || none}</Td>
                                <Td>{obj.position || none}</Td>
                                <Td>{obj.dateActive || none}</Td>
                                <Td>{obj.numberOfFerms || none}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </>
            );
            break;
        case 'manage_accounts':
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
                                <Td>{obj.image || none}</Td>
                                <Td>{obj.lastname || none}</Td>
                                <Td>{obj.firstname || none}</Td>
                                <Td>{obj.middlename || none}</Td>
                                <Td>{obj.dateActive || none}</Td>
                                <Td>{obj.birthDate || none}</Td>
                                <Td>
                                    {Number(obj.isActivated) === 1 ? (
                                        <Badge text="Activated" color="green" />
                                    ) : (
                                        <Badge text="Deactivated" color="red" />
                                    )}
                                </Td>
                                <Td>{obj.role || none}</Td>
                                <Td className="col custom__td">
                                    <Button
                                        name="Edit"
                                        style="primary"
                                        onClick={() =>
                                            table.actions.edit({
                                                id: obj.id,
                                                role: obj.role,
                                                isActivated: Number(
                                                    obj.isActivated
                                                ),
                                            })
                                        }
                                    />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </>
            );
            break;
        case 'search_user':
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
                                <Td>
                                    {`${obj.lastname} ${obj.firstname} ${obj.middlename}` ||
                                        none}
                                </Td>
                                <Td>{obj.gender || none}</Td>
                                <Td>{obj.birthDate || none}</Td>
                                <Td>{obj.commodity || none}</Td>
                                <Td>{obj.size || none}</Td>
                                <Td>{obj.barangay || none}</Td>
                                <Td>{obj.mobileNumber || none}</Td>
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
                        {table.data.length ? (
                            table.data.map((obj, i) => (
                                <Tr key={i}>
                                    <Td>{obj.id}</Td>
                                    <Td>{obj.name}</Td>
                                    <Td className="col custom__td">
                                        <Button
                                            name="Edit"
                                            style="primary"
                                            onClick={() =>
                                                table.actions.edit(
                                                    obj.id,
                                                    obj.optionalType,
                                                    obj.name
                                                )
                                            }
                                        />
                                        <Button
                                            onClick={() =>
                                                table.actions.delete(
                                                    obj.id,
                                                    obj.optionalType
                                                )
                                            }
                                            name="Delete"
                                            background="var(--red-1)"
                                            color="var(--white-0)"
                                            style="secondary"
                                        />
                                    </Td>
                                </Tr>
                            ))
                        ) : (
                            <Tr>
                                <Td> No data found</Td>
                                <Td> No data found</Td>
                                <Td className="col">No data found</Td>
                            </Tr>
                        )}
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
