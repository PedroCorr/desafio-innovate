import React from 'react';
import './styles.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table id='table'>
      <caption>Alterações de ponto de serviço</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('cv')}
              className={getClassNamesFor('cv')}
            >
              Código Versão
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('int')}
              className={getClassNamesFor('int')}
            >
              Intervenção
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('date')}
              className={getClassNamesFor('date')}
            >
              Data
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('res')}
              className={getClassNamesFor('res')}
            >
              Responsável
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('bar')}
              className={getClassNamesFor('bar')}
            >
              Bairro
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('etq')}
              className={getClassNamesFor('etq')}
            >
              Etiqueta
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('status')}
              className={getClassNamesFor('status')}
            >
              Status
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('ver')}
              className={getClassNamesFor('ver')}
            >
              Nº Versão
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('codA')}
              className={getClassNamesFor('codA')}
            >
              Código Antigo
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('codN')}
              className={getClassNamesFor('codN')}
            >
              Código novo
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('mat')}
              className={getClassNamesFor('mat')}
            >
              Material
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.cv}</td>
            <td>{item.int}</td>
            <td>{item.date}</td>
            <td>{item.res}</td>
            <td>{item.bar}</td>
            <td>{item.etq}</td>
            <td>{item.status}</td>
            <td>{item.ver}</td>
            <td>{item.codA}</td>
            <td>{item.codN}</td>
            <td>{item.mat}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (

    <div className="App" id='cards'>
      <header id='filter'>
        <a>Parque de Serviço
          <select id="cardsFirst">
            <option value="ex1">EX1</option>
            <option value="ex2">EX2</option>
            <option value="ex3">EX3</option>
            <option value="ex4">EX4</option> 
          </select>
        </a>

        <a>Bairro
          <select id='cardsSecond'>
            <option value="ex1">EX1</option>
            <option value="ex2">EX2</option>
            <option value="ex3">EX3</option>
            <option value="ex4">EX4</option>
          </select>
        </a>

        <a>Status
          <select>
            <option value="ex1">EX1</option>
            <option value="ex2">EX2</option>
            <option value="ex3">EX3</option>
            <option value="ex4">EX4</option>
          </select>
        </a>

        <a>Familia
          <select>
            <option value="ex1">EX1</option>
            <option value="ex2">EX2</option>
            <option value="ex3">EX3</option>
            <option value="ex4">EX4</option>
          </select>
        </a>

        <a>Atributo
          <select>
            <option value="ex1">EX1</option>
            <option value="ex2">EX2</option>
            <option value="ex3">EX3</option>
            <option value="ex4">EX4</option>
          </select>
        </a>
      </header>

      <ProductTable
        products={[
          { cv: 1, int: 'test1', date: '05/07/2019', res: 'Desenvolvedor', bar: 'Ponta Verde', etq: 'S86812', status: 'Ativo', ver: 2, codA: 251871, codN: 314575, mat: 'Lâmpada de 80W Mercúrio' },
          { cv: 2, int: 'test2', date: '09/04/2020', res: 'Desenvolvedor', bar: 'Pajuçara', etq: 'S86812', status: 'Ativo', ver: 2, codA: 251871, codN: 314575, mat: 'Lâmpada de 80W Mercúrio' },
          { cv: 3, int: 'test3', date: '14/06/2020', res: 'Desenvolvedor', bar: 'Ponta da Terra', etq: 'S86812', status: 'Ativo', ver: 2, codA: 251871, codN: 314575, mat: 'Lâmpada de 80W Mercúrio' },
          { cv: 4, int: 'test4', date: '22/07/2020', res: 'Desenvolvedor', bar: 'Poço', etq: 'S86812', status: 'Ativo', ver: 2, codA: 251871, codN: 314575, mat: 'Lâmpada de 80W Mercúrio' },
          { cv: 5, int: 'test5', date: '29/07/2020', res: 'Desenvolvedor', bar: 'Pinheiro', etq: 'S86812', status: 'Ativo', ver: 2, codA: 251871, codN: 314575, mat: 'Lâmpada de 80W Mercúrio' },
          { cv: 6, int: 'test6', date: '21/08/2020', res: 'Desenvolvedor', bar: 'Farol', etq: 'S86812', status: 'Ativo', ver: 2, codA: 251871, codN: 314575, mat: 'Lâmpada de 80W Mercúrio' },
          { cv: 7, int: 'test7', date: '19/09/2020', res: 'Desenvolvedor', bar: 'Serraria', etq: 'S86812', status: 'Ativo', ver: 2, codA: 251871, codN: 314575, mat: 'Lâmpada de 80W Mercúrio' },
        ]}
      />
    </div>
  );
}


