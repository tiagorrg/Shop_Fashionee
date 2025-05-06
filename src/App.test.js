import { filterProducts } from './components/Shop/utils';
import data from './products.json';
import { sumTimeout } from './sumTimeout';

const pageSize = 12;

const baseFilter = {
  searchValue: '',
  currentFilter: {
    category: 'All',
    price: { min: 0, max: 300 },
    colors: []
  },
  sort: '',
  pagination: { page: 1, pageSize }
};

describe('Фильтрация и поиск товаров', () => {
  const { products } = data;

  const getPaginated = (items, page = 1, size = pageSize) => {
    const start = (page - 1) * size;
    return items.slice(start, start + size);
  };
  describe('Фильтрация товаров по категориям с учетом пагинации', () => {
    const { products } = data;

    // Функция для получения ожидаемых товаров с учетом пагинации
    const getExpectedProducts = (filtered, page = 1, size = pageSize) => {
      const start = (page - 1) * size;
      const end = start + size;
      return filtered.slice(start, end);
    };

    test('Фильтр Men возвращает только мужские товары (с пагинацией)', () => {
      const menFilter = {
        ...baseFilter,
        currentFilter: { ...baseFilter.currentFilter, category: 'Men' }
      };

      const result = filterProducts(
        menFilter.searchValue,
        menFilter.currentFilter,
        menFilter.sort,
        menFilter.pagination,
        products
      );

      const allMenProducts = products.filter(p => p.categories.includes('Men'));
      const expectedProducts = getExpectedProducts(allMenProducts);

      expect(result.filteredProducts).toEqual(expectedProducts);
      expect(result.filteredProducts.length).toBeLessThanOrEqual(pageSize);
    });

    test('Фильтр Women возвращает только женские товары (с пагинацией)', () => {
      const womenFilter = {
        ...baseFilter,
        currentFilter: { ...baseFilter.currentFilter, category: 'Women' }
      };

      const result = filterProducts(
        womenFilter.searchValue,
        womenFilter.currentFilter,
        womenFilter.sort,
        womenFilter.pagination,
        products
      );

      const allWomenProducts = products.filter(p => p.categories.includes('Women'));
      const expectedProducts = getExpectedProducts(allWomenProducts);

      expect(result.filteredProducts).toEqual(expectedProducts);
    });

    test('Фильтр Accessories возвращает только аксессуары (с пагинацией)', () => {
      const accessoriesFilter = {
        ...baseFilter,
        currentFilter: { ...baseFilter.currentFilter, category: 'Accessories' }
      };

      const result = filterProducts(
        accessoriesFilter.searchValue,
        accessoriesFilter.currentFilter,
        accessoriesFilter.sort,
        accessoriesFilter.pagination,
        products
      );

      const allAccessories = products.filter(p => p.categories.includes('Accessories'));
      const expectedProducts = getExpectedProducts(allAccessories);

      expect(result.filteredProducts).toEqual(expectedProducts);
    });

    test('Фильтр New Arrivals возвращает только новинки (с пагинацией)', () => {
      const newArrivalsFilter = {
        ...baseFilter,
        currentFilter: { ...baseFilter.currentFilter, category: 'New Arrivals' }
      };

      const result = filterProducts(
        newArrivalsFilter.searchValue,
        newArrivalsFilter.currentFilter,
        newArrivalsFilter.sort,
        newArrivalsFilter.pagination,
        products
      );

      const allNewArrivals = products.filter(p => p.categories.includes('New Arrivals'));
      const expectedProducts = getExpectedProducts(allNewArrivals);

      expect(result.filteredProducts).toEqual(expectedProducts);
    });

    test('Фильтр All возвращает первую страницу всех товаров', () => {
      const result = filterProducts(
        baseFilter.searchValue,
        baseFilter.currentFilter,
        baseFilter.sort,
        baseFilter.pagination,
        products
      );

      const expectedProducts = getExpectedProducts(products);
      expect(result.filteredProducts).toEqual(expectedProducts);
      expect(result.filteredProducts.length).toBe(pageSize);
    });

    test('Пагинация: вторая страница возвращает правильные товары', () => {
      const page2Filter = {
        ...baseFilter,
        pagination: { ...baseFilter.pagination, page: 2 }
      };

      const result = filterProducts(
        page2Filter.searchValue,
        page2Filter.currentFilter,
        page2Filter.sort,
        page2Filter.pagination,
        products
      );

      const expectedProducts = getExpectedProducts(products, 2);
      expect(result.filteredProducts).toEqual(expectedProducts);
    });
  });

  describe('Поиск товаров', () => {
    test('Поиск по точному названию', () => {
      const testProduct = products[0];
      const searchFilter = {
        ...baseFilter,
        searchValue: testProduct.name
      };

      const result = filterProducts(
        searchFilter.searchValue,
        searchFilter.currentFilter,
        searchFilter.sort,
        searchFilter.pagination,
        products
      );

      const expected = products.filter(p =>
        p.name.toLowerCase().includes(testProduct.name.toLowerCase())
      );

      expect(result.filteredProducts).toEqual(getPaginated(expected));
      expect(result.filteredProducts[0].name).toBe(testProduct.name);
    });

    test('Поиск по части названия (без учета регистра)', () => {
      const searchText = 'Shoulder';
      const searchFilter = {
        ...baseFilter,
        searchValue: searchText
      };

      const result = filterProducts(
        searchFilter.searchValue,
        searchFilter.currentFilter,
        searchFilter.sort,
        searchFilter.pagination,
        products
      );

      expect(result.filteredProducts.length).toBeGreaterThan(0);
      result.filteredProducts.forEach(product => {
        expect(product.name.toLowerCase()).toContain(searchText.toLowerCase());
      });
    });

    test('Поиск по несуществующему названию возвращает пустой результат', () => {
      const searchFilter = {
        ...baseFilter,
        searchValue: 'несуществующий товар 12345'
      };

      const result = filterProducts(
        searchFilter.searchValue,
        searchFilter.currentFilter,
        searchFilter.sort,
        searchFilter.pagination,
        products
      );

      expect(result.filteredProducts).toEqual([]);
    });

    test('Комбинированный поиск: категория + поиск', () => {
      const searchFilter = {
        ...baseFilter,
        searchValue: 'dress',
        currentFilter: {
          ...baseFilter.currentFilter,
          category: 'Women'
        }
      };

      const result = filterProducts(
        searchFilter.searchValue,
        searchFilter.currentFilter,
        searchFilter.sort,
        searchFilter.pagination,
        products
      );

      const expected = products.filter(p =>
        p.categories.includes('Women') &&
        p.name.toLowerCase().includes('dress')
      );

      expect(result.filteredProducts).toEqual(getPaginated(expected));
      result.filteredProducts.forEach(product => {
        expect(product.categories).toContain('Women');
        expect(product.name.toLowerCase()).toContain('dress');
      });
    });
  });
});

describe('Async test', () => {

  test('Сумма 1 и 3 через 1 секунду должна быть 4', done => {
    sumTimeout(1, 3, (result) => {
      try {
        expect(result).toBe(4);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  test('асинхронный код с async/await и resolves', async () => {
    function fetchData() {
      return Promise.resolve('Hello world');
    }
  
    await expect(fetchData()).resolves.toBe('Hello world');
  });
})