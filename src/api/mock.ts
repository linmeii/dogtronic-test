/**
 * The type You've send me in trial task
 * On first thought I wanted to make a direct union of strings
 * but trial task didn't say that, so I followed with the capitalized types
 */
type FRANCHISE = 'FRANCHISE';
type REGULAR = 'REGULAR';
export type Shop = {
  id: string;
  address: string;
  imageUrl: string;
  type: FRANCHISE | REGULAR;
};

/**
 * Mock data used in purpose to imitate a real backend data
 * Follows the given type in trial task
 */
export const mockData: Shop[] = [
  {
    id: 'shop-001',
    address: 'ul. Marszałkowska 104/122 00-017, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df',
    type: 'REGULAR',
  },
  {
    id: 'shop-002',
    address: 'ul. Nowy Świat 15 00-029, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-003',
    address: 'ul. Krakowskie Przedmieście 50 00-071, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d',
    type: 'REGULAR',
  },
  {
    id: 'shop-004',
    address: 'ul. Aleje Jerozolimskie 65/79 00-697, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-005',
    address: 'ul. Chmielna 33 00-021, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1443884590026-2e4d21aee71c',
    type: 'REGULAR',
  },
  {
    id: 'shop-006',
    address: 'ul. Długa 5 31-147, Kraków',
    imageUrl: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-007',
    address: 'ul. Floriańska 45 31-019, Kraków',
    imageUrl: 'https://images.unsplash.com/photo-1556742111-a301076d9d18',
    type: 'REGULAR',
  },
  {
    id: 'shop-008',
    address: 'ul. Grodzka 12 31-006, Kraków',
    imageUrl: 'https://images.unsplash.com/photo-1521566652839-697aa473761a',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-009',
    address: 'ul. Szewska 22 31-009, Kraków',
    imageUrl: 'https://images.unsplash.com/photo-1540200049848-d9813ea0e120',
    type: 'REGULAR',
  },
  {
    id: 'shop-010',
    address: 'ul. Piotrkowska 82 90-102, Łódź',
    imageUrl: 'https://images.unsplash.com/photo-1604066867775-43f48e3957d8',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-011',
    address: 'ul. Piotrkowska 104 90-004, Łódź',
    imageUrl: 'https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597',
    type: 'REGULAR',
  },
  {
    id: 'shop-012',
    address: 'ul. Narutowicza 56 90-136, Łódź',
    imageUrl: 'https://images.unsplash.com/photo-1533922922960-9fceb9ef4733',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-013',
    address: 'ul. Bohaterów Monte Cassino 63 81-767, Sopot',
    imageUrl: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49',
    type: 'REGULAR',
  },
  {
    id: 'shop-014',
    address: 'ul. Długa 39 80-831, Gdańsk',
    imageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-015',
    address: 'ul. Świętojańska 49 81-391, Gdynia',
    imageUrl: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735',
    type: 'REGULAR',
  },
  {
    id: 'shop-016',
    address: 'ul. Krupówki 29 34-500, Zakopane',
    imageUrl: 'https://images.unsplash.com/photo-1527368746281-798b65e1ac6e',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-017',
    address: 'ul. Świdnicka 7 50-066, Wrocław',
    imageUrl: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f',
    type: 'REGULAR',
  },
  {
    id: 'shop-018',
    address: 'ul. Oławska 12 50-123, Wrocław',
    imageUrl: 'https://images.unsplash.com/photo-1464869372688-a93d806be852',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-019',
    address: 'ul. Rynek 38 50-102, Wrocław',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e',
    type: 'REGULAR',
  },
  {
    id: 'shop-020',
    address: 'ul. Półwiejska 42 61-888, Poznań',
    imageUrl: 'https://images.unsplash.com/photo-1546213290-e1b492ab3eee',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-021',
    address: 'ul. Stary Rynek 37 61-772, Poznań',
    imageUrl: 'https://images.unsplash.com/photo-1580554430120-94cfcb3adf25',
    type: 'REGULAR',
  },
  {
    id: 'shop-022',
    address: 'ul. Św. Marcin 69 61-806, Poznań',
    imageUrl: 'https://images.unsplash.com/photo-1563286094-6e420626b6f3',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-023',
    address: 'ul. Sienkiewicza 82 90-318, Łódź',
    imageUrl: 'https://images.unsplash.com/photo-1549479732-ee0adb0f5d32',
    type: 'REGULAR',
  },
  {
    id: 'shop-024',
    address: 'ul. Jagiellońska 10 85-067, Bydgoszcz',
    imageUrl: 'https://images.unsplash.com/photo-1542581482-851c38ee4b94',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-025',
    address: 'ul. Gdańska 27 85-005, Bydgoszcz',
    imageUrl: 'https://images.unsplash.com/photo-1541574823565-f1d660886187',
    type: 'REGULAR',
  },
  {
    id: 'shop-026',
    address: 'ul. Szeroka 33 87-100, Toruń',
    imageUrl: 'https://images.unsplash.com/photo-1664382953403-fc1ac77073a0',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-027',
    address: 'ul. Chełmińska 16 87-100, Toruń',
    imageUrl: 'https://images.unsplash.com/photo-1535401991746-da3d9055713e',
    type: 'REGULAR',
  },
  {
    id: 'shop-028',
    address: 'ul. Krakowska 14 31-062, Kraków',
    imageUrl: 'https://images.unsplash.com/photo-1502160348486-995f41fa55b1',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-029',
    address: 'ul. Bracka 9 31-005, Kraków',
    imageUrl: 'https://images.unsplash.com/photo-1533195925550-d1229db43cf2',
    type: 'REGULAR',
  },
  {
    id: 'shop-030',
    address: 'ul. Zwierzyniecka 30 31-105, Kraków',
    imageUrl: 'https://images.unsplash.com/photo-1559233837-28943db96a6a',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-031',
    address: 'ul. Bohaterów Warszawy 42 70-342, Szczecin',
    imageUrl: 'https://images.unsplash.com/photo-1620388640785-892616248ec8',
    type: 'REGULAR',
  },
  {
    id: 'shop-032',
    address: 'ul. Jagiellońska 91 70-435, Szczecin',
    imageUrl: 'https://images.unsplash.com/photo-1665815844395-06f64f44b5e3',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-033',
    address: 'ul. Wojska Polskiego 44 70-473, Szczecin',
    imageUrl: 'https://images.unsplash.com/photo-1519520104014-df63821cb6f9',
    type: 'REGULAR',
  },
  {
    id: 'shop-034',
    address: 'ul. Kościuszki 38 40-048, Katowice',
    imageUrl: 'https://images.unsplash.com/photo-1516274626895-055a99214f08',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-035',
    address: 'ul. Mariacka 26 40-014, Katowice',
    imageUrl: 'https://images.unsplash.com/photo-1508873056378-6066056e1cab',
    type: 'REGULAR',
  },
  {
    id: 'shop-036',
    address: 'ul. 3 Maja 17 40-097, Katowice',
    imageUrl: 'https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-037',
    address: 'ul. Piastowska 9 20-610, Lublin',
    imageUrl: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14',
    type: 'REGULAR',
  },
  {
    id: 'shop-038',
    address: 'ul. Krakowskie Przedmieście 13 20-002, Lublin',
    imageUrl: 'https://images.unsplash.com/photo-1603912699214-92627f304eb6',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-039',
    address: 'ul. Lipowa 4 20-020, Lublin',
    imageUrl: 'https://images.unsplash.com/photo-1601647998829-ee316a565aea',
    type: 'REGULAR',
  },
  {
    id: 'shop-040',
    address: 'ul. Sienkiewicza 15 25-007, Kielce',
    imageUrl: 'https://images.unsplash.com/photo-1542343082-abf84a65aeff',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-041',
    address: 'ul. Piotrkowska 17 25-510, Kielce',
    imageUrl: 'https://images.unsplash.com/photo-1562317335-0e9573a5d330',
    type: 'REGULAR',
  },
  {
    id: 'shop-042',
    address: 'ul. Warszawska 7 15-062, Białystok',
    imageUrl: 'https://images.unsplash.com/photo-1535927486028-ccc04fc91ba6',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-043',
    address: 'ul. Lipowa 14 15-427, Białystok',
    imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5',
    type: 'REGULAR',
  },
  {
    id: 'shop-044',
    address: 'ul. Kilińskiego 16 15-089, Białystok',
    imageUrl: 'https://images.unsplash.com/photo-1526199119161-4be1e3368d52',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-045',
    address: 'ul. Legionowa 9 15-281, Białystok',
    imageUrl: 'https://images.unsplash.com/photo-1519822472072-ec86d5ab6f5c',
    type: 'REGULAR',
  },
  {
    id: 'shop-046',
    address: 'ul. Kopernika 17 35-959, Rzeszów',
    imageUrl: 'https://images.unsplash.com/photo-1561710309-9a739908b336',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-047',
    address: 'ul. 3 Maja 13 35-030, Rzeszów',
    imageUrl: 'https://images.unsplash.com/photo-1590599145008-e4ec48682067',
    type: 'REGULAR',
  },
  {
    id: 'shop-048',
    address: 'ul. Grunwaldzka 31 35-068, Rzeszów',
    imageUrl: 'https://images.unsplash.com/photo-1494122474412-aeaf73d11da8',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-049',
    address: 'ul. Mickiewicza 21 10-508, Olsztyn',
    imageUrl: 'https://images.unsplash.com/photo-1517492973030-a02d282206f7',
    type: 'REGULAR',
  },
  {
    id: 'shop-050',
    address: 'ul. Kościuszki 66 10-504, Olsztyn',
    imageUrl: 'https://images.unsplash.com/photo-1602427644557-82db42b42e0a',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-051',
    address: 'ul. Piłsudskiego 44 10-450, Olsztyn',
    imageUrl: 'https://images.unsplash.com/photo-1542581542-0d526913eb3e',
    type: 'REGULAR',
  },
  {
    id: 'shop-052',
    address: 'ul. Dworcowa 19 85-009, Bydgoszcz',
    imageUrl: 'https://images.unsplash.com/photo-1664382950442-0748f82f2752',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-053',
    address: 'ul. Mostowa 5 85-110, Bydgoszcz',
    imageUrl: 'https://images.unsplash.com/photo-1516295904088-1ff1398c9596',
    type: 'REGULAR',
  },
  {
    id: 'shop-054',
    address: 'ul. Długa 39 85-034, Bydgoszcz',
    imageUrl: 'https://images.unsplash.com/photo-1521767703556-c4c44fd6e280',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-055',
    address: 'ul. Kopernika 33 87-100, Toruń',
    imageUrl: 'https://images.unsplash.com/photo-1516154767575-2146adebdf32',
    type: 'REGULAR',
  },
  {
    id: 'shop-056',
    address: 'ul. Podmurna 12 87-100, Toruń',
    imageUrl: 'https://images.unsplash.com/photo-1634316010579-465525ebab20',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-057',
    address: 'ul. Żeglarska 8 87-100, Toruń',
    imageUrl: 'https://images.unsplash.com/photo-1594969155368-f19485a9d88c',
    type: 'REGULAR',
  },
  {
    id: 'shop-058',
    address: 'ul. Długi Targ 31 80-830, Gdańsk',
    imageUrl: 'https://images.unsplash.com/photo-1600235502700-9383ab2fa768',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-059',
    address: 'ul. Mariacka 47 80-833, Gdańsk',
    imageUrl: 'https://images.unsplash.com/photo-1645397925470-ccb7d7605402',
    type: 'REGULAR',
  },
  {
    id: 'shop-060',
    address: 'ul. Piwna 15 80-831, Gdańsk',
    imageUrl: 'https://images.unsplash.com/photo-1507853762311-4a468e70503c',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-061',
    address: 'ul. Starowiejska 13 81-356, Gdynia',
    imageUrl: 'https://images.unsplash.com/photo-1571841591341-be09a94376b4',
    type: 'REGULAR',
  },
  {
    id: 'shop-062',
    address: 'ul. 10 Lutego 11 81-364, Gdynia',
    imageUrl: 'https://images.unsplash.com/photo-1592284426139-2bc528267dfb',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-063',
    address: 'ul. Abrahama 41 81-395, Gdynia',
    imageUrl: 'https://images.unsplash.com/photo-1631040202110-b43e933d849b',
    type: 'REGULAR',
  },
  {
    id: 'shop-064',
    address: 'ul. Moniuszki 12 90-111, Łódź',
    imageUrl: 'https://images.unsplash.com/photo-1588848567248-8203ed798b4e',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-065',
    address: 'ul. Tuwima 15 90-002, Łódź',
    imageUrl: 'https://images.unsplash.com/photo-1560405277-9cf34cae9e58',
    type: 'REGULAR',
  },
  {
    id: 'shop-066',
    address: 'ul. Więckowskiego 4 90-722, Łódź',
    imageUrl: 'https://images.unsplash.com/photo-1734741775285-bfef697872bb',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-067',
    address: 'ul. Wrocławska 18 61-838, Poznań',
    imageUrl: 'https://images.unsplash.com/photo-1650553430031-cd245010a8ff',
    type: 'REGULAR',
  },
  {
    id: 'shop-068',
    address: 'ul. Ratajczaka 44 61-816, Poznań',
    imageUrl: 'https://images.unsplash.com/photo-1560405277-9ff2a299b029',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-069',
    address: 'ul. Fredry 7 61-701, Poznań',
    imageUrl: 'https://images.unsplash.com/photo-1680136806846-c512d4b7641b',
    type: 'REGULAR',
  },
  {
    id: 'shop-070',
    address: 'ul. Kazimierza Wielkiego 35 50-077, Wrocław',
    imageUrl: 'https://images.unsplash.com/photo-1562280963-8a5475740a10',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-071',
    address: 'ul. Kuźnicza 10 50-138, Wrocław',
    imageUrl: 'https://images.unsplash.com/photo-1734539724637-1f325ce24116',
    type: 'REGULAR',
  },
  {
    id: 'shop-072',
    address: 'ul. Ruska 51 50-079, Wrocław',
    imageUrl: 'https://images.unsplash.com/photo-1708833709709-4257f61cd7c4',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-073',
    address: 'ul. Szpitalna 38 31-024, Kraków',
    imageUrl: 'https://images.unsplash.com/photo-1626881599026-34337e6aa418',
    type: 'REGULAR',
  },
  {
    id: 'shop-074',
    address: 'ul. Karmelicka 14 31-128, Kraków',
    imageUrl: 'https://images.unsplash.com/photo-1702355198799-561d2e6e0c96',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-075',
    address: 'ul. Dietla 50 31-039, Kraków',
    imageUrl: 'https://images.unsplash.com/photo-1527323344-e6c837099941',
    type: 'REGULAR',
  },
  {
    id: 'shop-076',
    address: 'ul. Złota 59 00-120, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1741004420608-8e8af81a9c94',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-077',
    address: 'ul. Mokotowska 63 00-533, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1695572338118-09ee5f01a648',
    type: 'REGULAR',
  },
  {
    id: 'shop-078',
    address: 'ul. Koszykowa 47 00-659, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1603771929104-df2b577c8724',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-079',
    address: 'ul. Wilcza 46 00-679, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1537006196112-763c102c4a08',
    type: 'REGULAR',
  },
  {
    id: 'shop-080',
    address: 'ul. Puławska 24 02-512, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1736167442640-1988e440297c',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-081',
    address: 'ul. Francuska 11 03-906, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1747101318558-92f1b658d7c6',
    type: 'REGULAR',
  },
  {
    id: 'shop-082',
    address: 'ul. Ząbkowska 3 03-736, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1743828765268-10b909fbc979',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-083',
    address: 'ul. Targowa 15 03-731, Warszawa',
    imageUrl: 'https://images.unsplash.com/photo-1736167443239-4d1497ca28a7',
    type: 'REGULAR',
  },
  {
    id: 'shop-084',
    address: 'ul. Wały Jagiellońskie 14 80-853, Gdańsk',
    imageUrl: 'https://images.unsplash.com/photo-1736167443232-d409831560e9',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-085',
    address: 'ul. Rajska 10 80-850, Gdańsk',
    imageUrl: 'https://images.unsplash.com/photo-1699832728171-cf774fa92150',
    type: 'REGULAR',
  },
  {
    id: 'shop-086',
    address: 'ul. Ogarna 27 80-826, Gdańsk',
    imageUrl: 'https://images.unsplash.com/photo-1602283662171-9a65c3708c5c',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-087',
    address: 'ul. Kaszubska 67 70-402, Szczecin',
    imageUrl: 'https://images.unsplash.com/photo-1690895174241-13388c1e1338',
    type: 'REGULAR',
  },
  {
    id: 'shop-088',
    address: 'ul. Rayskiego 23 70-442, Szczecin',
    imageUrl: 'https://images.unsplash.com/photo-1609455930899-718be180fe2a',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-089',
    address: 'ul. Małopolska 17 70-515, Szczecin',
    imageUrl: 'https://images.unsplash.com/photo-1600201319331-27d31ecd7850',
    type: 'REGULAR',
  },
  {
    id: 'shop-090',
    address: 'ul. Staromiejska 15 40-013, Katowice',
    imageUrl: 'https://images.unsplash.com/photo-1697549975012-788fa3d54749',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-091',
    address: 'ul. Warszawska 5 40-009, Katowice',
    imageUrl: 'https://images.unsplash.com/photo-1551641403-8531cf05e8fc',
    type: 'REGULAR',
  },
  {
    id: 'shop-092',
    address: 'ul. Dworcowa 8 40-012, Katowice',
    imageUrl: 'https://images.unsplash.com/photo-1720576127187-12d4b9045d93',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-093',
    address: 'ul. Narutowicza 34 20-016, Lublin',
    imageUrl: 'https://images.unsplash.com/photo-1652604090149-37987e3884c3',
    type: 'REGULAR',
  },
  {
    id: 'shop-094',
    address: 'ul. Lubartowska 24 20-085, Lublin',
    imageUrl: 'https://images.unsplash.com/photo-1579900081514-6579e0e21d24',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-095',
    address: 'ul. Chopina 11 20-023, Lublin',
    imageUrl: 'https://images.unsplash.com/photo-1710794710424-3bda41ac54f1',
    type: 'REGULAR',
  },
  {
    id: 'shop-096',
    address: 'ul. Sienkiewicza 36 25-501, Kielce',
    imageUrl: 'https://images.unsplash.com/photo-1618382705498-b2a1499d98a5',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-097',
    address: 'ul. Wesoła 47 25-363, Kielce',
    imageUrl: 'https://images.unsplash.com/photo-1675848758329-4f90e57941e3',
    type: 'REGULAR',
  },
  {
    id: 'shop-098',
    address: 'ul. Warszawska 4 25-512, Kielce',
    imageUrl: 'https://images.unsplash.com/photo-1484371924254-a44002341ca9',
    type: 'FRANCHISE',
  },
  {
    id: 'shop-099',
    address: 'ul. Rynek Kościuszki 16 15-091, Białystok',
    imageUrl: 'https://images.unsplash.com/photo-1724497508886-c467e834a816',
    type: 'REGULAR',
  },
  {
    id: 'shop-100',
    address: 'ul. Sienkiewicza 5 15-092, Białystok',
    imageUrl: 'https://images.unsplash.com/photo-1589435155236-d33dd961d654',
    type: 'FRANCHISE',
  },
];

/**
 * Basing on that I can't really modify the 'backend' data structure
 * as the trial task specifies how should it look,
 * I'm providing a blurhash for consideration
 * as it's probably the best UX possible
 */
export const imageHashes: Record<string, string> = {
  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df':
    'LVH_oS_NI;xa-:tQRjWV4.RORQt7',
  'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d':
    'L7Amb+4.xa%100WAR+D%~Vs.s:t7',
  'https://images.unsplash.com/photo-1534723452862-4c874018d66d':
    'L2Ee[BX;00-p8w01yXyE00xr:$R4',
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04':
    'LZGR@$x]WEWB~pxuRkj]IUt7WBt7',
  'https://images.unsplash.com/photo-1443884590026-2e4d21aee71c':
    'L6BfCC}=0LIp-nwH%1V[-oRQnism',
  'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0':
    'LAH_VYy902$k%30M^*~VIuNHt7kD',
  'https://images.unsplash.com/photo-1556742111-a301076d9d18':
    'L9LgkWNf00EL01yY56sl?^~p.9MJ',
  'https://images.unsplash.com/photo-1521566652839-697aa473761a':
    'LBFrY8v|-.-;~UofNGs:4.kC%LaJ',
  'https://images.unsplash.com/photo-1540200049848-d9813ea0e120':
    'L8EoD2sj02?G}PTKM{Ip03D%tltR',
  'https://images.unsplash.com/photo-1604066867775-43f48e3957d8':
    'L18N:|V]00x[008{tQx[00-:~qIU',
  'https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597':
    'LDD9n:0000-;~pIUIoxt01%L?bIn',
  'https://images.unsplash.com/photo-1533922922960-9fceb9ef4733':
    'L46t,co#00R+4okC~Vxtoyj?Rja#',
  'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49':
    'LKJ7%cTMo}o}~VofIUIn00-SV@In',
  'https://images.unsplash.com/photo-1578916171728-46686eac8d58':
    'L3Jj@w1i4T5rrBe9*G=q00,H67-W',
  'https://images.unsplash.com/photo-1481437156560-3205f6a55735':
    'LWJaWOt78^ae~WWBMxjsT0V@WVkC',
  'https://images.unsplash.com/photo-1527368746281-798b65e1ac6e':
    'LJJH%OR$.7D%MJozR*t7~BkWIUWW',
  'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f':
    'LDFPEF[A?G~p?^4o9aRPxuIVMxX8',
  'https://images.unsplash.com/photo-1464869372688-a93d806be852':
    'LLJs5_{#Nbofrr^QWBRjI;?Gs:9u',
  'https://images.unsplash.com/photo-1542838132-92c53300491e':
    'LDDSa3X*txobxuRkNHWB~Ut5$%WW',
  'https://images.unsplash.com/photo-1546213290-e1b492ab3eee':
    'LPMG@vr?DN%N%gV@tRWA_4f5t7M{',
  'https://images.unsplash.com/photo-1580554430120-94cfcb3adf25':
    'L4DSRJRq0N~q00RitQIo04%M~99G',
  'https://images.unsplash.com/photo-1563286094-6e420626b6f3':
    'LkKKycofs+j]MxfQWBay~qofWFj[',
  'https://images.unsplash.com/photo-1549479732-ee0adb0f5d32':
    'LcK-wbof%May_3j[WBoe~qbGRjWB',
  'https://images.unsplash.com/photo-1542581482-851c38ee4b94':
    'LIKn#l-;#$x]~q%LNLxZ9Fxup0oe',
  'https://images.unsplash.com/photo-1541574823565-f1d660886187':
    'LYDTJ7R-M{NG%QbJWAfPD%kCR%s:',
  'https://images.unsplash.com/photo-1664382953403-fc1ac77073a0':
    'LABpna-L9GNktWRjX7N#ogRlkB%K',
  'https://images.unsplash.com/photo-1535401991746-da3d9055713e':
    'LTK1Xh~BOZ57xBt7xaflXAM|jExa',
  'https://images.unsplash.com/photo-1502160348486-995f41fa55b1':
    'L57-E15-00}B%$xaH?M|1$^4#70~',
  'https://images.unsplash.com/photo-1533195925550-d1229db43cf2':
    'LQJ8R@RPt8a~4mt6xuRk~qxuM{NG',
  'https://images.unsplash.com/photo-1559233837-28943db96a6a':
    'LOEMe3kCIuog0bkDofa#Q-WEi[jY',
  'https://images.unsplash.com/photo-1620388640785-892616248ec8':
    'L4Dl4l02_LuO00%y*{@?.S~B^j-T',
  'https://images.unsplash.com/photo-1665815844395-06f64f44b5e3':
    'LYLgw$RPIo%M_4%MayWBo0WCM{t6',
  'https://images.unsplash.com/photo-1519520104014-df63821cb6f9':
    'L4EMUf~D00In4TNLt.em.SNfeoVq',
  'https://images.unsplash.com/photo-1516274626895-055a99214f08':
    'L6Ga%v_$HX1K7y1f-9Mc00?]%2z;',
  'https://images.unsplash.com/photo-1508873056378-6066056e1cab':
    'L5J8CQ1F}].A00J7^RJC.Nb_Ri4-',
  'https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8':
    'LMEye~?bMxbwOZtSM{jt~VayMxV?',
  'https://images.unsplash.com/photo-1524634126442-357e0eac3c14':
    'LKNK0FRP9Eog?wV@fkof.8kXf5Ri',
  'https://images.unsplash.com/photo-1603912699214-92627f304eb6':
    'L69s^yNf019v.7xZIot603kC~A-o',
  'https://images.unsplash.com/photo-1601647998829-ee316a565aea':
    'LfL}HU-qtSf7_Nj[bHaytRM{V@a{',
  'https://images.unsplash.com/photo-1542343082-abf84a65aeff':
    'L4HBo9v001E300~V^j%3cF^+yB-o',
  'https://images.unsplash.com/photo-1562317335-0e9573a5d330':
    'L7F5?TU[=|]$I7V@DhEN%3uPFzIo',
  'https://images.unsplash.com/photo-1535927486028-ccc04fc91ba6':
    'LIE{;2H?K%R5?^RPOWV[p_Mxw^RP',
  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5':
    'L5BfwxF}00~T#OM{?IxuKR%2E1IV',
  'https://images.unsplash.com/photo-1526199119161-4be1e3368d52':
    'LcH_D8oz%MkDWFtRxuof~Wxuozt6',
  'https://images.unsplash.com/photo-1519822472072-ec86d5ab6f5c':
    'L8HU8}^Owd3r00T0MdD4tlM{-;~q',
  'https://images.unsplash.com/photo-1561710309-9a739908b336':
    'L5B3+-aK00Ws8^V@XAWA?wt6bds-',
  'https://images.unsplash.com/photo-1590599145008-e4ec48682067':
    'LAI}P4MH00yF3G?HDNxCMzt-D%nN',
  'https://images.unsplash.com/photo-1494122474412-aeaf73d11da8':
    'L38:@n0fD%~C8wY5xarr9FW=xvRk',
  'https://images.unsplash.com/photo-1517492973030-a02d282206f7':
    'LAEo-?={00NwX3~p-:E100Io?b^+',
  'https://images.unsplash.com/photo-1602427644557-82db42b42e0a':
    'LAFiGTH=9sofE1N2bHbc?]D~w|%M',
  'https://images.unsplash.com/photo-1542581542-0d526913eb3e':
    'LHJH{p9Y.Q9Z.S9FJCxr?KIn9Z-:',
  'https://images.unsplash.com/photo-1664382950442-0748f82f2752':
    'L6BW0q_N009Y8w0L%h~V03t7?YIU',
  'https://images.unsplash.com/photo-1516295904088-1ff1398c9596':
    'LFCipzE2IVs9~As+M|RksRxYofjs',
  'https://images.unsplash.com/photo-1521767703556-c4c44fd6e280':
    'LBJ[3L008^$%_N^iIVIo8w?v9Es8',
  'https://images.unsplash.com/photo-1516154767575-2146adebdf32':
    'L18gmNQT~U-oNE.7x[x],C?H#9wI',
  'https://images.unsplash.com/photo-1634316010579-465525ebab20':
    'LMF$U{oI_NjG_3j?ayay%gofIToz',
  'https://images.unsplash.com/photo-1594969155368-f19485a9d88c':
    'LTM@D-05tm#+?^IqoHIp0JRhrqo|',
  'https://images.unsplash.com/photo-1600235502700-9383ab2fa768':
    'LB7nj|9F_ND%M_t7M_t7M{V@axae',
  'https://images.unsplash.com/photo-1645397925470-ccb7d7605402':
    'LLG+gs0Ki_00~q4n%gRj-;IU%MWB',
  'https://images.unsplash.com/photo-1507853762311-4a468e70503c':
    'LNGbxE-qE1IU00xaWVWB~pn+R*xu',
  'https://images.unsplash.com/photo-1571841591341-be09a94376b4':
    'L1BM;~nM00RN00Mx%Lof00E1~q-;',
  'https://images.unsplash.com/photo-1592284426139-2bc528267dfb':
    'L9J*xE00~qod01M{%MM_x^axRPIT',
  'https://images.unsplash.com/photo-1631040202110-b43e933d849b':
    'LOEWEuv|D*R+.mxCxtkCM{tRt7xa',
  'https://images.unsplash.com/photo-1588848567248-8203ed798b4e':
    'L14_hC?G0000~C%ME19F01S$^+r=',
  'https://images.unsplash.com/photo-1560405277-9cf34cae9e58':
    'LSGlFs4nNG-:-:M{Rit7?wacn~of',
  'https://images.unsplash.com/photo-1734741775285-bfef697872bb':
    'LDDlN9rqI:%L~pIoNbj[TdRjs:Rk',
  'https://images.unsplash.com/photo-1650553430031-cd245010a8ff':
    'L697qmxb00eTMIt6_Nt7VYaxIVtR',
  'https://images.unsplash.com/photo-1560405277-9ff2a299b029':
    'L3CP-CW{00R100R:^*tLJ~n-Dgo@',
  'https://images.unsplash.com/photo-1680136806846-c512d4b7641b':
    'LgGRu6RjNHxaxVofRkWB~Wj[oLay',
  'https://images.unsplash.com/photo-1562280963-8a5475740a10':
    'LBF#]*IU4?%L9*9ZxUad~BxUoas+',
  'https://images.unsplash.com/photo-1734539724637-1f325ce24116':
    'LNFrb8~V-o^*IB%1s.V[VyIBIVM|',
  'https://images.unsplash.com/photo-1708833709709-4257f61cd7c4':
    'LDAmh]IAM_-;~Ws.IUxuD%xaIpj?',
  'https://images.unsplash.com/photo-1626881599026-34337e6aa418':
    'LIECXi%2M{s,~qt6oIs-%gNHE2S4',
  'https://images.unsplash.com/photo-1702355198799-561d2e6e0c96':
    'LCJj*o00^kHDMd$zOUNFE2kD%1-p',
  'https://images.unsplash.com/photo-1527323344-e6c837099941':
    'LGDlp6~V9G9bMIM_tRt7B;TKxZ$f',
  'https://images.unsplash.com/photo-1741004420608-8e8af81a9c94':
    'L8Av::%M9Z9G_LM|sme.E#E2-o%M',
  'https://images.unsplash.com/photo-1695572338118-09ee5f01a648':
    'LAA^H[j;EToe~qRiIroJ-;t5NIae',
  'https://images.unsplash.com/photo-1603771929104-df2b577c8724':
    'L87UeJW=4rox.if+MzWV0OoJ-mRl',
  'https://images.unsplash.com/photo-1537006196112-763c102c4a08':
    'L49jcQ~q01010Kt5rDRP004.,[_2',
  'https://images.unsplash.com/photo-1736167442640-1988e440297c':
    'LHIhNo~q00w@.8RPslkD4:IARONd',
  'https://images.unsplash.com/photo-1747101318558-92f1b658d7c6':
    'LJE-:nWX9tbc:7bFXTNG}tofNGWB',
  'https://images.unsplash.com/photo-1743828765268-10b909fbc979':
    'L6Db+$011OcEtT0z~D?b0J9Z~W4:',
  'https://images.unsplash.com/photo-1736167443239-4d1497ca28a7':
    'LHKn9zQ,8^R4b_IURO%g_NxtIUMx',
  'https://images.unsplash.com/photo-1736167443232-d409831560e9':
    'LNJRBYRj8_M{_NRPx]j]%Mjusma}',
  'https://images.unsplash.com/photo-1699832728171-cf774fa92150':
    'LOCF*2RQ9ttR~Ae-IoX9-oWBNGog',
  'https://images.unsplash.com/photo-1602283662171-9a65c3708c5c':
    'LkE.|ixvIVRj_NxuIVRjx^ogWERj',
  'https://images.unsplash.com/photo-1690895174241-13388c1e1338':
    'L02~W3jF00R*%M%MIVD%00tR_LRQ',
  'https://images.unsplash.com/photo-1609455930899-718be180fe2a':
    'LDGb^+OZ-5tR0$tRROV@~pxDI@M{',
  'https://images.unsplash.com/photo-1600201319331-27d31ecd7850':
    'LdKBH:M|Dixa~qofROR*R-xuRiRj',
  'https://images.unsplash.com/photo-1697549975012-788fa3d54749':
    'LDEoJX0nM{=^Ae$KNboJ02~9tRE2',
  'https://images.unsplash.com/photo-1551641403-8531cf05e8fc':
    'L2ATD:#@Y+0L000#T#={00^jP;%g',
  'https://images.unsplash.com/photo-1720576127187-12d4b9045d93':
    'L36uCW~o004T9bI[D+D+8_S2x]tS',
  'https://images.unsplash.com/photo-1652604090149-37987e3884c3':
    'L8C?$8$z8x~q~WV@WBogDiE1x]sl',
  'https://images.unsplash.com/photo-1579900081514-6579e0e21d24':
    'L3D9n^=cQ.MI{c%2aKf500o}S0x]',
  'https://images.unsplash.com/photo-1710794710424-3bda41ac54f1':
    'L9ECUmE100~VWFjItSOUV=NHS$%2',
  'https://images.unsplash.com/photo-1618382705498-b2a1499d98a5':
    'L9AwSQ-:of%MD4%1t7NHL4E2IUoI',
  'https://images.unsplash.com/photo-1675848758329-4f90e57941e3':
    'Lu7p[PkqWFa|cukWe-flb^VsaKj[',
  'https://images.unsplash.com/photo-1484371924254-a44002341ca9':
    'L267+YPB7f}TmkNcS#xZ0z,p|s72',
  'https://images.unsplash.com/photo-1724497508886-c467e834a816':
    'L6F$CQDj00_300%f9Z9Z~VM_T0-:',
  'https://images.unsplash.com/photo-1589435155236-d33dd961d654':
    'L24LzOnz00Y3yDocIUkV4TRo?^Z%',
};
