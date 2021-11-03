import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import Buttons from './components/Buttons';

function App() {
  const { selectedRowKeys, setSelectedRowKeys } = useState([]);
  const expandedRowRender = () => {
    const columns = [
      // {
      //   dataIndex: 'status',
      //   width: '0px',
      //   render: (text, row, index) => {
      //     const obj = {
      //       children: text,
      //       props: {},
      //     };
      //     if (text !== null || (text !== '' && index === 0)) {
      //       obj.props.colSpan = 15;
      //     }
      //     return obj;
      //   },
      // },
      {
        title: 'Room',
        dataIndex: 'room',
      },
      {
        title: 'Type',
        dataIndex: 'type',
      },
      {
        title: 'Title',
        dataIndex: 'title',
      },
      {
        title: 'Guest',
        dataIndex: 'guest',
        width: 300,
      },
      {
        title: 'Birthday',
        dataIndex: 'birthday',
      },
      {
        title: 'Nationalty',
        dataIndex: 'nationalty',
      },
      {
        title: 'Provice',
        dataIndex: 'provice',
      },
      {
        title: 'Identity papers',
        dataIndex: 'identityPapers',
      },
      {
        title: 'ID Number',
        dataIndex: 'idNumber',
      },
      {
        title: 'Issue Date',
        dataIndex: 'issueDate',
      },
      {
        title: 'Place of issue',
        dataIndex: 'placeOfIssue',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
      {
        title: 'Guest Type',
        dataIndex: 'guestType',
      },
      {
        title: 'Note',
        dataIndex: 'note',
      },
    ];
    const data = [
      // {
      // key: 1,
      // status: 'Status: Arrival (10 adults)',
      // children: []
      // }
      {
        key: 11,
        room: 1010,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 1',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 12,
        room: 1010,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 2',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 13,
        room: 1110,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 1',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 14,
        room: 1110,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 2',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 15,
        room: 1210,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 1',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 16,
        room: 1210,
        type: 'SUPT',
        title: 'Mr.',
        guest: 'Guest 2',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 17,
        room: 201,
        type: 'SUPD',
        title: 'Mr.',
        guest: 'Guest 1',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 18,
        room: 201,
        type: 'SUPD',
        title: 'Mr.',
        guest: 'Guest 2',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 19,
        room: 304,
        type: 'SUPD',
        title: 'Mr.',
        guest: 'Guest 1',
        birthday: '01/01/1990',
        nationalty: 'Việt Nam',
        guestType: 'RegularGuest',
      },
      {
        key: 110,
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
    };
    return (
      <Table
        // expandable={{ expandedRowRender }}
        // footer={Buttons}
        rowSelection={rowSelection}
        bordered
        columns={columns}
        dataSource={data}
      />
    );
  };

  // const columns = [
  //   // {
  //   //   dataIndex: 'status',
  //   //   width: '0px',
  //   //   render: (text, row, index) => {
  //   //     const obj = {
  //   //       children: text,
  //   //       props: {},
  //   //     };
  //   //     if (text !== null || (text !== '' && index === 0)) {
  //   //       obj.props.colSpan = 15;
  //   //     }
  //   //     return obj;
  //   //   },
  //   // },
  //   {
  //     title: 'Room',
  //     dataIndex: 'room',
  //   },
  //   {
  //     title: 'Type',
  //     dataIndex: 'type',
  //   },
  //   {
  //     title: 'Title',
  //     dataIndex: 'title',
  //   },
  //   {
  //     title: 'Guest',
  //     dataIndex: 'guest',
  //     width: 300,
  //   },
  //   {
  //     title: 'Birthday',
  //     dataIndex: 'birthday',
  //   },
  //   {
  //     title: 'Nationalty',
  //     dataIndex: 'nationalty',
  //   },
  //   {
  //     title: 'Provice',
  //     dataIndex: 'provice',
  //   },
  //   {
  //     title: 'Identity papers',
  //     dataIndex: 'identityPapers',
  //   },
  //   {
  //     title: 'ID Number',
  //     dataIndex: 'idNumber',
  //   },
  //   {
  //     title: 'Issue Date',
  //     dataIndex: 'issueDate',
  //   },
  //   {
  //     title: 'Place of issue',
  //     dataIndex: 'placeOfIssue',
  //   },
  //   {
  //     title: 'Phone',
  //     dataIndex: 'phone',
  //   },
  //   {
  //     title: 'Email',
  //     dataIndex: 'email',
  //   },
  //   {
  //     title: 'Address',
  //     dataIndex: 'address',
  //   },
  //   {
  //     title: 'Guest Type',
  //     dataIndex: 'guestType',
  //   },
  //   {
  //     title: 'Note',
  //     dataIndex: 'note',
  //   },
  // ];
  // const data = [
  //   // {
  //   // key: 1,
  //   // status: 'Status: Arrival (10 adults)',
  //   // children: []
  //   // }
  //   {
  //     key: 11,
  //     room: 1010,
  //     type: 'SUPT',
  //     title: 'Mr.',
  //     guest: 'Guest 1',
  //     birthday: '01/01/1990',
  //     nationalty: 'Việt Nam',
  //     guestType: 'RegularGuest',
  //   },
  //   {
  //     key: 12,
  //     room: 1010,
  //     type: 'SUPT',
  //     title: 'Mr.',
  //     guest: 'Guest 2',
  //     birthday: '01/01/1990',
  //     nationalty: 'Việt Nam',
  //     guestType: 'RegularGuest',
  //   },
  //   {
  //     key: 13,
  //     room: 1110,
  //     type: 'SUPT',
  //     title: 'Mr.',
  //     guest: 'Guest 1',
  //     birthday: '01/01/1990',
  //     nationalty: 'Việt Nam',
  //     guestType: 'RegularGuest',
  //   },
  //   {
  //     key: 14,
  //     room: 1110,
  //     type: 'SUPT',
  //     title: 'Mr.',
  //     guest: 'Guest 2',
  //     birthday: '01/01/1990',
  //     nationalty: 'Việt Nam',
  //     guestType: 'RegularGuest',
  //   },
  //   {
  //     key: 15,
  //     room: 1210,
  //     type: 'SUPT',
  //     title: 'Mr.',
  //     guest: 'Guest 1',
  //     birthday: '01/01/1990',
  //     nationalty: 'Việt Nam',
  //     guestType: 'RegularGuest',
  //   },
  //   {
  //     key: 16,
  //     room: 1210,
  //     type: 'SUPT',
  //     title: 'Mr.',
  //     guest: 'Guest 2',
  //     birthday: '01/01/1990',
  //     nationalty: 'Việt Nam',
  //     guestType: 'RegularGuest',
  //   },
  //   {
  //     key: 17,
  //     room: 201,
  //     type: 'SUPD',
  //     title: 'Mr.',
  //     guest: 'Guest 1',
  //     birthday: '01/01/1990',
  //     nationalty: 'Việt Nam',
  //     guestType: 'RegularGuest',
  //   },
  //   {
  //     key: 18,
  //     room: 201,
  //     type: 'SUPD',
  //     title: 'Mr.',
  //     guest: 'Guest 2',
  //     birthday: '01/01/1990',
  //     nationalty: 'Việt Nam',
  //     guestType: 'RegularGuest',
  //   },
  //   {
  //     key: 19,
  //     room: 304,
  //     type: 'SUPD',
  //     title: 'Mr.',
  //     guest: 'Guest 1',
  //     birthday: '01/01/1990',
  //     nationalty: 'Việt Nam',
  //     guestType: 'RegularGuest',
  //   },
  //   {
  //     key: 110,
  //     room: 304,
  //     type: 'SUPD',
  //     title: 'Mr.',
  //     guest: 'Guest 2',
  //     birthday: '01/01/1990',
  //     nationalty: 'Việt Nam',
  //     guestType: 'RegularGuest',
  //   },
  // ];

  // const rowSelection = {
  //   selectedRowKeys,
  // };
  // return (
  //   <Table
  //     expandable={{ expandedRowRender }}
  //     footer={Buttons}
  //     rowSelection={rowSelection}
  //     bordered
  //     columns={columns}
  //     dataSource={data}
  //   />
  // );
  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data = [
    {
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
    />
  );
}

export default App;
