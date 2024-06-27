/*
  Warnings:

  - Added the required column `nombreUsuario` to the `personalmedico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `personalmedico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personalmedico" ADD COLUMN     "nombreUsuario" VARCHAR(50) NOT NULL,
ADD COLUMN     "password" VARCHAR(100) NOT NULL;
