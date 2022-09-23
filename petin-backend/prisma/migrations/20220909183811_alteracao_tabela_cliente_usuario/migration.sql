/*
  Warnings:

  - A unique constraint covering the columns `[id_cliente]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `id_cliente` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `usuarios_id_cliente_key` ON `usuarios`(`id_cliente`);

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `clientes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
