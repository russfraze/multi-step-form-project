import Card from './components/UI/Card'
import Steps from './components/Steps'
import MultiStepForm from './components/MultiStepForm'
import {FormProvider} from './context/FormContext'


function App() {
  return (
    <div className="App">
      <FormProvider>
        <Steps />
        <Card>
          <MultiStepForm />
        </Card>
      </FormProvider>
    </div>
  );
}

export default App;
