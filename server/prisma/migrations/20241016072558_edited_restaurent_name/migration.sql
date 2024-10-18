/*
  Warnings:

  - You are about to drop the `redtaurent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "redtaurent" DROP CONSTRAINT "redtaurent_owned_by_fkey";

-- DropTable
DROP TABLE "redtaurent";

-- CreateTable
CREATE TABLE "restaurent" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "owned_by" INTEGER NOT NULL,
    "location" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "restaurent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "restaurent" ADD CONSTRAINT "restaurent_owned_by_fkey" FOREIGN KEY ("owned_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
