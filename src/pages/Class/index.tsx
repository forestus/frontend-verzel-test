import { useGetData } from 'use-axios-react';
import {Container, ContainerItem} from './styles';
import { Class, Module} from './../../types'
import {   Link, useParams} from 'react-router-dom';
import Moment from 'react-moment';
interface ParamsProps{
id:string
}
export function ClassPage(){
let { id } = useParams<ParamsProps>();

const [data, loading] = useGetData(`/modules/${id}`);
const module: Module = data;

return (<>
 
 
 <span style={{display: 'flex', alignItems: 'baseline'}}><Link style={{ fontSize:'2rem' ,
    color: 'white', textDecoration: 'none'}} to={`/`}>Voltar</Link><h1 className="title">Aulas</h1> </span>
    <Container>
      {loading ? (
          <span>Carregando...</span>
        ) : module && module.classes && module?.classes.length > 0 ? (
              <>{module?.classes.map((item, index) => {
                return <ClassItem key={index} classe={item} />
              })}</>
            
        ) : (
          <h4 style={{color: "#f1f1f1"}}>Nenhum item disponível!</h4>
        )}
      
    </Container>
  
  </>)
}
interface ClassItemProps{
  classe: Class
}
function ClassItem({classe}:ClassItemProps){
  return (<ContainerItem>
      <p>{classe.name} - <Moment date={classe.exhibition} format="DD/MM/YYYY - HH:mm"/></p>
  </ContainerItem>)

}