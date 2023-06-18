import React, {lazy, Suspense} from 'react';
import Event from '../components/Event/event.tsx';
import Header from '../app/header/index.tsx';
import Footer from '../app/footer/index.tsx';
import {Box} from '@chakra-ui/react';
import {Loading} from '../components/Loading';
import {COLORS} from '../theme/colors.ts';

export const Login = lazy(() => import('../pages/auth/login/index.js'))
export const Register = lazy(() => import('../pages/auth/register/index.js'))
export const ForgetPassword = lazy(() => import('../pages/auth/forget-password/index.js'))
export const Home = lazy(() => import('../pages/home'))
export const ProductList = lazy(() => import('../pages/product/product-list/index.js'))
export const ProductDetail = lazy(() => import('../pages/product/product-detail/index.js'))
export const Cart = lazy(() => import('../pages/cart/index.tsx'))



type PROPS = {
    children: any
}

const AppLayout:React.FC<PROPS> = ({ children }) => {
    return (
        <Box>
            <Header/>
            <Event/>
            <div className="site-wrapper">
                <Suspense fallback={
                    <Loading
                        thickness='2px'
                        speed='0.6s'
                        emptyColor={COLORS.BLUE50}
                        color={COLORS.BLUE900}
                        size='lg'
                    />
                }>
                    {children}
                </Suspense>
                <Footer/>

            </div>
        </Box>

    )
}


const Routes = {
    HOME: {
        path: '/',
    },
}

export { Routes, AppLayout }
