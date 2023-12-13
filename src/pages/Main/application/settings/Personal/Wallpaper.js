
import "./wallpaper.css"

import { useEffect, useState } from "react"
import wallpaper from "../../../scripts/wallpaper"
import { Image, Space, Skeleton, message, Typography, Divider, Tag } from 'antd'
import { DownloadOutlined, RotateLeftOutlined, RotateRightOutlined, SwapOutlined, ZoomInOutlined, ZoomOutOutlined, AppstoreOutlined } from '@ant-design/icons'

const WallpaperSetting = ({ id }) => {

    const { Title, Paragraph } = Typography;
    const [showStatus, setShowStatus] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        if (id === 5) {
            setTimeout(() => setShowStatus(true),1000);
        } else {
            setShowStatus(false);
        }
    },[id]);

    const onDownload = (src) => {
        fetch(src)
          .then((response) => response.blob())
          .then((blob) => {
            const url = URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.download = 'image.png';
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url);
            link.remove();
          });
      };

    return (
        <>
            <Paragraph style={{ marginTop: "10px", marginBottom: "-5px" }}>
                <blockquote>
                    <Title level={3}>主题和背景</Title>
                </blockquote>
            </Paragraph><Divider />
            
            <div className="wallpaper-list">
                <Space wrap size="large" style={{ justifyContent: "space-around" }}>
                    {contextHolder}
                    {wallpaper.map(item => (
                        showStatus ? 
                        <div className="wallpaper-box">
                            <Image key={item.id} width={"100%"} height={"100%"} src="error" style={{ borderRadius: "5px" }} fallback={item.path} preview={{
                            toolbarRender: (_,
                              {
                                transform: { scale },
                                actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                              },
                            ) => (
                                <Space size={12} className="toolbar-wrapper">
                                    <DownloadOutlined onClick={() => {
                                        messageApi.open({
                                            type: "success",
                                            style: {zIndex: 9999},
                                            content: "下载壁纸成功！",
                                        });
                                        onDownload(item.path);
                                    }}/>
                                    <SwapOutlined rotate={90} onClick={onFlipY} />
                                    <SwapOutlined onClick={onFlipX} />
                                    <RotateLeftOutlined onClick={onRotateLeft} />
                                    <RotateRightOutlined onClick={onRotateRight} />
                                    <ZoomOutOutlined onClick={onZoomOut} />
                                    <ZoomInOutlined onClick={onZoomIn} />
                                    <AppstoreOutlined onClick={() => {
                                        messageApi.open({
                                            type: "success",
                                            style: {zIndex: 9999},
                                            content: "切换壁纸成功！",
                                        });
                                        document.getElementById("root").style.setProperty(`--background`, `url(${item.path})`);
                                    }}>
                                    </AppstoreOutlined>
                                </Space>
                            ),
                          }}/>
                          {item.new && <Tag color="processing" style={{ top: 8, right: 0, opacity: "0.9", position: "absolute" }}>NEW</Tag>}
                        </div>: 
                        <Skeleton.Image key={item.id} active={true} style={{ width: "175px", height: "100px" }}/>
                    ))}
                </Space>
            </div><Divider />
        </>
    )
}

export default WallpaperSetting