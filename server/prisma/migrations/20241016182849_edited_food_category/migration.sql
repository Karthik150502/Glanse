/*
  Warnings:

  - Added the required column `served_by` to the `food_category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "food_category" ADD COLUMN     "served_by" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "food_category" ADD CONSTRAINT "food_category_served_by_fkey" FOREIGN KEY ("served_by") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
