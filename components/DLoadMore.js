import { Button } from 'antd';

export default function DLoadMore({ children, loadFn, inStyle }) {
    inStyle = inStyle == null ? {
        textAlign: 'center',
        paddingTop: 12,
        height: 32,
        lineHeight: '32px',
        backgroundColor: '#ffffff',
    } : inStyle

    return (
        <>
            <div style={inStyle}>
                <Button onClick={loadFn}>{children}</Button>
            </div> 
        </>
    );
}