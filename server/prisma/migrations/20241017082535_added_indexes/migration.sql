/*
  Warnings:

  - You are about to drop the `Dish` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DishOnDishCombo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dish_Combo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_created_by_fkey";

-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_food_category_fkey";

-- DropForeignKey
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_served_by_fkey";

-- DropForeignKey
ALTER TABLE "DishOnDishCombo" DROP CONSTRAINT "DishOnDishCombo_created_by_fkey";

-- DropForeignKey
ALTER TABLE "DishOnDishCombo" DROP CONSTRAINT "DishOnDishCombo_dishComboId_fkey";

-- DropForeignKey
ALTER TABLE "DishOnDishCombo" DROP CONSTRAINT "DishOnDishCombo_dishId_fkey";

-- DropForeignKey
ALTER TABLE "Dish_Combo" DROP CONSTRAINT "Dish_Combo_created_by_fkey";

-- DropForeignKey
ALTER TABLE "Dish_Combo" DROP CONSTRAINT "Dish_Combo_served_by_fkey";

-- DropTable
DROP TABLE "Dish";

-- DropTable
DROP TABLE "DishOnDishCombo";

-- DropTable
DROP TABLE "Dish_Combo";

-- CreateTable
CREATE TABLE "dish" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "price" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "created_by" INTEGER NOT NULL,
    "served_by" INTEGER NOT NULL,
    "food_category" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dish_combo" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "price" INTEGER NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "created_by" INTEGER NOT NULL,
    "served_by" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dish_combo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dish_on_dish_combo" (
    "id" SERIAL NOT NULL,
    "dishId" INTEGER NOT NULL,
    "dishComboId" INTEGER NOT NULL,
    "created_by" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dish_on_dish_combo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "dish_created_at_idx" ON "dish"("created_at");

-- CreateIndex
CREATE INDEX "dish_combo_created_at_idx" ON "dish_combo"("created_at");

-- CreateIndex
CREATE INDEX "dish_on_dish_combo_created_at_idx" ON "dish_on_dish_combo"("created_at");

-- CreateIndex
CREATE INDEX "food_category_created_at_idx" ON "food_category"("created_at");

-- CreateIndex
CREATE INDEX "restaurant_created_at_idx" ON "restaurant"("created_at");

-- AddForeignKey
ALTER TABLE "dish" ADD CONSTRAINT "dish_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dish" ADD CONSTRAINT "dish_served_by_fkey" FOREIGN KEY ("served_by") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dish" ADD CONSTRAINT "dish_food_category_fkey" FOREIGN KEY ("food_category") REFERENCES "food_category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dish_combo" ADD CONSTRAINT "dish_combo_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dish_combo" ADD CONSTRAINT "dish_combo_served_by_fkey" FOREIGN KEY ("served_by") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dish_on_dish_combo" ADD CONSTRAINT "dish_on_dish_combo_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dish_on_dish_combo" ADD CONSTRAINT "dish_on_dish_combo_dishComboId_fkey" FOREIGN KEY ("dishComboId") REFERENCES "dish_combo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dish_on_dish_combo" ADD CONSTRAINT "dish_on_dish_combo_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
