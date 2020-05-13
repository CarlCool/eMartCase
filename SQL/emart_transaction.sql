-- source C:\fullstack\eMartCase\SQL\emart_transaction.sql

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

USE emart_transaction;

DROP TABLE IF EXISTS `tb_purchase_history`;
DROP TABLE IF EXISTS `tb_transaction`;
DROP TABLE IF EXISTS `tb_discount`;


CREATE TABLE `tb_transaction` (
  `transaction_id` INT UNSIGNED AUTO_INCREMENT,
  `buyer_id` INT UNSIGNED NOT NULL,
  `seller_id` INT UNSIGNED NOT NULL,
  `transaction_type` CHAR(1) NOT NULL,
  `transaction_date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`transaction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tb_transaction` VALUES(1, 1, 1, 'D', CURRENT_TIMESTAMP);
INSERT INTO `tb_transaction` VALUES(2, 1, 2, 'D', CURRENT_TIMESTAMP);
INSERT INTO `tb_transaction` VALUES(3, 2, 1, 'C', CURRENT_TIMESTAMP);
INSERT INTO `tb_transaction` VALUES(4, 2, 3, 'C', CURRENT_TIMESTAMP);
INSERT INTO `tb_transaction` VALUES(5, 2, 2, 'C', CURRENT_TIMESTAMP);
INSERT INTO `tb_transaction` VALUES(6, 1, 2, 'C', CURRENT_TIMESTAMP);
INSERT INTO `tb_transaction` VALUES(7, 3, 2, 'C', CURRENT_TIMESTAMP);

CREATE TABLE `tb_purchase_history` (
    `purchase_id` INT UNSIGNED AUTO_INCREMENT,
    `buyer_id` INT UNSIGNED NOT NULL,
    `seller_id` INT UNSIGNED NOT NULL,
    `transaction_id` INT UNSIGNED NOT NULL,
    `item_id` INT UNSIGNED NOT NULL,
    `item_name` VARCHAR(20),
    `item_numbers` INT UNSIGNED NOT NULL,
    `item_price` DECIMAL(8,2) NOT NULL,
    `date_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `discount_percentage` DECIMAL(2,2),
    `tax` DECIMAL(3,2) NOT NULL,
    `remarks` MEDIUMTEXT,
    PRIMARY KEY (`purchase_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tb_purchase_history` VALUES(1, 1, 1, 1, 1, 'ThinkPad', 1, 4999.00, CURRENT_TIMESTAMP, 0.1, 0.3, 'purchase history for buyer 1');
INSERT INTO `tb_purchase_history` VALUES(2, 1, 2, 2, 4, 'Sweater', 2, 230.00, CURRENT_TIMESTAMP, 0, 0.1, 'purchase history for buyer 1');
INSERT INTO `tb_purchase_history` VALUES(3, 1, 2, 6, 5, 'Trousers', 3, 200.00, CURRENT_TIMESTAMP, 0.2, 0.1, 'purchase history for buyer 1');
INSERT INTO `tb_purchase_history` VALUES(4, 2, 1, 3, 2, 'iPhone', 1, 8000.00, CURRENT_TIMESTAMP, 0, 0.3, 'purchase history for buyer 2');
INSERT INTO `tb_purchase_history` VALUES(5, 2, 2, 4, 5, 'Trousers', 1, 200.00, CURRENT_TIMESTAMP, 0.1, 0.1, 'purchase history for buyer 2');
INSERT INTO `tb_purchase_history` VALUES(6, 2, 3, 5, 1, 'Rice', 50, 20.6, CURRENT_TIMESTAMP, 0, 0.2, 'purchase history for buyer 2');
INSERT INTO `tb_purchase_history` VALUES(7, 3, 3, 1, 1, 'Beef', 2, 30.5, CURRENT_TIMESTAMP, 0, 0.2, 'purchase history for buyer 3');

CREATE TABLE `tb_discount` (
    `discount_id` INT UNSIGNED AUTO_INCREMENT,
    `discount_code` INT(6) UNSIGNED UNIQUE NOT NULL,
    `discount_percentage` DECIMAL(2,2) NOT NULL,
    `start_date` DATETIME NOT NULL,
    `end_date` DATETIME NOT NULL,
    `description` VARCHAR(50),
    PRIMARY KEY (`discount_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tb_discount` values(1, 111111, 0.4, '2020-9-3 0:0:0', '2020-9-10 23:59:59', 'discount1');
INSERT INTO `tb_discount` values(2, 222222, 0.5, '2020-11-11 0:0:0', '2020-11-11 23:59:59', 'discount2');
INSERT INTO `tb_discount` values(3, 333333, 0.6, '2020-12-31 0:0:0', '2020-12-31 23:59:59', 'discount3');
INSERT INTO `tb_discount` values(4, 444444, 0.6, '2020-01-01 0:0:0', '2020-01-01 23:59:59', 'discount4');


ALTER TABLE `tb_purchase_history`
  ADD CONSTRAINT `tb_transaction_fk` FOREIGN KEY (`transaction_id`) REFERENCES `tb_transaction` (`transaction_id`) ;