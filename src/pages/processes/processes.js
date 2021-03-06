import { Helmet } from 'react-helmet';
import Breadcrumb from 'components/layouts/breadcrumb';
import { useState } from 'react';
import Processes from 'components/app/processes/index';
import CreateProcess from 'components/app/processes/createProcess';
import { Button } from 'antd';

const nestedPath = [
  'Home',
  'Processes',
];

const ProcessesPage = () => {
  const [onClickValue, setOnClickValue] = useState(false);

  const createModule = () => {
    setOnClickValue(true);
  };
  return (
    <>
      <Helmet title="Dashboard" />
      <div style={{ fontFamily: 'Quicksand' }} className="row space-y-4">
        <div className="col-12">
          <div className="row pl-8">
            <div className="col-6">
              <span className="font-montserrat-medium text-2xl font-semibold text-[#3D3D3D]">
                Processes
              </span>
              <Breadcrumb nestedPath={nestedPath} />
            </div>
            <div className="col-6 flex flex-row justify-end">
              <Button
                onClick={createModule}
                style={{
                  marginRight: '20px', borderRadius: '4px', fontWeight: '500', backgroundColor: '#013453', color: '#FFFFFF', fontSize: '16px', width: '160px', height: '40px', boxShadow: '0px 8px 16px #005B923D',
                }}
              >
                Create Process +
              </Button>
            </div>
          </div>
        </div>
        <div className="col-12">
          {onClickValue === true ? <CreateProcess /> : <Processes />}
        </div>
      </div>
    </>
  );
};

export default ProcessesPage;
