import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

// pega dados do ORM.json
getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  //console.log(newOptions);
  // newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  });
});