// Auto-generated from i'DELI CAFE catalog
export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  image: string;
  price?: string | number;
}

export const menuCategories: MenuCategory[] = [
  {
    "id": "dosa",
    "name": "Dosa",
    "description": "Classic to creative — explore all-time favorite South Indian crepes.",
    "image": "/assets/categories/dosanew/ghee_podi_dosa.jpg"
  },
  {
    "id": "idli",
    "name": "Idli",
    "description": "Steamed perfection — soft, light, and served with flavorful chutneys.",
    "image": "/assets/categories/idli/set_idli.jpg"
  },
  {
    "id": "main-course",
    "name": "Main Course",
    "description": "Satisfying meals — curries, Appam, and hearty mains for every appetite.",
    "image": "/assets/categories/maincourse/Poorimasala.jpg"
  },
  {
    "id": "Curries-&-sides",
    "name": "Curries & sides",
    "description": "curries and sides",
    "image": "/assets/categories/shakes/"
  },
  {
    "id": "meals",
    "name": "Meals",
    "description": "All-veg rice delights like mini meals, kerala meals, ghee rice, and more.",
    "image": "/assets/categories/meals/Minimeals.jpg"
  },
  {
    "id": "snacks",
    "name": "Snacks",
    "description": "Crispy, spicy vegetarian bites — perfect for any time of day.",
    "image": "/assets/categories/snacks/vadaset.jpg"
  },
  {
    "id": "dessert",
    "name": "Dessert",
    "description": "Indulgent South Indian sweets and desserts.",
    "image": "/assets/categories/dessert/Kesari.jpg"
  },
  {
    "id": "hot-beverages",
    "name": "Hot beverages",
    "description": "Freshly brewed filter coffee, chai, and other warm comforts.",
    "image": "/assets/categories/hotbeve/Coffee.jpg"
  },
  {
    "id": "fresh-juices",
    "name": "Fresh Juices",
    "description": "Cold-pressed juices made from fresh fruits — refreshing and pure.",
    "image": "/assets/categories/freshjuice/Musambi.jpg"
  },
  {
    "id": "mocktails",
    "name": "Mocktails",
    "description": "Colorful, fizzy blends of fruits and herbs — fun without the alcohol.",
    "image": "/assets/categories/mocktails/Citrusmagic.jpg"
  },
  {
    "id": "shakes",
    "name": "Shakes",
    "description": "Creamy, rich shakes made with milk",
    "image": "/assets/categories/shakes/Coldboost.jpg"
  }
];

export const menuItems: MenuItem[] = [
  {
    "id": "1",
    "categoryId": "dosa",
    "name": "Set Dosa",
    "description": "Soft and fluffy small-sized dosas usually served in a set.",
    "image": "/assets/categories/dosanew/set_dosa.jpg"
  },
  {
    "id": "2",
    "categoryId": "dosa",
    "name": "Ghee Dosa",
    "description": "Dosa cooked with ghee for a rich flavor.",
    "image": "/assets/categories/dosanew/ghee_dosa.jpg"
  },
  {
    "id": "3",
    "categoryId": "dosa",
    "name": "Ghee Podi Dosa",
    "description": "Ghee dosa with spicy podi masala",
    "image": "/assets/categories/dosanew/ghee_podi_dosa.jpg"
  },
  {
    "id": "4",
    "categoryId": "dosa",
    "name": "Plain Dosa",
    "description": "Simple dosa served with sambar and chutney",
    "image": "/assets/categories/dosanew/plain_dosa.jpg"
  },
  {
    "id": "5",
    "categoryId": "dosa",
    "name": "Masala Dosa",
    "description": "Dosa stuffed with spiced potato filling",
    "image": "/assets/categories/dosanew/masala_dosa.jpg"
  },
  {
    "id": "6",
    "categoryId": "dosa",
    "name": "Onion Uthappam",
    "description": "Thick pancake with onions, served with chutney and sambar",
    "image": "/assets/categories/dosanew/onion_uthappam.jpg"
  },
  {
    "id": "7",
    "categoryId": "dosa",
    "name": "Butter Dosa",
    "description": "Crisp dosa topped with butter, served with chutney",
    "image": "/assets/categories/dosanew/butter_dosa.jpg"
  },
  {
    "id": "8",
    "categoryId": "dosa",
    "name": "Garlic Dosa",
    "description": "Dosa infused with garlic flavor, served with sambar",
    "image": "/assets/categories/dosanew/garlic_dosa.jpg"
  },
  {
    "id": "9",
    "categoryId": "dosa",
    "name": "Neer Dosa",
    "description": "Thin, soft rice crepe served with coconut chutney",
    "image": "/assets/categories/dosanew/neer_dosa.jpg"
  },
  {
    "id": "10",
    "categoryId": "dosa",
    "name": "Deli Special Masala Dosa",
    "description": "A special version of masala dosa offered by the restaurant Deli.",
    "image": "/assets/categories/dosanew/deli_spcl_masala_dosa.jpg"
  },
  {
    "id": "11",
    "categoryId": "dosa",
    "name": "Ghee Podi Masala Dosa",
    "description": "Masala dosa with ghee and spicy podi.",
    "image": "/assets/categories/dosanew/ghee_podi_masala_dosa.jpg"
  },
  {
    "id": "12",
    "categoryId": "dosa",
    "name": "Open Butter Masala Dosa",
    "description": "Masala dosa with an open presentation and butter topping.",
    "image": "/assets/categories/dosanew/open_butter_masla_dosa.jpg"
  },
  {
    "id": "13",
    "categoryId": "dosa",
    "name": "Benne Masala Dosa",
    "description": "Butter masala dosa",
    "image": "/assets/categories/dosanew/benne_masala_dosa.jpg"
  },
  {
    "id": "14",
    "categoryId": "dosa",
    "name": "Healthy Cherupayar Dosa",
    "description": "Dosa made with green gram lentils, known for their health benefits.",
    "image": "/assets/categories/dosanew/healthy_cherupayar.jpg"
  },
  {
    "id": "15",
    "categoryId": "dosa",
    "name": "Pudina Masala Dosa",
    "description": "Masala dosa with mint (pudina) flavor",
    "image": "/assets/categories/dosanew/pudina_masala_dosa.jpg"
  },
  {
    "id": "16",
    "categoryId": "dosa",
    "name": "Garlic Roast Masala Dosa",
    "description": "Roasted masala dosa with garlic infusion",
    "image": "/assets/categories/dosanew/garlic_roast_masala_dosa.jpg"
  },
  {
    "id": "17",
    "categoryId": "dosa",
    "name": "Rava Dosa",
    "description": "Crispy dosa made from semolina, served with sambar and chutney",
    "image": "/assets/categories/dosanew/rava_dosa.jpg"
  },
  {
    "id": "20",
    "categoryId": "idli",
    "name": "Single Idli",
    "description": "A single soft and fluffy steamed idli served with sambar & chutney",
    "image": "/assets/categories/idli/single_idli.jpg"
  },
  {
    "id": "21",
    "categoryId": "idli",
    "name": "Set Idli (3 pcs)",
    "description": "Set of three soft idlis served with sambar and chutney",
    "image": "/assets/categories/idli/set_idli.jpg"
  },
  {
    "id": "22",
    "categoryId": "idli",
    "name": "Thattu Idli",
    "description": "A variation of idli, usually thicker and served with a variety of chutneys.",
    "image": "/assets/categories/idli/thattu_idli.jpg"
  },
  {
    "id": "23",
    "categoryId": "idli",
    "name": "Ghee Thattu Idli",
    "description": "Thattu idli flavored with ghee served with a variety of chutneys.",
    "image": "/assets/categories/idli/ghee_thattu_idli.jpg"
  },
  {
    "id": "24",
    "categoryId": "idli",
    "name": "Ghee Podi Thattu Idli",
    "description": "Thattu idlis flavored with ghee (clarified butter) and a spicy podi (powder).",
    "image": "/assets/categories/idli/ghee_podi_thattu_idli.jpg"
  },
  {
    "id": "25",
    "categoryId": "idli",
    "name": "Mini Idli Sambar",
    "description": "Bite-sized idlis served with sambar, a lentil-based vegetable stew.",
    "image": "/assets/categories/idli/mini_idli_sambar.jpg"
  },
  {
    "id": "26",
    "categoryId": "idli",
    "name": "Neer Idli",
    "description": "Mini idli with White coconut chutney and adka on top of it",
    "image": "/assets/categories/idli/neer_idli.jpg"
  },
  {
    "id": "27",
    "categoryId": "idli",
    "name": "Idli Vada Sambar Dip",
    "description": "Soft idlis and crispy vadas served with piping hot, flavorful sambar",
    "image": "/assets/categories/idli/idli_vada_sambar_dip.jpg"
  },
  {
    "id": "28",
    "categoryId": "idli",
    "name": "Idli Vada Chutney Dip",
    "description": "Fluffy idlis and crunchy vadas served with a rich, creamy chutney dip",
    "image": "/assets/categories/idli/idli_vada_chutney_dip.jpg"
  },
  {
    "id": "29",
    "categoryId": "main-course",
    "name": "Appam",
    "description": "Soft, fluffy pancake with a slight sweetness, usually made from rice batter and coconut milk.",
    "image": "/assets/categories/maincourse/Appam.jpg"
  },
  {
    "id": "30",
    "categoryId": "main-course",
    "name": "Coconut spreaded Appam & Curry(Veg stew / kadala / cherupayar / mango curry)",
    "description": "Soft, fluffy pancake with a slight sweetness, usually made from rice batter and coconut milk served with curry",
    "image": "/assets/categories/maincourse/appamandcurry.jpg"
  },
  {
    "id": "31",
    "categoryId": "main-course",
    "name": "Upma",
    "description": "Savory South Indian dish made from semolina and spices.",
    "image": "/assets/categories/maincourse/Upma.jpg"
  },
  {
    "id": "32",
    "categoryId": "main-course",
    "name": "Ghee Podi Upma",
    "description": "Upma seasoned with ghee and spicy podi.",
    "image": "/assets/categories/maincourse/Gheepodiupma.jpg"
  },
  {
    "id": "33",
    "categoryId": "main-course",
    "name": "Upma & Kadala Roast (Evening)",
    "description": "Savory South Indian dish made from semolina and spices serving with kadala roast",
    "image": "/assets/categories/maincourse/Upmakadalaroast.jpg"
  },
  {
    "id": "34",
    "categoryId": "main-course",
    "name": "Puttu & Curry (kadala / cherupayar)",
    "description": "Steamed rice cakes served with a kadala curry, a traditional Kerala dish.",
    "image": "/assets/categories/maincourse/Puttkadalacurry.jpg"
  },
  {
    "id": "35",
    "categoryId": "main-course",
    "name": "Tawa Paratha & Curry (3pcs)",
    "description": "Flaky, golden tawa-cooked paratha served with a flavorful and comforting curry",
    "image": "/assets/categories/maincourse/Tawaparathacurry.jpg"
  },
  {
    "id": "36",
    "categoryId": "main-course",
    "name": "Kadala Curry",
    "description": "A spicy curry made with black chickpeas, often served with breakfast dishes.",
    "image": "/assets/categories/maincourse/kadalaCurry.jpg"
  },
  {
    "id": "37",
    "categoryId": "main-course",
    "name": "Kadachakka Curry",
    "description": "Curry made with breadfruit",
    "image": "/assets/categories/maincourse/Kadachakkacurry.jpg"
  },
  {
    "id": "38",
    "categoryId": "main-course",
    "name": "Sweet Paratha",
    "description": "A soft, golden paratha served with a side of fruity jam",
    "image": "/assets/categories/maincourse/Sweetparatha.jpg"
  },
  {
    "id": "39",
    "categoryId": "main-course",
    "name": "Poori Masala",
    "description": "Fluffy, deep-fried pooris served with a mildly spiced potato masala",
    "image": "/assets/categories/maincourse/Poorimasala.jpg"
  },
  {
    "id": "40",
    "categoryId": "main-course",
    "name": "Thuppa Dosa & Kadachakka Curry (Seasonal)",
    "description": "Dosa served with coconut oil and breadfruit curry.",
    "image": "/assets/categories/maincourse/Thuppadosakadachakka.jpg"
  },
  {
    "id": "41",
    "categoryId": "main-course",
    "name": "Chow Chow Bath",
    "description": "Combined upma and kesari with white coconut chutney",
    "image": "/assets/categories/maincourse/Chowchowbath.jpg"
  },
  {
    "id": "42",
    "categoryId": "main-course",
    "name": "Idiyappam",
    "description": "Soft, steamed string hoppers made from rice flour",
    "image": "/assets/categories/maincourse/Idiyappam.jpg"
  },
  {
    "id": "43",
    "categoryId": "main-course",
    "name": "Idiyappam & Curry (veg stew / cherupayar / kadala)",
    "description": "Soft, steamed string hoppers made from rice flour served with curry",
    "image": "/assets/categories/maincourse/Idiyappam_curry.jpg"
  },
  {
    "id": "44",
    "categoryId": "meals",
    "name": "Kerala Meal",
    "description": "Traditional Kerala meal served from 12 PM to 2:30 PM",
    "image": "/assets/categories/meals/Keralameals.jpg"
  },
  {
    "id": "45",
    "categoryId": "meals",
    "name": "Mini Meals",
    "description": "Mini meals, including three flavored rice",
    "image": "/assets/categories/meals/Minimeals.jpg"
  },
  {
    "id": "46",
    "categoryId": "meals",
    "name": "Veg Pulav",
    "description": "Fragrant basmati rice cooked with fresh vegetables and mild spices",
    "image": "/assets/categories/meals/Vegpulav.jpg"
  },
  {
    "id": "47",
    "categoryId": "meals",
    "name": "Curd Rice",
    "description": "Creamy curd rice tempered with mustard, curry leaves, and spices ",
    "image": "/assets/categories/meals/Curdrice.jpg"
  },
  {
    "id": "48",
    "categoryId": "meals",
    "name": "Jeera Rice",
    "description": "Aromatic basmati rice tempered with roasted cumin seeds",
    "image": "/assets/categories/meals/Jeerarice.jpg"
  },
  {
    "id": "49",
    "categoryId": "meals",
    "name": "Pudina Rice",
    "description": "Fragrant rice tossed with fresh mint, spices, and herbs",
    "image": "/assets/categories/meals/Pudinarice.jpg"
  },
  {
    "id": "50",
    "categoryId": "meals",
    "name": "Coconut Rice",
    "description": "Lightly spiced rice blended with grated coconut and aromatic tempering",
    "image": "/assets/categories/meals/Coconutrice.jpg"
  },
  {
    "id": "51",
    "categoryId": "meals",
    "name": "Lemon Rice",
    "description": "Tangy and vibrant rice tempered with mustard seeds, curry leaves",
    "image": "/assets/categories/meals/Lemonrice.jpg"
  },
  {
    "id": "52",
    "categoryId": "meals",
    "name": "Tomato Rice",
    "description": "Spicy and tangy rice cooked with ripe tomatoes and South Indian spices",
    "image": "/assets/categories/meals/Tomatorice.jpg"
  },
  {
    "id": "53",
    "categoryId": "meals",
    "name": "Coriander Rice",
    "description": "Aromatic rice infused with fresh coriander leaves and mild spices",
    "image": "/assets/categories/meals/Corianderrice.jpg"
  },
  {
    "id": "54",
    "categoryId": "meals",
    "name": "Puliyogre",
    "description": "A tangy and spicy South Indian tamarind rice",
    "image": "/assets/categories/meals/Puliyogra.jpg"
  },
  {
    "id": "55",
    "categoryId": "meals",
    "name": "Ghee Podi Rice",
    "description": "Warm rice tossed in aromatic ghee and mixed with flavorful powder",
    "image": "/assets/categories/meals/Gheepodirice.jpg"
  },
  {
    "id": "56",
    "categoryId": "snacks",
    "name": "Vada Set",
    "description": "",
    "image": "/assets/categories/snacks/vadaset.jpg"
  },
  {
    "id": "57",
    "categoryId": "snacks",
    "name": "Single Vada",
    "description": "",
    "image": "/assets/categories/snacks/singlevada.jpg"
  },
  {
    "id": "58",
    "categoryId": "snacks",
    "name": "Sambar Vada",
    "description": "",
    "image": "/assets/categories/snacks/sambarvada.jpg"
  },
  {
    "id": "59",
    "categoryId": "snacks",
    "name": "Dahi Vada",
    "description": "",
    "image": "/assets/categories/snacks/dahivada.jpg"
  },
  {
    "id": "60",
    "categoryId": "snacks",
    "name": "Pazham Nirachath",
    "description": "",
    "image": "/assets/categories/snacks/pazhamnirachath.jpg"
  },
  {
    "id": "61",
    "categoryId": "snacks",
    "name": "Pazham Pori",
    "description": "",
    "image": "/assets/categories/snacks/pazhampori.jpg"
  },
  {
    "id": "62",
    "categoryId": "snacks",
    "name": "Ottada",
    "description": "",
    "image": "/assets/categories/snacks/ottada.png"
  },
  {
    "id": "63",
    "categoryId": "snacks",
    "name": "Paniyaram",
    "description": "",
    "image": "/assets/categories/snacks/paniyaram.png"
  },
  {
    "id": "64",
    "categoryId": "hot-beverages",
    "name": "Badam Milk",
    "description": "",
    "image": "/assets/categories/hotbeve/Badammilk.jpg"
  },
  {
    "id": "65",
    "categoryId": "hot-beverages",
    "name": "Boost",
    "description": "",
    "image": "/assets/categories/hotbeve/Boost.jpg"
  },
  {
    "id": "66",
    "categoryId": "hot-beverages",
    "name": "Filter Coffee",
    "description": "",
    "image": "/assets/categories/hotbeve/Coffee-1.jpg"
  },
  {
    "id": "67",
    "categoryId": "hot-beverages",
    "name": "Black Coffee",
    "description": "",
    "image": "/assets/categories/hotbeve/Coffee.jpg"
  },
  {
    "id": "68",
    "categoryId": "hot-beverages",
    "name": "Bullet Coffee",
    "description": "",
    "image": "/assets/categories/hotbeve/Coffee.jpg"
  },
  {
    "id": "69",
    "categoryId": "hot-beverages",
    "name": "Horlicks",
    "description": "",
    "image": "/assets/categories/hotbeve/Horlicks.jpg"
  },
  {
    "id": "70",
    "categoryId": "hot-beverages",
    "name": "Hot Chocolate with Marshmallow",
    "description": "",
    "image": "/assets/categories/hotbeve/Hotchocolatewithmarshmellow.jpg"
  },
  {
    "id": "71",
    "categoryId": "hot-beverages",
    "name": "Hot Chocolate",
    "description": "",
    "image": "/assets/categories/hotbeve/Hotchocolate.jpg"
  },
  {
    "id": "72",
    "categoryId": "hot-beverages",
    "name": "Tea",
    "description": "",
    "image": "/assets/categories/hotbeve/Tea.jpg"
  },
  {
    "id": "73",
    "categoryId": "hot-beverages",
    "name": "Black Tea",
    "description": "",
    "image": "/assets/categories/hotbeve/"
  },
  {
    "id": "74",
    "categoryId": "hot-beverages",
    "name": "Lime Tea",
    "description": "",
    "image": "/assets/categories/hotbeve/"
  },
  {
    "id": "75",
    "categoryId": "hot-beverages",
    "name": "Milk",
    "description": "",
    "image": "/assets/categories/hotbeve/Badammilk.jpg"
  },
  {
    "id": "72",
    "categoryId": "dessert",
    "name": "Kesari Bath",
    "description": "A sweet South Indian dish made with semolina, ghee, sugar, and flavored with saffron and nuts.",
    "image": "/assets/categories/dessert/Kesari.jpg"
  },
  {
    "id": "73",
    "categoryId": "dessert",
    "name": "Mango Sundae (Icecream)",
    "description": "Delicious mango ice cream topped with nuts and fresh mango pieces.",
    "image": "/assets/categories/dessert/Mangosundae.jpg"
  },
  {
    "id": "74",
    "categoryId": "dessert",
    "name": "Fruitsalad",
    "description": "Freshly cut seasonal fruits served chilled in a bowl.",
    "image": "/assets/categories/dessert/Fruitssalad.jpg"
  },
  {
    "id": "75",
    "categoryId": "dessert",
    "name": "Fruitsalad With Icecream",
    "description": "A fruity delight topped with creamy vanilla ice cream.",
    "image": "/assets/categories/dessert/Fruitssaladwithicecream.jpg"
  },
  {
    "id": "76",
    "categoryId": "dessert",
    "name": "Litchi With Icecream",
    "description": "Juicy litchis served over a scoop of creamy vanilla ice cream.",
    "image": "/assets/categories/dessert/Litchiwithicecream.jpg"
  },
  {
    "id": "77",
    "categoryId": "dessert",
    "name": "Afogato",
    "description": "Italian dessert made with rich espresso poured over vanilla ice cream.",
    "image": "/assets/categories/dessert/Afogato.jpg"
  },
  {
    "id": "78",
    "categoryId": "fresh-juices",
    "name": "Watermelon",
    "description": "Cool and refreshing watermelon juice",
    "image": "/assets/categories/freshjuice/watermelon.jpg"
  },
  {
    "id": "79",
    "categoryId": "fresh-juices",
    "name": "Orange",
    "description": "Freshly squeezed orange juice served chilled",
    "image": "/assets/categories/freshjuice/Orange.jpg"
  },
  {
    "id": "80",
    "categoryId": "fresh-juices",
    "name": "Musambi",
    "description": "Sweet and tangy Musambi juice",
    "image": "/assets/categories/freshjuice/Musambi.jpg"
  },
  {
    "id": "81",
    "categoryId": "fresh-juices",
    "name": "Carrot",
    "description": "Pure Carrot juice",
    "image": "/assets/categories/freshjuice/Carrot.jpg"
  },
  {
    "id": "82",
    "categoryId": "fresh-juices",
    "name": "Pineapple",
    "description": "A tropical fruit with a sweet and tangy flavor.",
    "image": "/assets/categories/freshjuice/Pineapple.jpg"
  },
  {
    "id": "83",
    "categoryId": "fresh-juices",
    "name": "Pomegranate",
    "description": "Freshly squeezed pomegranate juice, naturally sweet and refreshing.",
    "image": "/assets/categories/freshjuice/Pomegranate.jpg"
  },
  {
    "id": "84",
    "categoryId": "fresh-juices",
    "name": "Fresh Lime",
    "description": "Cool and tangy fresh lime juice.",
    "image": "/assets/categories/freshjuice/Freshlime.jpg"
  },
  {
    "id": "85",
    "categoryId": "fresh-juices",
    "name": "Ginger Lime",
    "description": "Zesty lime juice with a ginger kick.",
    "image": "/assets/categories/freshjuice/GingerLime.jpg"
  },
  {
    "id": "86",
    "categoryId": "fresh-juices",
    "name": "Mint Lime",
    "description": "Refreshing lime juice infused with mint.",
    "image": "/assets/categories/freshjuice/Mintlime.jpg"
  },
  {
    "id": "87",
    "categoryId": "fresh-juices",
    "name": "ABC",
    "description": "A healthy blend of apple, beetroot, and carrot.",
    "image": "/assets/categories/freshjuice/ABC.jpg"
  },
  {
    "id": "88",
    "categoryId": "fresh-juices",
    "name": "Mango Juice",
    "description": "Sweet and pulpy fresh mango juice",
    "image": "/assets/categories/freshjuice/Mangojuice.jpg"
  },
  {
    "id": "89",
    "categoryId": "mocktails",
    "name": "Citrus Orange",
    "description": "Zesty orange mocktail with a citrus twist.",
    "image": "/assets/categories/mocktails/Citrusmagic.jpg"
  },
  {
    "id": "90",
    "categoryId": "mocktails",
    "name": "Three Rose",
    "description": "Floral fusion of rose syrup, petals, and fizz.",
    "image": "/assets/categories/mocktails/Threerose.jpg"
  },
  {
    "id": "91",
    "categoryId": "mocktails",
    "name": "Tropical Blast",
    "description": "A vibrant mix of tropical fruits and refreshing fizz.",
    "image": "/assets/categories/mocktails/Tropicalblast.jpg"
  },
  {
    "id": "92",
    "categoryId": "mocktails",
    "name": "Sunrise",
    "description": "A bright blend of orange and grenadine, creating a refreshing sunrise in a glass.",
    "image": "/assets/categories/mocktails/Sunrise.jpg"
  },
  {
    "id": "93",
    "categoryId": "mocktails",
    "name": "GreenLand",
    "description": "A refreshing blend of green apple, mint, and lime, served with a fizzy twist.",
    "image": "/assets/categories/mocktails/Greenland.jpg"
  },
  {
    "id": "94",
    "categoryId": "mocktails",
    "name": "ABCC",
    "description": "A revitalizing mix of apple, beetroot, carrot, and citrus for a refreshing, healthy drink.",
    "image": "/assets/categories/mocktails/ABCC.jpg"
  },
  {
    "id": "95",
    "categoryId": "shakes",
    "name": "Cold Coffee",
    "description": "Chilled, creamy cold coffee with a rich, smooth flavor.",
    "image": "/assets/categories/SHAKES/Coldcoffee.jpg"
  },
  {
    "id": "96",
    "categoryId": "shakes",
    "name": "Strawberry",
    "description": "A creamy blend of fresh strawberries and smooth ice cream, perfectly sweetened.",
    "image": "/assets/categories/SHAKES/Strawberry.jpg"
  },
  {
    "id": "97",
    "categoryId": "shakes",
    "name": "Iced Coffee",
    "description": "Chilled, rich coffee blended with ice for a refreshing, bold flavor.",
    "image": "/assets/categories/shakes/Icedcoffee.jpg"
  },
  {
    "id": "98",
    "categoryId": "shakes",
    "name": "Cold Boost",
    "description": "A chilled blend of energizing boost powder, milk, and ice for a refreshing, revitalizing shake.",
    "image": "/assets/categories/shakes/Coldboost.jpg"
  },
  {
    "id": "99",
    "categoryId": "shakes",
    "name": "Cold Horlicks",
    "description": "A smooth, chilled blend of Horlicks and milk, offering a creamy and nutritious refreshment.",
    "image": "/assets/categories/shakes/Coldhorlicks.jpg"
  },
  {
    "id": "100",
    "categoryId": "shakes",
    "name": "Cold Badam Milk",
    "description": "A creamy blend of almonds and milk, delicately flavored and chilled for a rich, nutty refreshment."
  },
  {
    "id": "101",
    "categoryId": "shakes",
    "name": "Cold Coffee with Icecream",
    "description": "A smooth, chilled coffee topped with creamy ice cream for a perfect sweet and caffeinated treat.",
    "image": "/assets/categories/shakes/Coldcoffeewithicecream.jpg"
  },
  {
    "id": "102",
    "categoryId": "shakes",
    "name": "Strawberry with Icecream",
    "description": "Fresh, juicy strawberries paired with creamy vanilla ice cream for a sweet and refreshing delight.",
    "image": "/assets/categories/shakes/Strawberrywithicecream.jpg"
  },
  {
    "id": "103",
    "categoryId": "shakes",
    "name": "Chocolate",
    "description": "Rich, velvety chocolate syrup over creamy ice cream, creating a decadent and indulgent treat."
  },
  {
    "id": "104",
    "categoryId": "shakes",
    "name": "Chocolate with Icecream",
    "description": "Creamy vanilla ice cream topped with luscious chocolate sauce, creating a perfect blend of sweetness and richness.",
    "image": "/assets/categories/shakes/Coldcoffeewithicecream.jpg"
  },
  {
    "id": "105",
    "categoryId": "shakes",
    "name": "Mango Mania(seasonal)",
    "description": "A tropical blend of ripe mangoes and creamy ice cream, creating a refreshing and indulgent treat.",
    "image": "/assets/categories/freshjuice/Mangojuice.jpg"
  },
  {
    "id": "106",
    "categoryId": "snacks",
    "name": "onion pakuvada",
    "description": "",
    "image": "/assets/categories/snacks/onion pakkoda1.jpg"
  },
  {
    "id": "107",
    "categoryId": "dessert",
    "name": "Mango malai",
    "description": "A rich and creamy dessert made with fresh mango pulp, layered with velvety malai and a hint of cardamom. A perfect tropical indulgence!",
    "image": "/assets/categories/dessert/mango malai.png"
  },
  {
    "id": "108",
    "categoryId": "dosa",
    "name": "Mix veg uthappam",
    "description": "Soft, thick South Indian pancake topped with a colorful mix of fresh vegetables, served with chutneys and sambar.",
    "image": "/assets/categories/dosanew/VEG MIX UTHAPPAM.jpg"
  },
  {
    "id": "109",
    "categoryId": "dosa",
    "name": "Special mini dosa combo",
    "description": "A crispy, flavorful mix of Ghee Podi, Deli Special, Garlic Roast, and Pudina Masala Dosas – all in one perfect plate!",
    "image": "/assets/categories/dosanew/dosa combo.jpg"
  },
  {
    "id": "109",
    "categoryId": "main-course",
    "name": "Veg stew",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "110",
    "categoryId": "main-course",
    "name": "Boiled banana",
    "description": "",
    "image": "/assets/categories/maincourse/boiled banana.jpg"
  },
  {
    "id": "111",
    "categoryId": "snacks",
    "name": "Cabbage vada",
    "description": "",
    "image": "/assets/categories/snacks/CABBAGE VADA.jpg"
  },
  {
    "id": "112",
    "categoryId": "snacks",
    "name": "Potato baji",
    "description": "",
    "image": "/assets/categories/snacks/potato bhaji.png"
  },
  {
    "id": "113",
    "categoryId": "dessert",
    "name": "Pheni",
    "description": "",
    "image": "/assets/categories/dessert/pheni d.jpg"
  },
  {
    "id": "114",
    "categoryId": "shakes",
    "name": "Blueberry",
    "description": "",
    "image": "/assets/categories/SHAKES/blueberry shake.jpg"
  },
  {
    "id": "115",
    "categoryId": "main-course",
    "name": "Mini tiffin",
    "description": "A delightful South Indian breakfast combo featuring mini dosa, upma, kesari, vada, and idli, served with sambar, three varieties of chutney, and your choice of tea or coffee. Perfect for a light yet satisfying meal.",
    "image": "/assets/categories/maincourse/mini tiffin.jpg"
  },
  {
    "id": "116",
    "categoryId": "Curries-&-sides",
    "name": "Kadachakka curry",
    "description": "Curry made with breadfruit",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "117",
    "categoryId": "Curries-&-sides",
    "name": "Cherupayar dry",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "118",
    "categoryId": "Curries-&-sides",
    "name": "Kadala curry 300ml",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "119",
    "categoryId": "Curries-&-sides",
    "name": "Kdala roast 250ml",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "120",
    "categoryId": "Curries-&-sides",
    "name": "Avial 250ml",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "121",
    "categoryId": "Curries-&-sides",
    "name": "Koottu curry 250ml",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "122",
    "categoryId": "Curries-&-sides",
    "name": "Aloo gopi dry 250ml",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "123",
    "categoryId": "Curries-&-sides",
    "name": "Thoran 250ml",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "124",
    "categoryId": "Curries-&-sides",
    "name": "Avial 250ml",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "125",
    "categoryId": "Curries-&-sides",
    "name": "Mix veg stew 300ml",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "126",
    "categoryId": "Curries-&-sides",
    "name": "cherupayar curry 300ml",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "127",
    "categoryId": "Curries-&-sides",
    "name": "Angamali manga curry",
    "description": "",
    "image": "/assets/categories/maincourse/"
  },
  {
    "id": "128",
    "categoryId": "dosa",
    "name": "Ragi Dosa",
    "description": "A healthy twist to your classic dosa, made with nutrient-rich finger millet. Light and soft",
    "image": "/assets/categories/dosanew/"
  }
];
