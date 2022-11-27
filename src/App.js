import { Toaster } from 'react-hot-toast';
import './App.css';
import AppContent from './components/AppContent/AppContent';
import AppHeader from './components/AppHeader/AppHeader';
import PageTitle from './components/PageTitle/PageTitle';

function App() {
  return (
    <>
      <div className="app-container">
        <PageTitle >Todo-list</PageTitle>
        <div className="app-wrapper">
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster position='bottom-right' toastOptions={{
        style: {
          fontSize: '1.4rem',
        }
      }} />
    </>
  );
}

export default App;
