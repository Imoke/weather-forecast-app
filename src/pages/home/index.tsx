import * as React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Carousel, Table, Spin, Icon } from "antd";
import "./style.css"
import { CitysContext } from '../common/Context/CityContext'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1624952_5uc8qtf5xva.js'
});
interface weatherYesterday {
  date: string,
  high: string,
  fx: string,
  low: string,
  fl: string,
  type: string
}
interface weatherForecast {
  date: string,
  high: string,
  fengli: string,
  low: string,
  fengxiang: string,
  type: string
}
interface weatherData {
  data: {
    yesterday: weatherYesterday,
    city: string,
    forecast: weatherForecast[],
    ganmao: string,
    wendu: string
  },
  status: number,
  desc: string

}
function Home() {
  const { citys, city, setCity } = useContext(CitysContext);
  // const [city, setCity] = useState(citys[0]);
  const [data, setData] = useState<weatherData>();
  const [isLoading, setIsLoading] = useState(false)
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: any) => (
        <span>
          {type.map((item: any) => {
            console.log(`type::::::: ${item}`)
            let icon=''
            switch (item){
              case '晴': icon='iconqingtian'; break
              case '多云': icon='iconGroup'; break
              case '多云转晴': icon='iconduoyunzhuanqingtian'; break
              case '雾': icon='iconwu'; break
              case '雾霾': icon='iconwumai'; break
              case '扬沙': icon='iconGroup1'; break
              case '阴': icon='iconyintian'; break
              case '小雨': icon='iconxiaoyu'; break
              case '中雨': icon='iconzhongyu'; break
              case '大雨': icon='icondayu'; break
              case '阵雨': icon='iconzhenyu'; break
              case '雷阵雨': icon='iconleizhenyu'; break
              case '特大阵雨': icon='icontedazhenyu'; break
              case '暴雨': icon='iconbaoyu'; break
              case '大雨转晴': icon='icondayuzhuanqing'; break
              case '小雪': icon='iconxiaoxue'; break
              case '小到中雪': icon='iconzhongxue'; break
              case '中雪': icon='iconzhongxue'; break
              case '大雪': icon='icondaxue'; break
              case '暴雪': icon='iconbaoxue'; break
              default: icon='iconqingtian';
            }
            
            return (
              // <Tag color={'blue'} key={item}>
              //   {item.toUpperCase(), 
              // </Tag>
              // <i className="iconfont" style={{width:'50px',height:'50px',borderRadius:'50%'}}>&#xe60a;</i>
              <IconFont type={icon} style={{ fontSize: '32px' }}/> 
              );
          })}
        </span>
      ),
    },
    {
      title: 'Low',
      dataIndex: 'low',
      key: 'low'
    },
    {
      title: 'High',
      dataIndex: 'high',
      key: 'high'
    },
    {
      title: 'Fengli',
      dataIndex: 'fengli',
      key: 'fengli'
    },
    {
      title: 'Fengxiang',
      dataIndex: 'fengxiang',
      key: 'fengxianggh'
    }
  ]
  let tableData: any[] = []
  if (data !== undefined && data != null && data.status === 1000) {
    data?.data.forecast.map((item) => {
      const td = {
        date: item.date,
        type: [item.type],
        low: item.low,
        high: item.high,
        fengli:item.fengli.replace('<![CDATA[','').replace(']]>',''),
        fengxiang: item.fengxiang
      }
      tableData.push(td)
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log(`result b: ${city}`);
      setIsLoading(true)
      if (citys.length === 0) {
        setData(undefined)
        setTimeout(() => { setIsLoading(false) }, 1000)
        return
      }
      await axios.get(`http://wthrcdn.etouch.cn/weather_mini?city=${city}`)
        .then(res => {
          setData(res.data);
          setTimeout(() => { setIsLoading(false) }, 1000)
          console.log(`res: ${res.data}`);
        })
        .catch(e => {
          console.log(`error: ${e}`);
        });
    };
    console.log(`result a: `);
    fetchData();
  }, [citys, city]);

  const onCarouselChange = (a: number) => {
    setCity(citys[a])
  }

  return (
    <div>
      {
        isLoading ? (
          <Spin tip="Loading..."></Spin>
        ) : (<div>
          <div>
            <p className='city-style'>{(data === undefined || data === null || data.status !== 1000) ? 'NA' : data.data.city}</p>
            <p className='weather-style'>{(data === undefined || data === null || data.status !== 1000) ? 'NA' : data.data.forecast[0].type}</p>
            <p className='wendu-style'>{(data === undefined || data === null || data.status !== 1000) ? 'NA' : data.data.wendu}</p>
            <p className='tips-style'>{(data === undefined || data === null || data.status !== 1000) ? 'NA' : data.data.ganmao}</p>
          </div>
          <div className='table-style'>
            <Table  showHeader={false} pagination={false} columns={columns} dataSource={tableData} />
          </div>
        </div>
          )
      }
      <Carousel effect="fade" afterChange={onCarouselChange}>
            {
              citys.length === 0 ? <div>
                <h3>NA</h3>
              </div> :
                citys.map((item: any) => (
                  <div>
                    <h3>{item}</h3>
                  </div>
                ))
            }
      </Carousel>
    </div>
  );
}

export default Home
