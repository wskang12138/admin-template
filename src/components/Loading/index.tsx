import React, { ReactNode, useEffect, useState } from 'react';
import {createRoot} from 'react-dom/client';
import { CloudUploadOutlined } from '@ant-design/icons';

import './index.css';

let originId: number;
let type: number;

type TLoading = {
  msg?: string | React.ReactNode,
  type?: 'border' | 'loading' | 'upload'
}

type TRfresh = {
  id?: number, msg?: string | React.ReactNode
}

interface ILoading extends TLoading {
  id: number,
}

export default function Loading(props: ILoading) {
  const [visible, setVisible] = useState<boolean>(false);
  const [msg, setMsg] = useState<string | React.ReactNode>(props.msg ?? '加载中，请稍后');

  useEffect(() => {
    // 避免抖动，在 .05s 开启
    let t = setTimeout(() => setVisible(true), 50);
    // 刷新信息
    let r = setInterval(() => setMsg(Loading.message[props.id] ?? msg), 300);
    switch (props.type) {
      case 'loading': {
        type = 0;
        break;
      }
      case 'upload': {
        type = 1;
        break;
      }
      case 'border': {
        type = 2;
        break;
      }
      default: {
        type = 0;
      }

    }
    return () => {
      clearTimeout(t)
      clearInterval(r)
    };
  }, []);

  return (
    <div className='text-center' hidden={!visible}>
      {
        type == 2 ? (
          <span className='loading-tips conic'>
            {msg}
          </span>
        ) : (
          <span className='loading-tips'>
            {
              type == 0 ?
                <svg className='loading-anim-rotate' style={{ width: 14, height: 14, fill: 'currentColor', verticalAlign: 'middle', overflow: 'hidden' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M538.5344 266.4448a133.12 133.12 0 1 1 133.12-133.12 133.4272 133.4272 0 0 1-133.12 133.12zM255.0144 372.1984a121.6768 121.6768 0 1 1 121.6768-121.6768 121.856 121.856 0 0 1-121.6768 121.6768zM134.72 647.424a107.3664 107.3664 0 1 1 107.3664-107.264A107.52 107.52 0 0 1 134.72 647.424z m120.32 272.4608a90.9824 90.9824 0 1 1 90.9824-90.9824A91.1616 91.1616 0 0 1 255.04 919.8848zM538.5344 1024a79.36 79.36 0 1 1 79.36-79.36 79.36 79.36 0 0 1-79.36 79.36z m287.6928-134.144a64.1792 64.1792 0 1 1 64.1792-64.1792 64.3584 64.3584 0 0 1-64.1792 64.1792z m117.76-296.704a52.6336 52.6336 0 1 1 52.6592-52.6336 52.608 52.608 0 0 1-52.6336 52.6336z m-158.72-338.7136a40.96 40.96 0 1 1 12.0064 28.8512 40.5248 40.5248 0 0 1-12.0064-28.8512z" />
                </svg> :
                <span className='upload-icons'>
                  <svg className='loading-anim-upload-upper' viewBox="64 64 896 896" focusable="false" data-icon="cloud-upload" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"></path>
                    <path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"></path>
                  </svg>
                  <svg className='loading-anim-upload-lower' viewBox="64 64 896 896" focusable="false" data-icon="cloud-upload" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"></path>
                    <path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"></path>
                  </svg>
                </span>
            }
            &emsp;{msg}
          </span>
        )
      }
    </div>
  );
};

Loading.closer = [] as ({ id: number, ops: () => void })[];
Loading.message = {} as ({ [id: number]: string | ReactNode })

Loading.start = (config?: TLoading) => {
  const mount = document.createElement('div');
  let wp = document.querySelector('.loading-wrapper');
  if (wp == null) {
    wp = document.createElement('div');
    wp.className = 'loading-wrapper';
    document.body.appendChild(wp);
  }
  mount.className = 'loading';
  wp.appendChild(mount);
  originId = new Date().valueOf();
  const root = createRoot(mount)
  Loading.closer.push({
    id: originId,
    ops: () => {
      root.unmount();
      mount.remove();
    }
  })

  root.render(<Loading id={originId} {...config} />);
  return originId;
};

Loading.refresh = ({id,msg}:TRfresh) => {
  if (id) {
    Loading.message[id] = msg;
  } else {
    Loading.message[originId] = msg;
  }

};

Loading.done = (id?: number) => {
  if (Loading.closer.length == 0) return;
  let c = Loading.closer.splice(id ? Loading.closer.findIndex(o => o.id == id) : 0, 1)[0];
  c && c.ops();
};
