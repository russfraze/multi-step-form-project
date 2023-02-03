import PersonalInfoForm from './components/PersonalInfoForm'
import Card from './components/UI/Card'
import Steps from './components/Steps'


function App() {
  return (
    <div className="App">
      <Steps></Steps>
      <Card>
      <PersonalInfoForm />
      </Card>
    </div>
  );
}

export default App;
