-- AlterTable
ALTER TABLE "pacientes" ALTER COLUMN "nombreUsuario" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "personalmedico" ALTER COLUMN "nombreUsuario" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;
