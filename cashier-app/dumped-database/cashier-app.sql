-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 01 oct. 2021 à 04:40
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cashier-app`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `categoryID` int(11) NOT NULL,
  `categoryName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`categoryID`, `categoryName`) VALUES
(1, 'Pizza'),
(2, 'Burger'),
(3, 'Café'),
(4, 'Glace'),
(7, 'Boisson'),
(8, 'Fruits'),
(9, 'Snack');

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `productID` int(11) NOT NULL,
  `productName` varchar(100) NOT NULL,
  `category` int(11) NOT NULL,
  `price` double NOT NULL,
  `img` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`productID`, `productName`, `category`, `price`, `img`, `quantity`) VALUES
(1, 'Pizza Napolitain', 1, 4000, 'https://i.ya-webdesign.com/images/chicago-connection-pizza-png-19.png', 22),
(2, 'Présséa Nectar Cocktail', 7, 1200, 'https://agroci.ci/wp-content/uploads/2020/02/Nectar.png', 1),
(3, 'GoldFish ', 9, 400, 'https://www.vippng.com/png/detail/49-499717_everything-you-love-about-goldfish-goldfish-flavor-blasted.png', 52),
(4, 'Ananas', 8, 500, 'https://i.ya-webdesign.com/images/tropical-clipart-pineapple.png', 2),
(5, 'Double Cheese Burger', 2, 2500, 'https://krispyfood.co.uk/wp-content/uploads/2017/08/cheese-burger.png', 3),
(6, 'Espresso', 3, 800, 'https://purepng.com/public/uploads/large/purepng.com-cup-mug-coffeecupmufcoffeebean-1411527406018xgn16.png', 13),
(7, 'Canette Fanta', 7, 300, 'https://www.toscafood.ro/uploads/84/social_fanta-doza-033l_j-WsMg.png', 3),
(8, 'Canette Coca Cola', 7, 350, 'https://pluspng.com/img-png/coca-cola-355ml-2000.png', 64),
(9, 'Burger Simple', 2, 1000, 'https://vistapointe.net/images/burger-wallpaper-7.jpg', 130),
(10, 'Avocat', 8, 250, 'https://pngpress.com/wp-content/uploads/2020/08/uploads_avocado_avocado_PNG15497.png', 7),
(11, 'Javascript Burger', 2, 3000, 'https://vistapointe.net/images/burger-wallpaper-16.jpg', 3),
(12, 'Cappucino', 3, 1000, 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614563462_83-p-kofe-na-belom-fone-101.png', 35),
(13, 'Bouteille 1L Kirène', 7, 400, 'https://agroci.ci/wp-content/uploads/2020/03/15.png', 123),
(14, 'Chips Lays Nature', 9, 600, 'https://im0-tub-com.yandex.net/i?id=3697626bd0fca3db89e56d2d0f4c6067&n=13', 200),
(15, 'Top Grenadine', 7, 800, 'https://www.easymagasin.com/wp-content/uploads/2019/03/Boisson-Gazeuse-Top-1L.png', 3),
(16, 'Chewing Gum Menthe', 9, 100, 'https://www.action.com/globalassets/cmsarticleimages/10/67/2579679_80840787-111.png/', 27),
(17, 'Fraise', 8, 600, 'https://vistapointe.net/images/strawberry-7.jpg', 1),
(18, 'Pizza Pepperoni', 1, 6000, 'https://vistapointe.net/images/pizza-1.jpg', 4),
(19, '1kg de Bananes', 8, 600, 'https://gymn1-sochi.ru/800/600/https/www.mariowiki.com/images/6/66/BananabunchDKCR.png', 5),
(20, 'Crème Glacée Magnum', 4, 2000, 'https://www.magnumicecream.com/content/dam/unilever/magnum/united_states_of_america/pack_shot/077567001023-2329491-png.png', 31),
(21, 'Pizza Alfredo', 1, 6000, 'https://vistapointe.net/images/pizza-3.jpg', 11),
(22, 'Veggie Burger', 2, 1500, 'https://vistapointe.net/images/burger-7.jpg', 22),
(24, 'Nutella 500g', 9, 2400, 'https://cdn140.picsart.com/236938526013212.png', 13),
(30, 'Pringles Saveur Fromage', 9, 1200, 'http://www.panaxcorp.com/wp-content/uploads/2014/02/00038000846854_D1C1_LA.png', 55),
(31, '', 0, 0, '', 0),
(32, '', 0, 0, '', 0),
(33, 'Glace Magnum Mini', 4, 700, 'https://i.ya-webdesign.com/images/ice-cream-bar-png-9.png', 46),
(34, '', 0, 0, '', 0),
(35, 'Latte', 3, 800, 'https://stories.starbucks.com/uploads/sites/9/2019/08/Cardamom-Latte.png', 3),
(36, '', 0, 0, '', 0),
(37, '', 0, 0, '', 0),
(38, '', 0, 0, '', 0),
(39, '', 0, 0, '', 0),
(40, 'Beurre President 500g', 9, 2000, 'image.png', 12),
(41, '', 0, 0, '', 0),
(42, 'Beurre President 800g', 9, 1200, 'image.jpeg', 3),
(43, '', 0, 0, '', 0),
(44, 'Nutella ', 9, 1200, 'picture.webp', 10);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `userID` int(11) NOT NULL,
  `users` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('0','1') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`userID`, `users`, `password`, `status`) VALUES
(1, 'Abdou Aziz', '123456', '1'),
(3, 'Darkcode', 'passer123', '0'),
(6, 'Ibrahima Ly ', 'ibou2010', '0'),
(8, 'Wahab Ly', 'passer098765', '0'),
(11, 'Darkcode', 'PASSER', '0');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryID`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productID`),
  ADD KEY `product_ibfk_1` (`category`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `categoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
