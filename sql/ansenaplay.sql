-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 24 Mar 2021 pada 08.21
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ansenaplay`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_job`
--

CREATE TABLE `tb_job` (
  `id` int(11) NOT NULL,
  `sender` int(11) NOT NULL,
  `receiver` int(11) NOT NULL,
  `sender_name` varchar(255) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `job_message` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_job`
--

INSERT INTO `tb_job` (`id`, `sender`, `receiver`, `sender_name`, `job_title`, `job_message`, `created_at`) VALUES
(1, 0, 0, '', '', '', '2021-03-24 14:08:35.932'),
(2, 0, 0, '', '', '', '2021-03-24 14:09:38.713'),
(3, 0, 0, '', '', '', '2021-03-24 14:12:24.180'),
(4, 3, 1, 'Rivan', 'Halo', 'Hai', '2021-03-24 14:13:24.924'),
(5, 1, 3, 'Arief Widiyatmoko', 'Cuy', 'Opo ?', '2021-03-24 14:16:01.190'),
(6, 3, 1, 'Rivan', 'hallo', 'test', '2021-03-24 14:17:54.326'),
(7, 1, 3, 'Arief Widiyatmoko', 'Test', 'Halooooo', '2021-03-24 14:18:12.510');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_user`
--

INSERT INTO `tb_user` (`id`, `email`, `password`, `name`, `phone`) VALUES
(1, 'ariefwidiyatmoko38@gmail.com', 'Seelenyan', 'Arief Widiyatmoko', '085755278932'),
(2, 'bronyazaychik96@gmail.com', 'Bronyachan', 'Seele Vollerei', '0895379157495'),
(3, 'rvnsyahp@gmail.com', '12345678', 'Rivan ananam', '082');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_job`
--
ALTER TABLE `tb_job`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_job`
--
ALTER TABLE `tb_job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
