import { FC } from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import CommonInput from './components/UI/CommonInput/CommonInput';
import CommonButton from "./components/UI/CommonButton/CommonButton";
import './App.scss';

const App: FC = () => {
  return (
    <div className="app">
      <CommonInput 
        prefixIcon={faCoffee}
        postfixIcon={faCoffee}
      />
      <CommonButton>
        Подтвердить!
      </CommonButton>
    </div>
  );
}

export default App;
