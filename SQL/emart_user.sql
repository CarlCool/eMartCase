-- source C:\fullstack\eMartCase\SQL\emart_user.sql

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

USE emart_user;

DROP TABLE IF EXISTS `tb_buyer`;
DROP TABLE IF EXISTS `tb_seller`;


CREATE TABLE `tb_buyer`(
  `id` INT UNSIGNED AUTO_INCREMENT,
  `user_name` VARCHAR(20) NOT NULL,
  `email_id` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(20) NOT NULL,
  `mobile_number` CHAR(11),
  `create_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tb_buyer` VALUES (1,'buyer1', 'buyer1@test.com', 'buyer1', '12100000001', CURRENT_TIMESTAMP);
INSERT INTO `tb_buyer` VALUES (2,'buyer2', 'buyer2@test.com', 'buyer2', '12100000002', CURRENT_TIMESTAMP);
INSERT INTO `tb_buyer` VALUES (3,'buyer3', 'buyer3@test.com', 'buyer3', '12100000003', CURRENT_TIMESTAMP);

CREATE TABLE `tb_seller`(
  `id` INT UNSIGNED AUTO_INCREMENT,
  `user_name` VARCHAR(20) NOT NULL,
  `email_id` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(20) NOT NULL,
  `connect_number` VARCHAR (11),
  `create_date_time` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `company_name` VARCHAR(50),
  `gstin` VARCHAR(20),
  `company_brief` MEDIUMTEXT,
  `postal_address` VARCHAR(100),
  `website` VARCHAR(50),
  `bank_number` VARCHAR(16),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tb_seller VALUES (1, 'seller1', 'seller1@test.com', 'seller1', '122000000001', CURRENT_TIMESTAMP, 'TEST1 company','900000001', 'test1 company', 'streate No.1, floor 1', 'www.test1.com', '8888000000000001');
INSERT INTO tb_seller VALUES (2, 'seller2', 'seller2@test.com', 'seller2', '122000000002', CURRENT_TIMESTAMP, 'TEST2 company','900000002', 'test2 company', 'streate No.2, floor 2', 'www.test2.com', '8888000000000002');
INSERT INTO tb_seller VALUES (3, 'seller3', 'seller3@test.com', 'seller3', '122000000003', CURRENT_TIMESTAMP, 'TEST3 company','900000003', 'test3 company', 'streate No.3, floor 3', 'www.test3.com', '8888000000000003');


