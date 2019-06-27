-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 14, 2019 at 08:46 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_digilib`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_admin`
--

CREATE TABLE IF NOT EXISTS `tb_admin` (
  `nama` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telepon` varchar(30) NOT NULL,
  `user` varchar(30) NOT NULL,
  `pass` varchar(30) NOT NULL,
  PRIMARY KEY (`nama`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_admin`
--

INSERT INTO `tb_admin` (`nama`, `email`, `telepon`, `user`, `pass`) VALUES
('j', 'j', 'j', 'i', 'i'),
('Nida Khaerunnisa', 'nidakhaerunnisa19@gmail.com', '0895401571211', 'nidakhair', 'nidakhair'),
('Tresi Aprilia', 'tresiaorilia057@gmail.com', '085225001327', 'Tresi', '17f0b02f38c122de382b8e62aa07bb');

-- --------------------------------------------------------

--
-- Table structure for table `tb_buku`
--

CREATE TABLE IF NOT EXISTS `tb_buku` (
  `isbn` varchar(15) NOT NULL,
  `judul` varchar(35) NOT NULL,
  `pengarang` varchar(35) NOT NULL,
  `penerbit` varchar(35) NOT NULL,
  `sinopsis` varchar(300) NOT NULL,
  `buku` varchar(300) NOT NULL,
  PRIMARY KEY (`isbn`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE IF NOT EXISTS `tb_user` (
  `nama` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telepon` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`nama`, `email`, `telepon`, `username`, `password`) VALUES
('Nida Khaerunnisa', 'nidakhaerunnisa19@gmail.com', '0895401571211', 'nidakh', 'nidaya123'),
('nidakhaerunnisa', 'nida@gmail.com', '085216455645', 'nidakha', 'ndakha'),
('Nida Khaerunnisa', 'nidakhaerunnisa19@gmail.com', '0895401571211', 'nidakh', 'nidaya123'),
('nidakhaerunnisa', 'nida@gmail.com', '085216455645', 'nidakha', 'ndakha'),
('Nur Inayah', 'nurinayah@gmail.com', '085454545488', 'inayun', 'nay');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
