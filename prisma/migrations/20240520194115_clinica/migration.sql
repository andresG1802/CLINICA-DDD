-- CreateTable
CREATE TABLE "emergencias" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(6),
    "paciente_id" INTEGER,
    "personal_medico_id" INTEGER,
    "medico_id" INTEGER,
    "descripcion" TEXT,
    "severidad" VARCHAR(50),

    CONSTRAINT "emergencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medico" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100),
    "especialidad" VARCHAR(100),
    "telefono" VARCHAR(20),
    "direccion" VARCHAR(200),

    CONSTRAINT "medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacientes" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100),
    "edad" INTEGER,
    "genero" VARCHAR(10),
    "direccion" VARCHAR(200),
    "telefono" VARCHAR(20),
    "historial_medico" TEXT,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personalmedico" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100),
    "especialidad" VARCHAR(100),
    "telefono" VARCHAR(20),
    "direccion" VARCHAR(200),

    CONSTRAINT "personalmedico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tratamientos" (
    "id" SERIAL NOT NULL,
    "emergencia_id" INTEGER,
    "descripcion" TEXT,
    "medicamentos" TEXT,
    "instrucciones" TEXT,

    CONSTRAINT "tratamientos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "emergencias" ADD CONSTRAINT "emergencias_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "medico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emergencias" ADD CONSTRAINT "emergencias_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "emergencias" ADD CONSTRAINT "emergencias_personal_medico_id_fkey" FOREIGN KEY ("personal_medico_id") REFERENCES "personalmedico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tratamientos" ADD CONSTRAINT "tratamientos_emergencia_id_fkey" FOREIGN KEY ("emergencia_id") REFERENCES "emergencias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
