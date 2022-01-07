import React, { useEffect, useState } from 'react';
import { AutoSizer } from 'react-virtualized';
import Axios from 'axios';
const Help: React.FC = () => {
  // http://localhost:8765/ssologin?token=51935EEC40CED63A7E1742A8E88F0701&&username=1&&page=admin/blogs
  const [url, setUrl] = useState();
  useEffect(() => {
    let api = `http://192.168.1.247:8765/ssologin?token=8A73E0D0F7DBBBEB06D7FADF61A85BE5&&time=20220101&&username=1&&page=admin/blogs`;
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

export default Help
