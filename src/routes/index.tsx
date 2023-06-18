import {AppLayout, Home, Routes} from './routes.tsx';
import {useRoutes} from 'react-router-dom';

export default function useRouteElements() {
    return useRoutes(
        [
            {
                path: Routes.HOME.path,
                element: (
                    <AppLayout>
                        <Home/>
                    </AppLayout>
                )
            },
            {
                path: '*',
                element: <div>Not Found</div>
            }
        ]
    )
}
