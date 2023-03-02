import styles from './App.module.css'
import Steps from './components/Steps'
import MultiStepForm from './components/MultiStepForm'
import { FormProvider } from './context/FormContext'
import BackgroundImage from './components/BackgroundImage'





function App() {
  return (
    <div className={styles.body}>
      <BackgroundImage />
      <FormProvider>

        <Steps />
        <MultiStepForm />
      </FormProvider>
    </div>
  );
}

export default App;
