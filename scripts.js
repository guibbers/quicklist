const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.querySelector('#name');
const addBtn = document.querySelector('#btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

addBtn.addEventListener('click', (e) => {
  if (input.value.trim() === '') return;

  const newItem = document.createElement('li'); 

  const divPrincipal = document.createElement("div");
  divPrincipal.classList.add("item");

  // Criar a div interna que agrupa checkbox e texto
  const divItem = document.createElement("div");
  divItem.classList.add("checkbox-item");

  // Criar checkbox
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  // Criar span para o nome do item
  const spanName = document.createElement('span');
  spanName.textContent = input.value;
  spanName.classList.add('item-name');

  // Quando marcar o checkbox, risca o texto
  checkBox.addEventListener('change', () => {
    spanName.classList.toggle('checked');
  });

  // Criar botão de deletar
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.addEventListener('click', () => {
    newItem.remove();
  });

  // Montando a estrutura correta
  divItem.appendChild(checkBox);
  divItem.appendChild(spanName);

  divPrincipal.appendChild(divItem);
  divPrincipal.appendChild(deleteBtn);

  newItem.appendChild(divPrincipal);

  // Adicionar à lista
  ul.appendChild(newItem);

  // Limpar o input após adicionar
  input.value = '';
});
