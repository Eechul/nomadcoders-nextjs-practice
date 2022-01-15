import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Content, Footer } from "antd/lib/layout/layout";
import { useRouter } from "next/router";
import DLayout from "../components/DLayout";
import 'antd/dist/antd.css';

const App = ({Component, pageProps}) => {
    const router = useRouter();
    return (
        <>
            <DLayout>
                <Content>
                    <Component {...pageProps} />
                </Content>
                <Footer>Footer</Footer>
            </DLayout>
        </>
        
    )
}

const configureStroe = (initialState, options) => {
    const middlewares = []; // 미들웨어들을 넣으면 된다.
    const enhancer = process.env.NODE_ENV === 'production' ? 
    compose(applyMiddleware(...middlewares)) : 
        composeWithDevTools(
            applyMiddleware(...middlewares)
        );
    const store = createStore(reducer, initialState, enhancer);
    return store;
}
const wrapper = createWrapper(configureStroe)

export default wrapper.withRedux(App);