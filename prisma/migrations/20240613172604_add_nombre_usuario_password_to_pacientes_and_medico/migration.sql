/*
  Warnings:

  - Added the required column `nombreUsuario` to the `medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreUsuario` to the `pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `pacientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medico" ADD COLUMN     "nombreUsuario" VARCHAR(50) NOT NULL,
ADD COLUMN     "password" VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE "pacientes" ADD COLUMN     "nombreUsuario" VARCHAR(50) NOT NULL,
ADD COLUMN     "password" VARCHAR(100) NOT NULL;
