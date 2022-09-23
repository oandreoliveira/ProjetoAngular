/*
  Warnings:

  - Made the column `id_cliente` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `usuarios_id_cliente_fkey`;

-- AlterTable
ALTER TABLE `usuarios` MODIFY `id_cliente` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
