import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RotasAplicacao } from "./routes/rotas";
import "./shared/global/styles.css"

function App() {
  return (
    <>
      <RotasAplicacao />
      <ToastContainer
        position="top-right"
        theme="light"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
    </>
  )
}

export default App
