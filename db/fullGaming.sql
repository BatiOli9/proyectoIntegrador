DROP DATABASE IF EXISTS `fullGaming`;
CREATE DATABASE IF NOT EXISTS `fullGaming`;
USE `fullGaming`;

CREATE TABLE `productos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(120) NOT NULL,
   `precio` INT NOT NULL,
   `codigo` VARCHAR(255) NOT NULL,
   `garantia` VARCHAR(20) NOT NULL,
   `descripcion` TEXT NOT NULL,
   `stock` TINYINT NOT NULL,
   `destacado` TINYINT NOT NULL,
   `img` VARCHAR(255) NOT NULL,
   `tipo_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `tipos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `tipo` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `productos` ADD CONSTRAINT `FK_aa350d28-4847-419c-a27a-f85c887a6bc6` FOREIGN KEY (`tipo_id`) REFERENCES `tipos`(`id`)  ;