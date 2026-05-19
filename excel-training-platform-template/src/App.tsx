import { AppProvider, useApp } from './context/AppContext';
import Loader from './components/Loader';
import LandingPage from './components/Landing/LandingPage';
import DashboardApp from './components/Dashboard/DashboardApp';

function AppContent() {
  const { isLoading, currentUser } = useApp();

  if (isLoading) {
    return <Loader />;
  }

  if (currentUser) {
    return <DashboardApp />;
  }

  return <LandingPage />;
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
