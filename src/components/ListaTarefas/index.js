import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["estudar", "dormir", "jantar"]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    if (novaTarefa.length < 3) {
      return alert("Nescessario passar mais de 3 caracteres");
    }
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };
  const removeTarefa = (tarefas) => {
    const novaLista = lista.filter((tarefa) => {
      if (tarefas !== tarefa) {
        return tarefa;
      }
    });
    setLista(novaLista);
  };

  const tarefas = lista.map((tarefa, indice) => {
    return (
      <ListaContainer key={indice}>
        <ul>
          <Tarefa>
            <p>{tarefa}</p>
            <RemoveButton onClick={() => removeTarefa(tarefa)}>
              <img src={bin} alt="" width="16px" />
            </RemoveButton>
          </Tarefa>
        </ul>
      </ListaContainer>
      // <ul>
      //   <li>{tarefa}</li>
      // </ul>
    );
  });
  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      {tarefas}

      {/* <ListaContainer>
        <ul>
          <Tarefa>
            <p>Nova tarefa</p>
            <RemoveButton>
              <img src={bin} alt="" width="16px" />
            </RemoveButton>
          </Tarefa>
        </ul>
      </ListaContainer> */}
    </ListaTarefasContainer>
  );
}
