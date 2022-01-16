import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export default function DCarousel() {

    return (
        <>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>공지 테스트1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>공지 테스트2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>공지 테스트3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>공지 테스트4</h3>
                </div>
            </Carousel>
            <style jsx>{`
                h3 {
                    height: '160px';
                    color: '#fff';
                    lineHeight: '160px';
                    textAlign: 'center';
                    background: '#364d79';
                }
                
            `}</style>
        </>
    )
    
    
}