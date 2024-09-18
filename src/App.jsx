import React, { useMemo } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persister, store } from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from './routes';
import { Toaster } from 'react-hot-toast';

// const AppRoutes = React.lazy(() => import('./routes'));

function App() {
    const queryClient = useMemo(() => new QueryClient(), []);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <QueryClientProvider client={queryClient}>
                    <AppRoutes />
                    <Toaster position="top-right" containerClassName="text-sm" />
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
