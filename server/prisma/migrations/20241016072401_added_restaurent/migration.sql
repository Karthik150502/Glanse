/*
  Warnings:

  - Added the required column `created_by` to the `food_category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "food_category" ADD COLUMN     "created_by" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "redtaurent" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "owned_by" INTEGER NOT NULL,
    "location" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "redtaurent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "food_category" ADD CONSTRAINT "food_category_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "redtaurent" ADD CONSTRAINT "redtaurent_owned_by_fkey" FOREIGN KEY ("owned_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
