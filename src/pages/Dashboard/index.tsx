import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/github-logo.svg';
import { Title, Form, Repositories } from './styles';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState([]);

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório." />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="repository">
          <img
            src="https://avatars0.githubusercontent.com/u/51171908?s=460&u=09f2687b76fc38d1270c930efed483973597fdad&v=4"
            alt="Luan Azevedo"
          />

          <div>
            <strong>first-react-project</strong>
            <p>Small project to practice the concepts of react</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
