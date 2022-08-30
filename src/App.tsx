import { FC } from 'react';
import CommonInput from './components/UI/CommonInput';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.scss';

const App: FC = () => {
  return (
    <div className="app">
      <CommonInput 
        prefixIcon={faCoffee}
        postfixIcon={faCoffee}
      />
    </div>
  );
}

export default App;
