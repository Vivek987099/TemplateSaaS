
import { GlobalContextProvider } from './context/GlobalContext';
import Layout from './layout/Layout';

function App() {
  return (
   <>
   <GlobalContextProvider>
   <Layout></Layout>
   </GlobalContextProvider>
   </>
  )
}

export default App
