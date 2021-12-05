import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repository = {
  name: 'unforssssm',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  return (

    <section className="repository-list">
    <h1>Lista de asdddd repositorios</h1>

    <ul>
      <RepositoryItem repository= {repository} />
      <RepositoryItem repository= {repository} />
      <RepositoryItem repository= {repository} />
      <RepositoryItem repository= {repository} />
    </ul>
    </section>
  );
}