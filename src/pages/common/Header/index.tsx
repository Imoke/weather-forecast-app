/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from 'react'
import { useState, useContext } from 'react'
import './style.css'
import { Modal, Button, Card, Drawer, Select, Divider,Icon } from 'antd';
import { CitysContext } from '../Context/CityContext'
const { Option } = Select;

function Header() {
  const [state, setState] = useState({ visible: false });
  const [drawer, setDrawer] = useState({ visible: false });
  const { citys, setCity, setCitys } = useContext(CitysContext);
  const [search, setSearch] = useState('')
  const [selectCitys, setSelectCitys] = useState(['苏州','北京','上海','南京','广州'])

  // modal
  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const handleOk = (e: any) => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  const handleCancel = (e: any) => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  const handleCloseCard = (item: any) => {
    const index = citys.indexOf(item);
    if (index > -1) {
      citys.splice(index, 1)
    }
    setCitys([...citys])
    setCity(citys[0])
  }
  // drawer
  const showDrawer = () => {
    setDrawer({
      visible: true,
    });
  };

  const onClose = () => {
    setDrawer({
      visible: false,
    });
  };

  // select
  const onChange = (value: any) => {
    console.log(`selected ${value}`);
    setCitys([ value, ...citys])
    setCity(value)
  }

  const onBlur = () => {
    console.log('blur');
  }

  const onFocus = () => {
    console.log('focus');
  }

  const onSearch = (val: any) => {
    console.log('search:', val);
    setSearch(val)
  }
  const addSelectItem=()=>{
    if(search !== ''){
      setSelectCitys([...selectCitys, search])
    }
    
    setSearch('')
  }
  return (
    <div className='header-wrapper'>
      <a className='logo' href='/'/>
      <Button className='management' onClick={showModal}>
        <i className='iconfont'>&#xe7db;</i>
        管理</Button>
      <Modal
        title="Citys Management"
        footer={null}
        bodyStyle={{height: '400px', overflow: 'auto'}}
        closable={false}
        centered={true}
        width={800}
        visible={state.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className='cards-wrapper'>
          {
            citys.map((item) => (
              <div style={{ background: '#ECECEC', padding: '5px', margin: '5px' }}>
                <Card title={item} extra={<span className="close" onClick={() => handleCloseCard(item)} ></span>} bordered={true} style={{ width: 200 }}>
                  <p>{item}</p>
                </Card>
              </div>
            ))
          }
          <div style={{ margin: '10px', alignSelf: 'center' }}>
            
              <div>
                <span className='add-button' onClick={showDrawer}>
                  <i className='iconfont'>&#xe634;</i>
                </span>
                <Drawer
                  title="Add City"
                  placement="right"
                  closable={false}
                  onClose={onClose}
                  visible={drawer.visible}
                >
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    dropdownRender={menu => (
                      <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        <div
                          style={{ padding: '4px 8px', cursor: 'pointer' }}
                          onMouseDown={e => e.preventDefault()}
                          onClick={addSelectItem}
                        >
                          <Icon type="plus" /> Add item
                        </div>
                      </div>
                    )}
                  >
                    {
                      selectCitys.map((item)=>(                       
                          <Option className='option-style' value={item}>{item}</Option>           
                       
                      ))
                    }
                  </Select>
                </Drawer>
              </div>
           
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Header