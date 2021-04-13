-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 22, 2015 at 03:29 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `basketdrop`
--

-- --------------------------------------------------------

--
-- Table structure for table `usergroup_user_map`
--

CREATE TABLE IF NOT EXISTS `usergroup_user_map` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_group` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `usergroup_user_map`
--

INSERT INTO `usergroup_user_map` (`id`, `user_id`, `user_group`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 2, 2),
(4, 4, 3),
(5, 4, 5),
(6, 6, 3),
(7, 5, 5),
(8, 2, 2),
(9, 6, 4),
(10, 1, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`,`price`) VALUES
(1, 'Pen', 25),
(2, 'Pencil', 15),
(3, 'Book', 35),
(4, 'Showcase', 250),
(5, 'Clock', 100),
(6, 'Wallet', 230),
(7, 'Shoes', 200),
(8, 'Rack', 45),
(9, 'Backpack', 450),
(10, 'Bulb', 90);

-- --------------------------------------------------------

--
-- Table structure for table `user_group`
--

CREATE TABLE IF NOT EXISTS `user_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `user_group`
--

INSERT INTO `user_group` (`id`, `group_name`) VALUES
(1, 'jango'),
(2, 'roadies'),
(3, 'dilkush'),
(4, 'malabar'),
(5, 'youngmes'),
(6, 'geeks');
