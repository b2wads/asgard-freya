# Asgard-Freya
Aplicação para ser usada como webhook, recebendo parâmetros para scale-up e scale-down das apps no Asgard.


<< Descrição do projeto >>
  
#  Variáveis de ambiente

| Variável | Descrição | Valor padrão |
|:----------------------------:|:------------------------------------:|:----------------:|
| `NODE_PORT`                  | Porta padrão da aplicação            | `3000`           |
| `ASGARD_API_HOST`            | Host da API Asgard                   | `localhost:3001` |
| `ASGARD_AUTHORIZATION_TOKEN` | Token de autorização da API Asgard   | `test`           |


#  Como rodar
```sh
npm start
```
  

#  Como rodar os testes
```sh
npm test
```  
  

#  Scripts

- `npm run codecov`: Envia métricas de code coverage para o [codecov.io](codecov.io)
- `npm run fix:<fix-name>`: Executa script de correção
- `npm run fmt`: Formata código segundo estilo definido em [.prettierrc](.prettierrc) e [.eslintrc](.eslintrc)
- `npm run fmt:check`: Verifica se o código segue o padrão de estilo
- `npm run start`: Inicia a aplicação
- `npm run test`: Executa todos os testes
- `npm run test:acceptance`: Executa testes de aceitação
- `npm run test:integration`: Executa testes de integração
- `npm run test:unit`: Execute testes unitários
- `npm run worker:<worker-name>`: Inicia worker
