import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import Buttons from './components/Buttons';

function App() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (selected) => {
    console.log('selectedRowKeys changed: ', selected);
    setSelectedRowKeys(selected);
  };

  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Room',
        dataIndex: 'room',
        key: 'room',
        sorter: (a, b) => a.room - b.room,
        // render: (value, row, index) => {
        //   const obj = {
        //     children: value,
        //     props: {},
        //   };
        //   if (value.toString().includes('Status')) {
        //     obj.props.colSpan = 15;
        //   }
        //   return obj;
        // },
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'Guest',
        dataIndex: 'guest',
        key: 'guest',
        width: 150,
      },
      {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
      },
      {
        title: 'Nationalty',
        dataIndex: 'nationalty',
        key: 'nationalty',
      },
      {
        title: 'Provice',
        dataIndex: 'provice',
        key: 'provice',
      },
      {
        title: 'Identity papers',
        dataIndex: 'identityPapers',
        key: 'identityPapers',
      },
      {
        title: 'ID Number',
        dataIndex: 'idNumber',
        key: 'idNumber',
      },
      {
        title: 'Issue Date',
        dataIndex: 'issueDate',
        key: 'issueDate',
      },
      {
        title: 'Place of issue',
        dataIndex: 'placeOfIssue',
        key: 'placeOfIssue',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Guest Type',
        dataIndex: 'guestType',
        key: 'guestType',
      },
      {
        title: 'Note',
        dataIndex: 'note',
        key: 'note',
      },
    ];
    const data = [
      {
        key: 1,
        room: 1010,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 1',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 2,
        room: 1010,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 2',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 3,
        room: 1110,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 1',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 4,
        room: 1110,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 2',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 5,
        room: 1210,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 1',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 6,
        room: 1210,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 2',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 7,
        room: 201,
        type: 'SUPD',
        title: 'Mr.',
        guest: 'Guest 1',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 8,
        room: 201,
        type: 'SUPD',
        title: 'Mr.',
        guest: 'Guest 2',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 9,
        room: 304,
        type: 'SUPD',
        title: 'Mr.',
        guest: 'Guest 1',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 10,
        room: 304,
        type: 'SUPD',
        title: 'Mr.',
        guest: 'Guest 2',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
    ];

    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
      onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
      },
      onSelectAll: (selected, selectedRow, changeRows) => {
        console.log(selected, selectedRow, changeRows);
      },
    };
    return (
      <Table
        // expandable={{ expandedRowRender }}
        // footer={Buttons}
        pagination={false}
        rowSelection={rowSelection}
        bordered
        columns={columns}
        dataSource={data}
        size='middle'
      />
    );
  };
  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];
  const data = [
    {
      key: 1,
      status: 'Status: Arrival(10 adults)',
    },
  ];

  return (
    <Table
      expandable={{ expandedRowRender }}
      footer={Buttons}
      // rowSelection={rowSelection}
      bordered
      columns={columns}
      dataSource={data}
      pagination={false}
      size='middle'
    />
  );
}

export default App;
