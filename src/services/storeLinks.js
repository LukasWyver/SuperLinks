// Buscar os links salvos
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// Salvar um link no localStorage.
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  //Se já tiver um link salvo com o mesmo ID, não deixar duplicar.
  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    return;
  }

  //Adicionar este novo link na lista...
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
}

export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });
  localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));

  return myLinks;
}
