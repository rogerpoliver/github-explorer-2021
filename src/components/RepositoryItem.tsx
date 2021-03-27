interface RepositoryProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryProps) {
  const { repository } = props;
  return (
    <li className="repository-item">
      <strong>{repository.name}</strong>
      <p>{repository?.description ?? "Sem descrição."}</p>
      <a href={repository?.html_url ?? "#"} target="_blank">
        Acessar
      </a>
    </li>
  );
}
