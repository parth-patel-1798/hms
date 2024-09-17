import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRoutes from './routes';
import { persister, store } from './store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <AppRoutes />
            </PersistGate>
        </Provider>
    );
}

export default App;
