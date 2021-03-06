import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdDelete, MdEdit, MdVideocam } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRequest, reloadData } from 'store/modules/module/actions';
import { ModuleState } from 'store/modules/module/types';
import { ApplicationState } from 'store/types';
import { Module } from 'types';
import { Header } from './styles';

export default function ModulesPageAdm() {
  // const [data, loading, error] = useGetData(`/module`);
  const dispatch = useDispatch();
const { reload } = useSelector<ApplicationState>((state) => state.modules) as ModuleState;
  const [modules,setModules] = useState<Module[]>([]);
  async function loadingData(){
    try{
      const {data} = await axios.get('/modules') as any;
      setModules(data);
    }catch(err){
      
    }
  }

useEffect(()=>{
loadingData();
},[])

useEffect(()=>{
  if(reload){
loadingData();
dispatch(reloadData(!reload))
  }

},[reload])

  return (
    <>
      <Header>
        <h3>Modulos</h3>
        <Link to={`/adm/modulos/novo`} className="btn">
          Adicionar Módulo
      </Link>
      </Header>
      <div className="content">
        {  modules?.length > 0 ? (
          <table className='table'>
            <thead>
              <tr>
                <th style={{ width: '10%', textAlign: 'left'}}>#</th>
                <th style={{ width: '70%' ,textAlign: 'left'}}>Nome</th>
                <th style={{ width: '20%' ,textAlign: 'left'}}></th>
              </tr>
            </thead>
            <tbody>
              {modules.map((item, index) => {
                return <ModuleItem key={index} module={item} />;
              })}
            </tbody>
          </table>
        ) : (
          <h4 style={{color: "#f1f1f1"}}>Nenhum item disponível!</h4>
          )}
      </div>
    </>
  );
}

interface ModuleItemProps {
  module: Module;
}
function ModuleItem({ module}: ModuleItemProps) {
    const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td>{module.id}</td>
        <td>{module.name}</td>
        <td><div className="options">
            <Link to={`/adm/modulos/${module.id}/editar`}><MdEdit fill="Orange"/></Link>
            <button onClick={()=>dispatch(deleteRequest(module.id))}><MdDelete fill="red"/></button>
            <Link to={`/adm/modulos/${module.id}/aulas`}><MdVideocam fill="purple"/></Link>
          </div></td>
      </tr>
    </>
  );
}
