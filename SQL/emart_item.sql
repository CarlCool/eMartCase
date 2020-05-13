-- source C:\fullstack\eMartCase\SQL\emart_item.sql

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

USE emart_item;

DROP TABLE IF EXISTS `tb_cart`;
DROP TABLE IF EXISTS `tb_item_detail`;
DROP TABLE IF EXISTS `tb_sub_category`;
DROP TABLE IF EXISTS `tb_category`;


CREATE TABLE `tb_category` (
  `category_id` INT UNSIGNED AUTO_INCREMENT,
  `category_name` VARCHAR(20) NOT NULL,
  `category_brief` MEDIUMTEXT,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tb_category` VALUES(1, 'Electronic', 'Electronic Brief');
INSERT INTO `tb_category` VALUES(2, 'DailyUse', 'DailyUse Brief');
INSERT INTO `tb_category` VALUES(3, 'Food', 'Food Brief');
INSERT INTO `tb_category` VALUES(4, 'Others', 'Others Brief');

CREATE TABLE `tb_sub_category` (
  `subcategory_id` INT UNSIGNED AUTO_INCREMENT,
  `subcategory_name` VARCHAR(20) NOT NULL,
  `category_id` INT UNSIGNED NOT NULL,
  `subcategory_brief` MEDIUMTEXT,
  `subcategory_gst` DECIMAL(3,2) NOT NULL,
  PRIMARY KEY(`subcategory_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tb_sub_category` VALUES(1, 'Computer', 1, 'Computer Brief for subcategory', 0.3);
INSERT INTO `tb_sub_category` VALUES(2, 'Phone', 1, 'Phone Brief for subcategory', 0.3);
INSERT INTO `tb_sub_category` VALUES(3, 'Game', 1, 'Game Brief for subcategory', 0.5);
INSERT INTO `tb_sub_category` VALUES(4, 'Clothes', 2, 'Clothes Brief for subcategory', 0.1);
INSERT INTO `tb_sub_category` VALUES(5, 'Fruit', 3, 'Fruit Brief for subcategory', 0.2);
INSERT INTO `tb_sub_category` VALUES(6, 'PrincipalFood', 3, 'PrincipalFood Brief for subcategory', 0.2);
INSERT INTO `tb_sub_category` VALUES(7, 'Meat', 3, 'Meat Brief for subcategory', 0.2);

CREATE TABLE `tb_item_detail` (
  `item_id` INT UNSIGNED AUTO_INCREMENT,
  `item_name` VARCHAR(20) NOT NULL,
  `item_image` VARCHAR(200) NOT NULL,
  `item_price` DECIMAL(8,2) NOT NULL,
  `item_stock` INT UNSIGNED NOT NULL,
  `item_description` MEDIUMTEXT,
  `category_id` INT UNSIGNED NOT NULL,
  `subcategory_id` INT UNSIGNED NOT NULL,
  `item_remarks` VARCHAR(20),
  `seller_id` INT NOT NULL,
  PRIMARY KEY(`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tb_item_detail` VALUES(1, 'ThinkPad', 'https://xxx.xxx.xxxx1',4999.00,99,'ThinkPad description',1,1,'ThinkPad remark',1);
INSERT INTO `tb_item_detail` VALUES(2, 'iPhone', 'https://xxx.xxx.xxxx2',8000.00,2000,'iPhone description',1,2,'iPhone remark',1);
INSERT INTO `tb_item_detail` VALUES(3, 'Play Station 3', 'https://xxx.xxx.xxxx3',2000.00,100,'PS3 description',1,3,'PS3 remark',1);
INSERT INTO `tb_item_detail` VALUES(4, 'Sweater', 'https://xxx.xxx.xxxx4',200.00,10000,'Sweater description',2,4,'Sweater remark',2);
INSERT INTO `tb_item_detail` VALUES(5, 'Trousers', 'https://xxx.xxx.xxxx5',100.00,9998,'Trousers description',2,4,'Trousers remark',2);
INSERT INTO `tb_item_detail` VALUES(6, 'Mango', 'https://xxx.xxx.xxxx6',50.00,50000,'Mango description',3,5,'Mango remark',3);
INSERT INTO `tb_item_detail` VALUES(7, 'Rice', 'https://xxx.xxx.xxxx7',10.00,50000,'Rice description',3,6,'Rice remark',3);
INSERT INTO `tb_item_detail` VALUES(8, 'Beef', 'https://xxx.xxx.xxxx8',40.00,50000,'Beef description',3,7,'Beef remark',3);

CREATE TABLE `tb_cart` (
  `cart_id` INT UNSIGNED AUTO_INCREMENT,
  `item_id` INT UNSIGNED NOT NULL,
  `item_numbers` INT UNSIGNED NOT NULL,
  `buyer_id` INT UNSIGNED NOT NULL,
  `update_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `tb_cart` VALUES(1, 1, 1, 1, CURRENT_TIMESTAMP);
INSERT INTO `tb_cart` VALUES(2, 1, 2, 2, CURRENT_TIMESTAMP);
INSERT INTO `tb_cart` VALUES(3, 2, 1, 1, CURRENT_TIMESTAMP);
INSERT INTO `tb_cart` VALUES(4, 8, 10, 3, CURRENT_TIMESTAMP);



ALTER TABLE `tb_sub_category`
  ADD CONSTRAINT `tb_category_fk1` FOREIGN KEY (`category_id`) REFERENCES `tb_category` (`category_id`) ;

ALTER TABLE `tb_item_detail`
  ADD CONSTRAINT `tb_category_fk2` FOREIGN KEY (`category_id`) REFERENCES `tb_category` (`category_id`),
  ADD CONSTRAINT `tb_sub_category_fk` FOREIGN KEY (`subcategory_id`) REFERENCES `tb_sub_category` (`subcategory_id`);

-- ALTER TABLE `tb_cart`
--   ADD CONSTRAINT  `tb_item_fk` FOREIGN KEY (`item_id`) REFERENCES `tb_item_detail` (`item_id`);
-- ALTER TABLE tb_cart DROP FOREIGN KEY tb_item_fk;
