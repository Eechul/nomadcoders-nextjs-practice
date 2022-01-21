import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Collapse, Skeleton } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import DLoadMore from '../../components/DLoadMore';
import DMenu from '../../components/DMenu';
const { Panel } = Collapse;
export default function test({ testcase }) {
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    
    useEffect( () => {
        setTimeout( () => {
            setInitLoading(false);
            setLoading(false);
            setData(testcase)
            setList(testcase)
        }, 1500);
    }, []);

    const onLoadMore = () => {
        setLoading(true);
        setList(list.concat(
            [...new Array(testcase.length)].map(() => ({ loading: true, title: '', description: '' }))
        ));
        setTimeout( () => {
            console.log('onLoadMore')
            setLoading(false);
            setList(data.concat(testcase));
            setData(data.concat(testcase))
        }, 2000);
    }
    const loadMore = !initLoading && !loading ? <DLoadMore loadFn={onLoadMore}>더보기</DLoadMore>: null;
    return (
        <>
            <Collapse
                accordion
                bordered={false}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
            >
                {testcase?.map((item) => (
                    <Panel header={item.title} key={item.no} className="site-collapse-custom-panel">
                        <DMenu />
                    </Panel>
                ))}
            </Collapse>
            {loadMore}
        </>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            testcase : [
                {
                    no: 1,
                    title: '2022년 1월 셋째주(17-21) 식단',
                    description: '벌써~!'
                },
                { 
                    no: 2,
                    title: '2022년 1월 둘째주(10-14) 식단',
                    description: '벌써~!'
                },
                { 
                    no: 3,
                    title: '2022년 1월 첫째주(3-7) 식단',
                    description: null
                },
                { 
                    no: 4,
                    title: '2021년 12월 셋째주(27-31) 식단',
                    description: '벌써~!'
                }
            ]
        }
    }
}