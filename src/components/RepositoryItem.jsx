export function RepositoryItem(props) {
  const { repository } = props;
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository?.description ?? "Sem descrição."}</p>
      <a href={repository?.html_url ?? "#"} target="_blank">
        Acessar
      </a>
    </li>
  );
}
