import {
    BrowserRouter,
    Routes as Switch,
    Route,
    Navigate,
  } from "react-router-dom";
import { PaginaInicial } from "../pages";
import { configuracoesDaAplicacao } from "../shared/configs/aplicacao/index";
import { configuracoesDasRotas } from "../shared/configs/rotas/index";
  

export function RotasAplicacao() {
    return (
        <BrowserRouter basename={configuracoesDaAplicacao.NOMEBASE}>
        <Switch>
            <Route path={configuracoesDasRotas.PAGINAINICIAL} element={<PaginaInicial />} />
            <Route path="/*" element={<Navigate to={configuracoesDasRotas.PAGINAINICIAL} />} />
        </Switch>
        </BrowserRouter>
    )
}