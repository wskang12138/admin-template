import { useMemo } from 'react';
import { Modal, ModalProps } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

import styles from './index.module.less'

export interface IPreviewModal extends ModalProps {
  height?: number | string,
  drag?: boolean,
  content?: React.ReactNode
}

/**
 * 文件预览对话框
 */
const PreviewModal: React.FC<IPreviewModal> = props => {
  const {
    children,
    content,
    title,
    width,
    drag = false,
    onCancel,
    ...restProps
  } = props;

  const uuid = useMemo(() => `model_${String(new Date().valueOf())}`, [])

  const handleCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
   if (onCancel) {
      onCancel(e)
    }

  }

  // 拖拽响应事件
  const handleDragDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!drag) { // 未开启 drag
      return;
    } else {
      const initX = e.screenX;
      const initY = e.screenY;
      const dom = document.querySelector(`.${uuid}`) as HTMLElement;
      const top = dom.offsetTop
      const left = dom.offsetLeft
      dom.style.top = top + 'px';
      dom.style.left = left + 'px';
      dom.style.margin = '0px';
      // console.log(top, left);

      document.onmousemove = ev => {
        dom.style.left = (left + ev.screenX - initX) + 'px';
        dom.style.top = (top + ev.screenY - initY) + 'px';
      }
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }

  }

  return (
    <Modal
      width={width}
      {...restProps}
      className={`${uuid} ${styles['preview-modal']}`}
      closable={false}
      onCancel={handleCancel}
    >
      <div className={styles['preview-modal-wp']}>
        <div className={styles['preview-modal-head']} onMouseDown={handleDragDown}>
          <div className={styles['preview-modal-head-title']}>
            <div className={styles['title-text']}>{title}</div>
          </div>
          <div className={styles['preview-modal-head-options']}>
            <CloseOutlined onMouseDown={e => e.stopPropagation()} onClick={onCancel}/>
          </div>
        </div>
        <div className={styles['preview-modal-body']} style={{height: props.height}}>
          <div className={styles['preview-modal-container']}>
            {content||children}
          </div>
        </div>
      </div>

    </Modal>
  )
}

export default PreviewModal
