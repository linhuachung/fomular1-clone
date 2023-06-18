import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import './styles/legacy.css'
import './styles/libs.css'
import {store} from '../store'
import {Provider} from 'react-redux'
import '../Languages'
import {BrowserRouter} from 'react-router-dom';
import {ThemeProviderChakra} from '../context/ThemeContext.tsx';
import {LanguageProvider} from '../context/TranslateContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
                <LanguageProvider>
                    <ThemeProviderChakra>
                        <App/>
                    </ThemeProviderChakra>
                </LanguageProvider>
        </BrowserRouter>
    </Provider>,
)
