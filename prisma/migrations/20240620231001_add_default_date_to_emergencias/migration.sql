/*
  Warnings:

  - Added the required column `dni` to the `pacientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "emergencias" ALTER COLUMN "fecha" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "pacientes" ADD COLUMN     "dni" VARCHAR(20) NOT NULL;
