import React, { useEffect, useState } from 'react';
import { AutoSizer } from 'react-virtualized';
import Axios from 'axios';
const About: React.FC = () => {
  // http://localhost:8765/ssologin?token=51935EEC40CED63A7E1742A8E88F0701&&username=1&&page=admin/blogs
  const [url, setUrl] = useState();
  let api = `http://192.168.1.247:8765/ssologin?token=149CA1ACCECFE6B0A99E227CBF07455B&&username=1&&page=admin/blogs`;
  useEffect(() => {
    Axios({
      url: api,
      method: 'get',
      withCredentials: true,
    }).then((result: any) => {
      const { success, url: iframeUrl } = result;
      if (success) {
        setUrl(iframeUrl);
      }
    });
  }, []);
    return (
        <div>
        <AutoSizer disableHeight={true}>
          {({ width }) => (
            <iframe
              title="title"
              frameBorder="0"
              // src='http://192.168.1.247:8765/admin/blog'
              src={url}
              scrolling="auto"
              // onLoad={this.iframeOnLoad}
              style={{
                width: width,
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
                top: '0',
              }}
            />
          )}
        </AutoSizer>
      </div>
      );
}

export default About