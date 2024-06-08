import { Cows, Goats, Pigs, Poultry, Snail } from "./assets/home";
import { Cattle, Goat, Innovation, PoultryProduce, Passion, Quality, Pig, Rams, Reliability, Safety, Sustainability } from "./assets/product";

export const navLinks = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About Us",
        url: "/about"
    },
    {
        name: "Product",
        url: "/product"
    },
];

export const products = [
    {
        img: <Goats />,
        name: "Goat & Rams",
        body: "Explore Our Range of High-Quality Livestock Products",
        url: "",
    },
    {
        img: <Cows />,
        name: "Cow and cattle",
        body: "We continuously satisfy our customers' farming requirements for high-quality, fresh cow meats",
        url: "",
    },
    {
        img: <Snail />,
        name: "Snail",
        body: "All breeds of snails are reared at Strola Farms",
        url: "",
    },
    {
        img: <Pigs />,
        name: "Pigs",
        body: "We raise our pigs with care and attention to detail, ensuring a tender and juicy meat experience. ",
        url: "",
    },
    {
        img: <Poultry />,
        name: "Poultry",
        body: "Strola Farms' poultry products are a staple for any kitchen! Our chickens are raised in a healthy and sustainable environment.",
        url: "",
    },
];

export const footerLinks = [
    {
        name: "About us",
        url: "/about"
    },
    {
        name: "Services",
        url: "/product"
    },
    {
        name: "Contact",
        url: "#delivery"
    },
];

export const contactDetails = {
    "Phone:": " +2348072447626",
    "Email:": " info@dalortsengineering.com",
    "Address:": " Palace Road, Oniru, Lagos.",
};

export const coreValues = [
    {
        icon: <Quality />,
        name: "Quality"
    },
    {
        icon: <Safety />,
        name: "Safety"
    },
    {
        icon: <Innovation />,
        name: "Innovation"
    },
    {
        icon: <Passion />,
        name: "Passion"
    },
    {
        icon: <Sustainability />,
        name: "Sustainability"
    },
    {
        icon: <Reliability />,
        name: "Reliability"
    }
];

export const stock = [
    {
        animal: "Cattle",
        img: <Cattle />,
        variants: [
            {
                name: "Muturu (Older Bull)",
                description: "Muturu weighs between 325kg and 665kg, in close comparison to adult cows that weigh between 250kg and 350kg. The Muturu, a trypanotolerant cattle breed is probably one of the least-known breeds of cattle in West Africa. They are the rarely available cattle breed with long horns and older breeds of cattle found Mostly in West Africa."
            },
            {
                name: "Bokolo",
                description: 'The Bokolo Cattle is common for its quality beef and is mostly referred to as the SOKOTO GUDALI. This breed is one of the most popular native breeds in Nigeria. "Gudali" in Hausa is a short-horned and short-legged animal”. In other parts of West and Central Africa, they are known as Peuhl zebu and sometimes Fulbe.'
            },
            {
                name: "N’dama",
                description: "Because of their humplessness, N'dama cattle, also known as Boenca or Faouta Longhorns, are well-liked in the West African area."
            },
            {
                name: "Bunaji",
                description: "Often called White Fulani cattle, Bunajis are distinguished by their long tail, dark eyes, white coat, and well-developed humps and dewlaps. The mature Bunaji cattle stand between 100cm and 160 cm."
            },
        ]
    },
    {
        animal: "Rams",
        img: <Rams />,
        variants: [
            {
                name: "Balami",
                description: "",
            },
            {
                name: "Uda",
                description: "",
            },
            {
                name: "West African Dwarf(WAD)",
                description: "",
            },
            {
                name: "Yankasa",
                description: "",
            },
        ]
    },
    {
        animal: "Goats",
        img: <Goat />,
        variants: [
            {
                name: "Hausa Goats",
                description: "",
            },
            {
                name: "Local Native Goats called Obuko in Yoruba ans also called Mkpi(Ewu) in Igbo)",
                description: "",
            },
        ]
    },
    {
        animal: "Poultry",
        img: <PoultryProduce />,
        variants: [
            {
                name: "Chicken",
                description: "",
            },
            {
                name: "Turkey",
                description: "",
            },
            {
                name: "Guinea Fowl",
                description: "",
            },
        ]
    },
    {
        animal: "Pigs",
        img: <Pig />,
        variants: [
            {
                name: "Choctaw",
                description: "",
            },
            {
                name: "Chester White piglet",
                description: "",
            },
            {
                name: "Basque Pig",
                description: "",
            },
            {
                name: "Duroc",
                description: "",
            },
        ]
    },
]