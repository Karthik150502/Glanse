/*
  Warnings:

  - Added the required column `isAvailable` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Dish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dish" ADD COLUMN     "isAvailable" BOOLEAN NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Dish_Combo" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "price" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "created_by" INTEGER NOT NULL,
    "served_by" INTEGER NOT NULL,
    "dishes" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dish_Combo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Dish_Combo" ADD CONSTRAINT "Dish_Combo_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dish_Combo" ADD CONSTRAINT "Dish_Combo_served_by_fkey" FOREIGN KEY ("served_by") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dish_Combo" ADD CONSTRAINT "Dish_Combo_dishes_fkey" FOREIGN KEY ("dishes") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
