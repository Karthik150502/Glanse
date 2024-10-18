/*
  Warnings:

  - You are about to drop the column `dishes` on the `Dish_Combo` table. All the data in the column will be lost.
  - Added the required column `dish_combo` to the `Dish` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Dish_Combo" DROP CONSTRAINT "Dish_Combo_dishes_fkey";

-- AlterTable
ALTER TABLE "Dish" ADD COLUMN     "dish_combo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Dish_Combo" DROP COLUMN "dishes";

-- AddForeignKey
ALTER TABLE "Dish" ADD CONSTRAINT "Dish_dish_combo_fkey" FOREIGN KEY ("dish_combo") REFERENCES "Dish_Combo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
