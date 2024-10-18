/*
  Warnings:

  - You are about to drop the column `dish_combo` on the `Dish` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_dish_combo_fkey";

-- AlterTable
ALTER TABLE "Dish" DROP COLUMN "dish_combo";

-- CreateTable
CREATE TABLE "DishOnDishCombo" (
    "id" SERIAL NOT NULL,
    "dishId" INTEGER NOT NULL,
    "dishComboId" INTEGER NOT NULL,
    "created_by" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DishOnDishCombo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DishOnDishCombo" ADD CONSTRAINT "DishOnDishCombo_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishOnDishCombo" ADD CONSTRAINT "DishOnDishCombo_dishComboId_fkey" FOREIGN KEY ("dishComboId") REFERENCES "Dish_Combo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DishOnDishCombo" ADD CONSTRAINT "DishOnDishCombo_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
