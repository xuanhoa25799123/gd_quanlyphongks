import React from 'react';
import { Button } from 'antd';
import {
  AiOutlineClose,
  AiOutlinePlusCircle,
  AiOutlineUndo,
  AiFillSave,
  AiOutlineFileExcel,
} from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { GiPassport } from 'react-icons/gi';

const Buttons = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Button
        icon={<AiOutlineClose color='red' style={{ marginRight: '5px' }} />}
        size='large'
      >
        2-Delete
      </Button>
      <Button
        icon={
          <AiOutlinePlusCircle color='blue' style={{ marginRight: '5px' }} />
        }
        size='large'
      >
        3-New
      </Button>
      <Button
        icon={<FiEdit color='blue' style={{ marginRight: '5px' }} />}
        size='large'
      >
        4-Edit
      </Button>
      <Button
        disabled
        icon={<AiOutlineUndo color='blue' style={{ marginRight: '5px' }} />}
        size='large'
      >
        5-Undo
      </Button>
      <Button
        disabled
        icon={<AiFillSave color='blue' style={{ marginRight: '5px' }} />}
        size='large'
      >
        6-Save
      </Button>
      <Button
        icon={
          <AiOutlineFileExcel color='green' style={{ marginRight: '5px' }} />
        }
        size='large'
      >
        7-Export CSV
      </Button>
      <Button
        icon={
          <AiOutlineFileExcel color='green' style={{ marginRight: '5px' }} />
        }
        size='large'
      >
        8-Export Data To Excel
      </Button>
      <Button
        icon={<GiPassport color='blue' style={{ marginRight: '5px' }} />}
        size='large'
      >
        9-Scan Passport
      </Button>
    </div>
  );
};

export default Buttons;
