import { useGetData } from 'use-axios-react';
import {Container} from './styles';
import { Module} from './../../types'
import { Link } from 'react-router-dom';
export function ModulePage(){
const [data, loading] = useGetData("/modules");
const modules: Module[] = data;
  return (<>
  
  <h1 className="title">Modulos</h1>
    <Container>
      {loading ? (
          <span>Carregando...</span>
        ) : modules?.length > 0 ? (
              <>{modules.map((item, index) => {
                return (<div className="module" key={index}>
                    <p>{item.name}</p>
                    <Link to={`/${item.id}/aulas`}>Aulas</Link>
                </div>);
              })}</>
            
        ) : (
          <h4 style={{color: "#f1f1f1"}}>Nenhum item disponível!</h4>
        )}
      
    </Container>
  
  </>)
}