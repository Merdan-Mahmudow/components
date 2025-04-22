import { ProductItem } from "./components/ProductCardNew";
import MargaritaIMG from "./assets/pizza.png";

export const productItems: ProductItem[] = [
    {
      id: "1",
      name: "Пепперони",
      price: {
        small: 585,
        medium: 699,
        large: 825
      },
      imageUrl: {
        base: "https://static.gorpom.ru/images/common/discounts/logos/5cd3801a106cba94d77b0d21d909b5c7.jpg",
        details: "https://myasorubka-kuban.ru/wp-content/uploads/2024/07/1617152635_17-p-pitstsa-pepperoni-krasivo-20.jpg"
      },
      description: "Классическая пицца с острыми ломтиками пепперони и растопленным сыром моцарелла. Идеальный выбор для любителей пикантного вкуса и насыщенного аромата.",
      weight: "500г",
      category: "Пицца"
    },
    {
      id: "2",
      name: "Маргарита",
      price: {
        small: 585,
        medium: 699,
        large: 825
      },
      imageUrl: {
        base: MargaritaIMG,
        details: "https://www.pinterpolitik.com/wp-content/uploads/2023/08/image-1.webp"
      },
      description: "Простая, но изысканная пицца с сочными томатами, нежной моцареллой и свежим базиликом. Легкая и ароматная классика итальянской кухни.",
      weight: "450г",
      category: "Пицца"
    },
    {
      id: "3",
      name: "Барбекю с курицей",
      price: {
        small: 659,
        medium: 825,
        large: 1025
      },
      imageUrl: {
        base: "https://i.pinimg.com/originals/55/8b/32/558b329cf5e385ce3d1095941d3edb7f.jpg",
        details: "https://i.ytimg.com/vi/RaFtvmP8qhc/maxresdefault.jpg"
      },
      description: "Сочная курица в соусе барбекю, красный лук и кинза на хрустящем тесте. Сбалансированное сочетание сладкого, копченого и пряного вкусов.",
      weight: "550г",
      category: "Пицца"
    },
    {
      id: "4",
      name: "Овощная",
      price: {
        small: 620,
        medium: 735,
        large: 980
      },
      imageUrl: {
        base: "https://i.pinimg.com/originals/3d/03/d9/3d03d9f65d3ce3ed6c4f5b7e3dbf1112.jpg",
        details: "https://avatars.mds.yandex.net/get-altay/2701558/2a00000184dd2441c90d9a0bd4c80a0571c5/XXXL"
      },
      description: "Легкая и полезная пицца, наполненная свежими овощами: сладкий перец, шампиньоны, лук и томаты. Отличный выбор для вегетарианцев и всех, кто ценит натуральный вкус.",
      weight: "480г",
      category: "Пицца"
    },
    {
      id: "5",
      name: "Гавайская",
      price: {
        small: 539,
        medium: 829,
        large: 969
      },
      imageUrl: {
        base: "https://i.pinimg.com/236x/12/d4/70/12d4709f0f82f47ccfd39c67b09948f9--privacy-policy-hawaiian-chicken.jpg?nii=t",
        details: "https://avatars.mds.yandex.net/i?id=3b96464769a7ad80abc023c228b7bf9e_l-9056011-images-thumbs&n=13"
      },
      description: "Нежная ветчина, сочный ананас и сыр моцарелла на тонком тесте. Контраст сладости и солоноватого вкуса дарит незабываемые гастрономические впечатления.",
      weight: "520г",
      category: "Пицца"
    },
    {
      id: "6",
      name: "Четыре сыра",
      price: {
        small: 569,
        medium: 839,
        large: 1029
      },
      imageUrl: {
        base: "https://static.tildacdn.info/tild3132-3936-4566-a230-326532353663/-4---.jpg",
        details: "https://static-actual-production.chibbis.ru/bd7b2cae75664c6f40c4cf5f029f09f1.jpeg"
      },
      description: "Пицца с насыщенным сливочным вкусом, приготовленная из четырёх видов сыра: моцарелла, чеддер, пармезан и голубой сыр. Настоящее удовольствие для сырных гурманов.",
      weight: "500г",
      category: "Пицца"
    },
    {
      id: "7",
      name: "Острая колбаска",
      price: {
        small: 679,
        medium: 1029,
        large: 1199
      },
      imageUrl: {
        base: "https://i.pinimg.com/originals/fb/73/f5/fb73f58e66106e52f2af3511ae9255b3.jpg",
        details: "https://thumbs.dreamstime.com/b/ку-рявая-пицца-tortilla-masa-с-сосиской-choriso-79355824.jpg"
      },
      description: "Пикантная пицца с острой колбаской чоризо, халапеньо и тянущимся сыром. Настоящий огонь вкуса для тех, кто любит поострее.",
      weight: "530г",
      category: "Пицца"
    },
    {
      id: "8",
      name: "Грибная",
      price: {
        small: 619,
        medium: 929,
        large: 1069
      },
      imageUrl: {
        base: "https://i.pinimg.com/736x/f0/46/3f/f0463f6165015d8e01608be58247507f.jpg",
        details: "https://avatars.mds.yandex.net/get-altay/6159907/2a00000190586f4967bfaefdda69957108c6/XXXL"
      },
      description: "Ароматные обжаренные шампиньоны и чеснок на нежном тесте под слоем моцареллы. Идеальна для тех, кто ценит мягкие, грибные нотки.",
      weight: "490г",
      category: "Пицца"
    },
    {
      id: "9",
      name: "Баффало с курицей",
      price: {
        small: 549,
        medium: 819,
        large: 999
      },
      imageUrl: {
        base: "https://i.pinimg.com/736x/fe/bf/40/febf40e62f533baf94be32394fd29211.jpg",
        details: "https://www.stonefire.com/wp-content/uploads/2021/07/Stonefire_Pizza_SalamiBuffaloMozzarella1_2017.jpg"
      },
      description: "Пикантная пицца с курицей в соусе баффало, заправленная нежным ранчем. Идеальное сочетание пряности и кремовой текстуры.",
      weight: "540г",
      category: "Пицца"
    },
    {
      id: "10",
      name: "Креветки со сладким чили",
      price: {
        small: 689,
        medium: 999,
        large: 1149
      },
      imageUrl: {
        base: "https://i.pinimg.com/originals/de/64/40/de644042ac19f9e016f77bb900546a80.jpg",
        details: "https://s1.1zoom.ru/big7/961/Fast_food_Pizza_Closeup_470634.jpg"
      },
      description: "Лёгкая и ароматная пицца с маслинами, фетой, вялеными томатами и шпинатом. Погружает в атмосферу средиземноморского побережья.",
      weight: "500г",
      category: "Пицца"
    }
  ];