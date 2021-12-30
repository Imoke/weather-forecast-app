import React, { useEffect, useState } from 'react';
import { AutoSizer } from 'react-virtualized';
import Axios from 'axios';
const About: React.FC = () => {
  // http://localhost:8765/ssologin?token=51935EEC40CED63A7E1742A8E88F0701&&username=1&&page=admin/blogs
  const [url, setUrl] = useState();
  useEffect(() => {
    let api = `http://192.168.1.247:8765/ssologin?token=593ED975B2EFAE69E6A3207D13F1540A&&username=1&&page=admin/blogs`;
    Axios({
      url: api,
      method: 'get',
      withCredentials: true,
    }).then((result: any) => {
      const { success, url: iframeUrl } = result.data;
      window.console.log("url" + iframeUrl + ", url" + url)
      if (success) {
        setUrl(iframeUrl);
      }
    });
  }, [url]);

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
            // onLoad={hideSpinner}
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
